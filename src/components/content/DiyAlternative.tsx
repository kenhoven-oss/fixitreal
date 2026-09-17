import Link from "next/link";
import type { LocalCostModel } from "@/lib/local-cost-page";

type DiyAlternativeProps = {
  diy: NonNullable<LocalCostModel["diy"]>;
};

/**
 * "Doing it yourself in <place>" — rendered on the programmatic local cost
 * pages ONLY for jobs whose /diy-or-hire verdict is DIY-recommended (smoke
 * detector, garbage disposal). It states the parts cost and the local labor
 * saving, then points at the site's own verdict article and buying guide.
 *
 * Deliberately not a product listing: the local pages are cost pages, and
 * the monetization path stays on the buying guides where the product
 * recommendations are actually argued. Never render this for hire-a-pro
 * jobs (water heater) or service-call guides — it would contradict the
 * site's own advice.
 */
export function DiyAlternative({ diy }: DiyAlternativeProps) {
  return (
    <section
      aria-labelledby="diy-alternative-heading"
      className="mt-12 rounded-lg border border-amber-200 bg-amber-50/60 p-5 md:p-6"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
        DIY alternative
      </p>
      <h2
        id="diy-alternative-heading"
        className="mt-2 font-serif text-2xl text-navy-900"
      >
        {diy.heading}
      </h2>
      <p className="mt-3 text-ink-700 leading-relaxed">{diy.body}</p>
      <dl className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3 text-sm">
        <div className="rounded-md bg-white p-3 border border-ink-200">
          <dt className="text-ink-500">Parts, DIY</dt>
          <dd className="mt-1 font-semibold text-navy-900">{diy.partsText}</dd>
        </div>
        <div className="rounded-md bg-white p-3 border border-ink-200">
          <dt className="text-ink-500">Labor you save</dt>
          <dd className="mt-1 font-semibold text-navy-900">{diy.savingText}</dd>
        </div>
        <div className="rounded-md bg-white p-3 border border-ink-200">
          <dt className="text-ink-500">Time</dt>
          <dd className="mt-1 font-semibold text-navy-900">{diy.time}</dd>
        </div>
      </dl>
      <ul className="mt-4 space-y-2 text-ink-700">
        <li>
          →{" "}
          <Link
            href={diy.decisionPath}
            className="no-underline text-navy-700 hover:text-navy-900"
          >
            Should you do this one yourself? The full DIY-or-hire verdict
          </Link>
        </li>
        {diy.guidePath && (
          <li>
            →{" "}
            <Link
              href={diy.guidePath}
              className="no-underline text-navy-700 hover:text-navy-900"
            >
              Which unit to buy: our picks and what to look for
            </Link>
          </li>
        )}
      </ul>
    </section>
  );
}
