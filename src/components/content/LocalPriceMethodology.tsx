import type { ReactNode } from "react";
import Link from "next/link";

type LocalPriceMethodologyProps = {
  /** "Ohio" or "Austin, TX" — the place this page is about. */
  place: string;
  /** The parent national guide's published figure, verbatim. */
  nationalBasis: string;
  /** Href of the parent national guide. */
  nationalHref: string;
  /** Link text for the parent national guide. */
  nationalLabel: string;
  /** Tier band name, e.g. "High-cost coastal". */
  tierLabel: string;
  /** Tier band as a percentage of the national figure. */
  tierPct: { low: number; high: number };
  /** The resulting local range, already formatted (e.g. "$300–$800"). */
  localRange: string;
  /** What the local range measures, e.g. "installed, parts and labor together". */
  localRangeMeaning: string;
  /** Human date, e.g. "September 2026". */
  reviewedOn: string;
};

/**
 * "How we calculated this local price" — the provenance block for every
 * programmatic state and metro cost page.
 *
 * WHY IT EXISTS
 * -------------
 * These pages publish a dollar range for a place we have not surveyed. That
 * is defensible only if the page says so, shows its arithmetic, and points
 * at the baseline it scaled. Without this block the numbers read as local
 * market data, which they are not — and a quality rater comparing the local
 * page against the national guide has no way to reconcile the two.
 *
 * Deliberately NOT a collapsed <details>: the disclosure is the point, so
 * it renders open. Nothing in here is generated prose — every field is
 * either a figure from the parent guide or a stated model parameter.
 */
export function LocalPriceMethodology({
  place,
  nationalBasis,
  nationalHref,
  nationalLabel,
  tierLabel,
  tierPct,
  localRange,
  localRangeMeaning,
  reviewedOn,
}: LocalPriceMethodologyProps) {
  const steps: Array<{ label: string; body: ReactNode }> = [
    {
      label: "1. National baseline",
      body: (
        <>
          {`${nationalBasis}, from our national guide: `}
          <Link
            href={nationalHref}
            className="no-underline text-navy-700 hover:text-navy-900"
          >
            {nationalLabel}
          </Link>
          .
        </>
      ),
    },
    {
      label: "2. Regional adjustment",
      body: `${place} sits in our "${tierLabel}" band — roughly ${tierPct.low}–${tierPct.high}% of the national figure. We scale the bottom of the national range by the bottom of that band and the top by the top, then round ($5 steps under $1,000, $50 steps above).`,
    },
    {
      label: "3. Result",
      body: `${localRange} ${localRangeMeaning} in ${place}.`,
    },
    {
      label: "4. Source category",
      body: "National ranges are cross-referenced from published contractor-quote aggregators and industry cost data; the regional bands follow published occupational wage and cost-of-living differences. We have not collected contractor quotes in this market, so treat the range as a modeled estimate for spotting outliers — not as a quote.",
    },
  ];

  return (
    <section className="mt-12 rounded-lg border border-ink-200 bg-ink-50 p-5">
      <h2 className="font-serif text-2xl text-navy-900">
        {`How we calculated this ${place} price`}
      </h2>
      <dl className="mt-4 space-y-3 text-sm text-ink-700 leading-relaxed">
        {steps.map((s) => (
          <div key={s.label}>
            <dt className="font-semibold text-navy-900">{s.label}</dt>
            <dd className="mt-0.5">{s.body}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-4 text-xs text-ink-600 leading-relaxed">
        {`Last reviewed ${reviewedOn}. `}
        <Link
          href="/about/methodology"
          className="no-underline text-navy-700 hover:text-navy-900"
        >
          Full cost-data methodology
        </Link>
        {" · "}
        <Link
          href="/corrections"
          className="no-underline text-navy-700 hover:text-navy-900"
        >
          Spotted a wrong number? Tell us
        </Link>
      </p>
    </section>
  );
}
