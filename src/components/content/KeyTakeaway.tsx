import type { ReactNode } from "react";

type KeyTakeawayProps = {
  title?: string;
  children: ReactNode;
};

/**
 * Highlighted "key takeaway" box for placing near the top of articles.
 *
 * Why it matters for SEO: a clearly-styled summary block at the top of an
 * article is a strong signal to Google's "passage-based" ranking — short,
 * answer-shaped content above the fold is what featured snippets are
 * drawn from. The visible component also reinforces the article-lede
 * speakable selector for voice search.
 *
 * Usage from MDX:
 *   <KeyTakeaway>Short direct answer in 1–3 sentences.</KeyTakeaway>
 */
export function KeyTakeaway({
  title = "Key takeaway",
  children,
}: KeyTakeawayProps) {
  return (
    <aside
      role="note"
      aria-label={title}
      className="my-6 rounded-md border border-navy-200 bg-navy-50 px-5 py-4 leading-relaxed"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-amber-700">
        {title}
      </p>
      <div className="mt-2 text-ink-800 [&_p]:my-1.5 [&_p:first-child]:mt-0 [&_p:last-child]:mb-0">
        {children}
      </div>
    </aside>
  );
}
