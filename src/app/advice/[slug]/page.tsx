import { notFound } from "next/navigation";
import { ArticlePage } from "@/components/content/ArticlePage";
import { buildMetadata } from "@/lib/metadata";
import { loadArticle, listArticleSlugs } from "@/lib/articles-loader";
import { kenHoven } from "@/content/authors/ken-hoven";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  const slugs = await listArticleSlugs("advice");
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params;
  const article = await loadArticle("advice", slug);
  if (!article) return buildMetadata({ title: "Article not found", noIndex: true });
  return buildMetadata({
    title: article.frontmatter.title,
    description: article.frontmatter.description,
    path: article.path,
    type: "article",
    publishedAt: article.frontmatter.publishedAt,
    updatedAt: article.frontmatter.updatedAt,
    authorName: kenHoven.name,
    section: "Honest Advice",
  });
}

export default async function AdviceArticle({ params }: { params: Params }) {
  const { slug } = await params;
  const article = await loadArticle("advice", slug);
  if (!article) notFound();
  return <ArticlePage article={article} />;
}
