import Link from "next/link";
import { CITIES, getLocalDetail } from "@/content/city-cost-data";
import { ExternalLink } from "@/components/ui/ExternalLink";

/**
 * Published permit fees for one cost guide, across every researched metro.
 *
 * Every fee string is the permitting authority's own wording from
 * research/local (via local-detail.generated.ts) — never estimated or
 * normalized — with the date printed on that fee schedule and a link to the
 * document it came from. Cities whose authority does not publish a figure for
 * this job are left out rather than shown with a guess.
 */
export function PermitFeeTable({ guide }: { guide: string }) {
  const rows = CITIES.flatMap((city) => {
    const detail = getLocalDetail(city.slug);
    const fact = detail?.byGuide[guide];
    if (!detail || !fact?.fee) return [];
    return [{ city, detail, fact }];
  }).sort((a, b) => a.city.name.localeCompare(b.city.name));

  if (rows.length === 0) return null;

  const checked = rows.map((r) => r.detail.verifiedOn).sort();
  const fmt = (iso: string) =>
    new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-US", { month: "long", year: "numeric", timeZone: "UTC" });
  const checkedLabel =
    fmt(checked[0]) === fmt(checked[checked.length - 1])
      ? fmt(checked[0])
      : `${fmt(checked[0])} to ${fmt(checked[checked.length - 1])}`;

  return (
    <div className="not-prose my-6">
      <p className="text-sm text-ink-700">
        {`${rows.length} cities, each fee copied from the city's own published schedule. Checked ${checkedLabel}.`}
      </p>
      <div className="mt-3 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-ink-300 text-left">
              <th className="py-2 pr-4 font-semibold text-navy-900">City</th>
              <th className="py-2 pr-4 font-semibold text-navy-900">Published permit fee</th>
              <th className="py-2 pr-4 font-semibold text-navy-900">Schedule dated</th>
              <th className="py-2 font-semibold text-navy-900">Source</th>
            </tr>
          </thead>
          <tbody className="text-ink-700">
            {rows.map(({ city, detail, fact }) => (
              <tr key={city.slug} className="border-b border-ink-200 align-top">
                <td className="py-2 pr-4 whitespace-nowrap">
                  <Link
                    href={`/costs/${guide}/metro/${city.slug}`}
                    className="underline decoration-amber-500 decoration-[1.5px] underline-offset-[3px] hover:decoration-navy-700"
                  >
                    {`${city.name}, ${city.stateAbbr}`}
                  </Link>
                </td>
                <td className="py-2 pr-4 leading-relaxed">{fact.fee}</td>
                <td className="py-2 pr-4">{fact.feeAsOf ?? "Not dated"}</td>
                <td className="py-2">
                  <ExternalLink href={fact.sourceUrl}>{detail.authority.name}</ExternalLink>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
