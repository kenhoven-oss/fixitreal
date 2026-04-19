import Link from "next/link";
import type { ReactNode } from "react";

type CardProps = {
  href?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  meta?: ReactNode;
  children?: ReactNode;
};

export function Card({ href, eyebrow, title, description, meta, children }: CardProps) {
  const content = (
    <>
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-wider text-amber-700">
          {eyebrow}
        </p>
      )}
      <h3 className="mt-2 font-serif text-xl leading-snug text-navy-900">{title}</h3>
      {description && <p className="mt-2 text-sm text-ink-600 leading-relaxed">{description}</p>}
      {meta && <div className="mt-3 text-xs text-ink-500">{meta}</div>}
      {children}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="block rounded-lg border border-ink-200 bg-white p-6 no-underline transition-colors hover:border-navy-300 hover:shadow-sm"
      >
        {content}
      </Link>
    );
  }

  return <div className="rounded-lg border border-ink-200 bg-white p-6">{content}</div>;
}
