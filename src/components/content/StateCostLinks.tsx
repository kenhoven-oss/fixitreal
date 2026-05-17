import Link from "next/link";
import {
  STATES,
  getGuideBySlug,
} from "@/content/state-cost-data";

type StateCostLinksProps = {
  /** The cost article slug — must match a STATE_COST_GUIDES entry. */
  slug: string;
  /** Optional override for the heading. */
  heading?: string;
};

/**
 * Renders a 3-column grid of "<job> cost in <state>" links to the
 * programmatic state-cost pages. Use at the bottom of cost articles that
 * have state-level expansion (currently electrician-service-call and
 * plumber-service-call).
 *
 * Why: surfaces the 25 state-specific pages as internal links from the
 * national-coverage parent article, giving Google clear topical clustering
 * and giving users the regional adjusted price for their actual state.
 */
export function StateCostLinks({ slug, heading }: StateCostLinksProps) {
  const guide = getGuideBySlug(slug);
  if (!guide) return null;

  const sorted = [...STATES].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <section className="mt-12">
      <h2 className="font-serif text-2xl text-navy-900">
        {heading ?? `${capitalize(guide.shortName)} cost by state`}
      </h2>
      <p className="mt-2 text-sm text-ink-600">
        Tier-adjusted pricing for 25 priority U.S. states. Click yours for the
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
  );
}

function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}
