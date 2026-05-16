import { loadArticle, listArticleSlugs } from "@/lib/articles-loader";
import {
  ogSize as size,
  ogContentType as contentType,
  renderArticleOgImage,
} from "@/components/og/ArticleOgImage";

export { size, contentType };
export const alt = "FixItReal — Senior Home Safety";

export async function generateStaticParams() {
  const slugs = await listArticleSlugs("senior-home-safety");
  return slugs.map((slug) => ({ slug }));
}

export default async function OgImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await loadArticle("senior-home-safety", slug);
  const title = article?.frontmatter.title ?? "Senior Home Safety";
  return renderArticleOgImage({ eyebrow: "Senior Home Safety", title });
}
