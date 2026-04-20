import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { Section } from "@/components/ui/Section";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Prose } from "@/components/content/Prose";
import { FaqBlock } from "@/components/content/FaqBlock";
import { PullQuote } from "@/components/content/PullQuote";
import { Citation } from "@/components/content/Citation";
import { AffiliateDisclosure } from "@/components/content/AffiliateDisclosure";
import { NewsletterBlock } from "@/components/marketing/NewsletterBlock";
import { ExternalLink } from "@/components/ui/ExternalLink";
import {
  jsonLdScript,
  articleSchema,
  breadcrumbSchema,
} from "@/lib/jsonld";
import type { LoadedArticle } from "@/lib/articles-loader";
import { kenHoven } from "@/content/authors/ken-hoven";
import { site } from "@/content/site";

type ArticlePageProps = {
  article: LoadedArticle;
};

const pillarLabel: Record<string, string> = {
  "diy-or-hire": "DIY or Hire",
  costs: "Repair Costs",
  advice: "Honest Advice",
};

const mdxComponents = {
  PullQuote,
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
        <p className="mt-4 text-sm text-ink-500 flex flex-wrap gap-x-4 gap-y-1">
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

        <AffiliateDisclosure variant="banner" />

        <div className="mt-8">
          <Prose>
            <MDXRemote
              source={content}
              components={mdxComponents}
              options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
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
          breadcrumbSchema(breadcrumbItems),
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
        ])}
      />
    </>
  );
}
