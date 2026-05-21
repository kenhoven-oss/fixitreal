import type { ReactNode } from "react";

type BuyingGuideSectionsProps = {
  /** Bulleted points describing the right buyer for this category. */
  whoShouldBuy: string[];
  /** Bulleted points describing buyers who should NOT buy this category. */
  whoShouldSkip: string[];
  /** Bulleted points describing the typical pre-purchase mistakes. */
  commonMistakes: string[];
  /** Optional 1–2 sentence safety advisory specific to this category. */
  safety?: ReactNode;
};

/**
 * Standard buying-guide trust block. Three short bulleted sections plus
 * an optional safety advisory. Used on every /tools/best-* buying guide
 * to keep the structure consistent and to satisfy E-E-A-T expectations.
 *
 * The component intentionally renders nothing for empty arrays so that
 * a page can include only the subsections that have honest content.
 */
export function BuyingGuideSections({
  whoShouldBuy,
  whoShouldSkip,
  commonMistakes,
  safety,
}: BuyingGuideSectionsProps) {
  return (
    <div className="mt-12 grid gap-6 md:grid-cols-3">
      {whoShouldBuy.length > 0 && (
        <section
          aria-labelledby="who-should-buy"
          className="rounded-lg border border-emerald-200 bg-emerald-50/40 p-5"
        >
          <h3
            id="who-should-buy"
            className="font-serif text-lg text-navy-900"
          >
            Who should buy this
          </h3>
          <ul className="mt-2 list-disc pl-5 space-y-1.5 text-sm text-ink-700 leading-relaxed">
            {whoShouldBuy.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </section>
      )}
      {whoShouldSkip.length > 0 && (
        <section
          aria-labelledby="who-should-skip"
          className="rounded-lg border border-ink-200 bg-ink-50 p-5"
        >
          <h3
            id="who-should-skip"
            className="font-serif text-lg text-navy-900"
          >
            Who should skip this
          </h3>
          <ul className="mt-2 list-disc pl-5 space-y-1.5 text-sm text-ink-700 leading-relaxed">
            {whoShouldSkip.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </section>
      )}
      {commonMistakes.length > 0 && (
        <section
          aria-labelledby="common-mistakes"
          className="rounded-lg border border-amber-200 bg-amber-50/40 p-5"
        >
          <h3
            id="common-mistakes"
            className="font-serif text-lg text-navy-900"
          >
            Common mistakes before buying
          </h3>
          <ul className="mt-2 list-disc pl-5 space-y-1.5 text-sm text-ink-700 leading-relaxed">
            {commonMistakes.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </section>
      )}
      {safety && (
        <aside
          role="note"
          aria-label="Safety reminder"
          className="md:col-span-3 rounded-lg border border-red-200 bg-red-50/50 p-5 text-sm text-ink-800 leading-relaxed"
        >
          <strong className="font-semibold text-red-800">Safety:</strong>{" "}
          {safety}
        </aside>
      )}
    </div>
  );
}
