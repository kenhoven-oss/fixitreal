import Link from "next/link";
import { networxConfig } from "@/lib/networx";
import { NetworxQuoteForm } from "@/components/leadgen/NetworxQuoteForm";
import { TcpaConsent } from "@/components/leadgen/TcpaConsent";

type InlineQuoteSectionProps = {
  /** Analytics/debug label for where this embed lives, e.g. "costs-water-heater-replacement". */
  placement: string;
  className?: string;
};

/**
 * Networx quote form embedded directly on a high-intent article, below the
 * content. Used only on big-ticket "hire a pro" cost pages (frontmatter
 * `inlineQuoteForm: true`) as a placement test against the standard
 * link-to-/get-quotes CTA box; started 2026-11-11.
 *
 * Compliance notes (Networx MSA + Exhibit A, signed 2026-11-09):
 * - TcpaConsent renders the full consent disclosure immediately below the
 *   form, same as /get-quotes.
 * - The intro keeps the referral relationship conspicuous and links the
 *   full "how this works" explanation and affiliate disclosure.
 * - Copy avoids prohibited claims (no "pre-screened", "licensed and
 *   insured", urgency or scare language).
 * - NetworxQuoteForm's loader only supports one form per page (fixed
 *   #nx_form container id) — never render this twice on a page.
 *
 * Renders nothing when the Networx account is not configured.
 */
export function InlineQuoteSection({ placement, className = "" }: InlineQuoteSectionProps) {
  if (!networxConfig.formEnabled) return null;

  return (
    <section
      id="quote-form"
      aria-label="Request contractor quotes"
      className={`mt-12 rounded-xl border border-ink-200 bg-paper-50 p-6 sm:p-8 ${className}`}
    >
      <h2 className="font-serif text-2xl text-navy-900">Ready to get quotes for this job?</h2>
      <p className="mt-3 text-ink-700 leading-relaxed">
        Our referral partner, Networx, matches your project with local contractors who contact you to quote it — at no
        charge and with no obligation to hire anyone. Contractors pay Networx for the request and FixItReal earns a
        referral fee when you submit; that never changes who you are matched with or what they charge.{" "}
        <Link href="/get-quotes" className="text-navy-700 hover:text-navy-900 underline decoration-amber-500">
          How the matching works
        </Link>
        {" · "}
        <Link href="/affiliate-disclosure" className="text-navy-700 hover:text-navy-900 underline decoration-amber-500">
          affiliate disclosure
        </Link>
        . Compare the bids like any others and{" "}
        <Link href="/contractor-red-flags" className="text-navy-700 hover:text-navy-900 underline decoration-amber-500">
          check license, insurance and references yourself
        </Link>{" "}
        before signing.
      </p>

      <div className="mt-6">
        <NetworxQuoteForm placement={placement} />
      </div>

      <TcpaConsent action="clicking the submit button in the form above" className="mt-4" />
    </section>
  );
}
