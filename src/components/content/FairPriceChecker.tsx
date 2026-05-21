/**
 * Numeric props accept number OR string. This is deliberate: MDX's
 * `next-mdx-remote/rsc` pipeline can lose JSX expression attributes
 * (`low={300}`) under some plugin configurations, leaving them
 * undefined or stringified. Accepting strings lets MDX authors write
 * `low="300"` reliably, and the component coerces to number internally.
 */
type FairPriceCheckerProps = {
  /** Low end of what most homeowners pay. */
  low: number | string;
  /** Fair / typical median quote. */
  fair: number | string;
  /** High end of legitimate pricing (premium contractor, expensive metro, complex install). */
  high: number | string;
  /** Threshold above which a quote should be questioned. */
  suspicious: number | string;
  /** Threshold above which a quote is almost certainly padded. */
  walkAway: number | string;
  /** Optional notes — units, scope assumptions, region caveats. */
  notes?: string;
  /** Optional label for the job (e.g. "Garbage disposal replacement"). */
  job?: string;
  /** Override the default currency formatter unit (e.g. "/hour"). */
  unit?: string;
  /** Date or month/year these ranges were last sanity-checked. */
  asOf?: string;
};

/** Coerce a maybe-stringified number to a real number. Returns null on
 *  unparseable input so the component can degrade gracefully instead of
 *  emitting "$NaN". */
function toNum(v: number | string | undefined | null): number | null {
  if (v === null || v === undefined) return null;
  if (typeof v === "number") return Number.isFinite(v) ? v : null;
  const trimmed = v.trim();
  if (!trimmed) return null;
  const n = Number(trimmed);
  return Number.isFinite(n) ? n : null;
}

const usd = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

/**
 * "Fair Price Checker" — a horizontal price-tier band.
 *
 * Why it matters: cost-intent queries are the highest commercial-value
 * traffic for FixItReal, and the most-shared visual format for cost
 * content is a tiered range. Surfacing low / fair / high / suspicious /
 * walk-away inline makes the article scannable AND quotable in featured
 * snippets.
 *
 * Usage in MDX:
 *   <FairPriceChecker
 *     job="Garbage disposal replacement"
 *     low={140} fair={250} high={450} suspicious={650} walkAway={900}
 *     asOf="May 2026"
 *     notes="DIY parts $80–$200; hired total includes labor."
 *   />
 */
export function FairPriceChecker({
  low,
  fair,
  high,
  suspicious,
  walkAway,
  notes,
  job,
  unit,
  asOf,
}: FairPriceCheckerProps) {
  const lowN = toNum(low);
  const fairN = toNum(fair);
  const highN = toNum(high);
  const suspiciousN = toNum(suspicious);
  const walkAwayN = toNum(walkAway);

  // Don't render if every tier failed to parse — silent degrade beats
  // a row of "$NaN" boxes leaking the bug to readers.
  if (
    lowN === null &&
    fairN === null &&
    highN === null &&
    suspiciousN === null &&
    walkAwayN === null
  ) {
    return null;
  }

  const tiers = [
    { label: "Low", value: lowN, tone: "bg-emerald-100 text-emerald-900 border-emerald-200" },
    { label: "Fair", value: fairN, tone: "bg-emerald-50 text-emerald-900 border-emerald-200" },
    { label: "High", value: highN, tone: "bg-amber-50 text-amber-900 border-amber-200" },
    { label: "Suspicious", value: suspiciousN, tone: "bg-amber-100 text-amber-900 border-amber-300" },
    { label: "Walk away", value: walkAwayN, tone: "bg-red-100 text-red-900 border-red-300" },
  ] as const;

  const formatValue = (n: number | null) => {
    if (n === null) return "—";
    return unit ? `${usd.format(n)}${unit}` : usd.format(n);
  };

  return (
    <aside
      role="note"
      aria-label={job ? `${job} fair price checker` : "Fair price checker"}
      className="my-8 rounded-lg border border-ink-200 bg-white p-5 md:p-6"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-amber-700">
        Fair price checker{job ? ` · ${job}` : ""}
      </p>
      <div className="mt-4 grid grid-cols-2 gap-2 md:grid-cols-5">
        {tiers.map((t) => (
          <div
            key={t.label}
            className={`rounded-md border px-3 py-3 text-center ${t.tone}`}
          >
            <p className="text-[10px] font-semibold uppercase tracking-wider">
              {t.label}
            </p>
            <p className="mt-1 font-serif text-lg leading-none">
              {formatValue(t.value)}
            </p>
          </div>
        ))}
      </div>
      {(notes || asOf) && (
        <p className="mt-3 text-xs text-ink-600 leading-relaxed">
          {notes}
          {notes && asOf && " · "}
          {asOf && (
            <span className="text-ink-500">
              Sanity-checked {asOf}; may vary by location, scope, and demand.
            </span>
          )}
        </p>
      )}
    </aside>
  );
}
