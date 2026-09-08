import { ROUTES, SITE } from "./content";

/** Next.js liefert daraus automatisch /sitemap.xml aus. */
export default function sitemap() {
  const now = new Date();
  return ROUTES.map((r) => ({
    url: SITE + (r.path === "/" ? "" : r.path),
    lastModified: now,
    changeFrequency: r.path === "/" ? "weekly" : r.legal ? "yearly" : "monthly",
    priority: r.path === "/" ? 1 : r.legal ? 0.3 : r.parent ? 0.8 : 0.9,
  }));
}
