import Link from "next/link";
import { notFound } from "next/navigation";
import { Section } from "@/components/ui/Section";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { VerdictBanner } from "@/components/tool/VerdictBanner";
import { CostComparisonTable } from "@/components/tool/CostComparisonTable";
import { FaqBlock } from "@/components/content/FaqBlock";
import { NewsletterBlock } from "@/components/marketing/NewsletterBlock";
import { buildMetadata } from "@/lib/metadata";
import {
  jsonLdScript,
  articleSchema,
  howToSchema,
  breadcrumbSchema,
} from "@/lib/jsonld";
import { getJob, getAllJobSlugs } from "@/content/jobs";
import { leeHoven } from "@/content/authors/lee-hoven";

type Params = Promise<{ job: string }>;

export function generateStaticParams() {
  return getAllJobSlugs().map((job) => ({ job }));
}

export async function generateMetadata({ params }: { params: Params }) {
  const { job } = await params;
  const j = getJob(job);
  if (!j) return buildMetadata({ title: "Job not found", noIndex: true });

  return buildMetadata({
    title: j.longTitle,
    description: j.reasoning + " " + j.rationale.slice(0, 120),
    path: `/tools/diy-or-hire/${j.slug}`,
    type: "article",
    publishedAt: j.lastReviewed,
    updatedAt: j.lastReviewed,
    authorName: leeHoven.name,
    section: "DIY or Hire",
  });
}

export default async function JobResultPage({ params }: { params: Params }) {
  const { job } = await params;
  const j = getJob(job);
  if (!j) notFound();

  const path = `/tools/diy-or-hire/${j.slug}`;

  return (
    <>
      <Section padding="md" size="lg">
        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Tools", href: "/tools" },
            { name: "DIY or Hire", href: "/tools/diy-or-hire" },
            { name: j.shortTitle, href: path },
          ]}
        />
      </Section>

      <Section padding="sm" size="md">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
          DIY or hire · Decision
        </p>
        <h1 className="mt-2 font-serif text-4xl md:text-5xl text-navy-900 leading-tight">
          {j.longTitle}
        </h1>
        <p className="mt-3 text-sm text-ink-500">
          By{" "}
          <Link href={leeHoven.url} className="no-underline hover:text-navy-900">
            {leeHoven.name}
          </Link>
          {" · "}Updated {new Date(j.lastReviewed).toLocaleDateString("en-US", { month: "long", year: "numeric" })}
        </p>

        <div className="mt-8">
          <VerdictBanner
            verdict={j.verdict}
            reasoning={j.reasoning}
            risk={j.risk}
            permitRequired={j.permit.commonlyRequired}
            timeMinutes={j.time.diyMinutes}
            costDiyLow={j.cost.diy.low}
            costProLow={j.cost.pro.low}
          />
        </div>

        {j.safetyNote && (
          <div className="mt-6 rounded-lg border border-red-200 bg-red-50 p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-red-900">
              Safety note
            </p>
            <p className="mt-2 text-red-900 leading-relaxed">{j.safetyNote}</p>
          </div>
        )}

        <section className="mt-10">
          <h2 className="font-serif text-2xl text-navy-900">The reasoning</h2>
          <p className="mt-3 text-ink-800 leading-relaxed">{j.rationale}</p>
        </section>

        <section className="mt-10">
          <h2 className="font-serif text-2xl text-navy-900">Honest cost comparison</h2>
          <div className="mt-4">
            <CostComparisonTable cost={j.cost} />
          </div>
        </section>

        <section className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-ink-200 bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-navy-700">
              If you DIY
            </p>
            <p className="mt-3 text-ink-800 leading-relaxed">{j.ifYouDiy}</p>
            {j.toolsNeeded.length > 0 && (
              <>
                <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-ink-500">
                  Tools needed
                </p>
                <ul className="mt-2 list-disc pl-5 text-sm text-ink-700 space-y-1">
                  {j.toolsNeeded.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
          <div className="rounded-lg border border-ink-200 bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-amber-700">
              If you hire it out
            </p>
            <p className="mt-3 text-ink-800 leading-relaxed">{j.ifYouHire}</p>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="font-serif text-2xl text-navy-900">Permit &amp; code</h2>
          <p className="mt-3 text-ink-800 leading-relaxed">{j.permit.notes}</p>
        </section>

        <FaqBlock items={j.faq} />

        <section className="mt-12">
          <h2 className="font-serif text-2xl text-navy-900">Related</h2>
          <ul className="mt-4 space-y-2">
            {j.relatedArticles.cost && (
              <li>
                <Link
                  href={`/costs/${j.relatedArticles.cost}`}
                  className="no-underline text-navy-700 hover:text-navy-900"
                >
                  → {j.shortTitle} cost breakdown
                </Link>
              </li>
            )}
            {j.relatedArticles.decision && (
              <li>
                <Link
                  href={`/diy-or-hire/${j.relatedArticles.decision}`}
                  className="no-underline text-navy-700 hover:text-navy-900"
                >
                  → Full article: {j.shortTitle}
                </Link>
              </li>
            )}
            {j.relatedArticles.advice?.map((slug) => (
              <li key={slug}>
                <Link
                  href={`/advice/${slug}`}
                  className="no-underline text-navy-700 hover:text-navy-900"
                >
                  → Advice: {slug.replace(/-/g, " ")}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/tools/diy-or-hire" className="no-underline text-navy-700 hover:text-navy-900">
                ← Back to all jobs
              </Link>
            </li>
          </ul>
        </section>
      </Section>

      <Section padding="lg" size="md">
        <NewsletterBlock variant="inline" />
      </Section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript([
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Tools", href: "/tools" },
            { name: "DIY or Hire", href: "/tools/diy-or-hire" },
            { name: j.shortTitle, href: path },
          ]),
          articleSchema({
            headline: j.longTitle,
            description: j.reasoning,
            url: path,
            datePublished: j.lastReviewed,
            dateModified: j.lastReviewed,
            authorUrl: leeHoven.url,
            authorName: leeHoven.name,
            articleSection: "DIY or Hire",
          }),
          ...(j.verdict !== "hire-a-pro"
            ? [
                howToSchema({
                  name: j.longTitle,
                  description: j.reasoning,
                  url: path,
                  totalMinutes: j.time.diyMinutes,
                  estimatedCostLow: j.cost.diy.low,
                  estimatedCostHigh: j.cost.diy.high,
                  supplies: j.partsNeeded,
                  tools: j.toolsNeeded,
                  steps: [{ name: "Overview", text: j.ifYouDiy }],
                }),
              ]
            : []),
        ])}
      />
    </>
  );
}
