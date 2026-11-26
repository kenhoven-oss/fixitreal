/**
 * Regional hreflang clusters.
 *
 * WHY THIS EXISTS
 * ---------------
 * `buildMetadata`'s `region` flag declares a page's own locale and names it
 * `x-default`. That is correct for a page with no regional sibling, but it is
 * wrong — and actively harmful — when two pages ARE regional variants of the
 * same question.
 *
 * Before this file, /costs/plumber-hourly and /costs/plumber-hourly-rate-canada
 * each declared only itself:
 *
 *   US page: en-us → itself, x-default → itself
 *   CA page: en-ca → itself, x-default → itself
 *
 * Neither referenced the other, so Google never saw them as a cluster: it saw
 * two unrelated pages answering "what does a plumber charge per hour" and two
 * competing x-default claims, and picked one. It picked the Canadian page.
 *
 * Measured on 28 days of Search Console to 2026-11-26: the Canadian page served
 * essentially every generic (non-geo) US plumber-rate query — "average plumber
 * hourly rate" (93 impressions, position 33.7), "how much does a plumber cost"
 * (173, position 63.3), "plumber cost per hour" (140, position 32) and roughly
 * 200 more — at an average position in the 30s-60s and with zero clicks on
 * nearly all of them, because a CAD-priced page is a poor answer to a US-intent
 * query. The US page appeared for ONE query in the same period (1 impression),
 * despite ranking at position 8.5 when it does surface and carrying 12 internal
 * links to the Canadian page's one.
 *
 * A valid cluster fixes this: every member lists every member, and exactly one
 * x-default exists across the set. Google can then serve the US page to US
 * searchers and the Canadian page to Canadian searchers instead of guessing.
 *
 * HOW TO ADD ONE
 * --------------
 * List every member, including the page itself, keyed by hreflang code. Set
 * `xDefault` to the code that should answer searchers outside every declared
 * region — for this site that is the US page, since generic unqualified
 * queries are predominantly US.
 *
 * Paths are site-relative and must match the page's CANONICAL path exactly.
 * A page whose canonical is not in any cluster keeps the existing
 * single-page behaviour.
 */
export type HreflangCluster = {
  /** hreflang code → site-relative canonical path. Includes every member. */
  alternates: Record<string, string>;
  /** Which hreflang code's URL serves as x-default for the whole cluster. */
  xDefault: string;
};

export const HREFLANG_CLUSTERS: readonly HreflangCluster[] = [
  {
    alternates: {
      "en-us": "/costs/plumber-hourly",
      "en-ca": "/costs/plumber-hourly-rate-canada",
    },
    xDefault: "en-us",
  },
];

/** The cluster this canonical path belongs to, or undefined when it is standalone. */
export function clusterForPath(path: string): HreflangCluster | undefined {
  const normalised = path.replace(/\/+$/, "") || "/";
  return HREFLANG_CLUSTERS.find((c) =>
    Object.values(c.alternates).some((p) => (p.replace(/\/+$/, "") || "/") === normalised),
  );
}
