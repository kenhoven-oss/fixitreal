import {
  ogSize as size,
  ogContentType as contentType,
  renderArticleOgImage,
} from "@/components/og/ArticleOgImage";
import {
  getAllStateCostParams,
  getGuideBySlug,
  getStateByslug,
} from "@/content/state-cost-data";

export { size, contentType };
export const alt = "FixItReal — State cost guide";

export function generateStaticParams() {
  return getAllStateCostParams();
}

export default async function OgImage({
  params,
}: {
  params: Promise<{ slug: string; state: string }>;
}) {
  const { slug, state } = await params;
  const guide = getGuideBySlug(slug);
  const stateData = getStateByslug(state);
  const title =
    guide && stateData
      ? `${capitalize(guide.shortName)} cost in ${stateData.name}`
      : "State cost guide";
  return renderArticleOgImage({
    eyebrow: "Repair Costs · State guide",
    title,
  });
}

function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}
