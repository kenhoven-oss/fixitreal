import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { buildMetadata } from "@/lib/metadata";
import { jsonLdScript, collectionPageSchema, itemListSchema } from "@/lib/jsonld";
import { glossary } from "@/content/glossary";

export const metadata = buildMetadata({
  title: "Home repair glossary — what every homeowner term actually means",
  description:
    "Plain-English definitions of the home-repair terms homeowners run into during inspections, contractor quotes, and DIY projects — what they mean and why they matter.",
  path: "/glossary",
});

export default function GlossaryHub() {
  const sorted = [...glossary].sort((a, b) => a.term.localeCompare(b.term));

  return (
    <>
      <Section padding="md" size="lg">
        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Glossary", href: "/glossary" },
          ]}
        />
      </Section>

      <Section padding="sm" size="lg">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
            Glossary
          </p>
          <h1 className="mt-2 font-serif text-4xl md:text-5xl text-navy-900 leading-tight">
            Home repair glossary
          </h1>
          <p className="mt-5 text-lg text-ink-700 leading-relaxed">
            Plain-English definitions of the terms inspectors flag, contractors
            use, and product descriptions assume you know. Each entry explains
            what the thing is, why it matters, and what to do if it comes up in
            a quote or an inspection report.
          </p>
        </div>
      </Section>

      <Section padding="md" size="lg">
        <div className="grid gap-4 md:grid-cols-2">
          {sorted.map((entry) => (
            <Link
              key={entry.slug}
              href={`/glossary/${entry.slug}`}
              className="group block rounded-lg border border-ink-200 bg-white p-5 no-underline transition-colors hover:border-navy-700 hover:shadow-sm"
            >
              <p className="font-serif text-lg text-navy-900 group-hover:text-navy-700">
                {entry.term}
              </p>
              {entry.alsoCalled && entry.alsoCalled.length > 0 && (
                <p className="mt-0.5 text-xs text-ink-500">
                  Also called: {entry.alsoCalled.join(", ")}
                </p>
              )}
              <p className="mt-2 text-sm text-ink-700 leading-relaxed">
                {entry.short}
              </p>
            </Link>
          ))}
        </div>
      </Section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript([
          collectionPageSchema({
            name: "FixItReal home repair glossary",
            description:
              "Plain-English definitions of home-repair terms that come up in inspections, contractor quotes, and DIY projects.",
            url: "/glossary",
            hasPart: sorted.map((e) => ({
              name: e.term,
              url: `/glossary/${e.slug}`,
            })),
          }),
          itemListSchema({
            name: "FixItReal glossary entries",
            url: "/glossary",
            items: sorted.map((e) => ({
              name: e.term,
              url: `/glossary/${e.slug}`,
            })),
          }),
        ])}
      />
    </>
  );
}
