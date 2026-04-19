import Link from "next/link";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { NewsletterBlock } from "@/components/marketing/NewsletterBlock";
import { buildMetadata } from "@/lib/metadata";
import { jsonLdScript, aboutPageSchema } from "@/lib/jsonld";
import { leeHoven } from "@/content/authors/lee-hoven";

export const metadata = buildMetadata({
  title: "About FixItReal",
  description:
    "FixItReal is a consumer-advocate home repair site — one independent editor, no home warranty advertisers, no sponsored content disguised as editorial.",
  path: "/about",
  noIndex: true,
});

export default function AboutPage() {
  return (
    <>
      <Section padding="md" size="lg">
        <Breadcrumb items={[{ name: "Home", href: "/" }, { name: "About", href: "/about" }]} />
      </Section>

      <Section padding="sm" size="sm">
        <h1 className="font-serif text-4xl md:text-5xl text-navy-900">About FixItReal</h1>
        <div className="mt-6 space-y-5 text-lg text-ink-800 leading-relaxed">
          <p>
            FixItReal exists because most home-repair content is written by
            people selling something — contractor lead-gen, home warranty
            affiliates, or advertising relationships with the companies you&apos;d
            need to question to get honest advice.
          </p>
          <p>
            We&apos;re independent. One editor. No warranty companies. No
            sponsored content disguised as editorial. No AI-generated filler
            articles. When we recommend a product or service, it&apos;s because
            we&apos;ve used it or done the research. When we don&apos;t, we
            tell you why.
          </p>
          <p>
            The goal is simple: help you fix the right things yourself, skip
            the wrong ones, and know a fair price when you hear it. Fix it
            right, not twice.
          </p>
        </div>

        <div className="mt-12 p-6 rounded-lg border border-ink-200 bg-ink-50">
          <p className="text-xs font-semibold uppercase tracking-wider text-amber-700">
            The editor
          </p>
          <div className="mt-4 flex items-start gap-5">
            <div className="relative h-20 w-20 shrink-0 rounded-full bg-ink-200 overflow-hidden">
              <Image
                src={leeHoven.photo}
                alt={leeHoven.name}
                width={80}
                height={80}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <p className="font-serif text-xl text-navy-900">
                <Link href={leeHoven.url} className="no-underline hover:text-navy-700">
                  {leeHoven.name}
                </Link>
              </p>
              <p className="text-sm text-ink-600">{leeHoven.role}</p>
              <p className="mt-3 text-ink-700 leading-relaxed">{leeHoven.bio}</p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="font-serif text-2xl text-navy-900">How we&apos;re different</h2>
          <ul className="mt-4 space-y-3 text-ink-800">
            <li>
              <strong className="text-navy-900">No home warranty affiliates.</strong>{" "}
              Every major home warranty company has a terrible consumer
              reputation. Taking their affiliate payouts would compromise the
              advocacy work.
            </li>
            <li>
              <strong className="text-navy-900">Transparent cost methodology.</strong>{" "}
              Every number we publish has a source and a date. See our{" "}
              <Link href="/about/methodology" className="no-underline text-navy-700">
                methodology page
              </Link>.
            </li>
            <li>
              <strong className="text-navy-900">Opinionated, not neutral.</strong>{" "}
              Neutrality is a form of cowardice on consumer topics. If a
              product is junk or a company is predatory, we say so.
            </li>
            <li>
              <strong className="text-navy-900">No AI-written content.</strong>{" "}
              AI assistance in research is fine. AI-generated articles published
              without human rewriting are not.
            </li>
          </ul>
        </div>

        <div className="mt-12 space-y-2 text-sm">
          <p>
            <Link href="/about/editorial-standards" className="no-underline text-navy-700 hover:text-navy-900">
              Read our editorial standards →
            </Link>
          </p>
          <p>
            <Link href="/about/methodology" className="no-underline text-navy-700 hover:text-navy-900">
              Read our cost-data methodology →
            </Link>
          </p>
          <p>
            <Link href="/about/contact" className="no-underline text-navy-700 hover:text-navy-900">
              Contact us →
            </Link>
          </p>
        </div>
      </Section>

      <Section padding="lg" size="sm">
        <NewsletterBlock variant="inline" />
      </Section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          aboutPageSchema({
            name: "About FixItReal",
            description:
              "FixItReal is a consumer-advocate home repair site — independent editor, no home warranty advertisers.",
            url: "/about",
          })
        )}
      />
    </>
  );
}
