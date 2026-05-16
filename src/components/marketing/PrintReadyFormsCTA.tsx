import type { ReactNode } from "react";

type PrintReadyFormsCTAProps = {
  /** Headline question or hook. */
  title: ReactNode;
  /** 1-2 sentence value description. */
  description: ReactNode;
  /** Button label. */
  buttonText: string;
  /** Absolute PrintReadyForms URL. */
  href: string;
  /** Small eyebrow context label (e.g. "For homeowners hiring contractors"). */
  contextLabel?: string;
  /** Optional small footnote — defaults to ownership-transparency note. */
  note?: ReactNode;
  /** Optional UTM source override; defaults to "fixitreal". */
  utmSource?: string;
  /** Optional UTM campaign override; defaults to "repair_forms". */
  utmCampaign?: string;
};

/**
 * Cross-link CTA to PrintReadyForms — a related forms publishing site
 * owned by the same editor.
 *
 * Editorial framing rules:
 * - Title and description must read as a practical homeowner tool, never
 *   a marketing pitch.
 * - Visually distinct from article body but not aggressive.
 * - Includes a small transparency note that PrintReadyForms is a sister
 *   site, since the relationship is relevant to disclose.
 * - Outbound link is followed (editorial value) but tagged with UTM
 *   parameters for tracking. The canonical URL itself is unchanged.
 *
 * Usage in MDX:
 *   <PrintReadyFormsCTA
 *     title="Hiring it out? Get the quote in writing."
 *     description="Before approving a plumber or handyman quote, make sure the estimate lists labor, parts, exclusions, and any change-order terms."
 *     buttonText="Compare contractor estimates"
 *     href="https://www.printreadyforms.com/product/contractor-estimate-quote-pack"
 *   />
 */
export function PrintReadyFormsCTA({
  title,
  description,
  buttonText,
  href,
  contextLabel = "Related resource",
  note,
  utmSource = "fixitreal",
  utmCampaign = "repair_forms",
}: PrintReadyFormsCTAProps) {
  // Append UTMs without breaking existing query strings on the target URL.
  let finalHref = href;
  try {
    const u = new URL(href);
    if (!u.searchParams.has("utm_source")) u.searchParams.set("utm_source", utmSource);
    if (!u.searchParams.has("utm_medium")) u.searchParams.set("utm_medium", "referral");
    if (!u.searchParams.has("utm_campaign")) u.searchParams.set("utm_campaign", utmCampaign);
    finalHref = u.toString();
  } catch {
    // Leave as-is if URL parsing fails (shouldn't happen with absolute URLs).
  }

  return (
    <aside
      role="note"
      aria-label="Related forms resource"
      className="my-8 rounded-lg border border-ink-200 bg-white p-5 md:p-6 shadow-sm"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-amber-700">
        {contextLabel}
      </p>
      <p className="mt-2 font-serif text-xl text-navy-900 leading-tight">
        {title}
      </p>
      <p className="mt-2 text-sm text-ink-700 leading-relaxed">{description}</p>
      <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <a
          href={finalHref}
          target="_blank"
          rel="noopener"
          className="inline-flex items-center self-start rounded-md bg-navy-900 px-4 py-2 text-sm font-semibold text-white no-underline hover:bg-navy-800 transition-colors"
        >
          {buttonText} →
        </a>
        <p className="text-xs text-ink-500 leading-relaxed">
          {note ?? (
            <>
              Related resource from our sister site, PrintReadyForms. Sold
              separately.
            </>
          )}
        </p>
      </div>
    </aside>
  );
}
