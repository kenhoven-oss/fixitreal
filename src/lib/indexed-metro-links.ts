import { CITIES, getIndexableCityCostParams, type CityCostData } from "@/content/city-cost-data";
import { getGuideBySlug } from "@/content/state-cost-data";

/**
 * Internal-link helpers for the metro cost pages that are submitted to
 * search engines (one per researched city; see isCityGuideIndexable).
 *
 * Why this exists (2026-11-19 crawl): most indexed metro pages had exactly
 * one inbound link from an indexable page, buried in a 102-city list on the
 * national guide where the other ~80 links point to noindex siblings. These
 * helpers let the cost hub, the national guides and the metro pages
 * themselves point at the indexed page for a city, so each one is reachable
 * from several relevant places.
 *
 * Everything derives from getIndexableCityCostParams(), the same list the
 * sitemap uses, so a link built here can never point at a noindex page.
 */
export type IndexedMetroLink = {
  href: string;
  /** "Plumber service call cost in Austin, TX" */
  label: string;
  guideSlug: string;
  city: CityCostData;
};

function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

let cache: IndexedMetroLink[] | undefined;

/** Every indexed metro page, sorted by state then city. */
export function getIndexedMetroLinks(): IndexedMetroLink[] {
  if (cache) return cache;
  const bySlug = new Map(CITIES.map((c) => [c.slug, c]));
  const out: IndexedMetroLink[] = [];
  for (const { slug, city } of getIndexableCityCostParams()) {
    const guide = getGuideBySlug(slug);
    const c = bySlug.get(city);
    if (!guide || !c) continue;
    out.push({
      href: `/costs/${slug}/metro/${c.slug}`,
      label: capitalize(`${guide.shortName} cost in ${c.name}, ${c.stateAbbr}`),
      guideSlug: slug,
      city: c,
    });
  }
  out.sort(
    (a, b) => a.city.stateName.localeCompare(b.city.stateName) || a.city.name.localeCompare(b.city.name),
  );
  cache = out;
  return out;
}

/** The indexed page for one city, if the city has one. */
export function getIndexedMetroLinkForCity(citySlug: string): IndexedMetroLink | undefined {
  return getIndexedMetroLinks().find((l) => l.city.slug === citySlug);
}

/** City slugs whose indexed page is the given guide. */
export function getIndexedCitySlugsForGuide(guideSlug: string): Set<string> {
  return new Set(getIndexedMetroLinks().filter((l) => l.guideSlug === guideSlug).map((l) => l.city.slug));
}
