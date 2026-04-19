import { Section } from "@/components/ui/Section";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Affiliate disclosure",
  description:
    "How FixItReal makes money: home-services lead-gen partnerships, display advertising, and affiliate links — and what we will never accept.",
  path: "/affiliate-disclosure",
});

export default function AffiliateDisclosurePage() {
  return (
    <>
      <Section padding="md" size="lg">
        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Affiliate disclosure", href: "/affiliate-disclosure" },
          ]}
        />
      </Section>

      <Section padding="sm" size="sm">
        <h1 className="font-serif text-4xl text-navy-900">Affiliate disclosure</h1>
        <p className="mt-2 text-sm text-ink-500">Last updated: April 2026</p>

        <div className="mt-8 space-y-5 text-ink-800 leading-relaxed">
          <p>
            FixItReal is supported by a mix of lead-generation partnerships,
            display advertising, and affiliate links. This page tells you, in
            plain English, how we make money — and what we refuse to do.
          </p>

          <h2 className="font-serif text-2xl text-navy-900 mt-8">How we earn</h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong>Home-services lead-gen.</strong> On some cost guides and
              decision pages, you&apos;ll see a &ldquo;get a quote&rdquo; form
              powered by a lead-gen partner (Modernize, Networx, or similar).
              When you request a quote through that form, we earn a referral
              fee from the partner — not from the contractor you work with.
            </li>
            <li>
              <strong>Affiliate links.</strong> Some articles link to products
              — typically parts and tools — through affiliate programs (mostly
              Amazon Associates). If you buy through that link, we earn a small
              commission at no extra cost to you.
            </li>
            <li>
              <strong>Display advertising.</strong> Once we have enough traffic,
              we&apos;ll run display ads from a premium ad network
              (Mediavine/Raptive tier). We don&apos;t allow advertisers to
              influence what we write.
            </li>
          </ul>

          <h2 className="font-serif text-2xl text-navy-900 mt-8">What we won&apos;t take money from</h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong>Home warranty companies.</strong> Every major one has a
              terrible consumer reputation. Taking their affiliate payouts
              would fundamentally compromise this site&apos;s consumer-advocacy
              mission.
            </li>
            <li>
              <strong>Predatory lead-gen aggregators.</strong> Some lead-gen
              partners have well-documented complaints from contractors about
              lead quality and pricing. We only work with partners we&apos;d
              personally use.
            </li>
            <li>
              <strong>Paid editorial.</strong> We don&apos;t sell article
              placements, positive reviews, or inclusion in buyer&apos;s guides.
              &ldquo;Sponsored content&rdquo; and &ldquo;paid placement&rdquo;
              will never appear on FixItReal disguised as editorial.
            </li>
          </ul>

          <h2 className="font-serif text-2xl text-navy-900 mt-8">How we handle affiliate decisions</h2>
          <p>
            Monetization decisions never override editorial ones. If a product
            we&apos;d recommend has a better affiliate commission on one retailer
            than another, we link to the retailer the reader should actually
            buy from — even when it pays us less. If a product we like
            doesn&apos;t have an affiliate program, we link to it anyway with
            no commission.
          </p>
          <p>
            When an article contains affiliate links, you&apos;ll see a short
            disclosure near the top. You&apos;ll also see it every time there&apos;s
            a lead-gen form on the page.
          </p>

          <h2 className="font-serif text-2xl text-navy-900 mt-8">The FTC part</h2>
          <p>
            In compliance with FTC endorsement guidelines, this site discloses
            its material connections to any product or service mentioned.
            FixItReal is a participant in the Amazon Associates program, an
            affiliate advertising program designed to provide a means for sites
            to earn fees by linking to Amazon.com and affiliated sites.
          </p>
          <p>
            Additional affiliate and partnership relationships will be disclosed
            per-article and updated on this page as they&apos;re added.
          </p>
        </div>
      </Section>
    </>
  );
}
