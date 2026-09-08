// Alle Seiteninhalte an einem Ort. Neue Seite = hier einen Eintrag ergaenzen.

const SITE = "https://novastream.ai";
const OG = SITE + "/og-image.jpg";
const MAIL = "info@novastream-ai.com";

const CORE = [
  {
    path: "/", nav: "Start", crumb: "Start",
    kwMain: "KI-Agenten und Webdesign für B2B",
    title: "KI-Agenten & Webdesign für den B2B-Mittelstand | Novastream.ai",
    desc: "Novastream.ai baut KI-Agenten und Websites, die Anfragen qualifizieren statt nur zu informieren. Lead-Qualifizierung rund um die Uhr, CRM-Integration, messbare Termine.",
    kw: "KI Agenten B2B, KI Agentur, Webdesign Agentur, KI Leadgenerierung, Vertriebsautomatisierung, Prozessautomatisierung Mittelstand",
  },
  {
    path: "/ki-agenten", nav: "KI-Agenten", crumb: "KI-Agenten",
    kwMain: "KI-Agent für Unternehmen",
    title: "KI-Agent für Unternehmen: Vertrieb & Kundenkommunikation | Novastream.ai",
    desc: "KI-Agent für Unternehmen im B2B: qualifiziert Anfragen rund um die Uhr, bucht Termine, übergibt an HubSpot. Kein Chatbot mit FAQ-Liste, sondern ein geführtes Gespräch.",
    kw: "KI Agent für Unternehmen, KI Agentur B2B, KI Assistent Vertrieb, Chatbot Alternative, Vertriebsautomatisierung KI",
  },
  {
    path: "/webdesign", nav: "Webdesign", crumb: "Webdesign",
    kwMain: "Webdesign Agentur",
    title: "Webdesign Agentur für Handwerk & Mittelstand | Novastream.ai",
    desc: "Webdesign Agentur für Betriebe, die Anfragen brauchen statt Klicks: serverseitig gerendert, für die lokale Suche strukturiert, schnell auf dem Handy.",
    kw: "Webdesign Agentur, Website erstellen lassen, lokale SEO, Webagentur Niedersachsen, Homepage Handwerk",
  },
  {
    path: "/ablauf", nav: "Ablauf", crumb: "Ablauf",
    kwMain: "Ablauf eines Webprojekts",
    title: "Ablauf: In fünf Schritten zur laufenden Anfragenmaschine | Novastream.ai",
    desc: "Ablauf eines Webprojekts bei Novastream.ai: Analyse, Konzept, Bau, Anbindung, Betrieb. Jeder Schritt mit festem Ergebnis und festem Termin.",
    kw: "Ablauf Webprojekt, KI Projekt Ablauf, Website Projektablauf, Zeitplan Website",
  },
  {
    path: "/preise", nav: "Preise", crumb: "Preise",
    kwMain: "Website Kosten und KI-Agent Kosten",
    title: "Preise: Website Kosten & KI-Agent Kosten im Überblick | Novastream.ai",
    desc: "Was kostet eine Website, was kostet ein KI-Agent? Alle Preise einmalig, ohne Abo und ohne monatliche Gebühr. Transparent vor dem Gespräch, nicht danach.",
    kw: "Website Kosten Handwerk, Webdesign Preise ohne Abo, KI Agent Kosten, Website einmalig zahlen, was kostet eine Website",
  },
  {
    path: "/kontakt", nav: "Kontakt", crumb: "Kontakt",
    kwMain: "Erstgespräch anfragen",
    title: "Kontakt & kostenloses Erstgespräch | Novastream.ai",
    desc: "15 Minuten Erstgespräch: Wir prüfen Ihre Website, rechnen den Anfragen-Hebel durch und sagen ehrlich, ob sich ein KI-Agent für Ihr Volumen lohnt.",
    kw: "KI Agentur Kontakt, Webdesign Anfrage, Erstgespräch Automatisierung",
  },
];

const LANDINGS = [
  {
    path: "/webdesign/hannover", parent: "/webdesign", nav: "Hannover", crumb: "Hannover",
    kwMain: "Webdesign Hannover",
    title: "Webdesign Hannover — Websites, die Anfragen bringen | Novastream.ai",
    desc: "Webdesign Hannover für Handwerk, Dienstleister und Mittelstand. Websites, die in der lokalen Suche gefunden werden und Anfragen erzeugen. Persönlich vor Ort.",
    kw: "Webdesign Hannover, Webagentur Hannover, Website erstellen lassen Hannover, Homepage Hannover",
    eyebrow: "Webdesign · Region Hannover",
    h1: "Webdesign Hannover für Betriebe, die Aufträge brauchen",
    lead: "Wir machen Webdesign in Hannover für Betriebe zwischen List und Laatzen, die nicht noch eine schöne Seite wollen, sondern Anfragen aus dem Umkreis. Persönlich vor Ort, technisch auf dem Stand, der in der lokalen Suche zählt.",
    blocks: [
      { h: "Warum lokale Sichtbarkeit in Hannover anders funktioniert",
        p: "Wer in Hannover nach einem Betrieb sucht, tippt selten nur die Leistung ein. Er tippt die Leistung plus den Stadtteil. Genau darauf bauen wir die Seitenstruktur auf: eine eigene Seite pro Leistung, verknüpft mit den Orten, in denen Sie tatsächlich arbeiten. Dazu ein gepflegtes Google-Unternehmensprofil, das den grössten Teil der lokalen Sichtbarkeit trägt." },
      { h: "Was Sie von einer Webagentur in Hannover bekommen sollten",
        p: "Serverseitig gerendertes HTML, damit Google den Text überhaupt sieht. Ladezeiten unter zwei Sekunden auf dem Handy, weil die meisten Anfragen mobil entstehen. Eine sichtbare Telefonnummer auf jeder Seite. Und Texte, die Ihre Kunden verstehen, nicht Ihre Mitbewerber beeindrucken." },
    ],
    list: { h: "Im Paket enthalten", items: [
      "Eigene Seiten für Ihre Leistungen und Ihr Einzugsgebiet",
      "Google-Unternehmensprofil eingerichtet und verknüpft",
      "Strukturierte Daten für Öffnungszeiten, Adresse und Bewertungen",
      "Ladezeit-Optimierung mit Fokus auf mobile Nutzung",
      "Weiterleitung Ihrer alten Adressen, damit Rankings mitwandern"] },
    faq: [
      { q: "Was kostet Webdesign in Hannover?",
        a: "Der Einstieg liegt bei 890 € für bis zu fünf Seiten. Mehrseitige Auftritte mit Leistungs- und Ortsseiten starten bei 2.400 €. Den verbindlichen Preis nennen wir nach der Analyse, vor dem ersten Handgriff." },
      { q: "Arbeiten Sie nur in Hannover?",
        a: "Schwerpunkt ist die Region Hannover und Braunschweig, weil persönliche Termine dort einfach sind. Umgesetzt wird bundesweit — die Arbeit selbst findet ohnehin am Rechner statt." },
      { q: "Wie lange dauert es, bis meine Seite in Hannover gefunden wird?",
        a: "Über das Google-Unternehmensprofil sind erste lokale Treffer in wenigen Wochen realistisch. Organische Rankings für Begriffe wie Webdesign Hannover brauchen drei bis sechs Monate. Wer schnellere Ergebnisse verspricht, verkauft Ihnen Anzeigen." },
    ],
    related: ["/webdesign/braunschweig", "/webdesign/handwerk", "/preise"],
  },
  {
    path: "/webdesign/braunschweig", parent: "/webdesign", nav: "Braunschweig", crumb: "Braunschweig",
    kwMain: "Webdesign Braunschweig",
    title: "Webdesign Braunschweig für Handwerk & Mittelstand | Novastream.ai",
    desc: "Webdesign Braunschweig: Websites für Betriebe, die in der lokalen Suche gefunden werden wollen. Technisch sauber, mobil schnell, auf Anfragen ausgelegt.",
    kw: "Webdesign Braunschweig, Webagentur Braunschweig, Homepage erstellen lassen Braunschweig, Website Handwerker Braunschweig",
    eyebrow: "Webdesign · Region Braunschweig",
    h1: "Webdesign Braunschweig, gebaut auf Anfragen statt auf Applaus",
    lead: "Webdesign in Braunschweig für Handwerk, technische Dienstleister und produzierenden Mittelstand. Wir bauen Seiten, die im Umkreis gefunden werden und den Weg zum Telefon in einem Schritt zeigen.",
    blocks: [
      { h: "Der lokale Wettbewerb ist kleiner, als Sie denken",
        p: "In Braunschweig konkurrieren Sie bei den meisten Suchbegriffen nicht mit nationalen Anbietern, sondern mit drei bis fünf Betrieben aus der Region. Von denen haben die wenigsten eine technisch saubere Seite. Das ist der Grund, warum lokale Rankings hier deutlich schneller kippen als bei nationalen Begriffen." },
      { h: "Was wir konkret bauen",
        p: "Eine Seite pro Leistung, verknüpft mit Braunschweig und den umliegenden Orten. Klare Überschriftenhierarchie, damit Google die Struktur versteht. Kontaktweg auf jeder Seite. Und wenn genug Anfragen ankommen, den KI-Agenten davor, der sie vorqualifiziert, bevor Sie zurückrufen." },
    ],
    list: { h: "Im Paket enthalten", items: [
      "Leistungs- und Ortsseiten für Braunschweig und Umland",
      "Google-Unternehmensprofil mit Kategorien und Leistungen",
      "Schnelle Ladezeiten, geprüft auf echten Mobilgeräten",
      "Kontaktformular, Rufnummer-Tracking und optional KI-Agent",
      "Drei Monate Nachbesserung nach dem Livegang"] },
    faq: [
      { q: "Lohnt sich eine neue Website in Braunschweig überhaupt?",
        a: "Wenn Ihre aktuelle Seite unter Ihrem Firmennamen gefunden wird, aber nicht unter Ihrer Leistung, liegt dort ungenutztes Potenzial. Das prüfen wir im Erstgespräch kostenlos und sagen Ihnen ehrlich, wenn sich der Aufwand nicht lohnt." },
      { q: "Kann ich Texte und Bilder später selbst pflegen?",
        a: "Ja, über ein Redaktionssystem. Struktur und Technik bleiben bei uns, damit die Seite nicht mit dem dritten selbst eingepflegten Artikel auseinanderfällt." },
      { q: "Übernehmen Sie auch die Betreuung nach dem Start?",
        a: "Wir übergeben die Seite vollständig, inklusive aller Zugänge. Es läuft kein Vertrag weiter und es wird nichts monatlich abgebucht. Wenn später etwas geändert werden soll, rechnen wir das einzeln ab." },
    ],
    related: ["/webdesign/hannover", "/webdesign/galabau", "/ablauf"],
  },
  {
    path: "/webdesign/handwerk", parent: "/webdesign", nav: "Handwerk", crumb: "Handwerk",
    kwMain: "Website für Handwerksbetriebe",
    title: "Website für Handwerksbetriebe erstellen lassen | Novastream.ai",
    desc: "Website für Handwerksbetriebe: gefunden werden, Anfragen sammeln, Termine bekommen. Für Elektro, Sanitär, Dach, Tiefbau und alles dazwischen.",
    kw: "Website für Handwerksbetriebe, Homepage Handwerker erstellen lassen, Website Elektriker, Website Sanitär, Handwerker Website Kosten",
    eyebrow: "Webdesign · Handwerk",
    h1: "Website für Handwerksbetriebe, die abends noch Anfragen bringt",
    lead: "Eine Website für Handwerksbetriebe hat genau eine Aufgabe: Menschen, die gerade ein Problem haben, sollen Sie finden und in einem Schritt erreichen. Alles andere ist Dekoration.",
    blocks: [
      { h: "Das Grundproblem im Handwerk ist nicht die Nachfrage",
        p: "Es ist die Erreichbarkeit. Die Anfrage kommt um 19:40 Uhr, Sie sind auf dem Rückweg von der Baustelle, und der Kunde ruft in der Zwischenzeit beim nächsten Betrieb an. Wer zuerst antwortet, bekommt den Auftrag — nicht wer das beste Angebot schreibt." },
      { h: "Was eine Handwerker-Website leisten muss",
        p: "Sie muss unter der Leistung gefunden werden, nicht unter dem Firmennamen. Sie muss auf dem Handy in unter zwei Sekunden stehen. Sie muss Referenzen zeigen, damit Vertrauen entsteht. Und sie braucht einen Kontaktweg, der auch dann funktioniert, wenn im Büro niemand sitzt." },
    ],
    list: { h: "Typische Gewerke, für die wir bauen", items: [
      "Elektro und Elektrotechnik",
      "Sanitär, Heizung, Klima",
      "Dach, Zimmerei, Trockenbau",
      "Garten- und Landschaftsbau, Baumpflege",
      "Tiefbau und Erdarbeiten"] },
    faq: [
      { q: "Was kostet eine Website für einen Handwerksbetrieb?",
        a: "Ab 890 € für einen kompakten Auftritt mit bis zu fünf Seiten. Wer mehrere Gewerke und Orte abdecken will, liegt ab 2.400 €. Laufende Kosten fallen nur für Hosting und optionale Betreuung an." },
      { q: "Ich habe keine Zeit für ein Website-Projekt. Wie viel muss ich mitmachen?",
        a: "Ein Termin von 45 Minuten für die Analyse, eine Freigabe der Struktur, eine Freigabe der Texte. Fotos machen wir aus Ihrem Bestand oder organisieren einen Termin. Mehr braucht es von Ihrer Seite nicht." },
      { q: "Brauche ich zusätzlich einen KI-Agenten?",
        a: "Erst wenn die Seite Besucher hat. Ein Agent auf einer Seite, die niemand findet, qualifiziert nichts. Ab etwa zwanzig Anfragen im Monat rechnet er sich meist innerhalb eines Quartals." },
    ],
    related: ["/webdesign/galabau", "/ki-agenten/telefonassistent", "/preise"],
  },
  {
    path: "/webdesign/galabau", parent: "/webdesign", nav: "GaLaBau", crumb: "GaLaBau",
    kwMain: "Website Garten- und Landschaftsbau",
    title: "Website für Garten- und Landschaftsbau erstellen lassen | Novastream.ai",
    desc: "Website Garten- und Landschaftsbau: Projekte zeigen, saisonale Anfragen abfangen, Termine sammeln. Für GaLaBau-Betriebe, Baumpflege und Tiefbau.",
    kw: "Website Garten und Landschaftsbau, Homepage GaLaBau Betrieb, Website Baumpflege, Website Tiefbau, GaLaBau Marketing",
    eyebrow: "Webdesign · GaLaBau",
    h1: "Website für Garten- und Landschaftsbau mit Blick auf die Saison",
    lead: "Im Garten- und Landschaftsbau entscheidet die Website mit, wie voll der Frühling wird. Wir bauen sie so, dass Projekte sichtbar sind und Anfragen schon im Winter reinkommen.",
    blocks: [
      { h: "Saisonalität ist ein Planungsproblem, kein Schicksal",
        p: "Die Anfragen für die Frühjahrssaison entstehen zwischen Januar und März. Wer erst im April sichtbar wird, verkauft in einen vollen Markt. Eine Seite, die im Winter Angebote sammelt und Termine vorbucht, verschiebt Ihre Auslastung nach vorn — und Ihre Preise nach oben." },
      { h: "Bilder verkaufen, Struktur bringt Besucher",
        p: "Referenzprojekte in ordentlicher Auflösung und modernen Bildformaten, damit die Seite trotzdem schnell bleibt. Dazu eigene Seiten für Pflasterarbeiten, Gartenpflege, Baumfällung, Bewässerung. Jeder dieser Begriffe wird einzeln gesucht und braucht eine eigene Landeseite." },
    ],
    list: { h: "Was wir in GaLaBau-Projekten immer bauen", items: [
      "Projektgalerie mit Vorher-Nachher und Ortsangabe",
      "Eine Seite je Leistung statt einer Sammelseite",
      "Anfragestrecke mit Grundstücksgrösse und Wunschtermin",
      "Optional: KI-Agent, der Objektdaten vorab abfragt",
      "Saisonale Hinweisleisten für Winterdienst und Frühjahrsstart"] },
    faq: [
      { q: "Lohnt sich eine eigene Website neben den Portalen?",
        a: "Portale kosten pro Lead und schicken denselben Kunden an drei Betriebe. Die eigene Seite kostet einmalig und liefert exklusive Anfragen. Die meisten Betriebe fahren beides parallel und drehen den Portalanteil mit der Zeit herunter." },
      { q: "Können Sie auch Baumpflege und Tiefbau abbilden?",
        a: "Ja, als eigene Leistungsseiten mit eigenen Suchbegriffen. Genau dafür ist die mehrseitige Struktur da." },
      { q: "Wie kommen die Projektbilder auf die Seite?",
        a: "Sie liefern die Handyfotos, wir kümmern uns um Zuschnitt, Format und Ladezeit. Ein Fotografentermin ist möglich, aber selten nötig." },
    ],
    related: ["/webdesign/handwerk", "/ki-agenten/lead-qualifizierung", "/ablauf"],
  },
  {
    path: "/ki-agenten/lead-qualifizierung", parent: "/ki-agenten", nav: "Lead-Qualifizierung", crumb: "Lead-Qualifizierung",
    kwMain: "Lead-Qualifizierung mit KI",
    title: "Lead-Qualifizierung mit KI: Anfragen automatisch vorsortieren | Novastream.ai",
    desc: "Lead-Qualifizierung mit KI: Der Agent fragt Budget, Zeitraum und Entscheider ab, bewertet nach Ihren Kriterien und legt den Lead im CRM an. Rund um die Uhr.",
    kw: "Lead Qualifizierung KI, Leads automatisch qualifizieren, Leadgenerierung Automatisierung, Vertriebsautomatisierung B2B, HubSpot Lead Scoring",
    eyebrow: "KI-Agenten · Lead-Qualifizierung",
    h1: "Lead-Qualifizierung mit KI, bevor Sie den Hörer abnehmen",
    lead: "Lead-Qualifizierung mit KI heisst nicht, dass eine Maschine verkauft. Sie heisst, dass die immer gleichen sechs Fragen schon gestellt sind, wenn Sie das Gespräch übernehmen.",
    blocks: [
      { h: "Immer dieselben Fragen, immer dieselbe Zeit",
        p: "Vorhaben, Zeitraum, Budgetrahmen, Objektgrösse, Entscheidungsbefugnis, Erreichbarkeit. Sechs Punkte, die jedes Erstgespräch trägt, und für die Sie jedes Mal zehn Minuten aufwenden. Der Agent stellt sie im Chat oder am Telefon, sofort nach der Anfrage, und schreibt die Antworten strukturiert weg." },
      { h: "Bewertung nach Ihren Regeln, nicht nach einem Standardmodell",
        p: "Sie legen fest, was ein guter Lead ist: Mindestauftragswert, Radius, Gewerk, Zeitfenster. Der Agent bewertet danach und markiert im CRM, was Priorität hat. Was nicht passt, bekommt eine freundliche Absage statt einer Woche Funkstille." },
    ],
    list: { h: "Was am Ende im CRM steht", items: [
      "Kontakt mit Name, Firma, Telefon und E-Mail",
      "Vorhaben in eigenen Worten des Kunden",
      "Zeitraum, Budgetrahmen und Entscheider",
      "Bewertung nach Ihren Kriterien plus Begründung",
      "Vollständiges Gesprächsprotokoll als Notiz"] },
    faq: [
      { q: "Was ist der Unterschied zwischen einem Chatbot und Lead-Qualifizierung mit KI?",
        a: "Ein Chatbot beantwortet Fragen aus einer Liste. Ein qualifizierender Agent stellt selbst Fragen, erkennt aus den Antworten, ob der Lead passt, und erzeugt einen strukturierten Datensatz. Der eine informiert, der andere arbeitet." },
      { q: "Ab wann rechnet sich das?",
        a: "Grob ab zwanzig Anfragen im Monat. Bei zehn Minuten Qualifizierung pro Anfrage sind das über drei Stunden monatlich, die zurückkommen — plus die Anfragen, die heute abends unbeantwortet verfallen." },
      { q: "Kann der Agent falsche Zusagen machen?",
        a: "Er darf keine Preise oder Termine zusagen, die nicht freigegeben sind. Bei Unsicherheit sagt er das offen und übergibt mit Rückrufwunsch statt zu improvisieren." },
    ],
    related: ["/ki-agenten/telefonassistent", "/ki-agenten", "/preise"],
  },
  {
    path: "/ki-agenten/telefonassistent", parent: "/ki-agenten", nav: "Telefonassistent", crumb: "Telefonassistent",
    kwMain: "KI-Telefonassistent",
    title: "KI-Telefonassistent: Anrufe annehmen, auch auf der Baustelle | Novastream.ai",
    desc: "KI-Telefonassistent für Handwerk und Mittelstand: nimmt Anrufe an, wenn niemand ans Telefon geht, erfasst das Anliegen und bucht Rückruftermine.",
    kw: "KI Telefonassistent, KI Anrufannahme, Telefonservice Handwerk, virtueller Telefonassistent, Anrufe automatisch annehmen",
    eyebrow: "KI-Agenten · Telefon",
    h1: "KI-Telefonassistent für alle Anrufe, die sonst ins Leere gehen",
    lead: "Der KI-Telefonassistent nimmt ab, wenn Sie im Graben stehen, auf der Leiter oder im Kundengespräch. Er erfasst, worum es geht, und legt einen Rückruftermin, statt den Anrufer zum Wettbewerb zu schicken.",
    blocks: [
      { h: "Der verpasste Anruf ist der teuerste Moment im Tag",
        p: "Ein Grossteil der Erstkontakte im Handwerk läuft weiterhin über das Telefon. Wer nicht abnimmt, wird nicht zurückgerufen — der Anrufer wählt einfach die nächste Nummer aus den Suchergebnissen. Ein Assistent, der immer abnimmt, schliesst genau diese Lücke." },
      { h: "Er klingt nicht wie ein Anrufbeantworter",
        p: "Der Assistent stellt sich als digitaler Assistent Ihres Betriebs vor, fragt nach Anliegen, Ort und Dringlichkeit und bietet Rückrufzeiten aus Ihrem echten Kalender an. Notfälle erkennt er an von Ihnen definierten Stichworten und leitet sofort weiter." },
    ],
    list: { h: "Was der Telefonassistent übernimmt", items: [
      "Anrufannahme ausserhalb der Bürozeiten und bei Besetzt",
      "Erfassung von Anliegen, Adresse und Dringlichkeit",
      "Rückruftermine aus Ihrem echten Kalender",
      "Sofortige Weiterleitung bei definierten Notfällen",
      "Gesprächszusammenfassung per E-Mail und im CRM"] },
    faq: [
      { q: "Merken Anrufer, dass sie mit einer KI sprechen?",
        a: "Der Assistent sagt es zu Beginn. Wir tarnen ihn nicht als Mensch — das fliegt auf und kostet Vertrauen. Was zählt, ist dass überhaupt jemand abnimmt." },
      { q: "Was passiert bei einem Notfall?",
        a: "Sie definieren Stichworte wie Wasserschaden oder Stromausfall. Erkennt der Assistent eines davon, stellt er sofort auf Ihre Notfallnummer durch, ohne weitere Fragen." },
      { q: "Was kostet ein KI-Telefonassistent?",
        a: "Ab 1.490 € einmalig für die komplette Einrichtung. Danach kommt von uns keine Rechnung mehr. Die laufenden Kosten für Modell und Telefonie laufen über Ihre eigenen Zugänge, damit Sie sie jederzeit selbst einsehen und abschalten können." },
    ],
    related: ["/ki-agenten/lead-qualifizierung", "/webdesign/handwerk", "/kontakt"],
  },
];

/* -------------------------------------------------------------------- *
 *  RECHTSTEXTE
 *  Platzhalter in [eckigen Klammern] vor dem Livegang ersetzen.
 * -------------------------------------------------------------------- */

const LEGAL = [
  {
    path: "/impressum", nav: "Impressum", crumb: "Impressum", legal: true,
    kwMain: "Impressum",
    title: "Impressum | Novastream.ai",
    desc: "Impressum und Anbieterkennzeichnung von Novastream.ai gemäß § 5 DDG.",
    kw: "Impressum Novastream",
    h1: "Impressum",
    intro: "Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG).",
    sections: [
      { h: "Anbieter", dl: [
        ["Unternehmen", "Novastream.ai"],
        ["Inhaber", "Justin Weidler"],
        ["Anschrift", "Maschstraße 27 · 31171 Nordstemmen"],
        ["Land", "Deutschland"],
      ]},
      { h: "Kontakt", dl: [
        ["E-Mail", MAIL],
        ["Telefon", "0174 9815150"],
      ]},
      { h: "Umsatzsteuer", p: [
        "VARIANTE A — mit Umsatzsteuer: Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz: [USt-IdNr. hier eintragen].",
        "VARIANTE B — Kleinunternehmer: Gemäß § 19 UStG wird keine Umsatzsteuer berechnet und daher nicht in Rechnungen ausgewiesen.",
        "Bitte genau eine der beiden Varianten behalten und die andere Zeile in lib/content.js löschen.",
      ]},
      { h: "Redaktionell verantwortlich", p: [
        "Verantwortlich für den Inhalt nach § 18 Abs. 2 Medienstaatsvertrag (MStV): Justin Weidler, Anschrift wie oben.",
      ]},
      { h: "Verbraucherstreitbeilegung", p: [
        "Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.",
      ]},
      { h: "Haftung für Inhalte", p: [
        "Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.",
        "Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden entsprechender Rechtsverletzungen entfernen wir diese Inhalte umgehend.",
      ]},
      { h: "Haftung für Links", p: [
        "Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.",
        "Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen entfernen wir derartige Links umgehend.",
      ]},
      { h: "Urheberrecht", p: [
        "Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.",
        "Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen entfernen wir derartige Inhalte umgehend.",
      ]},
    ],
  },
  {
    path: "/datenschutz", nav: "Datenschutz", crumb: "Datenschutz", legal: true,
    kwMain: "Datenschutzerklärung",
    title: "Datenschutzerklärung | Novastream.ai",
    desc: "Datenschutzerklärung von Novastream.ai: Welche Daten wir verarbeiten, auf welcher Rechtsgrundlage und welche Rechte Sie haben.",
    kw: "Datenschutzerklärung Novastream, DSGVO",
    h1: "Datenschutzerklärung",
    intro: "Diese Erklärung informiert Sie darüber, welche personenbezogenen Daten wir beim Besuch dieser Website und bei der Zusammenarbeit verarbeiten.",
    sections: [
      { h: "1. Verantwortlicher", p: [
        "Verantwortlich im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:",
        "Novastream.ai, Justin Weidler, Maschstraße 27, 31171 Nordstemmen, Deutschland. E-Mail: " + MAIL + ", Telefon: 0174 9815150.",
        "Ein Datenschutzbeauftragter ist gesetzlich nicht bestellt, da die Voraussetzungen des § 38 BDSG nicht vorliegen.",
      ]},
      { h: "2. Hosting", p: [
        "Diese Website wird bei Vercel Inc. (USA) gehostet. Die dabei erhobenen personenbezogenen Daten werden auf den Servern des Hosters gespeichert. Die genaue Anschrift des Anbieters entnehmen Sie dem mit uns geschlossenen Auftragsverarbeitungsvertrag.",
        "Die Nutzung des Hosters erfolgt zum Zweck der Vertragserfüllung gegenüber unseren potenziellen und bestehenden Kunden sowie im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Onlineangebots. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b und lit. f DSGVO. Mit dem Hoster besteht ein Vertrag über Auftragsverarbeitung nach Art. 28 DSGVO.",
      ]},
      { h: "3. Server-Logfiles", p: [
        "Der Provider dieser Seite erhebt und speichert automatisch Informationen in sogenannten Server-Logfiles, die Ihr Browser automatisch übermittelt: Browsertyp und -version, verwendetes Betriebssystem, Referrer-URL, Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage und IP-Adresse.",
        "Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Betreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Sicherheit seiner Website. Die Logfiles werden nach spätestens 30 Tagen gelöscht.",
      ]},
      { h: "4. Kontaktaufnahme", p: [
        "Wenn Sie uns per Kontaktformular, E-Mail oder Telefon kontaktieren, werden Ihre Angaben inklusive der von Ihnen angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.",
        "Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung an uns gerichteter Anfragen (Art. 6 Abs. 1 lit. f DSGVO).",
        "Die Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung widerrufen oder der Zweck der Speicherung entfällt. Zwingende gesetzliche Aufbewahrungsfristen bleiben unberührt.",
      ]},
      { h: "5. KI-Assistent auf dieser Website", p: [
        "Sofern auf dieser Website ein KI-gestützter Assistent (Chat oder Sprachassistent) eingesetzt wird, verarbeiten wir die von Ihnen im Gespräch eingegebenen Inhalte, um Ihre Anfrage zu beantworten, Ihr Anliegen zu erfassen und gegebenenfalls einen Termin abzustimmen.",
        "Zur Erzeugung der Antworten setzen wir Sprachmodelle externer Anbieter ein ([eingesetzte Anbieter eintragen]). Die Gesprächsinhalte werden zu diesem Zweck an den jeweiligen Anbieter übermittelt. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b bzw. lit. f DSGVO.",
        "Bitte geben Sie im Gespräch keine besonderen Kategorien personenbezogener Daten im Sinne des Art. 9 DSGVO an. Gesprächsprotokolle werden nach 90 Tagen gelöscht, sofern kein Vertragsverhältnis zustande kommt.",
        "Soweit Anbieter mit Sitz außerhalb der EU eingesetzt werden, erfolgt die Übermittlung auf Grundlage der Standardvertragsklauseln der EU-Kommission nach Art. 46 Abs. 2 lit. c DSGVO oder eines Angemessenheitsbeschlusses.",
      ]},
      { h: "6. Cookies und lokale Speicherung", p: [
        "Diese Website verwendet technisch notwendige Cookies bzw. vergleichbare Speichertechnologien, die für den Betrieb der Seite erforderlich sind. Rechtsgrundlage ist § 25 Abs. 2 Nr. 2 TDDDG in Verbindung mit Art. 6 Abs. 1 lit. f DSGVO.",
        "Nicht notwendige Cookies, insbesondere zu Analyse- oder Marketingzwecken, werden ausschließlich nach Ihrer ausdrücklichen Einwilligung gesetzt (§ 25 Abs. 1 TDDDG, Art. 6 Abs. 1 lit. a DSGVO). Ihre Einwilligung können Sie jederzeit mit Wirkung für die Zukunft widerrufen.",
      ]},
      { h: "7. Reichweitenmessung", p: [
        "[Sofern eingesetzt, hier das konkrete Tool benennen, z. B. Google Analytics 4, Matomo oder Plausible, samt Anbieter, Speicherdauer und Rechtsgrundlage. Wird kein Analysetool eingesetzt, kann dieser Abschnitt entfallen.]",
      ]},
      { h: "8. CRM-System", p: [
        "Zur Verwaltung von Anfragen und Kundenbeziehungen setzen wir das CRM-System HubSpot ein (HubSpot Inc., 2 Canal Park, Cambridge, MA 02141, USA, sowie HubSpot Ireland Limited). Dort werden Kontaktdaten, Kommunikationsverlauf und Angaben zum Projekt gespeichert.",
        "Rechtsgrundlage ist Art. 6 Abs. 1 lit. b und lit. f DSGVO. Mit dem Anbieter besteht ein Vertrag über Auftragsverarbeitung. Für Übermittlungen in die USA gelten die Standardvertragsklauseln der EU-Kommission bzw. eine Zertifizierung nach dem EU-US Data Privacy Framework.",
      ]},
      { h: "9. Speicherdauer", p: [
        "Sofern in dieser Erklärung keine speziellere Speicherdauer genannt ist, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Handelsrechtliche und steuerrechtliche Aufbewahrungsfristen — insbesondere aus § 257 HGB und § 147 AO — bleiben unberührt. Nach Ablauf dieser Fristen werden die Daten gelöscht.",
      ]},
      { h: "10. Ihre Rechte", ul: [
        "Auskunft über die zu Ihrer Person gespeicherten Daten (Art. 15 DSGVO)",
        "Berichtigung unrichtiger Daten (Art. 16 DSGVO)",
        "Löschung Ihrer Daten (Art. 17 DSGVO)",
        "Einschränkung der Verarbeitung (Art. 18 DSGVO)",
        "Datenübertragbarkeit (Art. 20 DSGVO)",
        "Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)",
        "Widerruf einer erteilten Einwilligung mit Wirkung für die Zukunft (Art. 7 Abs. 3 DSGVO)",
      ], p: [
        "Zur Ausübung Ihrer Rechte genügt eine formlose Nachricht an " + MAIL + ".",
      ]},
      { h: "11. Beschwerderecht", p: [
        "Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren. Zuständig ist die Aufsichtsbehörde des Bundeslandes unseres Sitzes: Die Landesbeauftragte für den Datenschutz Niedersachsen, Prinzenstraße 5, 30159 Hannover.",
      ]},
      { h: "12. SSL- bzw. TLS-Verschlüsselung", p: [
        "Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von http:// auf https:// wechselt.",
      ]},
      { h: "13. Änderungen dieser Erklärung", p: [
        "Wir passen diese Datenschutzerklärung an, sobald Änderungen unserer Verarbeitungen oder der Rechtslage dies erfordern. Es gilt jeweils die auf dieser Seite veröffentlichte Fassung. Stand: September 2026.",
      ]},
    ],
  },
  {
    path: "/agb", nav: "AGB", crumb: "AGB", legal: true,
    kwMain: "Allgemeine Geschäftsbedingungen",
    title: "AGB — Allgemeine Geschäftsbedingungen | Novastream.ai",
    desc: "Allgemeine Geschäftsbedingungen von Novastream.ai für Webdesign-Projekte und die Einrichtung von KI-Agenten.",
    kw: "AGB Novastream, Allgemeine Geschäftsbedingungen Agentur",
    h1: "Allgemeine Geschäftsbedingungen",
    intro: "Fassung vom September 2026. Diese Bedingungen gelten für alle Leistungen von Novastream.ai gegenüber Unternehmern im Sinne des § 14 BGB.",
    sections: [
      { h: "§ 1 Geltungsbereich", p: [
        "Diese Allgemeinen Geschäftsbedingungen gelten für sämtliche Verträge zwischen Novastream.ai (nachfolgend Auftragnehmer) und dem Auftraggeber über die Konzeption und Erstellung von Websites, die Einrichtung und den Betrieb KI-gestützter Assistenzsysteme sowie damit verbundene Beratungs- und Betreuungsleistungen.",
        "Abweichende oder ergänzende Bedingungen des Auftraggebers werden nicht Vertragsbestandteil, es sei denn, der Auftragnehmer stimmt ihrer Geltung ausdrücklich in Textform zu.",
        "Die Leistungen richten sich ausschließlich an Unternehmer im Sinne des § 14 BGB, juristische Personen des öffentlichen Rechts und öffentlich-rechtliche Sondervermögen.",
      ]},
      { h: "§ 2 Vertragsschluss", p: [
        "Angebote des Auftragnehmers sind freibleibend, sofern sie nicht ausdrücklich als verbindlich bezeichnet sind. Ein Vertrag kommt durch die Annahme des Angebots in Textform durch den Auftraggeber zustande.",
        "Angaben in Preislisten, auf der Website oder in Präsentationen stellen kein bindendes Angebot dar.",
      ]},
      { h: "§ 3 Leistungsumfang", p: [
        "Der Umfang der geschuldeten Leistungen ergibt sich abschließend aus dem jeweiligen Angebot einschließlich der dort genannten Leistungsbeschreibung.",
        "Leistungen, die nicht ausdrücklich vereinbart sind — insbesondere Textererstellung, Bildmaterial, Lizenzen, Hosting, Domainkosten und Schnittstellen zu Drittsystemen — sind nicht Vertragsbestandteil und werden gesondert vergütet.",
        "Der Auftragnehmer ist berechtigt, zur Erbringung der Leistungen Subunternehmer einzusetzen.",
        "Ein bestimmter wirtschaftlicher Erfolg, insbesondere eine bestimmte Platzierung in Suchmaschinen, eine bestimmte Anzahl von Anfragen oder ein bestimmter Umsatz, wird nicht geschuldet. Suchmaschinenbetreiber entscheiden autonom über Rankings.",
      ]},
      { h: "§ 4 Mitwirkungspflichten des Auftraggebers", p: [
        "Der Auftraggeber stellt dem Auftragnehmer alle für die Leistungserbringung erforderlichen Informationen, Texte, Bilder, Logos, Zugänge und Freigaben rechtzeitig und vollständig zur Verfügung.",
        "Der Auftraggeber sichert zu, dass er an den überlassenen Inhalten sämtliche erforderlichen Rechte hält. Er stellt den Auftragnehmer von Ansprüchen Dritter frei, die aus einer Verletzung dieser Zusicherung entstehen.",
        "Verzögerungen, die auf unterlassene oder verspätete Mitwirkung zurückgehen, verlängern vereinbarte Termine entsprechend. Mehraufwand wird nach dem jeweils gültigen Stundensatz berechnet.",
      ]},
      { h: "§ 5 Vergütung und Zahlung", p: [
        "Sämtliche Preise verstehen sich netto zuzüglich der jeweils geltenden gesetzlichen Umsatzsteuer.",
        "Bei Projektaufträgen werden 50 % der vereinbarten Vergütung bei Auftragserteilung, die restlichen 50 % nach Abnahme fällig. Rechnungen sind ohne Abzug innerhalb von 14 Tagen ab Rechnungsdatum zahlbar.",
        "Der Auftragnehmer erhebt keine wiederkehrenden Entgelte. Sämtliche Leistungen werden einmalig abgerechnet. Kosten Dritter für Hosting, Domains, Modellnutzung oder Telefonie laufen über eigene Verträge des Auftraggebers und sind nicht Bestandteil der Vergütung.",
        "Bei Zahlungsverzug ist der Auftragnehmer berechtigt, Verzugszinsen in gesetzlicher Höhe zu verlangen und noch offene Leistungen nach vorheriger Ankündigung mit angemessener Frist zurückzustellen.",
      ]},
      { h: "§ 6 Termine", p: [
        "Termine sind nur verbindlich, wenn sie ausdrücklich in Textform als verbindlich vereinbart wurden.",
        "Verzögerungen aufgrund höherer Gewalt, Ausfällen von Drittanbietern oder fehlender Mitwirkung des Auftraggebers verlängern die Fristen um die Dauer der Behinderung.",
      ]},
      { h: "§ 7 Abnahme", p: [
        "Nach Fertigstellung stellt der Auftragnehmer das Werk zur Abnahme bereit. Der Auftraggeber prüft es innerhalb von zehn Werktagen und erklärt die Abnahme in Textform oder benennt konkrete Mängel.",
        "Erfolgt innerhalb dieser Frist weder eine Abnahme noch eine Mängelrüge, gilt das Werk als abgenommen. Gleiches gilt bei produktiver Nutzung des Werks durch den Auftraggeber.",
        "Unwesentliche Mängel berechtigen nicht zur Verweigerung der Abnahme.",
      ]},
      { h: "§ 8 Nutzungsrechte", p: [
        "Der Auftraggeber erhält mit vollständiger Zahlung der vereinbarten Vergütung das räumlich und zeitlich unbeschränkte, nicht ausschließliche Recht, die erstellten Arbeitsergebnisse für den vertraglich vereinbarten Zweck zu nutzen.",
        "Bis zur vollständigen Zahlung bleiben alle Rechte beim Auftragnehmer.",
        "An eingesetzten Frameworks, Bibliotheken, Vorlagen und Werkzeugen des Auftragnehmers werden keine Rechte übertragen. Rechte an Inhalten Dritter richten sich nach den jeweiligen Lizenzbedingungen.",
      ]},
      { h: "§ 9 Projektbezogene Beauftragung", p: [
        "Sämtliche Leistungen werden projektbezogen und einmalig beauftragt. Ein Dauerschuldverhältnis entsteht nicht, eine Kündigung ist daher nicht erforderlich.",
        "Nach Abnahme und vollständiger Zahlung übergibt der Auftragnehmer alle Zugänge. Der Auftraggeber kann den Betrieb ab diesem Zeitpunkt eigenständig fortführen oder durch Dritte fortführen lassen.",
        "Spätere Änderungen, Erweiterungen oder Betreuungsleistungen werden gesondert beauftragt und einzeln abgerechnet.",
      ]},
      { h: "§ 10 KI-gestützte Systeme", p: [
        "Der Auftraggeber nimmt zur Kenntnis, dass KI-gestützte Systeme auf statistischen Sprachmodellen beruhen und fehlerhafte oder unvollständige Ausgaben erzeugen können. Eine fehlerfreie Ausgabe wird nicht geschuldet.",
        "Der Auftragnehmer richtet die Systeme nach den mit dem Auftraggeber abgestimmten Regeln ein, insbesondere hinsichtlich Preisauskünften, Terminzusagen und Eskalationswegen. Die inhaltliche Verantwortung für die freigegebene Gesprächslogik trägt der Auftraggeber.",
        "Der Auftraggeber ist verpflichtet, den Einsatz des Systems gegenüber seinen Kunden transparent zu machen und die datenschutzrechtlichen Informationspflichten zu erfüllen.",
        "Der Auftragnehmer hat keinen Einfluss auf Verfügbarkeit, Preisgestaltung und Funktionsumfang der eingesetzten Modellanbieter. Die Nutzungsverträge mit diesen Anbietern schließt der Auftraggeber selbst ab und trägt die dort anfallenden Kosten unmittelbar.",
      ]},
      { h: "§ 11 Gewährleistung", p: [
        "Es gelten die gesetzlichen Gewährleistungsvorschriften. Der Auftraggeber hat Mängel unverzüglich in Textform unter nachvollziehbarer Beschreibung anzuzeigen.",
        "Der Auftragnehmer leistet zunächst Nacherfüllung. Schlägt diese zweimal fehl, stehen dem Auftraggeber die gesetzlichen Rechte zu.",
        "Keine Mängel sind Abweichungen, die auf Änderungen durch den Auftraggeber oder Dritte, unsachgemäße Nutzung, Ausfälle von Drittsystemen oder Änderungen an Browsern, Suchmaschinen oder Schnittstellen zurückgehen.",
      ]},
      { h: "§ 12 Haftung", p: [
        "Der Auftragnehmer haftet unbeschränkt bei Vorsatz und grober Fahrlässigkeit, bei der Verletzung von Leben, Körper oder Gesundheit sowie nach dem Produkthaftungsgesetz.",
        "Bei einfacher Fahrlässigkeit haftet der Auftragnehmer nur bei Verletzung einer wesentlichen Vertragspflicht, deren Erfüllung die ordnungsgemäße Durchführung des Vertrags überhaupt erst ermöglicht und auf deren Einhaltung der Auftraggeber regelmäßig vertrauen darf. In diesem Fall ist die Haftung auf den vertragstypischen, vorhersehbaren Schaden begrenzt.",
        "Eine weitergehende Haftung ist ausgeschlossen. Die Haftung für Datenverlust ist auf den Aufwand beschränkt, der bei ordnungsgemäßer Datensicherung durch den Auftraggeber zur Wiederherstellung angefallen wäre.",
      ]},
      { h: "§ 13 Vertraulichkeit und Datenschutz", p: [
        "Beide Parteien behandeln vertrauliche Informationen der jeweils anderen Partei vertraulich und verwenden sie ausschließlich zur Vertragserfüllung. Diese Pflicht besteht über das Vertragsende hinaus fort.",
        "Soweit der Auftragnehmer personenbezogene Daten im Auftrag des Auftraggebers verarbeitet, schließen die Parteien einen Vertrag über Auftragsverarbeitung nach Art. 28 DSGVO.",
      ]},
      { h: "§ 14 Referenznennung", p: [
        "Der Auftragnehmer ist berechtigt, den Auftraggeber unter Nennung des Namens und Verwendung des Logos als Referenz zu benennen, sofern der Auftraggeber dem nicht in Textform widerspricht.",
      ]},
      { h: "§ 15 Schlussbestimmungen", p: [
        "Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts.",
        "Ausschließlicher Gerichtsstand für alle Streitigkeiten ist, soweit der Auftraggeber Kaufmann, juristische Person des öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen ist, der Sitz des Auftragnehmers.",
        "Änderungen und Ergänzungen dieses Vertrags bedürfen der Textform. Das gilt auch für die Aufhebung dieses Formerfordernisses.",
        "Sollte eine Bestimmung unwirksam sein oder werden, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.",
      ]},
    ],
  },
];


export const ROUTES = [...CORE, ...LANDINGS, ...LEGAL];
export const byPath = (p) => ROUTES.find((r) => r.path === p);
export { CORE, LANDINGS, LEGAL, SITE, OG, MAIL };

export function trailFor(path) {
  const r = byPath(path);
  if (!r || path === "/") return [CORE[0]];
  const chain = [CORE[0]];
  if (r.parent) chain.push(byPath(r.parent));
  chain.push(r);
  return chain.filter(Boolean);
}
