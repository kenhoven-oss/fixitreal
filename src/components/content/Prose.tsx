import type { ReactNode } from "react";

type ProseProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Typography wrapper for long-form article bodies.
 * Uses Tailwind utility classes instead of @tailwindcss/typography to keep bundle lean.
 */
export function Prose({ children, className = "" }: ProseProps) {
  return (
    <div
      className={`
        max-w-2xl mx-auto text-ink-800
        [&>p]:my-4 [&>p]:leading-relaxed [&>p]:text-base
        [&>h2]:mt-10 [&>h2]:mb-3 [&>h2]:font-serif [&>h2]:text-2xl [&>h2]:text-navy-900
        [&>h3]:mt-8 [&>h3]:mb-2 [&>h3]:font-serif [&>h3]:text-xl [&>h3]:text-navy-900
        [&>ul]:my-4 [&>ul]:pl-5 [&>ul]:list-disc [&>ul>li]:my-1.5 [&>ul>li]:leading-relaxed
        [&>ol]:my-4 [&>ol]:pl-5 [&>ol]:list-decimal [&>ol>li]:my-1.5
        [&>blockquote]:my-6 [&>blockquote]:pl-5 [&>blockquote]:border-l-4 [&>blockquote]:border-amber-500 [&>blockquote]:italic [&>blockquote]:text-ink-700
        [&>table]:my-6 [&>table]:w-full [&>table]:text-sm [&>table]:border-collapse
        [&_th]:text-left [&_th]:font-semibold [&_th]:px-3 [&_th]:py-2 [&_th]:border-b [&_th]:border-ink-300 [&_th]:bg-ink-50
        [&_td]:px-3 [&_td]:py-2 [&_td]:border-b [&_td]:border-ink-200
        [&_code]:bg-ink-100 [&_code]:px-1 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-[0.9em] [&_code]:text-navy-800
        [&_strong]:font-semibold [&_strong]:text-navy-900
        [&_a]:text-navy-700 [&_a]:underline [&_a]:decoration-amber-500 [&_a]:decoration-[1.5px] [&_a]:underline-offset-[3px] [&_a:hover]:decoration-navy-700
        ${className}
      `}
    >
      {children}
    </div>
  );
}
