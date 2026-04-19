import type { ReactNode } from "react";

type ExternalLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

export function ExternalLink({ href, children, className = "" }: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`underline decoration-amber-500 decoration-[1.5px] underline-offset-[3px] hover:decoration-navy-700 ${className}`}
    >
      {children}
      <span aria-hidden="true" className="ml-0.5 text-[0.8em] text-ink-500">↗</span>
    </a>
  );
}
