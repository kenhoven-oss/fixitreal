import { loadArticle, listArticleSlugs } from "@/lib/articles-loader";
import {
  ogSize as size,
  ogContentType as contentType,
  renderArticleOgImage,
} from "@/components/og/ArticleOgImage";

export { size, contentType };
export const alt = "FixItReal — Honest Advice";

export async function generateStaticParams() {
  const slugs = await listArticleSlugs("advice");
  return slugs.map((slug) => ({ slug }));
}

export default async function OgImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await loadArticle("advice", slug);
  const title = article?.frontmatter.title ?? "Honest Advice";
  return renderArticleOgImage({ eyebrow: "Honest Advice", title });
}
