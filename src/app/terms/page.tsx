import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { buildMetadata } from "@/lib/metadata";
import { site } from "@/content/site";

export const metadata = buildMetadata({
  title: "Terms of use",
  description:
    "The ground rules for using FixItReal — what the site is, what it isn't, and the limits on our content as general homeowner information.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <Section padding="md" size="lg">
        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Terms", href: "/terms" },
          ]}
        />
      </Section>

      <Section padding="sm" size="sm">
        <h1 className="font-serif text-4xl text-navy-900">Terms of use</h1>
        <p className="mt-2 text-sm text-ink-600">Last updated: April 2026</p>

        <div className="mt-8 space-y-5 text-ink-800 leading-relaxed">
          <p>
            These terms cover how you can use FixItReal. By visiting the site
            or signing up for anything on it, you&apos;re agreeing to what&apos;s
            below. It&apos;s short on purpose.
          </p>

          <h2 className="font-serif text-2xl text-navy-900 mt-8">What FixItReal is</h2>
          <p>
            FixItReal is a publisher of consumer-focused home-repair information.
            We write and edit articles about common home-repair problems, rough
            cost ranges, and when to consider hiring a professional. We also
            provide free tools and a newsletter.
          </p>

          <h2 className="font-serif text-2xl text-navy-900 mt-8">What FixItReal isn&apos;t</h2>
          <p>
            FixItReal is not a contractor, a licensed tradesperson, a home
            inspector, an attorney, an insurer, or a code-compliance authority.
            Nothing on this site is professional advice for your specific
            property or situation.
          </p>
          <p>
            Home-repair work involves real risks — electrical shock, gas leaks,
            water damage, falls, structural failure, carbon monoxide, and
            more. Our content is general information to help you think through
            a problem. It is not a substitute for a qualified licensed
            professional inspecting your home in person.
          </p>
          <p>
            Cost ranges published on the site are rough estimates that vary
            widely by region, material selection, and job specifics. Treat them
            as ballpark figures, not quotes.
          </p>

          <h2 className="font-serif text-2xl text-navy-900 mt-8">If you decide to DIY</h2>
          <p>
            You&apos;re responsible for your own safety and for following the
            building, electrical, plumbing, and mechanical codes that apply
            where you live. Permits are often required for work involving
            electrical circuits, gas lines, drain waste vents, and structural
            changes. We don&apos;t track every jurisdiction&apos;s rules — check
            with your local authority before starting.
          </p>
          <p>
            If you follow something you read here and damage your home or
            injure yourself, we can&apos;t accept responsibility. Use good
            judgment, and when a job is beyond what you&apos;re comfortable
            doing, hire a licensed professional.
          </p>

          <h2 className="font-serif text-2xl text-navy-900 mt-8">Using the site</h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>
              You may read, share, and link to our articles freely. We
              appreciate attribution.
            </li>
            <li>
              You may not scrape the site, republish our content in full, or
              pass it off as your own (including via AI-generated derivatives).
              Short quotes with a clear link back are fine.
            </li>
            <li>
              You may not use the site in a way that damages it, interferes
              with other readers, or breaks any applicable law.
            </li>
          </ul>

          <h2 className="font-serif text-2xl text-navy-900 mt-8">Affiliate links and third parties</h2>
          <p>
            Some pages contain affiliate links. If you buy through them, we may
            earn a commission at no cost to you. Our editorial choices aren&apos;t
            determined by affiliate payouts — see the{" "}
            <Link
              href="/affiliate-disclosure"
              className="text-navy-700 hover:text-navy-900 underline decoration-amber-500"
            >
              affiliate disclosure
            </Link>{" "}
            for details. When you click a link to a third-party site, their
            terms and privacy policies apply once you&apos;re on their site.
          </p>

          <h2 className="font-serif text-2xl text-navy-900 mt-8">No warranty</h2>
          <p>
            We work hard to get the information right, but we provide it as-is,
            without warranties of any kind — express or implied — including
            fitness for a particular purpose, accuracy, or completeness. Prices,
            products, and codes change; check current, local sources before you
            rely on any specific number or recommendation.
          </p>

          <h2 className="font-serif text-2xl text-navy-900 mt-8">Limit of liability</h2>
          <p>
            To the fullest extent allowed by law, FixItReal and anyone
            contributing to it won&apos;t be liable for indirect, incidental,
            or consequential damages arising from your use of the site or
            anything you read on it. In plain terms: this is informational
            content, and how you use it is up to you.
          </p>

          <h2 className="font-serif text-2xl text-navy-900 mt-8">Changes to these terms</h2>
          <p>
            If we update these terms, we&apos;ll change the &ldquo;Last
            updated&rdquo; date above. If the change is material, we&apos;ll
            note it in the newsletter.
          </p>

          <h2 className="font-serif text-2xl text-navy-900 mt-8">Contact</h2>
          <p>
            Questions about these terms, or anything else, go to{" "}
            <a
              href={`mailto:${site.contactEmail}`}
              className="text-navy-700 hover:text-navy-900 underline decoration-amber-500"
            >
              {site.contactEmail}
            </a>
            .
          </p>
        </div>
      </Section>
    </>
  );
}
