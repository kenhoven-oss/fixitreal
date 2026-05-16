import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Corrections policy — how FixItReal fixes its mistakes",
  description:
    "When we publish something wrong, here's how we fix it: how to report it, how we decide what counts as a correction, and what gets dated when we update.",
  path: "/corrections",
});

export default function CorrectionsPage() {
  return (
    <>
      <Section padding="md" size="md">
        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Corrections", href: "/corrections" },
          ]}
        />
      </Section>

      <Section padding="sm" size="md">
        <h1 className="font-serif text-4xl md:text-5xl text-navy-900 leading-tight">
          Corrections policy
        </h1>
        <p className="mt-5 text-lg text-ink-700 leading-relaxed">
          FixItReal publishes general homeowner guidance. We try to be
          accurate; we&apos;re also human. When we&apos;re wrong, we want to
          fix it quickly and clearly — and we want it to be easy for readers
          to tell us when something needs updating.
        </p>

        <div className="mt-8 space-y-6 text-ink-800 leading-relaxed">
          <section>
            <h2 className="font-serif text-2xl text-navy-900">
              How to report something
            </h2>
            <p className="mt-3">
              Email{" "}
              <a
                href="mailto:hello@fixitreal.com?subject=Correction%20request"
                className="text-navy-700 hover:text-navy-900 underline decoration-amber-500"
              >
                hello@fixitreal.com
              </a>{" "}
              with the URL of the page, the specific sentence or claim you
              think is wrong, and a source we can check (if you have one).
              Reports get a response within five business days, usually
              faster.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-navy-900">
              What counts as a correction
            </h2>
            <p className="mt-3">
              We distinguish three categories of editorial change:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-3">
              <li>
                <strong className="text-navy-900">Correction.</strong> A
                factual error — wrong code reference, wrong cost data, wrong
                product spec, misstated regulation. We fix the text, add a
                visible &ldquo;Corrected on [date]&rdquo; line at the bottom of
                the affected section when the original claim was load-bearing
                to the article, and bump the article&apos;s{" "}
                <code>updatedAt</code> date.
              </li>
              <li>
                <strong className="text-navy-900">Update.</strong> Content
                that was accurate when published but has aged — outdated cost
                ranges, expired code references, a contractor norm that
                shifted. We rewrite the affected section and bump{" "}
                <code>updatedAt</code>. No correction notice is added.
              </li>
              <li>
                <strong className="text-navy-900">Improvement.</strong> Adding
                clarity, examples, or a section we didn&apos;t originally
                include. We bump <code>updatedAt</code> but don&apos;t treat
                it as a correction.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-navy-900">
              What we won&apos;t do
            </h2>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>
                Silently rewrite an article&apos;s conclusion. If a verdict
                changes (e.g. a DIY-recommended job moves to hire-a-pro), we
                add a visible note.
              </li>
              <li>
                Remove a critical statement about a contractor practice or
                product just because the company complains, unless the
                statement is factually wrong.
              </li>
              <li>
                Delete an article entirely to make a correction go away. If a
                page becomes outdated beyond repair, we replace it with a
                forwarding note explaining the situation.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-navy-900">
              How updates are dated
            </h2>
            <p className="mt-3">
              Every article has an <code>updatedAt</code> date in its
              frontmatter, displayed at the top of the page. That date
              reflects the most recent meaningful review or change. Articles
              that haven&apos;t needed updating still show their original
              publish date as the last-reviewed marker.
            </p>
            <p className="mt-3">
              Cost-guide pages additionally show a &ldquo;Cost data
              checked&rdquo; date where the underlying ranges were
              sanity-checked. Cost data may be checked more often than the
              article body is rewritten.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-navy-900">
              Editorial standards
            </h2>
            <p className="mt-3">
              For the broader set of practices that govern how we write and
              review content — sources, conflicts of interest, sponsored
              placements (we don&apos;t take them) — see our{" "}
              <Link
                href="/about/editorial-standards"
                className="text-navy-700 hover:text-navy-900 underline decoration-amber-500"
              >
                Editorial Standards
              </Link>{" "}
              page and{" "}
              <Link
                href="/about/methodology"
                className="text-navy-700 hover:text-navy-900 underline decoration-amber-500"
              >
                Methodology
              </Link>
              .
            </p>
          </section>
        </div>
      </Section>
    </>
  );
}
