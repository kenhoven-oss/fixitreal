import type { ReactNode } from "react";

type SafetyWarningProps = {
  title?: string;
  children: ReactNode;
};

/**
 * Safety warning box for YMYL (your-money-or-your-life) content sections.
 *
 * Visible safety notices on YMYL repair content are an E-E-A-T signal to
 * Google — Helpful Content guidelines explicitly call out the presence of
 * trust signals on safety-sensitive topics. This component renders one.
 *
 * Usage from MDX:
 *   <SafetyWarning>
 *     Turn off the breaker AND verify the circuit is dead with a tester
 *     before opening any electrical box.
 *   </SafetyWarning>
 */
export function SafetyWarning({
  title = "Safety",
  children,
}: SafetyWarningProps) {
  return (
    <aside
      role="note"
      aria-label={title}
      className="my-6 rounded-md border border-red-300 bg-red-50 px-5 py-4 leading-relaxed"
    >
      <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-red-700">
        <span
          aria-hidden
          className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-red-600 text-white text-[10px] font-bold"
        >
          !
        </span>
        {title}
      </p>
      <div className="mt-2 text-ink-800 [&_p]:my-1.5 [&_p:first-child]:mt-0 [&_p:last-child]:mb-0">
        {children}
      </div>
    </aside>
  );
}
