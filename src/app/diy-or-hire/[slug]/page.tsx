import { notFound } from "next/navigation";
import { ArticlePage } from "@/components/content/ArticlePage";
import { buildMetadata } from "@/lib/metadata";
import { loadArticle, listArticleSlugs } from "@/lib/articles-loader";
import { leeHoven } from "@/content/authors/lee-hoven";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  const slugs = await listArticleSlugs("diy-or-hire");
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params;
  const article = await loadArticle("diy-or-hire", slug);
  if (!article) return buildMetadata({ title: "Article not found", noIndex: true });
  return buildMetadata({
    title: article.frontmatter.title,
    description: article.frontmatter.description,
    path: article.path,
    type: "article",
    publishedAt: article.frontmatter.publishedAt,
    updatedAt: article.frontmatter.updatedAt,
    authorName: leeHoven.name,
    section: "DIY or Hire",
  });
}

export default async function DiyOrHireArticle({ params }: { params: Params }) {
  const { slug } = await params;
  const article = await loadArticle("diy-or-hire", slug);
  if (!article) notFound();
  return <ArticlePage article={article} />;
}
