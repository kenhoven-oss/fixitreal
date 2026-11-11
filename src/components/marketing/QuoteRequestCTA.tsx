import { networxConfig } from "@/lib/networx";
import { QuoteCtaLink } from "@/components/marketing/QuoteCtaLink";

type QuoteRequestCTAProps = {
  /** Short description of the job, used in the headline. e.g. "a water heater replacement". */
  job?: string;
  /** Where this CTA sits, for analytics: "article-<pillar>", "metro", "hub-<name>". */
  placement?: string;
  className?: string;
};

/**
 * In-article call to action that sends a reader who has already decided to
 * hire a pro to the /get-quotes page.
 *
 * Renders nothing until the Networx form is configured, so it can sit in
 * article templates ahead of go-live without leaving an empty box. Place it
 * after the "hire a pro" verdict in cost and DIY-or-hire articles — never
 * beside safety instructions, never on tools, calculators or policy pages
 * (same placement rules as advertising; see docs/networx-setup.md).
 *
 * DESIGN
 * ------
 * Tinted panel, job-specific headline, one line of body copy and a solid
 * button: a text link on a gray panel reads as a footnote and gets clicked
 * like one. The referral-fee disclosure sits directly under the button, in
 * small print but above the fold of the box — it must stay adjacent to the
 * link it qualifies (FTC) and must never be moved behind a disclosure link.
 *
 * Copy here is governed by the Networx MSA Exhibit A: no "pre-screened",
 * no "licensed and insured", no "free installation", no urgency or scare
 * language. Keep claims to what is verifiably true of the referral itself.
 */
export function QuoteRequestCTA({ job, placement = "article", className = "" }: QuoteRequestCTAProps) {
  if (!networxConfig.formEnabled) return null;

  return (
    <aside
      className={`my-8 rounded-lg border border-amber-200 bg-amber-50/70 px-5 py-5 sm:px-6 ${className}`}
      aria-label="Request contractor quotes"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-amber-700">Hiring this out?</p>
      <p className="mt-2 font-serif text-xl text-navy-900 leading-tight">
        Get quotes{job ? ` for ${job}` : " from local contractors"}
      </p>
      <p className="mt-2 text-sm text-ink-700 leading-relaxed">
        Three written quotes is the minimum worth collecting. Tell our referral partner Networx your zip code and
        local contractors call or text to bid the job — no charge, no obligation.
      </p>
      <QuoteCtaLink
        placement={placement}
        className="mt-4 inline-flex items-center rounded-md bg-navy-900 px-5 py-2.5 text-sm font-semibold text-white no-underline hover:bg-navy-800 transition-colors"
      >
        Request quotes →
      </QuoteCtaLink>
      <p className="mt-3 text-xs text-ink-600 leading-relaxed">
        We earn a referral fee when you submit a request. It never changes which contractors you are matched with or
        what they charge, and FixItReal has not vetted them — compare their bids like any others.
      </p>
    </aside>
  );
}
