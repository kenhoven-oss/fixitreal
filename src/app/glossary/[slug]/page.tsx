import { notFound } from "next/navigation";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { buildMetadata } from "@/lib/metadata";
import { jsonLdScript, articleSchema } from "@/lib/jsonld";
import {
  getAllGlossarySlugs,
  getGlossaryEntry,
} from "@/content/glossary";
import { kenHoven } from "@/content/authors/ken-hoven";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return getAllGlossarySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params;
  const entry = getGlossaryEntry(slug);
  if (!entry) return buildMetadata({ title: "Term not found", noIndex: true });

  return buildMetadata({
    title: `What is ${entry.term}?`,
    description: entry.short,
    path: `/glossary/${entry.slug}`,
    type: "article",
    publishedAt: "2026-05-16",
    updatedAt: "2026-05-16",
    authorName: kenHoven.name,
    section: "Glossary",
  });
}

export default async function GlossaryEntryPage({ params }: { params: Params }) {
  const { slug } = await params;
  const entry = getGlossaryEntry(slug);
  if (!entry) notFound();

  const path = `/glossary/${entry.slug}`;

  return (
    <>
      <Section padding="md" size="md">
        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Glossary", href: "/glossary" },
            { name: entry.term, href: path },
          ]}
        />
      </Section>

      <Section padding="sm" size="md">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
          Glossary
        </p>
        <h1 className="mt-3 font-serif text-4xl md:text-5xl text-navy-900 leading-tight">
          What is a {entry.term}?
        </h1>
        {entry.alsoCalled && entry.alsoCalled.length > 0 && (
          <p className="mt-2 text-sm text-ink-500">
            Also called: {entry.alsoCalled.join(", ")}
          </p>
        )}
        <p className="article-lede mt-5 text-lg text-ink-700 leading-relaxed max-w-3xl">
          {entry.short}
        </p>

        <div className="mt-8 space-y-5 text-ink-800 leading-relaxed">
          {entry.body.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        {entry.related && entry.related.length > 0 && (
          <div className="mt-12">
            <h2 className="font-serif text-2xl text-navy-900">Related guides</h2>
            <ul className="mt-4 space-y-2 text-ink-700">
              {entry.related.map((r) => (
                <li key={r.path}>
                  <Link
                    href={r.path}
                    className="no-underline text-navy-700 hover:text-navy-900"
                  >
                    → {r.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        <p className="mt-10 text-sm">
          <Link
            href="/glossary"
            className="no-underline text-navy-700 hover:text-navy-900 border-b border-amber-500 pb-0.5"
          >
            Back to glossary
          </Link>
        </p>
      </Section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript([
          articleSchema({
            headline: `What is a ${entry.term}?`,
            description: entry.short,
            url: path,
            datePublished: "2026-05-16",
            authorUrl: kenHoven.url,
            authorName: kenHoven.name,
            articleSection: "Glossary",
          }),
        ])}
      />
    </>
  );
}
