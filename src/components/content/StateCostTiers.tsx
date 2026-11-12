import {
  STATES,
  TIER_MULTIPLIERS,
  adjustRange,
  getGuideBySlug,
  type StateCostTier,
} from "@/content/state-cost-data";

const TIER_ORDER: StateCostTier[] = ["low", "mid", "high", "premium"];

const usd = (n: number) => `$${n.toLocaleString("en-US")}`;

/**
 * "Cost by state" block for a national cost guide.
 *
 * The site has no state-level survey data: a state's figure is the national
 * range run through that state's cost tier (the same math the state pages
 * use, via adjustRange). So this shows four honest rows — one per tier, with
 * the states in it — instead of dressing four numbers up as 29 separate
 * state prices. Rendered by StateCostLinks directly above the existing grid
 * of state links, so the links themselves are not repeated here.
 *
 * Renders nothing for a guide that has no state pages.
 */
export function StateCostTiers({ guide: guideSlug }: { guide: string }) {
  const guide = getGuideBySlug(guideSlug);
  if (!guide) return null;

  const rows = TIER_ORDER.map((tier) => ({
    tier,
    label: TIER_MULTIPLIERS[tier].label,
    range: adjustRange(guide.base, tier),
    states: STATES.filter((s) => s.tier === tier),
  })).filter((r) => r.states.length > 0);

  return (
    <div className="mt-5">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-ink-300 text-left">
              <th className="py-2 pr-4 font-semibold text-navy-900">Cost tier</th>
              <th className="py-2 pr-4 font-semibold text-navy-900 whitespace-nowrap">
                {guide.model === "service-call" ? "Trip + first hour" : "Installed price"}
              </th>
              <th className="py-2 font-semibold text-navy-900">States</th>
            </tr>
          </thead>
          <tbody className="text-ink-700">
            {rows.map((r) => (
              <tr key={r.tier} className="border-b border-ink-200 align-top">
                <td className="py-2 pr-4">{r.label}</td>
                <td className="py-2 pr-4 whitespace-nowrap font-semibold text-navy-900">
                  {`${usd(r.range.low)}–${usd(r.range.high)}`}
                </td>
                <td className="py-2 leading-relaxed">
                  {r.states.map((s) => s.name).join(", ")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-xs text-ink-600 leading-relaxed">
        These are estimates, not state survey data: the national range adjusted by each state&apos;s cost tier. The
        largest metros usually price above the rest of their state. For a state not listed, use the national range.
      </p>
    </div>
  );
}
