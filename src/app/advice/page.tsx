import { Section } from "@/components/ui/Section";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Card } from "@/components/ui/Card";
import { NewsletterBlock } from "@/components/marketing/NewsletterBlock";
import { buildMetadata } from "@/lib/metadata";
import { jsonLdScript, collectionPageSchema } from "@/lib/jsonld";

export const metadata = buildMetadata({
  title: "Honest home repair advice",
  description:
    "Contractor vetting, pricing red flags, and consumer-first guidance the sites taking contractor ad money can't publish.",
  path: "/advice",
  noIndex: true,
});

export default function AdviceHub() {
  return (
    <>
      <Section padding="md" size="lg">
        <Breadcrumb items={[{ name: "Home", href: "/" }, { name: "Honest Advice", href: "/advice" }]} />
      </Section>

      <Section padding="sm" size="lg">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
            Pillar
          </p>
          <h1 className="mt-2 font-serif text-4xl md:text-5xl text-navy-900 leading-tight">
            The advice other home sites can&apos;t publish
          </h1>
          <div className="mt-6 space-y-4 text-lg text-ink-700 leading-relaxed">
            <p>
              The big home-repair sites make their money from contractor lead-gen
              partners, home warranty affiliates, and advertising from the
              same companies they&apos;d need to criticize to tell you the truth.
              That&apos;s a structural problem. We don&apos;t have that problem.
            </p>
            <p>
              This is where we publish the consumer-advocate content: contractor
              vetting checklists that go deeper than &ldquo;ask for
              references,&rdquo; the specific home warranty companies to avoid
              (and why), the pricing red flags in a typical quote, and the
              questions that make scammy contractors leave you alone.
            </p>
            <p>
              We name names where it matters. We cite our sources. And we
              don&apos;t take money from any company we&apos;d tell you to
              skip — which is why home warranty affiliates will never appear on
              this site.
            </p>
          </div>
        </div>
      </Section>

      <Section padding="md" size="lg">
        <h2 className="font-serif text-2xl text-navy-900">Coming soon</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            { slug: "vetting-a-contractor", title: "How to vet a contractor" },
            { slug: "home-warranties-bad-deal", title: "Why home warranties are a bad deal" },
            { slug: "signs-of-overpriced-quote", title: "7 signs a repair quote is overpriced" },
            { slug: "hidden-fees", title: "Hidden fees in a typical home repair quote" },
            { slug: "three-contractor-quotes", title: "How to get 3 quotes without wasting time" },
          ].map((a) => (
            <Card
              key={a.slug}
              eyebrow="Advice"
              title={a.title}
              description="Honest, opinionated, consumer-first — launching soon."
            />
          ))}
        </div>
      </Section>

      <Section padding="lg" size="lg">
        <NewsletterBlock variant="inline" />
      </Section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          collectionPageSchema({
            name: "Honest home repair advice",
            description:
              "Consumer-advocacy guidance on contractors, pricing, and home-repair scams.",
            url: "/advice",
          })
        )}
      />
    </>
  );
}
