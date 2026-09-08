import Link from "next/link";

export const metadata = { title: "Seite nicht gefunden | Novastream.ai", robots: { index: false } };

export default function NotFound() {
  return (
    <section className="phead">
      <div className="shell">
        <p className="phead-e">Fehler 404</p>
        <h1>Diese Seite gibt es nicht.</h1>
        <p className="phead-l">
          Vielleicht wurde sie verschoben. Über das Menü kommen Sie zu allen Leistungen,
          oder Sie gehen direkt zurück zur Startseite.
        </p>
        <div className="hero-btns" style={{ marginBottom: 0 }}>
          <Link href="/" className="btn btn-brass">Zur Startseite</Link>
          <Link href="/kontakt" className="btn btn-ghost">Kontakt</Link>
        </div>
      </div>
    </section>
  );
}
