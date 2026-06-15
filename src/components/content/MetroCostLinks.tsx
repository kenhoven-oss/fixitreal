import Link from "next/link";
import { CITIES } from "@/content/city-cost-data";
import { getGuideBySlug } from "@/content/state-cost-data";

type MetroCostLinksProps = {
  /** The cost article slug — must match a STATE_COST_GUIDES entry. */
  slug: string;
  /** Optional override for the heading. */
  heading?: string;
};

/**
 * Renders a 3-column grid of "<job> cost in <city>" links to the
 * programmatic /costs/<slug>/metro/<city> pages.
 *
 * Companion to <StateCostLinks /> — cities target higher-purchase-intent
 * long-tail queries like "plumber cost in austin tx" that aggregator
 * sites compete on less aggressively than state-level queries.
 */
export function MetroCostLinks({ slug, heading }: MetroCostLinksProps) {
  const guide = getGuideBySlug(slug);
  if (!guide) return null;

  const sorted = [...CITIES].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <section className="mt-12">
      <h2 className="font-serif text-2xl text-navy-900">
        {heading ?? `${capitalize(guide.shortName)} cost by metro`}
      </h2>
      <p className="mt-2 text-sm text-ink-600">
        Tier-adjusted pricing for {sorted.length} top U.S. metros. Click yours
        for the city-specific range, licensing notes, and what counts as a fair
        quote in your local market.
      </p>
      <ul className="mt-5 grid gap-x-6 gap-y-2 sm:grid-cols-2 lg:grid-cols-3 text-sm">
        {sorted.map((c) => (
          <li key={c.slug}>
            <Link
              href={`/costs/${slug}/metro/${c.slug}`}
              className="no-underline text-navy-700 hover:text-navy-900"
            >
              {capitalize(guide.shortName)} cost in {c.name}, {c.stateAbbr} →
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
