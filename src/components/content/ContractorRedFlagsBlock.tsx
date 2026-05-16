import type { ReactNode } from "react";

type ContractorRedFlagsBlockProps = {
  /** Specific behaviors or quote signals that indicate a problem. */
  redFlags: ReactNode[];
  /** What to ask the contractor instead — the productive alternative move. */
  whatToAskInstead?: ReactNode;
  /** Conditions under which the homeowner should walk away entirely. */
  whenToWalkAway?: ReactNode;
};

/**
 * Reusable contractor red-flags block. Drop into cost guides, DIY-or-hire
 * articles, or anywhere a quote-comparison conversation is happening.
 *
 * Usage in MDX:
 *   <ContractorRedFlagsBlock
 *     redFlags={[
 *       "Asking for more than 33% deposit before any work starts.",
 *       "Refusal to itemize labor, parts, permits, and disposal separately.",
 *       "Pressure to sign 'today only' for a discounted rate.",
 *     ]}
 *     whatToAskInstead="Request a written line-itemized estimate with payment milestones tied to completion stages."
 *     whenToWalkAway="The contractor refuses to put scope and price in writing, or won't provide a license number you can verify on the state board."
 *   />
 */
export function ContractorRedFlagsBlock({
  redFlags,
  whatToAskInstead,
  whenToWalkAway,
}: ContractorRedFlagsBlockProps) {
  return (
    <aside
      role="note"
      aria-label="Contractor red flags"
      className="my-8 rounded-lg border border-red-200 bg-red-50/60 p-5 md:p-6"
    >
      <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-red-800">
        <span
          aria-hidden
          className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-red-600 text-white text-[10px] font-bold"
        >
          !
        </span>
        Contractor red flags
      </p>

      <ul className="mt-3 space-y-2 text-sm text-ink-800 leading-relaxed">
        {redFlags.map((rf, i) => (
          <li key={i} className="flex gap-2">
            <span aria-hidden className="text-red-700 font-semibold">
              ✕
            </span>
            <span>{rf}</span>
          </li>
        ))}
      </ul>

      {whatToAskInstead && (
        <div className="mt-4 rounded-md bg-white border border-ink-200 p-4 text-sm leading-relaxed">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-amber-700">
            Ask this instead
          </p>
          <p className="mt-1 text-ink-800">{whatToAskInstead}</p>
        </div>
      )}

      {whenToWalkAway && (
        <div className="mt-3 rounded-md bg-white border border-red-200 p-4 text-sm leading-relaxed">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-red-800">
            When to walk away
          </p>
          <p className="mt-1 text-ink-800">{whenToWalkAway}</p>
        </div>
      )}
    </aside>
  );
}
