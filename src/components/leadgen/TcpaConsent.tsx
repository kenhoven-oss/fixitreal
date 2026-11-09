import Link from "next/link";
import { TCPA_CONSENT_VERSION, TCPA_PARTNERS_URL } from "@/lib/networx";

type TcpaConsentProps = {
  /** Wording for the action that constitutes consent, e.g. "clicking the submit button in the form above". */
  action?: string;
  className?: string;
};

/**
 * TCPA consent language shown with every Networx quote-request form.
 *
 * Written to the Networx Marketing Services Agreement (§6 Consent and
 * Disclosure) and Exhibit A: Compliant Traffic Guidelines (§3), signed
 * 2026-11-09. Those require that the consent disclosure, clearly and
 * conspicuously:
 *   - identifies every party that may receive or contact the consumer —
 *     Networx and each Networx Buyer — by name, inline or via a prominently
 *     hyperlinked list ("Networx Systems, Inc. and its Partners", linked to
 *     https://www.networx.com/third-party-contractors);
 *   - says the consumer may be contacted by phone, text message AND email,
 *     including through automated technology;
 *   - authorizes automated or prerecorded telemarketing calls/texts using an
 *     automatic telephone dialing system or artificial/prerecorded voice to
 *     the specific number provided;
 *   - states that consent is not a condition of purchase; and
 *   - discloses the purposes the data is used for and the consumer's rights
 *     to opt out, revoke consent and request deletion (the privacy policy
 *     section it links to carries the detail).
 * No pre-checked boxes, no hidden or buried disclosure: this block sits in
 * normal body text directly beneath the form.
 *
 * Records: the agreement requires us to retain the exact consent language
 * presented. Git history is that record; TCPA_CONSENT_VERSION is bumped on
 * every wording change and rendered on the page so a screenshot or capture
 * can be matched to a version. Do not reword without re-confirming with
 * Networx and bumping the version.
 *
 * Server component (no hooks) so the text is always in the server-rendered
 * HTML — visible to the reader, to search engines, and in any capture.
 */
export function TcpaConsent({ action = "submitting the quote request form on this page", className = "" }: TcpaConsentProps) {
  return (
    <div
      id="tcpa-consent"
      data-consent-version={TCPA_CONSENT_VERSION}
      className={`rounded-lg border border-ink-200 bg-ink-50 px-5 py-4 text-sm leading-relaxed text-ink-800 ${className}`}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-ink-600">Consent to be contacted</p>
      <p className="mt-2">
        By {action}, you provide your electronic signature and express written consent to be contacted by{" "}
        <strong>
          Networx Systems, Inc. and its{" "}
          <a
            href={TCPA_PARTNERS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-navy-700 hover:text-navy-900 underline decoration-amber-500"
          >
            Partners
          </a>
        </strong>{" "}
        — the home-service contractors and companies that buy requests from Networx — about your project and related
        home-service offers, at the phone number and email address you entered, by <strong>phone calls, text (SMS)
        messages, and email</strong>. You agree that these calls and texts may be made using automated technology,
        including an <strong>automatic telephone dialing system and artificial or prerecorded voice messages</strong>,
        even if your number is on a federal, state, or company Do Not Call list.
      </p>
      <p className="mt-2">
        Your consent is <strong>not a condition of purchasing</strong> any property, goods, or services; you can
        always contact contractors directly instead. Message and data rates may apply, and message frequency varies.
        Reply <strong>STOP</strong> to any text message to opt out, or <strong>HELP</strong> for help. You may revoke
        your consent or ask for your information to be deleted at any time; how to do that is in our{" "}
        <Link href="/privacy#quote-requests" className="text-navy-700 hover:text-navy-900 underline decoration-amber-500">
          privacy policy
        </Link>
        .
      </p>
      <p className="mt-2">
        Your request and the details you enter are shared with Networx Systems, Inc. and its Partners, who may use,
        share, and resell them to respond to your request. You also agree to FixItReal&apos;s{" "}
        <Link href="/terms" className="text-navy-700 hover:text-navy-900 underline decoration-amber-500">
          Terms of Use
        </Link>{" "}
        and{" "}
        <Link href="/privacy#quote-requests" className="text-navy-700 hover:text-navy-900 underline decoration-amber-500">
          Privacy Policy
        </Link>
        . Networx&apos;s own terms and privacy policy, linked inside the form, also apply to the details you submit.
      </p>
      <p className="mt-3 text-[11px] text-ink-500">Consent language version {TCPA_CONSENT_VERSION}.</p>
    </div>
  );
}
