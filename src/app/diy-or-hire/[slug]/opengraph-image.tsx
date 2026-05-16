import { loadArticle, listArticleSlugs } from "@/lib/articles-loader";
import {
  ogSize as size,
  ogContentType as contentType,
  renderArticleOgImage,
} from "@/components/og/ArticleOgImage";

export { size, contentType };
export const alt = "FixItReal — DIY or Hire";

export async function generateStaticParams() {
  const slugs = await listArticleSlugs("diy-or-hire");
  return slugs.map((slug) => ({ slug }));
}

export default async function OgImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await loadArticle("diy-or-hire", slug);
  const title = article?.frontmatter.title ?? "DIY or Hire";
  return renderArticleOgImage({ eyebrow: "DIY or Hire", title });
}
