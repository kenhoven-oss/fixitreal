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
 * content. Used only on big-ticket "hire a pro" pages (frontmatter
 * `inlineQuoteForm: true`): the replacement cost pages, and since 2026-11-20
 * the three "how long does it last" advice pages (water heater, AC, furnace)
 * that lead into those replacements. Started 2026-11-11 as a placement test
 * against the standard link-to-/get-quotes CTA box.
 *
 * Compliance notes (Networx MSA + Exhibit A, signed 2026-11-09):
 * - TcpaConsent renders the full consent disclosure immediately below the
 *   form, same as /get-quotes.
 * - The intro keeps the referral relationship conspicuous and links the
 *   full "how this works" explanation and affiliate disclosure.
 * - Copy avoids the Exhibit A prohibited claims (screening, licensing or
 *   insurance assurances, urgency or scare language); the phrase list is
 *   in scripts/check-networx-copy.mjs.
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
      className={`mt-12 scroll-mt-24 rounded-xl border border-ink-200 bg-paper-50 p-4 sm:p-8 ${className}`}
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
