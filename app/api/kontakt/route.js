import { NextResponse } from "next/server";

/**
 * Nimmt das Kontaktformular entgegen und legt daraus einen Kontakt in HubSpot an.
 *
 * Läuft über die HubSpot Forms API. Die braucht KEINEN geheimen Schlüssel,
 * nur die Portal-ID und die Formular-GUID — beides steht in HubSpot selbst.
 * Deshalb ist das der Weg mit dem wenigsten Einrichtungsaufwand.
 */
export async function POST(request) {
  const portalId = process.env.HUBSPOT_PORTAL_ID;
  const formGuid = process.env.HUBSPOT_FORM_GUID;

  if (!portalId || !formGuid) {
    console.error("HUBSPOT_PORTAL_ID oder HUBSPOT_FORM_GUID fehlt in den Umgebungsvariablen.");
    return NextResponse.json(
      { ok: false, error: "Formular ist noch nicht konfiguriert." },
      { status: 500 }
    );
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Ungültige Anfrage." }, { status: 400 });
  }

  const { name = "", firma = "", mail = "", tel = "", text = "", consent, hp } = body;

  // Honeypot: echte Menschen füllen dieses versteckte Feld nie aus.
  // Bots schon. Wir tun so, als wäre alles gut, und verwerfen still.
  if (hp) return NextResponse.json({ ok: true });

  if (!name.trim() || !mail.trim()) {
    return NextResponse.json({ ok: false, error: "Name und E-Mail fehlen." }, { status: 400 });
  }
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(mail)) {
    return NextResponse.json({ ok: false, error: "E-Mail-Adresse ist ungültig." }, { status: 400 });
  }
  if (!consent) {
    return NextResponse.json({ ok: false, error: "Einwilligung fehlt." }, { status: 400 });
  }

  const parts = name.trim().split(/\s+/);
  const firstname = parts[0];
  const lastname = parts.slice(1).join(" ") || parts[0];

  const fields = [
    { name: "firstname", value: firstname },
    { name: "lastname", value: lastname },
    { name: "email", value: mail.trim() },
  ];
  if (firma.trim()) fields.push({ name: "company", value: firma.trim() });
  if (tel.trim()) fields.push({ name: "phone", value: tel.trim() });
  if (text.trim()) fields.push({ name: "message", value: text.trim() });

  const payload = {
    fields,
    context: {
      pageUri: request.headers.get("referer") || "https://novastream.ai/kontakt",
      pageName: "Kontakt — Novastream.ai",
    },
    legalConsentOptions: {
      consent: {
        consentToProcess: true,
        text: "Ich bin mit der Verarbeitung meiner Angaben zur Bearbeitung der Anfrage einverstanden.",
      },
    },
  };

  try {
    const res = await fetch(
      `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );

    if (!res.ok) {
      const detail = await res.text();
      console.error("HubSpot hat abgelehnt:", res.status, detail);
      return NextResponse.json(
        { ok: false, error: "Übermittlung fehlgeschlagen. Bitte per E-Mail melden." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("HubSpot nicht erreichbar:", err);
    return NextResponse.json(
      { ok: false, error: "Übermittlung fehlgeschlagen. Bitte per E-Mail melden." },
      { status: 502 }
    );
  }
}
