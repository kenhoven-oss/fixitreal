import type { Job } from "@/content/jobs";

type CostComparisonTableProps = {
  cost: Job["cost"];
};

function fmt(n: number) {
  return n.toLocaleString();
}

export function CostComparisonTable({ cost }: CostComparisonTableProps) {
  return (
    <div className="overflow-hidden rounded-lg border border-ink-200">
      <table className="w-full text-sm">
        <thead className="bg-ink-50">
          <tr>
            <th className="text-left px-4 py-2.5 font-semibold text-ink-700">&nbsp;</th>
            <th className="text-left px-4 py-2.5 font-semibold text-ink-700">DIY</th>
            <th className="text-left px-4 py-2.5 font-semibold text-ink-700">Hired</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-ink-200">
          <tr>
            <td className="px-4 py-3 text-ink-600">Typical cost</td>
            <td className="px-4 py-3 font-medium text-navy-900">
              ${fmt(cost.diy.low)}–${fmt(cost.diy.high)}
            </td>
            <td className="px-4 py-3 font-medium text-navy-900">
              ${fmt(cost.pro.low)}–${fmt(cost.pro.high)}
            </td>
          </tr>
          {(cost.diy.notes || cost.pro.notes) && (
            <tr>
              <td className="px-4 py-3 text-ink-600">What&apos;s included</td>
              <td className="px-4 py-3 text-ink-700">{cost.diy.notes ?? "—"}</td>
              <td className="px-4 py-3 text-ink-700">{cost.pro.notes ?? "—"}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
