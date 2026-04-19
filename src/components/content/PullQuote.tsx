import type { ReactNode } from "react";

export function PullQuote({ children }: { children: ReactNode }) {
  return (
    <blockquote className="my-8 pl-6 border-l-4 border-amber-500 italic text-navy-900">
      <p className="font-serif text-xl leading-relaxed">{children}</p>
    </blockquote>
  );
}
