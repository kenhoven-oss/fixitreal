import { Section } from "@/components/ui/Section";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { JobSelector } from "@/components/tool/JobSelector";
import { NewsletterBlock } from "@/components/marketing/NewsletterBlock";
import { buildMetadata } from "@/lib/metadata";
import { jsonLdScript, webApplicationSchema } from "@/lib/jsonld";
import { jobs } from "@/content/jobs";

export const metadata = buildMetadata({
  title: "DIY or Hire? Get the honest answer for your next repair",
  description:
    "Pick a home repair. Get a verdict with cost comparison, permit rules, risk assessment, and our reasoning. No quiz — just the answer.",
  path: "/tools/diy-or-hire",
});

export default function DiyOrHireTool() {
  return (
    <>
      <Section padding="md" size="lg">
        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Tools", href: "/tools" },
            { name: "DIY or Hire", href: "/tools/diy-or-hire" },
          ]}
        />
      </Section>

      <Section padding="sm" size="lg">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
            The tool
          </p>
          <h1 className="mt-2 font-serif text-4xl md:text-5xl text-navy-900 leading-tight">
            DIY or hire? Get the honest answer
          </h1>
          <div className="mt-5 space-y-4 text-lg text-ink-700 leading-relaxed">
            <p>
              Pick a job below. You&apos;ll get a verdict, a cost comparison
              (DIY vs pro), permit rules, risk level, and the reasoning behind
              the call — not a vague &ldquo;it depends.&rdquo;
            </p>
            <p>
              We don&apos;t make money based on which answer you get. There&apos;s
              no sponsored product at the end. If we say &ldquo;hire a
              pro,&rdquo; we&apos;ll tell you what fair pricing looks like.
              If we say &ldquo;DIY,&rdquo; we&apos;ll tell you exactly what
              you&apos;re signing up for.
            </p>
          </div>
        </div>
      </Section>

      <Section padding="md" size="lg">
        <h2 className="font-serif text-2xl text-navy-900">Pick a job</h2>
        <div className="mt-6">
          <JobSelector jobs={jobs} />
        </div>
      </Section>

      <Section padding="md" size="lg">
        <div className="max-w-3xl">
          <h2 className="font-serif text-2xl text-navy-900">How we decide</h2>
          <div className="mt-4 space-y-3 text-ink-700 leading-relaxed">
            <p>
              For each job we weigh: safety risk (what happens if you get it
              wrong), permit requirements (does your jurisdiction require
              one), skill threshold (what&apos;s realistic for someone without
              the trade), honest cost delta (how much DIY actually saves), and
              time budget (what an average person needs).
            </p>
            <p>
              For higher-risk jobs — electrical, gas, structural, water under
              pressure — we&apos;re deliberately conservative. Saving $300 on a
              water heater swap doesn&apos;t matter if an unpermitted install
              voids your homeowners insurance or a gas leak sends you to the
              hospital. Read our full{" "}
              <a href="/about/methodology" className="no-underline text-navy-700 hover:text-navy-900">
                methodology
              </a>
              .
            </p>
          </div>
        </div>
      </Section>

      <Section padding="lg" size="lg">
        <NewsletterBlock variant="inline" />
      </Section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          webApplicationSchema({
            name: "FixItReal DIY or Hire Decision Tool",
            description:
              "Pick a home repair. Get a verdict with cost comparison, permit rules, risk, and reasoning.",
            url: "/tools/diy-or-hire",
          })
        )}
      />
    </>
  );
}
