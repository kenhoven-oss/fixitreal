import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Disclaimer — limits of FixItReal's editorial guidance",
  description:
    "FixItReal publishes general homeowner guidance, not professional advice. Cost ranges are estimates; always verify with local pros and code.",
  path: "/disclaimer",
});

export default function DisclaimerPage() {
  return (
    <>
      <Section padding="md" size="md">
        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Disclaimer", href: "/disclaimer" },
          ]}
        />
      </Section>

      <Section padding="sm" size="md">
        <h1 className="font-serif text-4xl md:text-5xl text-navy-900 leading-tight">
          Disclaimer
        </h1>
        <p className="mt-5 text-lg text-ink-700 leading-relaxed">
          FixItReal is an independent publisher of homeowner guidance. We try
          hard to be accurate, current, and honest — but we&apos;re writing
          general-audience editorial, not delivering professional services.
          This page spells out what we do and don&apos;t claim.
        </p>

        <div className="mt-8 space-y-6 text-ink-800 leading-relaxed">
          <section>
            <h2 className="font-serif text-2xl text-navy-900">
              General information, not professional advice
            </h2>
            <p className="mt-3">
              Articles on FixItReal are general homeowner guidance. They are
              not engineering opinions, legal advice, medical advice, tax
              advice, code interpretations binding in your jurisdiction, or
              substitutes for an inspection performed at your property by a
              licensed professional. Local codes, permit requirements, and
              construction practices vary. When in doubt, hire a licensed pro
              and ask your local building department.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-navy-900">
              Cost ranges are estimates
            </h2>
            <p className="mt-3">
              Every cost range we publish is an estimate based on aggregated
              public pricing data, contractor surveys, and our own research at
              the time of publication. Real quotes from real contractors in
              your specific market will vary — sometimes substantially — based
              on labor availability, materials cost, scope, access, permits,
              and seasonal demand. Use our ranges as a sanity check, not a
              quote.
            </p>
            <p className="mt-3">
              See{" "}
              <Link
                href="/about/methodology"
                className="underline decoration-amber-500 text-navy-700 hover:text-navy-900"
              >
                our methodology page
              </Link>{" "}
              for how cost ranges are built and refreshed.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-navy-900">
              Safety-sensitive work belongs with licensed pros
            </h2>
            <p className="mt-3">
              We mark safety-sensitive topics — electrical work in panels,
              gas-line work, structural changes, asbestos, lead paint, sewer
              and septic — clearly throughout the site. Our DIY-vs-pro
              recommendations reflect our best read of the typical
              homeowner&apos;s risk and skill, but the final call about
              whether a particular job is safe for you to attempt is yours.
              When in doubt, hire it out. We are not liable for injury,
              property damage, or code violations resulting from following
              guidance on this site.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-navy-900">
              Product recommendations and affiliate links
            </h2>
            <p className="mt-3">
              FixItReal participates in the Amazon Services LLC Associates
              Program. As an Amazon Associate, I earn from qualifying
              purchases — at no extra cost to you. We do not accept
              compensation for editorial placement, and product picks are made
              before any affiliate link is added. See our{" "}
              <Link
                href="/affiliate-disclosure"
                className="underline decoration-amber-500 text-navy-700 hover:text-navy-900"
              >
                full affiliate disclosure
              </Link>{" "}
              for details.
            </p>
            <p className="mt-3">
              We do not list star ratings, &ldquo;5-star review&rdquo; counts,
              or testimonials we cannot verify. We do not publish sponsored
              content disguised as editorial.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-navy-900">
              External links and third-party content
            </h2>
            <p className="mt-3">
              We link to outside sources (manufacturers, code bodies,
              government agencies, news outlets) for verification. We don&apos;t
              control those sites and don&apos;t guarantee the accuracy or
              availability of content there. A working link today may move or
              go dead tomorrow; we&apos;ll repair broken links when we find
              them.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-navy-900">
              Editorial corrections
            </h2>
            <p className="mt-3">
              If you spot an error — a wrong cost range, an outdated code
              reference, a broken link, a recommendation that doesn&apos;t
              hold up — please email us at{" "}
              <a
                href="mailto:hello@fixitreal.com"
                className="underline decoration-amber-500 text-navy-700 hover:text-navy-900"
              >
                hello@fixitreal.com
              </a>
              . We update content when we&apos;re wrong; the updated date on
              each article reflects the last review pass.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-navy-900">
              Terms of use and privacy
            </h2>
            <p className="mt-3">
              Use of FixItReal is governed by our{" "}
              <Link
                href="/terms"
                className="underline decoration-amber-500 text-navy-700 hover:text-navy-900"
              >
                Terms of Use
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="underline decoration-amber-500 text-navy-700 hover:text-navy-900"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </section>
        </div>
      </Section>
    </>
  );
}
