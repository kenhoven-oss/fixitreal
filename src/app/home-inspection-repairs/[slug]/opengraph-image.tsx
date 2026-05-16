import { loadArticle, listArticleSlugs } from "@/lib/articles-loader";
import {
  ogSize as size,
  ogContentType as contentType,
  renderArticleOgImage,
} from "@/components/og/ArticleOgImage";

export { size, contentType };
export const alt = "FixItReal — Inspection Repairs";

export async function generateStaticParams() {
  const slugs = await listArticleSlugs("home-inspection-repairs");
  return slugs.map((slug) => ({ slug }));
}

export default async function OgImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await loadArticle("home-inspection-repairs", slug);
  const title = article?.frontmatter.title ?? "Inspection Repairs";
  return renderArticleOgImage({ eyebrow: "Inspection Repairs", title });
}
