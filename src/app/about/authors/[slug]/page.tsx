import { notFound } from "next/navigation";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Badge } from "@/components/ui/Badge";
import { buildMetadata } from "@/lib/metadata";
import { jsonLdScript, personSchema } from "@/lib/jsonld";
import { leeHoven } from "@/content/authors/lee-hoven";

const authors = {
  [leeHoven.slug]: leeHoven,
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
    noIndex: true,
  });
}

export default async function AuthorProfile({ params }: { params: Params }) {
  const { slug } = await params;
  const author = authors[slug as keyof typeof authors];
  if (!author) notFound();

  const sameAs = [author.social.linkedin, author.social.twitter].filter(Boolean) as string[];

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

      <Section padding="sm" size="sm">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="relative h-32 w-32 shrink-0 rounded-full bg-ink-200 overflow-hidden ring-1 ring-ink-300">
            <Image
              src={author.photo}
              alt={author.name}
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
            <div className="mt-5 flex flex-wrap gap-2">
              {author.credentials.map((c) => (
                <Badge key={c} tone="navy" size="md">
                  {c}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="font-serif text-2xl text-navy-900">Areas of focus</h2>
          <ul className="mt-4 grid gap-2 md:grid-cols-2">
            {author.expertiseAreas.map((e) => (
              <li key={e} className="text-ink-700">
                <span aria-hidden className="text-amber-500 mr-2">·</span>
                {e}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12">
          <h2 className="font-serif text-2xl text-navy-900">Recent articles</h2>
          <p className="mt-3 text-ink-600 text-sm">Articles will appear here as they publish.</p>
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
