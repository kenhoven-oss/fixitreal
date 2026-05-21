import type { ReactNode } from "react";

type CostMethodologyProps = {
  /** Optional override; defaults to the article's `updatedAt`/`publishedAt`. */
  reviewedOn?: string;
  /** Bullet list: materials price drivers, e.g. "Toilet retail: $90–$450". */
  materialFactors?: ReactNode[];
  /** Bullet list: labor assumptions (e.g. "Plumber service call: $135–$285"). */
  laborFactors?: ReactNode[];
  /** Bullet list: code/permit considerations. Optional. */
  permitFactors?: ReactNode[];
  /** Bullet list: regional/demand factors. Optional. */
  regionalFactors?: ReactNode[];
  /** Bullet list: complexity factors that bump the high end. Optional. */
  complexityFactors?: ReactNode[];
};

/**
 * "How this cost estimate was built" methodology box for cost guides.
 *
 * Why it matters: cost-intent queries are YMYL-adjacent (people make
 * purchase / hire decisions based on these numbers). Showing the inputs
 * — material ranges, labor assumptions, permits, regional variance,
 * complexity — directly addresses Google's quality-rater expectation that
 * pricing pages explain WHERE the numbers come from, and gives readers a
 * defensible basis for negotiating quotes.
 *
 * Usage from MDX:
 *
 *   <CostMethodology
 *     reviewedOn="May 2026"
 *     materialFactors={[
 *       "Standard 1.28 GPF toilet (retail): $90–$280.",
 *       "Premium dual-flush / smart toilet: $300–$1,200.",
 *       "Wax ring + bolts + supply line: $15–$25.",
 *     ]}
 *     laborFactors={[
 *       "Plumber service-call minimum: $135–$285 most US metros.",
 *       "Toilet swap labor: 1–2 hours.",
 *     ]}
 *     permitFactors={[
 *       "Same-fixture swap: usually no permit.",
 *       "Relocating the rough-in or main shutoff: permit + inspection.",
 *     ]}
 *     regionalFactors={[
 *       "High-cost metros (CA/NY/MA): expect 30–50% above the typical range.",
 *       "Rural service-area surcharge: 1–2 hour drive time billed.",
 *     ]}
 *     complexityFactors={[
 *       "Rotted subfloor at the flange: $200–$800 carpentry on top.",
 *       "Closet flange replacement: $80–$220 parts + 1 hour labor.",
 *     ]}
 *   />
 *
 * Every field is optional. Omit a section and it won't render.
 */
export function CostMethodology({
  reviewedOn,
  materialFactors,
  laborFactors,
  permitFactors,
  regionalFactors,
  complexityFactors,
}: CostMethodologyProps) {
  const sections: Array<{ title: string; items: ReactNode[] }> = [];
  if (materialFactors?.length) sections.push({ title: "Materials", items: materialFactors });
  if (laborFactors?.length) sections.push({ title: "Labor", items: laborFactors });
  if (permitFactors?.length) sections.push({ title: "Permits & code", items: permitFactors });
  if (regionalFactors?.length) sections.push({ title: "Regional variation", items: regionalFactors });
  if (complexityFactors?.length) sections.push({ title: "Complexity adjustments", items: complexityFactors });

  if (sections.length === 0) return null;

  return (
    <details className="my-8 rounded-lg border border-ink-200 bg-ink-50 open:bg-white open:shadow-sm">
      <summary className="cursor-pointer list-none px-5 py-3 text-sm font-semibold text-navy-900 select-none flex items-center justify-between gap-3">
        <span>
          <span className="text-xs font-semibold uppercase tracking-[0.15em] text-amber-700 mr-2">
            Methodology
          </span>
          How this cost estimate was built
        </span>
        <span aria-hidden className="text-ink-500">▾</span>
      </summary>
      <div className="px-5 pb-5 pt-1">
        <div className="grid gap-5 sm:grid-cols-2">
          {sections.map(({ title, items }) => (
            <div key={title}>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-navy-700">
                {title}
              </p>
              <ul className="mt-1.5 list-disc pl-5 text-sm text-ink-700 leading-relaxed space-y-1">
                {items.map((it, i) => (
                  <li key={i}>{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-5 text-xs text-ink-600 leading-relaxed">
          {reviewedOn && (
            <>
              <strong className="text-navy-900">Last reviewed:</strong>{" "}
              {reviewedOn}.{" "}
            </>
          )}
          Quotes vary by location, scope, demand season, and individual
          contractor pricing. These ranges are estimates, not guarantees —
          always get at least two written quotes before approving non-emergency
          work.
        </p>
      </div>
    </details>
  );
}
