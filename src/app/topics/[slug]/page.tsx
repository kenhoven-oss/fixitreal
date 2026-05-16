import { notFound } from "next/navigation";
import { Section } from "@/components/ui/Section";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Card } from "@/components/ui/Card";
import { NewsletterBlock } from "@/components/marketing/NewsletterBlock";
import { buildMetadata } from "@/lib/metadata";
import { jsonLdScript, collectionPageSchema, itemListSchema } from "@/lib/jsonld";
import { getAllTopics, getTopic } from "@/lib/topics";

type Params = Promise<{ slug: string }>;

const pillarLabel: Record<string, string> = {
  "diy-or-hire": "DIY or Hire",
  costs: "Cost guide",
  advice: "Advice",
};

export async function generateStaticParams() {
  const topics = await getAllTopics();
  return topics.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params;
  const topic = await getTopic(slug);
  if (!topic) return buildMetadata({ title: "Topic not found", noIndex: true });
  return buildMetadata({
    title: `${topic.label}: every FixItReal guide`,
    description: `Honest home repair guidance for ${topic.label.toLowerCase()} — cost ranges, DIY-or-hire verdicts, and troubleshooting in one place.`.slice(0, 158),
    path: `/topics/${topic.slug}`,
  });
}

export default async function TopicPage({ params }: { params: Params }) {
  const { slug } = await params;
  const topic = await getTopic(slug);
  if (!topic) notFound();

  return (
    <>
      <Section padding="md" size="lg">
        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Topics", href: "/topics" },
            { name: topic.label, href: `/topics/${topic.slug}` },
          ]}
        />
      </Section>

      <Section padding="sm" size="lg">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
            Topic
          </p>
          <h1 className="mt-2 font-serif text-4xl md:text-5xl text-navy-900 leading-tight">
            {topic.label}
          </h1>
          <p className="mt-5 text-lg text-ink-700 leading-relaxed">
            Everything FixItReal publishes on{" "}
            <span className="font-semibold text-navy-900">{topic.label.toLowerCase()}</span>{" "}
            in one place — DIY-or-hire verdicts, real cost ranges, and the
            consumer-advocate advice the contractor-funded sites can&apos;t
            publish.
          </p>
        </div>
      </Section>

      <Section padding="md" size="lg">
        <h2 className="font-serif text-2xl text-navy-900">
          {topic.articles.length}{" "}
          {topic.articles.length === 1 ? "article" : "articles"}
        </h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {topic.articles.map((a) => (
            <Card
              key={a.path}
              href={a.path}
              eyebrow={pillarLabel[a.frontmatter.pillar] ?? a.frontmatter.pillar}
              title={a.frontmatter.title}
              description={a.frontmatter.description}
              meta={
                <span>
                  {a.frontmatter.readingMinutes} min · Updated{" "}
                  {new Date(
                    a.frontmatter.updatedAt ?? a.frontmatter.publishedAt
                  ).toLocaleDateString("en-US", {
                    month: "short",
                    year: "numeric",
                  })}
                </span>
              }
            />
          ))}
        </div>
      </Section>

      <Section padding="lg" size="lg">
        <NewsletterBlock variant="inline" />
      </Section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript([
          collectionPageSchema({
            name: `${topic.label} — FixItReal`,
            description: `Every FixItReal guide on ${topic.label.toLowerCase()}.`,
            url: `/topics/${topic.slug}`,
            hasPart: topic.articles.map((a) => ({
              name: a.frontmatter.title,
              url: a.path,
            })),
          }),
          itemListSchema({
            name: `${topic.label} — FixItReal articles`,
            url: `/topics/${topic.slug}`,
            items: topic.articles.map((a) => ({
              name: a.frontmatter.title,
              url: a.path,
            })),
          }),
        ])}
      />
    </>
  );
}
