import Link from "next/link";

type ChecklistCTAProps = {
  title: string;
  description: string;
  href?: string;
  ctaText?: string;
};

/**
 * Generic checklist / lead-magnet CTA placeholder.
 *
 * Designed to drop into article bodies or sidebars without requiring a
 * connected email service. Renders a clear value proposition + a link to
 * a checklist landing page (or, when href is omitted, a placeholder to be
 * wired to an email service later).
 *
 * Why useful for SEO: visible engagement opportunities mid-article reduce
 * pogo-stick bounce rates and signal dwell. Long-term: a real email list
 * lets us re-engage readers without depending on Search alone.
 *
 * Usage:
 *   <ChecklistCTA
 *     title="Home inspection repair negotiation checklist"
 *     description="The exact list of items to push back on, accept, or counter-credit."
 *     href="/downloads/home-inspection-checklist.pdf"
 *   />
 */
export function ChecklistCTA({
  title,
  description,
  href,
  ctaText = "Get the checklist →",
}: ChecklistCTAProps) {
  const body = (
    <>
      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-amber-700">
        Free homeowner checklist
      </p>
      <p className="mt-2 font-serif text-xl text-navy-900 leading-tight">{title}</p>
      <p className="mt-2 text-sm text-ink-700 leading-relaxed">{description}</p>
      <p className="mt-3 text-sm font-semibold text-navy-700 group-hover:text-navy-900">
        {ctaText}
      </p>
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="group my-8 block rounded-lg border border-ink-200 bg-ink-50 px-5 py-5 no-underline transition-colors hover:bg-white hover:shadow-sm"
      >
        {body}
      </Link>
    );
  }

  return (
    <div className="my-8 rounded-lg border border-ink-200 bg-ink-50 px-5 py-5">
      {body}
    </div>
  );
}
