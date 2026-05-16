import { loadArticle, listArticleSlugs } from "@/lib/articles-loader";
import {
  ogSize as size,
  ogContentType as contentType,
  renderArticleOgImage,
} from "@/components/og/ArticleOgImage";

export { size, contentType };
export const alt = "FixItReal — Repair Costs";

export async function generateStaticParams() {
  const slugs = await listArticleSlugs("costs");
  return slugs.map((slug) => ({ slug }));
}

export default async function OgImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await loadArticle("costs", slug);
  const title = article?.frontmatter.title ?? "Repair Costs";
  return renderArticleOgImage({ eyebrow: "Repair Costs · 2026", title });
}
