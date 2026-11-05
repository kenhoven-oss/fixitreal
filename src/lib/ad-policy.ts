import type { Pillar } from "@/lib/articles";

/**
 * Where display advertising is allowed on FixItReal, and how much.
 *
 * This is deliberately a small, readable table rather than per-page
 * switches so the whole advertising footprint of the site can be audited
 * in one place. The numbers are maximums: the placement algorithm in
 * src/lib/ad-placement.ts may use fewer when an article is short or when
 * no position passes its safety rules.
 *
 * Page types that never carry ads are not listed here at all. They simply
 * never render an <AdSlot>, so there is nothing to switch off:
 *
 *   - Homepage
 *   - Interactive calculators and tools (/tools/*-estimator, -calculator,
 *     -tracker, contractor-quote-checker, diy-or-hire tool pages)
 *   - Product buying guides (/tools/best-*) — affiliate pages; ads next to
 *     affiliate buttons confuse readers, so these stay ad-free for now
 *   - State / metro local cost pages (programmatic; ad-free until they
 *     earn organic traffic on their own)
 *   - About, Contact, Privacy, Terms, Disclaimer, Affiliate disclosure,
 *     Corrections, Editorial standards, Methodology, author pages
 *   - Pillar index pages, topics, glossary, search, reports, downloads
 */
export type ArticleAdPolicy = {
  /** Hard cap on in-article placements. 0 disables ads for the pillar. */
  maxPlacements: 0 | 1 | 2;
};

export const articleAdPolicy: Record<Pillar, ArticleAdPolicy> = {
  // Repair articles: at most two, after the intro and between later sections.
  "diy-or-hire": { maxPlacements: 2 },
  advice: { maxPlacements: 2 },
  "home-inspection-repairs": { maxPlacements: 2 },
  "senior-home-safety": { maxPlacements: 2 },
  "what-is-this": { maxPlacements: 2 },
  // Repair-cost guides: one or two, never against calculator output (the
  // placement rules keep slots away from <CostEstimateBox>,
  // <FairPriceChecker> and similar blocks).
  costs: { maxPlacements: 2 },
  // Emergency repairs are "first ten minutes" safety instructions — gas,
  // water, electrical, sewage. Google's placement policies and this site's
  // own standards both say not to advertise inside urgent safety content,
  // so the whole pillar stays ad-free until someone deliberately changes
  // this line.
  "emergency-repairs": { maxPlacements: 0 },
};

export function adPolicyForPillar(pillar: Pillar): ArticleAdPolicy {
  return articleAdPolicy[pillar] ?? { maxPlacements: 0 };
}
