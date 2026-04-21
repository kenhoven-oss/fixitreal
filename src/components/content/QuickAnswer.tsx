import type { ReactNode } from "react";

type QuickAnswerProps = {
  /** Snippet-friendly short answer. Keep to ~40–70 words or a tight bulleted list. */
  children: ReactNode;
  /** Override the eyebrow label. Defaults to "Quick answer" (or "Triage first" for triage tone). */
  label?: string;
  /**
   * Visual/semantic variant.
   * - "default": neutral cost/advice quick answer (amber accent)
   * - "triage":  safety-first triage box used on risk-sensitive pages (red accent)
   */
  tone?: "default" | "triage";
};

/**
 * QuickAnswer
 *
 * A compact, snippet-friendly callout placed directly after the H1 or opening
 * paragraph. Designed to be the page's short, direct answer to the user's
 * implied question — the kind of block Google pulls into featured snippets.
 *
 * Reusable across cost pages (default tone) and risk-sensitive advice pages
 * (triage tone). Used inside MDX bodies via the ArticlePage component map,
 * or directly in server components.
 *
 * Styling sits outside Prose's `[&>p]` descendant selectors — we render an
 * <aside> so the wrapping Prose typography doesn't re-space our inner copy.
 */
export function QuickAnswer({
  children,
  label,
  tone = "default",
}: QuickAnswerProps) {
  const isTriage = tone === "triage";
  const eyebrow = label ?? (isTriage ? "Triage first" : "Quick answer");

  const accent = isTriage
    ? {
        border: "border-red-300",
        bar: "border-l-red-500",
        bg: "bg-red-50",
        eyebrow: "text-red-800",
      }
    : {
        border: "border-amber-200",
        bar: "border-l-amber-500",
        bg: "bg-amber-50/70",
        eyebrow: "text-amber-800",
      };

  return (
    <aside
      aria-label={eyebrow}
      className={`my-6 rounded-lg border ${accent.border} border-l-4 ${accent.bar} ${accent.bg} p-5
        [&>p]:my-2 [&>p:first-child]:mt-0 [&>p:last-child]:mb-0 [&>p]:text-navy-900 [&>p]:leading-relaxed
        [&>ul]:mt-2 [&>ul]:mb-0 [&>ul]:list-disc [&>ul]:pl-5 [&>ul>li]:my-1 [&>ul>li]:text-navy-900 [&>ul>li]:leading-relaxed
        [&_strong]:text-navy-900`}
    >
      <p
        className={`mb-2 text-xs font-semibold uppercase tracking-wider ${accent.eyebrow}`}
      >
        {eyebrow}
      </p>
      {children}
    </aside>
  );
}
