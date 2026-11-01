import { ExternalLink } from "@/components/ui/ExternalLink";
import { SMOKE_ALARM_SALE } from "@/content/smoke-alarm-sale.generated";

/**
 * "What your state requires of a seller" — a sourced table.
 *
 * Deliberately takes NO props. MDX compiled through next-mdx-remote/rsc drops
 * JSX *expression* attributes, so anything passed as {...} arrives undefined
 * and the block renders empty with no error. The data comes from the
 * generated registry instead. See src/content/cost-methodology.ts for the
 * same failure and the same fix.
 *
 * Renders null when the registry is empty so the page is unaffected until the
 * research lands.
 */
export function SmokeAlarmSaleByState() {
  const rows = SMOKE_ALARM_SALE;
  if (rows.length === 0) return null;

  const yes = rows.filter((r) => r.requiredAtSale === true);
  const unclear = rows.filter((r) => r.requiredAtSale === null);
  const checked = rows
    .map((r) => r.verifiedOn)
    .sort()
    .at(-1);

  const label = (v: boolean | null) =>
    v === true ? "Yes" : v === false ? "No sale-specific rule" : "Not established";

  const host = (u: string) => {
    try {
      return new URL(u).hostname.replace(/^www\./, "");
    } catch {
      return u;
    }
  };

  return (
    <section className="mt-12">
      <h2 className="font-serif text-2xl text-navy-900">
        What your state requires of a seller
      </h2>
      <p className="mt-3 text-ink-700 leading-relaxed">
        {`Of the ${rows.length} states checked, ${yes.length} tie working smoke alarms to the sale or transfer itself${
          unclear.length ? `, and ${unclear.length} could not be established from an official source` : ""
        }. The rest set general alarm duties that still apply to you as the owner — "no sale-specific rule" does not mean "no alarms needed".`}
      </p>

      <div className="mt-4 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-ink-300 text-left align-bottom">
              <th className="py-2 pr-4 font-semibold text-navy-900">State</th>
              <th className="py-2 pr-4 font-semibold text-navy-900">
                Tied to the sale?
              </th>
              <th className="py-2 pr-4 font-semibold text-navy-900">
                What the rule says
              </th>
              <th className="py-2 font-semibold text-navy-900">Source</th>
            </tr>
          </thead>
          <tbody className="text-ink-700 align-top">
            {rows.map((r) => (
              <tr key={r.stateSlug} className="border-b border-ink-200">
                <td className="py-2 pr-4 whitespace-nowrap font-medium text-navy-900">
                  {r.state}
                </td>
                <td className="py-2 pr-4 whitespace-nowrap">
                  {r.requiredAtSale === true ? (
                    <span className="font-semibold text-navy-900">Yes</span>
                  ) : (
                    label(r.requiredAtSale)
                  )}
                </td>
                <td className="py-2 pr-4 leading-relaxed">
                  {r.summary}
                  {r.certification && (
                    <span className="block text-xs text-ink-600">
                      {`Sign-off: ${r.certification}`}
                    </span>
                  )}
                  {r.coAlarms && (
                    <span className="block text-xs text-ink-600">
                      {`CO alarms: ${r.coAlarms}`}
                    </span>
                  )}
                </td>
                <td className="py-2 text-xs leading-relaxed">
                  {r.citation && (
                    <span className="block text-ink-700">{r.citation}</span>
                  )}
                  <ExternalLink href={r.sourceUrl}>{host(r.sourceUrl)}</ExternalLink>
                  {r.lastAmended && (
                    <span className="block text-ink-500">{`last amended ${r.lastAmended}`}</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-4 text-xs text-ink-600 leading-relaxed">
        {`Each row was read off the state's own statute or fire-marshal rule on ${checked}, and the citation is there so you can check it. This is a summary, not legal advice — these rules change, cities and counties often add their own on top, and your closing attorney or local fire department is the authority for your sale.`}
      </p>
    </section>
  );
}
