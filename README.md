# Novastream.ai

Fertige Next.js-Website. 15 Seiten, serverseitig gerendert, HubSpot-Anbindung eingebaut.

## Struktur

```
package.json
next.config.mjs
app/
  [[...slug]]/page.jsx    Routing fuer alle Seiten inkl. Startseite
  api/kontakt/route.js    Formular-Endpunkt
  content.js              ALLE Texte und Seitendaten - hier aenderst du Inhalte
  pages.jsx               Kernseiten
  blocks.jsx              Bausteine und strukturierte Daten
  client.jsx              Hintergrund, Menue, FAQ, Formular
  hubspot.js              Weitergabe an HubSpot
  layout.jsx              Rahmen
  globals.css             gesamtes Design
  sitemap.js / robots.js  erzeugen sitemap.xml und robots.txt automatisch
  not-found.jsx           404-Seite
```

Neue Seite anlegen = ein Eintrag in `app/content.js`. Routing, Sitemap, Menue und Footer ziehen automatisch nach.

---

## Noch offen

| Was | Wo |
|---|---|
| USt-ID **oder** Kleinunternehmer-Zeile | `app/content.js`, Impressum -> eine der beiden Varianten loeschen |
| Eingesetzte KI-Anbieter | `app/content.js`, Datenschutz Punkt 5 |
| `og-image.jpg`, 1200 x 630 px | Ordner `public/` anlegen, Datei dort ablegen |

Ohne die USt-Zeile ist das Impressum unvollstaendig und abmahnfaehig.

---

## Online bringen - vom Handy

Vier Upload-Schritte. Die zwei Dateien, die getippt werden, sind absichtlich winzig.

### 1. Repository anlegen
github.com im Browser, einloggen. **New** -> Name `novastream` -> **Private** -> Create repository.

### 2. Erste Datei tippen (legt die Ordner an)
**Add file -> Create new file**. Ins Namensfeld:

```
app/[[...slug]]/page.jsx
```

Die Schraegstriche erzeugen die Ordner automatisch. Inhalt einfuegen. **Commit changes**.

### 3. Zweite Datei tippen
**Add file -> Create new file**:

```
app/api/kontakt/route.js
```

Inhalt ist eine einzige Zeile. Commit.

### 4. Den Rest in `app/` hochladen
Auf den Ordner `app` tippen -> **Add file -> Upload files**. Diese zehn auswaehlen:

`content.js` `pages.jsx` `blocks.jsx` `client.jsx` `layout.jsx` `globals.css` `hubspot.js` `sitemap.js` `robots.js` `not-found.jsx`

Commit.

### 5. Root-Dateien hochladen
Zurueck auf die Repo-Startseite -> **Add file -> Upload files**: `package.json`, `next.config.mjs`, `README.md`. Commit.

### 6. Vercel
vercel.com -> **Add New -> Project** -> GitHub verbinden -> `novastream` importieren -> **Deploy**. Nichts umstellen, Next.js wird erkannt.

**Pruefen:** Seitenquelltext anzeigen, nach "Baustelle" suchen. Steht der Satz im Quelltext, greift das Server-Rendering.

---

## HubSpot verbinden

Zwei IDs, kein geheimer Schluessel.

**In HubSpot:** Marketing -> Formulare -> Formular erstellen -> Eingebettetes Formular -> Leeres Formular.

Diese Felder hineinziehen, exakt diese internen Namen:
`firstname` `lastname` `email` `company` `phone` `message`

Speichern, veroeffentlichen, auf **Einbetten** klicken. Im Code-Schnipsel stehen:
- `portalId: "12345678"` -> Portal-ID
- `formId: "abcd1234-..."` -> Form-GUID

Unter Optionen deine E-Mail bei "Sende Benachrichtigungen an" eintragen, sonst merkst du nichts von neuen Leads.

**In Vercel:** Projekt -> **Settings -> Environment Variables**:

```
HUBSPOT_PORTAL_ID = 12345678
HUBSPOT_FORM_GUID = abcd1234-...
```

Bei beiden alle drei Umgebungen ankreuzen. Danach **Deployments -> ... -> Redeploy**, sonst greifen die Variablen nicht.

**Testen:** Formular ausfuellen, der Kontakt muss binnen Sekunden in HubSpot unter Kontakte stehen.

---

## Domain verbinden

**In Vercel:** Settings -> Domains -> `novastream.ai`. Vercel zeigt die noetigen DNS-Werte.

**In Squarespace:** Domains -> deine Domain -> DNS-Einstellungen. Die von Vercel angezeigten Werte eintragen, ueblicherweise:

| Typ | Host | Wert |
|---|---|---|
| A | `@` | `76.76.21.21` |
| CNAME | `www` | `cname.vercel-dns.com` |

Nimm die Werte aus dem Vercel-Dashboard, nicht die aus dieser Tabelle.

Alte A- und CNAME-Eintraege fuer `@` und `www` vorher loeschen. **MX-Eintraege und alles mit "google" stehen lassen** - daran haengt dein Workspace-Postfach.

DNS braucht bis zu 24 Stunden, meist eine. HTTPS macht Vercel selbst.

---

## Bei Google anmelden

1. Search Console -> Property `novastream.ai` -> per DNS-Eintrag bestaetigen
2. Sitemaps -> `sitemap.xml` eintragen
3. Startseite -> URL-Pruefung -> Indexierung beantragen
4. Google-Unternehmensprofil mit Adresse Nordstemmen anlegen - groesster lokaler Hebel, kostet nichts

---

## Am Rechner

Deutlich schneller als der Handy-Weg:

```bash
cd site
npx vercel          # Testadresse
npx vercel --prod   # live
```

Lokal testen: `npm install` dann `npm run dev`

---

## Hinweis

Datenschutz und AGB sind nach aktuellem Stand gebaut, inklusive der zum 20. Juli 2025 abgeschafften OS-Plattform-Klausel, die viele Vorlagen faelschlich noch enthalten. Verantwortlich bist trotzdem du. Die Haftungsklauseln in den AGB sind der Teil, bei dem Fehler teuer werden.
