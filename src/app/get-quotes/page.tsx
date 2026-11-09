import Link from "next/link";
import { notFound } from "next/navigation";
import { Section } from "@/components/ui/Section";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { buildMetadata } from "@/lib/metadata";
import { jsonLdScript, breadcrumbSchema } from "@/lib/jsonld";
import { networxConfig, quotePageVisible } from "@/lib/networx";
import { NetworxQuoteForm } from "@/components/leadgen/NetworxQuoteForm";
import { TcpaConsent } from "@/components/leadgen/TcpaConsent";

/**
 * Contractor quote-request page (Networx embedded form).
 *
 * Exists only when the Networx form is configured (see src/lib/networx.ts) or
 * on a preview deployment, where it renders with a placeholder so the
 * consent language and disclosure can be reviewed before go-live. It is
 * deliberately kept out of the sitemap and marked noindex: it is a utility
 * page reached from cost and "when to hire a pro" articles, not a page we
 * want competing in search.
 */
export const metadata = buildMetadata({
  title: "Request contractor quotes",
  description:
    "Request quotes from local contractors for your repair through our referral partner Networx, at no charge and with no obligation — and read how the matching works before you submit.",
  path: "/get-quotes",
  noIndexFollow: true,
});

export default function GetQuotesPage() {
  if (!quotePageVisible()) notFound();
  const live = networxConfig.formEnabled;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Request quotes", href: "/get-quotes" },
          ])
        )}
      />
      <Section padding="md" size="lg">
        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Request quotes", href: "/get-quotes" },
          ]}
        />
      </Section>

      <Section padding="sm" size="sm">
        <h1 className="font-serif text-4xl text-navy-900">Request contractor quotes</h1>
        <p className="mt-4 text-lg text-ink-700 leading-relaxed">
          Already decided the job needs a pro? Enter the project and your zip code and our referral partner, Networx,
          will match you with local contractors who call or text to quote it. It costs you nothing and you are not
          obligated to hire anyone.
        </p>

        <div className="mt-6 rounded-lg border border-amber-200 bg-amber-50 px-5 py-4 text-sm leading-relaxed text-ink-800">
          <p>
            <strong>Before you submit, know how this works.</strong> The form below belongs to Networx, a contractor
            lead service. Contractors pay Networx for your request, and FixItReal earns a referral fee when you submit
            it. That fee never changes which contractors you are matched with or what they charge you. Contractors who are
            matched contact you directly by phone, text or email; how many respond, and how quickly, varies by area.
            Treat their quotes as bids to compare — FixItReal has not vetted them — and{" "}
            <Link href="/contractor-red-flags" className="text-navy-700 hover:text-navy-900 underline decoration-amber-500">
              check license, insurance and references yourself
            </Link>{" "}
            before signing anything.
          </p>
        </div>

        {!live && (
          <p className="mt-6 rounded-md border border-ink-200 bg-white px-4 py-2 text-xs text-ink-600">
            Preview — the quote form is not active yet. The consent language and disclosure on this page are what will
            accompany the live form.
          </p>
        )}

        <div className="mt-6">
          <NetworxQuoteForm placement="get-quotes" />
        </div>

        <TcpaConsent action="clicking the submit button in the form above" className="mt-4" />

        <h2 className="font-serif text-2xl text-navy-900 mt-12">What happens after you submit</h2>
        <ol className="mt-4 list-decimal pl-6 space-y-3 text-ink-800 leading-relaxed">
          <li>
            Networx matches your project to contractors in its network who serve your zip code and trade. Matching is
            Networx&apos;s process, not ours; we do not see or choose the contractors.
          </li>
          <li>
            Those contractors contact you directly — by phone, text, or email — to ask about the job and arrange an
            estimate. Networx owns the request once you submit it and may share or resell it within its network.
            Three quotes is the minimum worth collecting for anything over about $1,000.
          </li>
          <li>
            You compare the bids and decide. Nothing obligates you to proceed. To stop the contact, reply STOP to any
            text, tell the contractor you have chosen someone else, or contact Networx using the details in their
            confirmation. You can also email us and we will pass a do-not-contact or deletion request to Networx.
          </li>
        </ol>

        <h2 className="font-serif text-2xl text-navy-900 mt-12">Prefer to find a contractor yourself?</h2>
        <p className="mt-4 text-ink-800 leading-relaxed">
          You do not need a lead service to get good quotes. Your state licensing board&apos;s public lookup, local
          supply houses, and neighbors who had the same job done recently are all strong sources. Our guides cover{" "}
          <Link href="/contractor-red-flags" className="text-navy-700 hover:text-navy-900 underline decoration-amber-500">
            what to check before you sign with a contractor
          </Link>{" "}
          and{" "}
          <Link href="/tools/contractor-quote-checker" className="text-navy-700 hover:text-navy-900 underline decoration-amber-500">
            how to read a contractor quote
          </Link>{" "}
          so you can compare bids line by line, however you found them.
        </p>

        <p className="mt-10 text-sm text-ink-600">
          Full details on how we are paid are in our{" "}
          <Link href="/affiliate-disclosure" className="text-navy-700 hover:text-navy-900 underline decoration-amber-500">
            affiliate disclosure
          </Link>{" "}
          and{" "}
          <Link href="/privacy#quote-requests" className="text-navy-700 hover:text-navy-900 underline decoration-amber-500">
            privacy policy
          </Link>
          .
        </p>
      </Section>
    </>
  );
}
