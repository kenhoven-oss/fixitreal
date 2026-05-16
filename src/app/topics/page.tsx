import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { buildMetadata } from "@/lib/metadata";
import { jsonLdScript, collectionPageSchema } from "@/lib/jsonld";
import { getAllTopics } from "@/lib/topics";

export const metadata = buildMetadata({
  title: "Topics — every home repair subject we cover",
  description:
    "Browse every FixItReal topic — repair cost ranges, DIY-or-hire verdicts, and consumer-advocate guidance grouped by the appliance, system, or question.",
  path: "/topics",
});

export default async function TopicsIndex() {
  const topics = await getAllTopics();

  return (
    <>
      <Section padding="md" size="lg">
        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Topics", href: "/topics" },
          ]}
        />
      </Section>

      <Section padding="sm" size="lg">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
            All topics
          </p>
          <h1 className="mt-2 font-serif text-4xl md:text-5xl text-navy-900 leading-tight">
            Every home repair subject we cover
          </h1>
          <p className="mt-5 text-lg text-ink-700 leading-relaxed">
            Topics aggregate every FixItReal article on a single subject —
            DIY-or-hire verdict, cost range, and troubleshooting guidance, all
            in one place. Topics surface only when at least two articles
            cover them, so every page below is genuinely useful.
          </p>
        </div>
      </Section>

      <Section padding="md" size="lg">
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {topics.map((t) => (
            <Link
              key={t.slug}
              href={`/topics/${t.slug}`}
              className="group flex items-center justify-between gap-3 rounded-md border border-ink-200 bg-white px-4 py-3 no-underline hover:border-navy-700 hover:shadow-sm transition-colors"
            >
              <span className="font-serif text-base text-navy-900">
                {t.label}
              </span>
              <span className="text-xs font-medium text-ink-500 group-hover:text-navy-700">
                {t.articles.length}
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          collectionPageSchema({
            name: "All FixItReal topics",
            description:
              "Browse every home repair subject covered on FixItReal.",
            url: "/topics",
            hasPart: topics.map((t) => ({
              name: t.label,
              url: `/topics/${t.slug}`,
            })),
          })
        )}
      />
    </>
  );
}
