import Link from "next/link";
import { CORE, LANDINGS, MAIL } from "./content";
import { Reveal, Faq, ContactForm } from "./client";
import { JsonLd, Crumbs, PageHead, Related, Cta, serviceLd, faqLd } from "./blocks";

/* ---------------- FAQ-Daten ---------------- */

export const HOME_FAQ = [
  { q: "Was macht ein KI-Agent, was ein Kontaktformular nicht macht?",
    a: "Ein Formular sammelt Daten. Ein KI-Agent stellt Rückfragen, erkennt Budget, Zeitraum und Zuständigkeit, schlägt einen Termin vor und legt den qualifizierten Lead direkt im CRM an — nachts um halb elf genauso wie am Dienstagvormittag." },
  { q: "Brauche ich erst eine neue Website oder erst den KI-Agenten?",
    a: "Meistens die Website. Ein Agent auf einer Seite, die niemand findet, qualifiziert nichts. Wenn Ihre Seite bereits Besucher hat, drehen wir die Reihenfolge um und starten mit dem Agenten." },
  { q: "Wie lange dauert ein Projekt?",
    a: "Eine Website liegt bei zwei bis vier Wochen, ein KI-Agent bei ein bis zwei Wochen ab Freigabe der Gesprächslogik. Beides zusammen planen wir mit sechs Wochen." },
  { q: "An welche Systeme lässt sich der Agent anbinden?",
    a: "HubSpot, gängige Kalender, E-Mail und Telefonie. Alles Weitere über n8n und offene Schnittstellen. Wir bauen auf APIs, nicht auf Klick-Robotern, die beim nächsten Update stehenbleiben." },
];

const AGENT_FAQ = [
  { q: "Merkt der Kunde, dass er mit einer KI spricht?",
    a: "Der Agent stellt sich als digitaler Assistent vor. Wir tarnen ihn nicht als Mensch — das fliegt auf und kostet Vertrauen. Was zählt, ist dass er sofort antwortet und die richtigen Fragen stellt." },
  { q: "Was passiert, wenn der KI-Agent nicht weiterweiss?",
    a: "Er sagt es und übergibt. Sie bekommen den Gesprächsverlauf, die offene Frage und einen Rückrufwunsch mit Zeitfenster. Keine erfundenen Antworten, keine Preiszusagen ohne Freigabe." },
  { q: "Wie wird der KI-Agent auf mein Unternehmen trainiert?",
    a: "Aus Ihren Leistungen, Preislogiken, Ausschlusskriterien und typischen Rückfragen. Wir hören uns dafür echte Anfragen an und bauen die Gesprächslogik daraus, nicht aus einer Vorlage." },
  { q: "Fallen für den KI-Agenten monatliche Gebühren an?",
    a: "Von uns nicht. Sie zahlen die Einrichtung einmalig, danach kommt keine weitere Rechnung. Modellnutzung und Telefonie laufen über Ihre eigenen Zugänge — Sie sehen jederzeit, was anfällt, und können es selbst steuern." },
];

const WEB_FAQ = [
  { q: "Warum ist die Technik hinter der Seite für Google relevant?",
    a: "Wenn Inhalte erst im Browser per JavaScript zusammengebaut werden, sieht der Crawler im Quelltext oft nur ein leeres Grundgerüst. Serverseitiges Rendern liefert den fertigen Text direkt aus — das ist die Grundlage, ohne die kein Text der Welt rankt." },
  { q: "Bekomme ich eine Seite pro Leistung oder eine grosse Startseite?",
    a: "Eine Seite pro Leistung und, wo es lokal sinnvoll ist, pro Ort. Eine Startseite kann nicht gleichzeitig für zehn Suchbegriffe ranken. Deshalb ist dieser Auftritt mehrseitig aufgebaut." },
  { q: "Kann ich Inhalte selbst pflegen?",
    a: "Ja. Texte, Bilder und Referenzen pflegen Sie über ein Redaktionssystem. Struktur und Technik bleiben bei uns, damit die Seite nicht mit dem dritten Blogartikel zerfällt." },
  { q: "Was passiert mit meiner alten Seite und den Rankings?",
    a: "Alte Adressen werden per 301 auf die neuen weitergeleitet. Vorhandene Rankings gehen dadurch nicht verloren, sondern wandern mit." },
];

const PRICE_FAQ = [
  { q: "Was kostet eine Website für einen Handwerksbetrieb?",
    a: "Ab 890 € einmalig für bis zu fünf Seiten inklusive Struktur, Texten und Einrichtung des Google-Unternehmensprofils. Mehrseitige Auftritte mit Leistungs- und Ortsseiten starten bei 2.400 €." },
  { q: "Was kostet ein KI-Agent?",
    a: "Ab 1.490 € einmalig für Gesprächslogik, Aufbau, Anbindung und Übergabe. Kein Abo, keine monatliche Gebühr von uns." },
  { q: "Gibt es versteckte Folgekosten?",
    a: "Von uns nicht — wir rechnen einmalig ab. Hosting, Domain und bei einem KI-Agenten die Modellnutzung laufen über Ihre eigenen Anbieterverträge. Diese Zugänge richten wir mit ein und übergeben sie Ihnen." },
  { q: "Gibt es einen Nachlass, wenn ich beides buche?",
    a: "15 % auf das Setup, wenn Website und Agent zusammen beauftragt werden." },
];

/* ---------------- Startseite ---------------- */

export function Home() {
  return (
    <>
      <JsonLd path="/" extra={[faqLd(HOME_FAQ)]} />
      <section className="hero">
        <div className="shell hero-in">
          <p className="tag"><i className="dot" aria-hidden="true" />KI-Agenten und Webdesign für B2B</p>
          <h1>Ihre Anfragen werden qualifiziert, während Sie auf der Baustelle stehen.</h1>
          <p className="lead">
            Novastream.ai baut Websites, die gefunden werden, und KI-Agenten, die daraus verwertbare
            Termine machen. Rund um die Uhr, direkt angebunden an Ihr CRM.
          </p>
          <div className="hero-btns">
            <Link href="/kontakt" className="btn btn-brass">Erstgespräch anfragen</Link>
            <Link href="/ki-agenten" className="btn btn-ghost">KI-Agenten ansehen</Link>
          </div>
        </div>
        <div className="shell">
          <div className="band" role="list">
            {[
              ["unter 60 Sek.", "Erstantwort auf eine neue Anfrage"],
              ["24/7", "Erreichbarkeit ohne zusätzliche Schicht"],
              ["ab Woche 2", "erste qualifizierte Termine im Kalender"],
              ["0", "Leads, die im Postfach versanden"],
            ].map(([n, l]) => (
              <div className="band-cell" role="listitem" key={n}>
                <span className="band-n">{n}</span><span className="band-l">{l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="split" aria-labelledby="was-h">
        <div className="shell">
          <h2 id="was-h" className="sec-h">Zwei Bausteine, die zusammen arbeiten</h2>
          <div className="split-grid">
            <Reveal className="panel">
              <h3>Webdesign, das auf Anfragen ausgelegt ist</h3>
              <p>Serverseitig gerendert, damit Google die Inhalte auch wirklich sieht. Eine eigene Seite
                pro Leistung und pro Ort, schnelle Ladezeiten, ein klarer Weg zum Kontakt. Für Handwerk,
                Dienstleister und produzierenden Mittelstand.</p>
              <Link href="/webdesign" className="lnk">Zur Webdesign Agentur</Link>
            </Reveal>
            <Reveal className="panel panel-alt">
              <h3>KI-Agenten, die den Erstkontakt übernehmen</h3>
              <p>Der Agent beantwortet Fragen, qualifiziert nach Ihren Kriterien, bucht Termine und
                schreibt alles ins CRM. Auf der Website, per E-Mail, am Telefon. Sie bekommen keine
                Rohleads, sondern vorbereitete Gespräche.</p>
              <Link href="/ki-agenten" className="lnk">Zum KI-Agent für Unternehmen</Link>
            </Reveal>
          </div>

          <nav className="hub" aria-label="Leistungen im Detail">
            <div className="hub-col">
              <h3>Webdesign nach Ort</h3>
              <Link href="/webdesign/hannover">Webdesign Hannover</Link>
              <Link href="/webdesign/braunschweig">Webdesign Braunschweig</Link>
            </div>
            <div className="hub-col">
              <h3>Webdesign nach Branche</h3>
              <Link href="/webdesign/handwerk">Website für Handwerksbetriebe</Link>
              <Link href="/webdesign/galabau">Website Garten- und Landschaftsbau</Link>
            </div>
            <div className="hub-col">
              <h3>KI-Agenten im Einsatz</h3>
              <Link href="/ki-agenten/lead-qualifizierung">Lead-Qualifizierung mit KI</Link>
              <Link href="/ki-agenten/telefonassistent">KI-Telefonassistent</Link>
            </div>
          </nav>
        </div>
      </section>

      <section className="why" aria-labelledby="why-h">
        <div className="shell">
          <h2 id="why-h" className="sec-h sec-h-light">Warum das bei kleinen Teams besonders wirkt</h2>
          <div className="why-grid">
            {[
              ["Die teuerste Stunde ist die, in der niemand ans Telefon geht",
               "Über die Hälfte aller B2B-Anfragen kommt ausserhalb der Bürozeit. Wer zuerst antwortet, führt das Gespräch — nicht wer das beste Angebot hat."],
              ["Qualifizierung ist Fleissarbeit, kein Bauchgefühl",
               "Budget, Zeitraum, Entscheider, Objektgrösse: immer dieselben Fragen. Genau deshalb kann ein Agent sie stellen und Sie führen nur noch die Gespräche, die sich lohnen."],
              ["Ein System, keine zehn Tools",
               "Website, Agent und CRM hängen an denselben Daten. Kein Copy-and-paste zwischen Postfach, Notizzettel und Angebotsprogramm."],
            ].map(([h, p]) => (
              <Reveal key={h} className="why-card"><h3>{h}</h3><p>{p}</p></Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="faq-sec" aria-labelledby="faq-h">
        <div className="shell narrow">
          <h2 id="faq-h" className="sec-h">Häufige Fragen</h2>
          <Faq items={HOME_FAQ} />
        </div>
      </section>

      <Cta line="15 Minuten, ehrliche Einschätzung"
        sub="Wir sehen uns Ihre Seite an und sagen Ihnen, ob sich ein Agent für Ihr Anfragevolumen rechnet. Wenn nicht, sagen wir das auch." />
    </>
  );
}

/* ---------------- KI-Agenten ---------------- */

export function Agents() {
  const jobs = [
    ["Lead-Qualifizierung", "Der Agent fragt nach Vorhaben, Zeitraum, Budgetrahmen und Entscheider — nach Ihren Kriterien, nicht nach einem Standardskript."],
    ["Terminvereinbarung", "Freie Slots aus Ihrem Kalender, Vorschlag im Gespräch, Bestätigung per Mail. Ohne Hin und Her über drei Tage."],
    ["Angebotsvorbereitung", "Alle Eckdaten stehen strukturiert im CRM, bevor Sie das erste Mal mit dem Kunden sprechen."],
    ["Support-Erstkontakt", "Wiederkehrende Fragen zu Terminen, Status und Unterlagen beantwortet der Agent selbst. Der Rest wird sauber übergeben."],
  ];
  return (
    <>
      <JsonLd path="/ki-agenten" extra={[serviceLd(CORE[1]), faqLd(AGENT_FAQ)]} />
      <Crumbs path="/ki-agenten" />
      <PageHead eyebrow="KI-Agenten" h1="KI-Agent für Unternehmen: Vertrieb und Kundenkommunikation"
        lead="Ein KI-Agent für Unternehmen ist kein Chatbot mit FAQ-Liste. Er führt ein Gespräch, entscheidet nach Ihren Regeln und hinterlässt einen verwertbaren Datensatz im CRM." />
      <section className="cols" aria-labelledby="jobs-h">
        <div className="shell">
          <h2 id="jobs-h" className="sec-h">Was der KI-Agent übernimmt</h2>
          <div className="grid-2">
            {jobs.map(([h, p]) => <Reveal key={h} className="job"><h3>{h}</h3><p>{p}</p></Reveal>)}
          </div>
        </div>
      </section>
      <section className="strip" aria-labelledby="ch-h">
        <div className="shell">
          <h2 id="ch-h" className="sec-h sec-h-light">Kanäle und Anbindung</h2>
          <div className="strip-grid">
            <div><h3>Kanäle</h3>
              <ul className="ticks">
                <li>Website-Chat, eingebettet und mitgestaltet</li>
                <li>E-Mail-Postfach für eingehende Anfragen</li>
                <li>Telefon als Sprachagent für den Erstkontakt</li>
                <li>WhatsApp Business auf Wunsch</li>
              </ul>
            </div>
            <div><h3>Systeme</h3>
              <ul className="ticks">
                <li>HubSpot: Kontakt, Deal, Notiz, Aufgabe</li>
                <li>Kalender für Slots und Bestätigungen</li>
                <li>n8n für alles dazwischen</li>
                <li>Offene APIs statt Screen-Automatisierung</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="faq-sec" aria-labelledby="afaq-h">
        <div className="shell narrow">
          <h2 id="afaq-h" className="sec-h">Häufige Fragen zum KI-Agent für Unternehmen</h2>
          <Faq items={AGENT_FAQ} />
        </div>
      </section>
      <Related paths={["/ki-agenten/lead-qualifizierung", "/ki-agenten/telefonassistent", "/preise"]} />
      <Cta line="Wir bauen Ihnen einen Testagenten"
        sub="Mit Ihren echten Leistungen und drei typischen Anfragen. Sie hören selbst, wie das Gespräch läuft, bevor Sie sich entscheiden." />
    </>
  );
}

/* ---------------- Webdesign ---------------- */

export function Web() {
  return (
    <>
      <JsonLd path="/webdesign" extra={[serviceLd(CORE[2]), faqLd(WEB_FAQ)]} />
      <Crumbs path="/webdesign" />
      <PageHead eyebrow="Webdesign" h1="Webdesign Agentur für Websites, die Anfragen bringen"
        lead="Als Webdesign Agentur ist eine Seite für uns erst dann fertig, wenn sie gefunden wird, geladen ist, bevor jemand wegklickt, und den Weg zum Kontakt in einem Schritt zeigt." />
      <section className="cols" aria-labelledby="lst-h">
        <div className="shell">
          <h2 id="lst-h" className="sec-h">Was wir dabei tatsächlich machen</h2>
          <div className="grid-2">
            {[
              ["Struktur und Suchbegriffe", "Wir sortieren Ihre Leistungen nach dem, was Kunden wirklich eingeben. Jede Leistung bekommt eine eigene Seite mit eigener Überschrift, eigenem Text und eigenem Ziel."],
              ["Technik, die crawlbar ist", "Serverseitiges Rendern, saubere Überschriftenhierarchie, strukturierte Daten, XML-Sitemap, sprechende Adressen. Die Basis, die die meisten Agenturseiten überspringen."],
              ["Ladezeit als Rankingfaktor", "Bilder in modernen Formaten, keine unnötigen Skripte, Schriften lokal eingebunden. Ziel sind grüne Core Web Vitals auf dem Handy, nicht nur im Desktop-Test."],
              ["Der Weg zur Anfrage", "Ein sichtbarer Kontaktweg auf jeder Seite, kurze Formulare, und auf Wunsch der KI-Agent als direkter Gesprächseinstieg statt eines Formulars, das niemand ausfüllt."],
            ].map(([h, p]) => <Reveal key={h} className="job"><h3>{h}</h3><p>{p}</p></Reveal>)}
          </div>
        </div>
      </section>
      <section className="strip" aria-labelledby="fw-h">
        <div className="shell">
          <h2 id="fw-h" className="sec-h sec-h-light">Für wen wir bauen</h2>
          <p className="strip-lead">
            Betriebe mit fünf bis fünfzig Mitarbeitenden, bei denen die Anfrage heute im Postfach der
            Geschäftsführung landet: Elektro, Sanitär, Garten- und Landschaftsbau, Tiefbau, technische
            Dienstleister, produzierender Mittelstand. Schwerpunkt Region Hannover und Braunschweig,
            Umsetzung bundesweit.
          </p>
          <nav className="hub hub-dark" aria-label="Webdesign-Unterseiten">
            <div className="hub-col"><h3>Nach Ort</h3>
              <Link href="/webdesign/hannover">Webdesign Hannover</Link>
              <Link href="/webdesign/braunschweig">Webdesign Braunschweig</Link>
            </div>
            <div className="hub-col"><h3>Nach Branche</h3>
              <Link href="/webdesign/handwerk">Website für Handwerksbetriebe</Link>
              <Link href="/webdesign/galabau">Website Garten- und Landschaftsbau</Link>
            </div>
          </nav>
        </div>
      </section>
      <section className="faq-sec" aria-labelledby="wfaq-h">
        <div className="shell narrow">
          <h2 id="wfaq-h" className="sec-h">Häufige Fragen zu Webdesign und SEO</h2>
          <Faq items={WEB_FAQ} />
        </div>
      </section>
      <Cta line="Kostenloser Website-Check"
        sub="Wir prüfen Technik, Struktur und Sichtbarkeit Ihrer aktuellen Seite und schicken Ihnen die drei Punkte mit dem grössten Hebel." />
    </>
  );
}

/* ---------------- Ablauf ---------------- */

export function Process() {
  const steps = [
    ["Analyse", "Wir sehen uns Ihre Seite, Ihre letzten Anfragen und Ihren Verkaufsweg an. Ergebnis ist eine Zahl: wie viele Anfragen gehen heute verloren.", "45 Minuten"],
    ["Konzept", "Seitenstruktur, Suchbegriffe pro Seite und die Gesprächslogik des Agenten. Sie geben beides frei, bevor gebaut wird.", "3 bis 5 Tage"],
    ["Bau", "Website und Agent entstehen parallel. Sie sehen den Zwischenstand ab dem ersten Tag auf einer Testadresse.", "2 bis 4 Wochen"],
    ["Anbindung", "CRM, Kalender, Postfach und Weiterleitungen. Danach der Livegang mit Umleitung aller alten Adressen.", "2 bis 3 Tage"],
    ["Übergabe", "Sie bekommen alle Zugänge, eine Einweisung und eine kurze Dokumentation. Ab hier läuft die Seite Ihnen, ohne Vertrag und ohne monatliche Gebühr.", "1 Termin"],
  ];
  return (
    <>
      <JsonLd path="/ablauf" />
      <Crumbs path="/ablauf" />
      <PageHead eyebrow="Ablauf" h1="In fünf Schritten zur laufenden Anfragenmaschine"
        lead="Kein Projekt ohne Termine. Jeder Schritt hat ein Ergebnis, das Sie sehen und freigeben können." />
      <section className="steps-sec">
        <div className="shell narrow">
          <ol className="steps">
            {steps.map(([h, p, t], i) => (
              <Reveal key={h}>
                <li className="step">
                  <span className="step-n">{String(i + 1).padStart(2, "0")}</span>
                  <div><h2>{h}</h2><p>{p}</p><span className="step-t">{t}</span></div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>
      <Related paths={["/preise", "/webdesign", "/ki-agenten"]} />
      <Cta line="Schritt eins dauert 45 Minuten"
        sub="Danach wissen Sie, wo Ihre Anfragen hängenbleiben — unabhängig davon, ob Sie mit uns weitermachen." />
    </>
  );
}

/* ---------------- Preise ---------------- */

export function Pricing() {
  const tiers = [
    { name: "Website Start", price: "ab 890 €", note: "einmalig",
      for: "Für Betriebe, die zum ersten Mal richtig online gehen.",
      items: ["Bis zu 5 Seiten", "Struktur und Texte nach Suchbegriffen", "Serverseitig gerendert, mobil optimiert", "Google-Unternehmensprofil eingerichtet", "Kontaktformular und Rufnummer-Tracking"] },
    { name: "Website Pro", price: "ab 2.400 €", note: "einmalig", featured: true,
      for: "Wenn Sie mehrere Leistungen und Orte abdecken wollen.",
      items: ["Bis zu 15 Seiten inkl. Leistungs- und Ortsseiten", "Redaktionssystem zur eigenen Pflege", "Strukturierte Daten und Sitemap", "Core Web Vitals im grünen Bereich", "301-Weiterleitung der alten Seite", "Drei Monate Nachbesserung inklusive"] },
    { name: "KI-Agent", price: "ab 1.490 €", note: "einmalig",
      for: "Sobald genug Anfragen kommen, um sie zu verlieren.",
      items: ["Gesprächslogik aus Ihren echten Anfragen", "Website-Chat und E-Mail-Kanal", "Terminbuchung im eigenen Kalender", "HubSpot-Anbindung inkl. Deal-Anlage", "Übergabe aller Zugänge und eine Einweisung"] },
  ];
  return (
    <>
      <JsonLd path="/preise" extra={[faqLd(PRICE_FAQ)]} />
      <Crumbs path="/preise" />
      <PageHead eyebrow="Preise" h1="Website Kosten und KI-Agent Kosten auf einen Blick"
        lead="Alle Angaben sind Startpreise netto und einmalig. Kein Abo, keine monatliche Gebühr. Der verbindliche Preis steht nach der Analyse, vor dem ersten Handgriff." />
      <section className="price-sec">
        <div className="shell">
          <div className="price-grid">
            {tiers.map((t) => (
              <Reveal key={t.name}>
                <article className={`tier ${t.featured ? "tier-hot" : ""}`}>
                  <h2>{t.name}</h2>
                  <p className="tier-p">{t.price}<span>{t.note}</span></p>
                  <p className="tier-for">{t.for}</p>
                  <ul className="ticks">{t.items.map((i) => <li key={i}>{i}</li>)}</ul>
                  <Link href="/kontakt" className={`btn ${t.featured ? "btn-brass" : "btn-line"}`}>Anfragen</Link>
                </article>
              </Reveal>
            ))}
          </div>
          <p className="price-foot">
            Website und KI-Agent zusammen gebucht: 15 % auf die Gesamtsumme. Alle Preise sind
            Einmalbeträge — wir stellen keine monatlichen Gebühren in Rechnung. Es gelten unsere{" "}
            <Link href="/agb" className="inline-lnk">AGB</Link>.
          </p>
        </div>
      </section>
      <section className="faq-sec" aria-labelledby="pfaq-h">
        <div className="shell narrow">
          <h2 id="pfaq-h" className="sec-h">Häufige Fragen zu Kosten</h2>
          <Faq items={PRICE_FAQ} />
        </div>
      </section>
      <Cta line="Unsicher, welches Paket passt?"
        sub="Schildern Sie kurz Ihre Situation. Wenn das kleinste Paket reicht, empfehlen wir das kleinste Paket." />
    </>
  );
}

/* ---------------- Kontakt ---------------- */

export function Contact() {
  return (
    <>
      <JsonLd path="/kontakt" />
      <Crumbs path="/kontakt" />
      <PageHead eyebrow="Kontakt" h1="15 Minuten, dann wissen Sie, woran Sie sind"
        lead="Wir sehen uns Ihre Seite an, rechnen den Anfragen-Hebel durch und sagen ehrlich, ob sich ein KI-Agent für Ihr Volumen lohnt." />
      <section className="contact-sec">
        <div className="shell contact-grid">
          <ContactForm />
          <aside className="contact-side">
            <h2>Direkt</h2>
            <dl>
              <dt>E-Mail</dt><dd><a href={"mailto:" + MAIL}>{MAIL}</a></dd>
              <dt>Telefon</dt><dd><a href="tel:+491749815150">0174 9815150</a></dd>
              <dt>Region</dt><dd>Hildesheim · Hannover · Braunschweig · bundesweit remote</dd>
              <dt>Antwortzeit</dt><dd>ein Werktag, meist schneller</dd>
            </dl>
          </aside>
        </div>
      </section>
      <Related paths={["/preise", "/ablauf", "/ki-agenten"]} />
    </>
  );
}

export const CORE_PAGES = {
  "/ki-agenten": Agents,
  "/webdesign": Web,
  "/ablauf": Process,
  "/preise": Pricing,
  "/kontakt": Contact,
};

