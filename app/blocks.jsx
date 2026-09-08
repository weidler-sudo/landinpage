import Link from "next/link";
import { SITE, OG, MAIL, CORE, LANDINGS, LEGAL, byPath, trailFor } from "./content";
import { Reveal, Faq } from "./client";

/* ---------------- Strukturierte Daten ---------------- */

export const localBusinessLd = () => ({
  "@type": "ProfessionalService",
  "@id": SITE + "/#organisation",
  name: "Novastream.ai",
  url: SITE,
  image: OG,
  email: MAIL,
  description:
    "Agentur für KI-Agenten und Webdesign im B2B-Mittelstand. Lead-Qualifizierung rund um die Uhr, CRM-Integration und Websites mit messbarer Anfragenquote.",
  priceRange: "€€",
  telephone: "+49 174 9815150",
  founder: { "@type": "Person", name: "Justin Weidler" },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Maschstraße 27",
    postalCode: "31171",
    addressLocality: "Nordstemmen",
    addressRegion: "Niedersachsen",
    addressCountry: "DE",
  },
  geo: { "@type": "GeoCoordinates", latitude: 52.1719, longitude: 9.7861 },
  areaServed: [
    { "@type": "City", name: "Hannover" }, { "@type": "City", name: "Hildesheim" },
    { "@type": "City", name: "Braunschweig" }, { "@type": "City", name: "Nordstemmen" },
    { "@type": "State", name: "Niedersachsen" }, { "@type": "Country", name: "Deutschland" },
  ],
  knowsAbout: ["KI-Agenten", "Lead-Qualifizierung", "Vertriebsautomatisierung", "Webdesign", "Suchmaschinenoptimierung", "CRM-Integration"],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00", closes: "18:00",
  },
  slogan: "Anfragen statt Klicks.",
});

export const websiteLd = () => ({
  "@type": "WebSite", "@id": SITE + "/#website", url: SITE,
  name: "Novastream.ai", inLanguage: "de-DE", publisher: { "@id": SITE + "/#organisation" },
});

export const faqLd = (items) => ({
  "@type": "FAQPage",
  mainEntity: items.map((i) => ({
    "@type": "Question", name: i.q,
    acceptedAnswer: { "@type": "Answer", text: i.a },
  })),
});

export const serviceLd = (r) => ({
  "@type": "Service", name: r.kwMain, serviceType: r.kwMain,
  provider: { "@id": SITE + "/#organisation" },
  areaServed: ["Hannover", "Braunschweig", "Deutschland"],
  description: r.desc, url: SITE + r.path,
});

export const breadcrumbLd = (path) => ({
  "@type": "BreadcrumbList",
  itemListElement: trailFor(path).map((r, i) => ({
    "@type": "ListItem", position: i + 1, name: r.crumb,
    item: SITE + (r.path === "/" ? "" : r.path),
  })),
});

/** Rendert das JSON-LD serverseitig direkt in den Quelltext. */
export function JsonLd({ path, extra = [] }) {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [localBusinessLd(), websiteLd(), breadcrumbLd(path), ...extra],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}

/** Baut das metadata-Objekt fuer Next.js aus einem Seiteneintrag. */
export function metaFor(route) {
  const url = SITE + (route.path === "/" ? "/" : route.path);
  return {
    title: route.title,
    description: route.desc,
    keywords: route.kw,
    alternates: { canonical: url, languages: { "de-DE": url, "x-default": url } },
    robots: route.legal
      ? { index: true, follow: true, noarchive: true }
      : { index: true, follow: true,
          googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
    openGraph: {
      title: route.title, description: route.desc, url,
      siteName: "Novastream.ai", locale: "de_DE",
      type: route.path === "/" ? "website" : "article",
      images: [{ url: OG, width: 1200, height: 630 }],
    },
    twitter: { card: "summary_large_image", title: route.title, description: route.desc, images: [OG] },
    other: { "geo.region": "DE-NI", "geo.placename": "Hannover" },
  };
}

/* ---------------- Bausteine ---------------- */

export function Crumbs({ path }) {
  const trail = trailFor(path);
  if (trail.length < 2) return null;
  return (
    <nav className="crumbs" aria-label="Brotkrümelnavigation">
      <div className="shell">
        <ol>
          {trail.map((r, i) => (
            <li key={r.path}>
              {i < trail.length - 1 ? (
                <><Link href={r.path}>{r.crumb}</Link><span aria-hidden="true">/</span></>
              ) : (
                <span aria-current="page">{r.crumb}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}

export function PageHead({ eyebrow, h1, lead }) {
  return (
    <header className="phead">
      <div className="shell">
        <p className="phead-e">{eyebrow}</p>
        <h1>{h1}</h1>
        {lead && <p className="phead-l">{lead}</p>}
      </div>
    </header>
  );
}

export function Related({ paths }) {
  const items = paths.map(byPath).filter(Boolean);
  if (!items.length) return null;
  return (
    <section className="related" aria-labelledby="rel-h">
      <div className="shell">
        <h2 id="rel-h">Passt dazu</h2>
        <div className="rel-grid">
          {items.map((r) => (
            <Link key={r.path} href={r.path} className="rel-card" title={r.kwMain}>
              <h3>{r.kwMain}</h3>
              <p>{r.desc.slice(0, 96)}…</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Cta({ line, sub }) {
  return (
    <section className="cta" aria-labelledby="cta-h">
      <div className="shell cta-in">
        <div><h2 id="cta-h">{line}</h2><p>{sub}</p></div>
        <Link href="/kontakt" className="btn btn-brass">Erstgespräch anfragen</Link>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="foot">
      <div className="shell foot-in">
        <div className="foot-brand">
          <span className="brand-name">Novastream<span>.ai</span></span>
          <p>KI-Agenten und Webdesign für den B2B-Mittelstand. Hannover, Braunschweig, bundesweit.</p>
          <a className="foot-mail" href={"mailto:" + MAIL}>{MAIL}</a>
        </div>
        <nav className="foot-nav" aria-label="Hauptseiten">
          <h2>Seiten</h2>
          {CORE.map((r) => <Link key={r.path} href={r.path}>{r.nav}</Link>)}
        </nav>
        <nav className="foot-nav" aria-label="Leistungen">
          <h2>Leistungen</h2>
          {LANDINGS.map((l) => <Link key={l.path} href={l.path} title={l.kwMain}>{l.kwMain}</Link>)}
        </nav>
        <nav className="foot-nav" aria-label="Rechtliches">
          <h2>Rechtliches</h2>
          {LEGAL.map((l) => <Link key={l.path} href={l.path}>{l.nav}</Link>)}
        </nav>
      </div>
      <div className="shell foot-b">
        <span>© {new Date().getFullYear()} Novastream.ai</span>
      </div>
    </footer>
  );
}

/* ---------------- Ganze Seitentypen ---------------- */

export function LandingPage({ data }) {
  return (
    <>
      <JsonLd path={data.path} extra={[serviceLd(data), faqLd(data.faq)]} />
      <Crumbs path={data.path} />
      <PageHead eyebrow={data.eyebrow} h1={data.h1} lead={data.lead} />
      <section className="cols">
        <div className="shell">
          <div className="lp-grid">
            <div className="lp-main">
              {data.blocks.map((b) => (
                <Reveal key={b.h} className="lp-block"><h2>{b.h}</h2><p>{b.p}</p></Reveal>
              ))}
            </div>
            <Reveal className="lp-side">
              <h2>{data.list.h}</h2>
              <ul className="ticks ticks-dark">{data.list.items.map((i) => <li key={i}>{i}</li>)}</ul>
              <Link href="/kontakt" className="btn btn-line">Angebot anfragen</Link>
            </Reveal>
          </div>
        </div>
      </section>
      <section className="faq-sec" aria-labelledby="lpfaq-h">
        <div className="shell narrow">
          <h2 id="lpfaq-h" className="sec-h">Häufige Fragen zu {data.kwMain}</h2>
          <Faq items={data.faq} />
        </div>
      </section>
      <Related paths={data.related} />
      <Cta line={`${data.kwMain}: 15 Minuten, ehrliche Einschätzung`}
        sub="Wir sehen uns Ihre Situation an und sagen Ihnen, was den grössten Hebel hat — auch wenn das nicht unser Angebot ist." />
    </>
  );
}

export function LegalPage({ data }) {
  return (
    <>
      <JsonLd path={data.path} />
      <Crumbs path={data.path} />
      <PageHead eyebrow="Rechtliches" h1={data.h1} lead={data.intro} />
      <section className="legal-sec">
        <div className="shell narrow">
          {data.sections.map((s) => (
            <article className="legal-block" key={s.h}>
              <h2>{s.h}</h2>
              {s.dl && (
                <dl className="legal-dl">
                  {s.dl.map(([k, v]) => (
                    <div key={k} style={{ display: "contents" }}><dt>{k}</dt><dd>{v}</dd></div>
                  ))}
                </dl>
              )}
              {s.ul && <ul className="legal-ul">{s.ul.map((i) => <li key={i}>{i}</li>)}</ul>}
              {s.p && s.p.map((t, i) => <p key={i}>{t}</p>)}
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
