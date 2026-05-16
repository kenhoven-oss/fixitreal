import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { Section } from "@/components/ui/Section";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Prose } from "@/components/content/Prose";
import { FaqBlock } from "@/components/content/FaqBlock";
import { PullQuote } from "@/components/content/PullQuote";
import { QuickAnswer } from "@/components/content/QuickAnswer";
import { Citation } from "@/components/content/Citation";
import { AffiliateDisclosure } from "@/components/content/AffiliateDisclosure";
import { NewsletterBlock } from "@/components/marketing/NewsletterBlock";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { jsonLdScript, articleSchema, howToSchema } from "@/lib/jsonld";
import type { LoadedArticle } from "@/lib/articles-loader";
import { kenHoven } from "@/content/authors/ken-hoven";
import { site } from "@/content/site";
import { extractToc } from "@/lib/toc";
import { TableOfContents } from "@/components/content/TableOfContents";

type ArticlePageProps = {
  article: LoadedArticle;
};

const pillarLabel: Record<string, string> = {
  "diy-or-hire": "DIY or Hire",
  costs: "Repair Costs",
  advice: "Honest Advice",
  "home-inspection-repairs": "Inspection Repairs",
  "senior-home-safety": "Senior Home Safety",
};

const mdxComponents = {
  PullQuote,
  QuickAnswer,
  Citation,
  a: ({ href, children }: { href?: string; children?: React.ReactNode }) =>
    href && /^https?:/.test(href) ? (
      <ExternalLink href={href}>{children}</ExternalLink>
    ) : (
      <a href={href} className="no-underline text-navy-700 hover:text-navy-900 underline decoration-amber-500">
        {children}
      </a>
    ),
};

export function ArticlePage({ article }: ArticlePageProps) {
  const { frontmatter, content, path } = article;
  const pillar = frontmatter.pillar;
  const publishDate = new Date(frontmatter.publishedAt);
  const updateDate = frontmatter.updatedAt
    ? new Date(frontmatter.updatedAt)
    : publishDate;
  const toc = extractToc(content);

  const pillarInfo = site.pillars.find((p) => p.slug === pillar);

  const breadcrumbItems = [
    { name: "Home", href: "/" },
    { name: pillarLabel[pillar] ?? pillar, href: pillarInfo?.href ?? "/" },
    { name: frontmatter.title, href: path },
  ];

  return (
    <>
      <Section padding="md" size="lg">
        <Breadcrumb items={breadcrumbItems} />
      </Section>

      <Section padding="sm" size="md">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
          {pillarLabel[pillar]}
        </p>
        <h1 className="mt-3 font-serif text-4xl md:text-5xl text-navy-900 leading-tight">
          {frontmatter.title}
        </h1>
        <p className="article-lede mt-5 text-lg text-ink-700 leading-relaxed max-w-3xl">
          {frontmatter.description}
        </p>
        <p className="mt-5 text-sm text-ink-500 flex flex-wrap gap-x-4 gap-y-1">
          <span>
            By{" "}
            <Link href={kenHoven.url} className="no-underline hover:text-navy-900">
              {kenHoven.name}
            </Link>
          </span>
          <span>
            Updated{" "}
            {updateDate.toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </span>
          <span>{frontmatter.readingMinutes} min read</span>
          {frontmatter.ymyl && (
            <span className="text-amber-800">
              · Safety-sensitive topic — consult a licensed pro
            </span>
          )}
        </p>
        <p className="mt-2 text-xs text-ink-600">
          <Link
            href="/about/methodology"
            className="no-underline hover:text-navy-900 border-b border-amber-500 pb-0.5"
          >
            How we research
          </Link>
          {" · "}
          <Link
            href="/about/editorial-standards"
            className="no-underline hover:text-navy-900 border-b border-amber-500 pb-0.5"
          >
            Editorial standards
          </Link>
        </p>

        <AffiliateDisclosure variant="banner" />

        {frontmatter.howTo && (
          <section
            aria-labelledby="howto-heading"
            className="mt-8 rounded-lg border border-amber-200 bg-amber-50/60 p-6"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-amber-700">
              Step-by-step
            </p>
            <h2
              id="howto-heading"
              className="mt-1 font-serif text-2xl text-navy-900 leading-snug"
            >
              {frontmatter.howTo.name}
            </h2>
            <p className="mt-2 text-sm text-ink-700 flex flex-wrap gap-x-4 gap-y-1">
              {frontmatter.howTo.totalMinutes && (
                <span>⏱ {frontmatter.howTo.totalMinutes} minutes</span>
              )}
              {frontmatter.howTo.estimatedCostLow !== undefined &&
                frontmatter.howTo.estimatedCostHigh !== undefined && (
                  <span>
                    ${frontmatter.howTo.estimatedCostLow}–$
                    {frontmatter.howTo.estimatedCostHigh}
                  </span>
                )}
              <span>{frontmatter.howTo.steps.length} steps</span>
            </p>
            {(frontmatter.howTo.tools?.length ||
              frontmatter.howTo.supplies?.length) && (
              <div className="mt-4 grid gap-4 sm:grid-cols-2 text-sm">
                {!!frontmatter.howTo.tools?.length && (
                  <div>
                    <p className="font-semibold text-navy-900">Tools</p>
                    <ul className="mt-1 list-disc pl-5 text-ink-700">
                      {frontmatter.howTo.tools.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {!!frontmatter.howTo.supplies?.length && (
                  <div>
                    <p className="font-semibold text-navy-900">Supplies</p>
                    <ul className="mt-1 list-disc pl-5 text-ink-700">
                      {frontmatter.howTo.supplies.map((s) => (
                        <li key={s}>{s}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
            <ol className="mt-5 space-y-4">
              {frontmatter.howTo.steps.map((s, i) => (
                <li key={s.name} className="flex gap-4">
                  <span
                    aria-hidden
                    className="shrink-0 inline-flex h-7 w-7 items-center justify-center rounded-full bg-navy-900 text-white text-sm font-semibold"
                  >
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-semibold text-navy-900">{s.name}</p>
                    <p className="mt-1 text-ink-700 leading-relaxed">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>
        )}

        {toc.length >= 3 && (
          <details className="mt-6 group rounded-lg border border-ink-200 bg-ink-50 open:bg-white open:shadow-sm">
            <summary className="cursor-pointer list-none px-5 py-3 text-sm font-semibold text-navy-900 select-none flex items-center justify-between">
              <span>
                <span className="text-xs font-semibold uppercase tracking-[0.15em] text-amber-700 mr-2">
                  Contents
                </span>
                {toc.length} sections
              </span>
              <span
                aria-hidden
                className="text-ink-500 group-open:rotate-180 transition-transform"
              >
                ▾
              </span>
            </summary>
            <div className="px-5 pb-5 pt-1">
              <TableOfContents items={toc} />
            </div>
          </details>
        )}

        <div className="mt-8">
          <Prose>
            <MDXRemote
              source={content}
              components={mdxComponents}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm],
                  rehypePlugins: [
                    rehypeSlug,
                    [
                      rehypeAutolinkHeadings,
                      {
                        behavior: "wrap",
                        properties: {
                          className: "heading-anchor",
                          ariaLabel: "Link to this section",
                        },
                      },
                    ],
                  ],
                },
              }}
            />
          </Prose>
        </div>

        {frontmatter.citations.length > 0 && (
          <div className="mt-12 pt-6 border-t border-ink-200">
            <h2 className="font-serif text-xl text-navy-900">Sources</h2>
            <ul className="mt-3 space-y-2 text-sm">
              {frontmatter.citations.map((c) => (
                <li key={c.url}>
                  <ExternalLink href={c.url}>{c.label}</ExternalLink>
                </li>
              ))}
            </ul>
          </div>
        )}

        {frontmatter.faq && frontmatter.faq.length > 0 && (
          <FaqBlock items={frontmatter.faq} />
        )}

        <div className="mt-12">
          <h2 className="font-serif text-2xl text-navy-900">Related</h2>
          <ul className="mt-4 space-y-2">
            {frontmatter.relatedDecision && (
              <li>
                <Link
                  href={`/diy-or-hire/${frontmatter.relatedDecision}`}
                  className="no-underline text-navy-700 hover:text-navy-900"
                >
                  → DIY or hire: {frontmatter.relatedDecision.replace(/-/g, " ")}
                </Link>
              </li>
            )}
            {frontmatter.relatedCost && (
              <li>
                <Link
                  href={`/costs/${frontmatter.relatedCost}`}
                  className="no-underline text-navy-700 hover:text-navy-900"
                >
                  → Cost guide: {frontmatter.relatedCost.replace(/-/g, " ")}
                </Link>
              </li>
            )}
            {frontmatter.relatedAdvice?.map((slug) => (
              <li key={slug}>
                <Link
                  href={`/advice/${slug}`}
                  className="no-underline text-navy-700 hover:text-navy-900"
                >
                  → Advice: {slug.replace(/-/g, " ")}
                </Link>
              </li>
            ))}
            {frontmatter.relatedJob && (
              <li>
                <Link
                  href={`/tools/diy-or-hire/${frontmatter.relatedJob}`}
                  className="no-underline text-navy-700 hover:text-navy-900"
                >
                  → Tool verdict: {frontmatter.relatedJob.replace(/-/g, " ")}
                </Link>
              </li>
            )}
          </ul>
        </div>
      </Section>

      <Section padding="lg" size="md">
        <NewsletterBlock variant="inline" />
      </Section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript([
          articleSchema({
            headline: frontmatter.title,
            description: frontmatter.description,
            url: path,
            datePublished: frontmatter.publishedAt,
            dateModified: frontmatter.updatedAt ?? frontmatter.publishedAt,
            authorUrl: kenHoven.url,
            authorName: kenHoven.name,
            authorImage: kenHoven.photo,
            authorJobTitle: kenHoven.role,
            authorDescription: kenHoven.shortBio,
            articleSection: pillarLabel[pillar],
          }),
          ...(frontmatter.howTo
            ? [
                howToSchema({
                  name: frontmatter.howTo.name,
                  description: frontmatter.description,
                  url: path,
                  totalMinutes: frontmatter.howTo.totalMinutes,
                  estimatedCostLow: frontmatter.howTo.estimatedCostLow,
                  estimatedCostHigh: frontmatter.howTo.estimatedCostHigh,
                  supplies: frontmatter.howTo.supplies
                    ? [...frontmatter.howTo.supplies]
                    : undefined,
                  tools: frontmatter.howTo.tools
                    ? [...frontmatter.howTo.tools]
                    : undefined,
                  steps: frontmatter.howTo.steps.map((s) => ({
                    name: s.name,
                    text: s.text,
                  })),
                }),
              ]
            : []),
        ])}
      />
    </>
  );
}
