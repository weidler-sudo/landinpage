import { SITE } from "./content";

/** Next.js liefert daraus automatisch /robots.txt aus. */
export default function robots() {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
    ],
    sitemap: SITE + "/sitemap.xml",
  };
}
