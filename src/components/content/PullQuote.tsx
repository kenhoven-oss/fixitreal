import type { ReactNode } from "react";

export function PullQuote({ children }: { children: ReactNode }) {
  return (
    <blockquote className="my-8 pl-6 border-l-4 border-amber-500 italic text-navy-900">
      {/* div, not p: MDX passes children already wrapped in <p>, and <p> inside <p>
          is invalid HTML that breaks React hydration. */}
      <div className="font-serif text-xl leading-relaxed [&>p]:my-0 [&>p+p]:mt-3">{children}</div>
    </blockquote>
  );
}
