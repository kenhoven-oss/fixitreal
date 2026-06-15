import Link from "next/link";
import {
  STATES,
  getGuideBySlug,
} from "@/content/state-cost-data";
import { MetroCostLinks } from "@/components/content/MetroCostLinks";

type StateCostLinksProps = {
  /** The cost article slug — must match a STATE_COST_GUIDES entry. */
  slug: string;
  /** Optional override for the heading. */
  heading?: string;
};

/**
 * Renders a 3-column grid of "<job> cost in <state>" links to the
 * programmatic state-cost pages, immediately followed by a parallel
 * grid of "<job> cost in <city>, <ST>" metro-cost links.
 *
 * Use at the bottom of cost articles that have state + metro expansion
 * (currently electrician-service-call, plumber-service-call, and the
 * three additional STATE_COST_GUIDES that ship metro variants).
 *
 * Why: surfaces both tiers of programmatic pages as internal links from
 * the national-coverage parent article. The metro tier targets higher-
 * purchase-intent long-tail queries ("plumber cost in austin tx") that
 * aggregator sites compete on less aggressively than state queries.
 */
export function StateCostLinks({ slug, heading }: StateCostLinksProps) {
  const guide = getGuideBySlug(slug);
  if (!guide) return null;

  const sorted = [...STATES].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <>
      <section className="mt-12">
        <h2 className="font-serif text-2xl text-navy-900">
          {heading ?? `${capitalize(guide.shortName)} cost by state`}
        </h2>
        <p className="mt-2 text-sm text-ink-600">
          Tier-adjusted pricing for priority U.S. states. Click yours for the
          regional range, licensing notes, and what counts as a fair quote in
          your market.
        </p>
        <ul className="mt-5 grid gap-x-6 gap-y-2 sm:grid-cols-2 lg:grid-cols-3 text-sm">
          {sorted.map((s) => (
            <li key={s.slug}>
              <Link
                href={`/costs/${slug}/${s.slug}`}
                className="no-underline text-navy-700 hover:text-navy-900"
              >
                {capitalize(guide.shortName)} cost in {s.name} →
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <MetroCostLinks slug={slug} />
    </>
  );
}

function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}
