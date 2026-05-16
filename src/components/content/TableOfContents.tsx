"use client";

import { useEffect, useState } from "react";
import type { TocItem } from "@/lib/toc";

type TableOfContentsProps = {
  items: TocItem[];
};

/**
 * Sticky-sidebar Table of Contents with active-section highlighting.
 *
 * Why this matters for SEO:
 * - Anchor links to in-article sections show Google the article's structure
 *   and let it surface "Jump to" links + "scroll to text" deep-result rows.
 * - Active highlighting + smooth scroll improves dwell time (a soft ranking
 *   signal) and reduces back-button bounces from skim-readers.
 *
 * Implementation note: IntersectionObserver scopes to the H2/H3 elements
 * rehype-slug emitted. We track the topmost intersecting heading rather
 * than "first visible" so the highlight feels natural while scrolling.
 */
export function TableOfContents({ items }: TableOfContentsProps) {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);

  useEffect(() => {
    if (items.length === 0) return;

    const headings = items
      .map((it) => document.getElementById(it.slug))
      .filter((el): el is HTMLElement => el !== null);
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) =>
              (a.target as HTMLElement).offsetTop -
              (b.target as HTMLElement).offsetTop
          );
        if (visible.length > 0) {
          setActiveSlug((visible[0].target as HTMLElement).id);
        }
      },
      // Trigger when a heading crosses into the top ~30% of the viewport.
      { rootMargin: "0px 0px -70% 0px", threshold: 0 }
    );

    for (const h of headings) observer.observe(h);
    return () => observer.disconnect();
  }, [items]);

  if (items.length < 3) return null;

  return (
    <nav
      aria-label="Table of contents"
      className="text-sm"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-amber-700">
        On this page
      </p>
      <ol className="mt-3 space-y-1.5 border-l border-ink-200">
        {items.map((it) => {
          const isActive = activeSlug === it.slug;
          return (
            <li
              key={it.slug}
              className={it.depth === 3 ? "pl-2" : ""}
            >
              <a
                href={`#${it.slug}`}
                className={[
                  "block -ml-px pl-3 py-0.5 border-l-2 no-underline transition-colors",
                  isActive
                    ? "border-amber-500 text-navy-900 font-semibold"
                    : "border-transparent text-ink-600 hover:text-navy-900 hover:border-ink-300",
                  it.depth === 3 ? "text-[0.85rem]" : "",
                ].join(" ")}
              >
                {it.text}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
