/**
 * Walk a raw MDX string and extract H2/H3 headings into a flat TOC.
 *
 * Why hand-rolled instead of remark-toc / rehype-toc:
 * - We already pass MDX through rehype-slug, so the same slug() algorithm
 *   that rehype-slug uses must be matched here for anchor IDs to line up.
 * - We want the TOC available outside the MDX render pass — to render a
 *   sticky sidebar adjacent to (not inside) the article body. Compile-time
 *   walking returns plain data we can store anywhere.
 *
 * We deliberately ignore H1 (the article H1 is the page title, never inside
 * the body content) and ignore H4+ (too granular to be useful for skimming).
 */

export type TocItem = { depth: 2 | 3; text: string; slug: string };

/**
 * github-slugger-style slug generation. Matches rehype-slug's default,
 * which uses github-slugger under the hood. Kept inline so we don't pull
 * github-slugger into the runtime bundle.
 */
function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\p{L}\p{N}\s-]/gu, "") // strip punctuation
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

/** Strip inline MDX/markdown noise so the visible TOC text reads cleanly. */
function cleanHeading(raw: string): string {
  return raw
    .replace(/`([^`]+)`/g, "$1") // inline code
    .replace(/\*\*([^*]+)\*\*/g, "$1") // bold
    .replace(/\*([^*]+)\*/g, "$1") // italic
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1") // links → text
    .trim();
}

export function extractToc(mdxSource: string): TocItem[] {
  // Skip the frontmatter block so headings inside YAML examples don't leak in.
  const body = mdxSource.replace(/^---[\s\S]*?\n---\n/, "");
  // Skip fenced code blocks so commented "## ..." inside them is ignored.
  const stripped = body.replace(/```[\s\S]*?```/g, "");

  const items: TocItem[] = [];
  const seen = new Map<string, number>();

  for (const line of stripped.split("\n")) {
    const m = /^(#{2,3})\s+(.+?)\s*$/.exec(line);
    if (!m) continue;
    const depth = m[1].length as 2 | 3;
    const text = cleanHeading(m[2]);
    if (!text) continue;
    let slug = slugify(text);
    // Handle duplicate slugs the same way github-slugger does: -1, -2, ...
    const dupeCount = seen.get(slug) ?? 0;
    if (dupeCount > 0) slug = `${slug}-${dupeCount}`;
    seen.set(slug, dupeCount + 1);
    items.push({ depth, text, slug });
  }

  return items;
}
