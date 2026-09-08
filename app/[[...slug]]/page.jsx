import { notFound } from "next/navigation";
import { ROUTES, LANDINGS, LEGAL, byPath } from "../content";
import { metaFor, LandingPage, LegalPage } from "../blocks";
import { Home, CORE_PAGES } from "../pages";

export function generateStaticParams() {
  return ROUTES.map((r) =>
    r.path === "/" ? { slug: [] } : { slug: r.path.replace(/^\//, "").split("/") }
  );
}

const pathFrom = (p) => "/" + ((p && p.slug) || []).join("");

export async function generateMetadata({ params }) {
  const p = await params;
  const path = "/" + ((p.slug || []).join("/"));
  const route = byPath(path === "/" ? "/" : path);
  return route ? metaFor(route) : {};
}

export default async function Page({ params }) {
  const p = await params;
  const joined = (p.slug || []).join("/");
  const path = joined ? "/" + joined : "/";

  if (path === "/") return <Home />;

  const Core = CORE_PAGES[path];
  if (Core) return <Core />;

  const landing = LANDINGS.find((l) => l.path === path);
  if (landing) return <LandingPage data={landing} />;

  const legal = LEGAL.find((l) => l.path === path);
  if (legal) return <LegalPage data={legal} />;

  notFound();
}
