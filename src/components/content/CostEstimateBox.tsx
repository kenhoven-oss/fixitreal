import type { ReactNode } from "react";

type CostEstimateBoxProps = {
  low: number;
  high: number;
  unit?: string;
  label?: string;
  asOf?: string;
  children?: ReactNode;
};

const usdFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

/**
 * Cost estimate range box. Always renders with explicit "typical estimate"
 * language — never claims an exact national price.
 *
 * Why it matters: cost-intent queries are the highest commercial-value
 * traffic for FixItReal. A clearly-marked, dated cost range above the fold
 * is what Google's featured-snippet logic looks for on cost queries.
 *
 * Usage from MDX:
 *   <CostEstimateBox low={140} high={600} label="Toilet replacement" asOf="May 2026">
 *     DIY $140–$180, hired $340–$600. Math shown below.
 *   </CostEstimateBox>
 */
export function CostEstimateBox({
  low,
  high,
  unit,
  label = "Typical estimate",
  asOf,
  children,
}: CostEstimateBoxProps) {
  const range = `${usdFormatter.format(low)}–${usdFormatter.format(high)}${unit ? ` ${unit}` : ""}`;
  return (
    <aside
      role="note"
      aria-label={`${label}: ${range}`}
      className="my-6 rounded-md border border-amber-300 bg-amber-50 px-5 py-4 leading-relaxed"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-amber-700">
        {label}
      </p>
      <p className="mt-1 font-serif text-2xl text-navy-900">{range}</p>
      {asOf && (
        <p className="mt-0.5 text-xs text-ink-600">
          Common range as of {asOf}. May vary by location, scope, and demand.
        </p>
      )}
      {children && (
        <div className="mt-3 text-sm text-ink-800 [&_p]:my-1.5 [&_p:first-child]:mt-0 [&_p:last-child]:mb-0">
          {children}
        </div>
      )}
    </aside>
  );
}
