"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

export type SearchItem = {
  title: string;
  description: string;
  path: string;
  pillarLabel: string;
  keywords: string[];
};

type SearchClientProps = {
  index: SearchItem[];
  initialQuery?: string;
};

/**
 * Client-side typeahead search over the pre-built index.
 *
 * The index is inlined by the parent server component so there's no network
 * fetch — query-time is pure in-memory filtering. Scoring is simple but
 * effective at this site scale (~60 items): title matches weighted 3,
 * keyword matches 2, description 1. Highest-scoring results surface first.
 */
export function SearchClient({ index, initialQuery = "" }: SearchClientProps) {
  const [query, setQuery] = useState(initialQuery);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Autofocus only on mount.
    inputRef.current?.focus();
  }, []);

  const results = useMemo(() => scoreAndFilter(index, query), [index, query]);
  const showEmptyState = query.trim().length >= 2 && results.length === 0;
  const showPlaceholder = query.trim().length < 2;

  return (
    <div>
      <div className="relative">
        <input
          ref={inputRef}
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Try: breaker, water heater, toilet cost, GFCI…"
          aria-label="Search FixItReal"
          className="w-full rounded-lg border border-ink-300 bg-white px-5 py-4 text-lg text-navy-900 placeholder:text-ink-500 focus:border-navy-700 focus:outline-none focus:ring-2 focus:ring-amber-400/50"
        />
        {query && (
          <button
            type="button"
            onClick={() => setQuery("")}
            aria-label="Clear search"
            className="absolute inset-y-0 right-3 my-auto text-ink-500 hover:text-navy-900 text-sm"
          >
            Clear
          </button>
        )}
      </div>

      <p className="mt-3 text-xs text-ink-600">
        {showPlaceholder && (
          <>Type at least two characters to search every article, cost guide, and decision tool.</>
        )}
        {!showPlaceholder && !showEmptyState && (
          <>
            {results.length} result{results.length === 1 ? "" : "s"}.
          </>
        )}
        {showEmptyState && (
          <>
            No matches. Try a broader term — e.g. &quot;drain&quot; instead of
            &quot;kitchen drain snake&quot;.
          </>
        )}
      </p>

      {!showPlaceholder && results.length > 0 && (
        <ul className="mt-6 divide-y divide-ink-200 border-y border-ink-200">
          {results.slice(0, 25).map((r) => (
            <li key={r.path}>
              <Link
                href={r.path}
                className="block py-4 no-underline hover:bg-ink-50 -mx-3 px-3 rounded-md transition-colors"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-amber-700">
                  {r.pillarLabel}
                </p>
                <p className="mt-1 font-serif text-lg text-navy-900 leading-snug">
                  {r.title}
                </p>
                <p className="mt-1 text-sm text-ink-700 leading-relaxed line-clamp-2">
                  {r.description}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

/** Score each index item against the query; return non-zero results sorted desc. */
function scoreAndFilter(index: SearchItem[], query: string): SearchItem[] {
  const q = query.trim().toLowerCase();
  if (q.length < 2) return [];

  const terms = q.split(/\s+/).filter((t) => t.length > 0);
  if (terms.length === 0) return [];

  const scored = index
    .map((item) => {
      const title = item.title.toLowerCase();
      const description = item.description.toLowerCase();
      const keywords = item.keywords.map((k) => k.toLowerCase());

      let score = 0;
      for (const t of terms) {
        if (title.includes(t)) score += 3;
        if (keywords.some((k) => k.includes(t))) score += 2;
        if (description.includes(t)) score += 1;
        // Slight boost when the full query phrase appears in the title.
        if (title.includes(q)) score += 2;
      }
      return { item, score };
    })
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score);

  return scored.map((s) => s.item);
}
