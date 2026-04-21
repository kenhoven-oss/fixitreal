import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { buildMetadata } from "@/lib/metadata";
import { jsonLdScript, personSchema } from "@/lib/jsonld";
import { kenHoven } from "@/content/authors/ken-hoven";
import { loadAllArticles } from "@/lib/articles-loader";

const authors = {
  [kenHoven.slug]: kenHoven,
} as const;

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return Object.keys(authors).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params;
  const author = authors[slug as keyof typeof authors];
  if (!author) return buildMetadata({ title: "Author not found", noIndex: true });
  return buildMetadata({
    title: `${author.name} — ${author.role}`,
    description: author.shortBio,
    path: author.url,
  });
}

const pillarLabel: Record<string, string> = {
  "diy-or-hire": "DIY or Hire",
  costs: "Cost guide",
  advice: "Advice",
};

export default async function AuthorProfile({ params }: { params: Params }) {
  const { slug } = await params;
  const author = authors[slug as keyof typeof authors];
  if (!author) notFound();

  const sameAs = [author.social.linkedin, author.social.twitter].filter(Boolean) as string[];

  // Pull every article authored by this person, newest first.
  const allArticles = await loadAllArticles();
  const authoredArticles = allArticles.filter(
    (a) => a.frontmatter.author === author.slug
  );
  const recentArticles = authoredArticles.slice(0, 6);

  // Group article counts per pillar for the "what I cover" section.
  const pillarCounts = authoredArticles.reduce<Record<string, number>>((acc, a) => {
    acc[a.frontmatter.pillar] = (acc[a.frontmatter.pillar] ?? 0) + 1;
    return acc;
  }, {});

  return (
    <>
      <Section padding="md" size="lg">
        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "About", href: "/about" },
            { name: author.name, href: author.url },
          ]}
        />
      </Section>

      <Section padding="sm" size="md">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="relative h-32 w-32 shrink-0 rounded-full bg-ink-200 overflow-hidden ring-1 ring-ink-300">
            <Image
              src={author.photo}
              alt={`${author.name}, ${author.role} at FixItReal`}
              width={128}
              height={128}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-amber-700">
              {author.role}
            </p>
            <h1 className="mt-2 font-serif text-4xl text-navy-900">{author.name}</h1>
            <p className="mt-4 text-lg text-ink-700 leading-relaxed">{author.bio}</p>
            <p className="mt-4 text-sm text-ink-600 leading-relaxed">
              Ken also founded{" "}
              <a
                href="https://www.printreadyforms.com"
                className="underline decoration-amber-500 hover:text-navy-900"
                rel="noopener noreferrer"
              >
                PrintReadyForms
              </a>
              , a separate site focused on downloadable forms and templates.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {author.credentials.map((c) => (
                <Badge key={c} tone="navy" size="md">
                  {c}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-serif text-2xl text-navy-900">Areas of focus</h2>
            <ul className="mt-4 space-y-2.5">
              {author.expertiseAreas.map((e) => (
                <li
                  key={e}
                  className="flex items-start gap-3 text-ink-700 leading-relaxed"
                >
                  <span
                    aria-hidden
                    className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500"
                  />
                  <span>{e}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-navy-900">Coverage at a glance</h2>
            <ul className="mt-4 space-y-2 text-ink-700">
              {pillarCounts["advice"] && (
                <li>
                  <Link
                    href="/advice"
                    className="no-underline hover:text-navy-900"
                  >
                    <strong className="text-navy-900">{pillarCounts["advice"]}</strong>{" "}
                    consumer-advocacy articles →
                  </Link>
                </li>
              )}
              {pillarCounts["costs"] && (
                <li>
                  <Link
                    href="/costs"
                    className="no-underline hover:text-navy-900"
                  >
                    <strong className="text-navy-900">{pillarCounts["costs"]}</strong>{" "}
                    cost breakdowns →
                  </Link>
                </li>
              )}
              {pillarCounts["diy-or-hire"] && (
                <li>
                  <Link
                    href="/diy-or-hire"
                    className="no-underline hover:text-navy-900"
                  >
                    <strong className="text-navy-900">{pillarCounts["diy-or-hire"]}</strong>{" "}
                    DIY-or-hire decision guides →
                  </Link>
                </li>
              )}
              <li className="pt-2 text-sm text-ink-600">
                <Link
                  href="/about/editorial-standards"
                  className="no-underline hover:text-navy-900 border-b border-amber-500 pb-0.5"
                >
                  Editorial standards
                </Link>{" "}
                ·{" "}
                <Link
                  href="/about/methodology"
                  className="no-underline hover:text-navy-900 border-b border-amber-500 pb-0.5"
                >
                  Methodology
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="font-serif text-2xl text-navy-900">Recent articles</h2>
          {recentArticles.length === 0 ? (
            <p className="mt-3 text-ink-600 text-sm">Articles will appear here as they publish.</p>
          ) : (
            <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {recentArticles.map((a) => (
                <Card
                  key={a.path}
                  href={a.path}
                  eyebrow={pillarLabel[a.frontmatter.pillar] ?? a.frontmatter.pillar}
                  title={a.frontmatter.title}
                  description={a.frontmatter.description}
                  meta={
                    <span>
                      {a.frontmatter.readingMinutes} min · Updated{" "}
                      {new Date(a.frontmatter.updatedAt ?? a.frontmatter.publishedAt).toLocaleDateString(
                        "en-US",
                        { month: "short", year: "numeric" }
                      )}
                    </span>
                  }
                />
              ))}
            </div>
          )}

          {authoredArticles.length > recentArticles.length && (
            <p className="mt-8 text-sm">
              <Link
                href="/advice"
                className="no-underline text-navy-700 hover:text-navy-900"
              >
                See every article →
              </Link>
            </p>
          )}
        </div>
      </Section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          personSchema({
            name: author.name,
            url: author.url,
            image: author.photo,
            jobTitle: author.role,
            description: author.shortBio,
            ...(sameAs.length ? { sameAs } : {}),
          })
        )}
      />
    </>
  );
}
