import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { buildMetadata } from "@/lib/metadata";
import {
  STATES,
  STATE_COST_GUIDES,
  TIER_MULTIPLIERS,
  STATE_COST_UPDATED,
  adjustRange,
  type StateCostTier,
} from "@/content/state-cost-data";
import { site } from "@/content/site";

export const metadata = buildMetadata({
  title: "2026 State Repair Cost Index: where home repairs cost the most",
  description:
    "FixItReal's index of home repair labor costs across the 25 largest states — who pays the most for a plumber or water heater, and why the gap is 2x.",
  path: "/reports/2026-state-repair-cost-index",
});

/** Index = midpoint of the tier's multiplier band, national average = 100. */
function tierIndex(tier: StateCostTier): number {
  const m = TIER_MULTIPLIERS[tier];
  return Math.round(((m.low + m.high) / 2) * 100);
}

const plumber = STATE_COST_GUIDES.find((g) => g.slug === "plumber-service-call")!;
const waterHeater = STATE_COST_GUIDES.find(
  (g) => g.slug === "water-heater-replacement"
)!;

export default function StateRepairCostIndexPage() {
  const ranked = [...STATES].sort((a, b) => {
    const d = tierIndex(b.tier) - tierIndex(a.tier);
    return d !== 0 ? d : a.name.localeCompare(b.name);
  });

  // Shared rank within a tier (1, 1, 1, 4, 4, ... style ranking).
  // Built with a fold rather than by mutating a closure variable during
  // map(): the lint rule is right that reassigning across a render is a
  // footgun, and this is equivalent without the mutable state.
  const rows = ranked.reduce<
    Array<{ state: (typeof ranked)[number]; rank: number }>
  >((acc, s, i) => {
    const prev = acc[acc.length - 1];
    const rank = prev && prev.state.tier === s.tier ? prev.rank : i + 1;
    acc.push({ state: s, rank });
    return acc;
  }, []);

  const premiumStates = ranked.filter((s) => s.tier === "premium");
  const lowStates = ranked.filter((s) => s.tier === "low");
  const spreadLow = tierIndex("low");
  const spreadHigh = tierIndex("premium");

  return (
    <>
      <Section padding="md" size="md">
        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Repair Costs", href: "/costs" },
            {
              name: "2026 State Repair Cost Index",
              href: "/reports/2026-state-repair-cost-index",
            },
          ]}
        />
      </Section>

      <Section padding="sm" size="md">
        <p className="text-sm text-ink-600">
          FixItReal data report · Data reviewed{" "}
          {new Date(STATE_COST_UPDATED + "T00:00:00").toLocaleDateString("en-US", {
            month: "long",
            year: "numeric",
          })}
        </p>
        <h1 className="mt-2 font-serif text-4xl md:text-5xl text-navy-900 leading-tight">
          2026 State Repair Cost Index
        </h1>
        <p className="mt-5 text-lg text-ink-700 leading-relaxed">
          The same repair does not cost the same everywhere. Using our
          state-level labor tiers — built from regional trade-wage data for
          plumbers and electricians — the gap between the cheapest and most
          expensive states for common home repairs is roughly{" "}
          <strong>
            {spreadLow} to {spreadHigh}
          </strong>{" "}
          on an index where the national average is 100. In dollars: the same
          water heater swap that runs about $
          {adjustRange(
            { low: waterHeater.base.low, high: waterHeater.base.high },
            "low"
          ).low.toLocaleString()}{" "}
          in the lowest-cost states starts around $
          {adjustRange(
            { low: waterHeater.base.low, high: waterHeater.base.high },
            "premium"
          ).low.toLocaleString()}{" "}
          in the highest-cost coastal markets — before anyone has quoted you
          anything unusual.
        </p>

        <div className="mt-8 space-y-4 text-ink-800 leading-relaxed">
          <section>
            <h2 className="font-serif text-2xl text-navy-900">Key findings</h2>
            <ul className="mt-3 list-disc pl-5 space-y-2">
              <li>
                <strong>
                  {premiumStates.map((s) => s.name).join(", ")}
                </strong>{" "}
                are the most expensive states in the index (
                {spreadHigh} vs. the national 100) — homeowners there should
                expect quotes 30–60% above the national ranges published in
                most cost guides.
              </li>
              <li>
                <strong>{lowStates.map((s) => s.name).join(", ")}</strong> sit
                at the low end ({spreadLow}), where the same licensed work
                typically prices 15–30% below national averages.
              </li>
              <li>
                The spread matters most on labor-heavy small jobs. A{" "}
                <Link href="/costs/plumber-service-call">
                  plumber service call
                </Link>{" "}
                is almost pure labor, so state wage differences pass straight
                through to the invoice; on equipment-heavy jobs like a{" "}
                <Link href="/costs/water-heater-replacement">
                  water heater replacement
                </Link>
                , the tank costs the same everywhere and dampens the gap.
              </li>
              <li>
                A high-cost state is not a license for any price. Even in{" "}
                {premiumStates[0]?.name}, a standard like-for-like water
                heater swap quoted above roughly 1.6× the national high
                deserves a{" "}
                <Link href="/advice/three-contractor-quotes">
                  competing quote
                </Link>
                .
              </li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="font-serif text-2xl text-navy-900">
              The index: 25 largest states, ranked
            </h2>
            <p className="mt-3">
              Index 100 = national-average labor market. Example ranges show
              our state-adjusted estimate for a standard{" "}
              {plumber.jobDescription} and a {waterHeater.jobDescription}.
              State links go to the full state cost guides.
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-ink-300 text-left">
                    <th className="py-2 pr-4 font-semibold text-navy-900">#</th>
                    <th className="py-2 pr-4 font-semibold text-navy-900">
                      State
                    </th>
                    <th className="py-2 pr-4 font-semibold text-navy-900">
                      Index
                    </th>
                    <th className="py-2 pr-4 font-semibold text-navy-900">
                      Labor market
                    </th>
                    <th className="py-2 pr-4 font-semibold text-navy-900">
                      Plumber service call
                    </th>
                    <th className="py-2 font-semibold text-navy-900">
                      Water heater swap
                    </th>
                  </tr>
                </thead>
                <tbody className="text-ink-700">
                  {rows.map(({ state, rank: r }) => {
                    const p = adjustRange(
                      { low: plumber.base.low, high: plumber.base.high },
                      state.tier
                    );
                    const w = adjustRange(
                      {
                        low: waterHeater.base.low,
                        high: waterHeater.base.high,
                      },
                      state.tier
                    );
                    return (
                      <tr key={state.slug} className="border-b border-ink-200">
                        <td className="py-2 pr-4">{r}</td>
                        <td className="py-2 pr-4">
                          <Link
                            href={`/costs/plumber-service-call/${state.slug}`}
                            className="text-navy-700 hover:text-navy-900 underline decoration-amber-500"
                          >
                            {state.name}
                          </Link>
                        </td>
                        <td className="py-2 pr-4 font-medium text-navy-900">
                          {tierIndex(state.tier)}
                        </td>
                        <td className="py-2 pr-4">
                          {TIER_MULTIPLIERS[state.tier].label}
                        </td>
                        <td className="py-2 pr-4">
                          ${p.low}–${p.high}
                        </td>
                        <td className="py-2">
                          ${w.low.toLocaleString()}–${w.high.toLocaleString()}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mt-8">
            <h2 className="font-serif text-2xl text-navy-900">Methodology</h2>
            <p className="mt-3">
              Each state is assigned to one of four labor-cost tiers
              approximating Bureau of Labor Statistics regional wage data for
              the licensed trades (occupational codes 47-2111 electricians and
              47-2152 plumbers), expressed as a multiplier band against
              national base ranges: low (~0.7–0.85×), mid (~0.9–1.1×), high
              (~1.1–1.3×), and premium (~1.3–1.6×). The index value is the
              midpoint of each band, scaled so the national average equals
              100. Example dollar ranges apply those bands to the national
              base ranges from our cost guides. These are estimates, labeled
              as such everywhere they appear: high-cost metros within a state
              can exceed the band and rural areas can fall below it. Full
              detail on how we build every number:{" "}
              <Link href="/about/methodology">our methodology</Link>. The 25
              states covered account for roughly 85% of U.S. homes.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="font-serif text-2xl text-navy-900">
              Using this data
            </h2>
            <p className="mt-3">
              Journalists, researchers, and publishers are welcome to cite
              this index with attribution and a link:{" "}
              <em>
                &ldquo;Source: FixItReal 2026 State Repair Cost Index,{" "}
                {site.url}/reports/2026-state-repair-cost-index&rdquo;
              </em>
              . For questions about the data or state-level detail, contact{" "}
              <a
                href={`mailto:${site.contactEmail}?subject=State%20Repair%20Cost%20Index`}
                className="text-navy-700 hover:text-navy-900 underline decoration-amber-500"
              >
                {site.contactEmail}
              </a>
              .
            </p>
          </section>
        </div>
      </Section>
    </>
  );
}
