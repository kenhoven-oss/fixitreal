import { loadArticle, listArticleSlugs } from "@/lib/articles-loader";
import {
  ogSize as size,
  ogContentType as contentType,
  renderArticleOgImage,
} from "@/components/og/ArticleOgImage";

export { size, contentType };
export const alt = "FixItReal — What Is This?";

export async function generateStaticParams() {
  const slugs = await listArticleSlugs("what-is-this");
  return slugs.map((slug) => ({ slug }));
}

export default async function OgImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await loadArticle("what-is-this", slug);
  const title = article?.frontmatter.title ?? "What Is This?";
  return renderArticleOgImage({ eyebrow: "Identifier guide", title });
}
