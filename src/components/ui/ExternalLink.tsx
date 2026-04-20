import type { ReactNode } from "react";

type ExternalLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

/**
 * Detect affiliate outbound links so they get the correct rel attributes.
 * Covers Amazon SiteStripe short links and any amazon.com URL carrying an
 * affiliate tag query parameter.
 */
function isAffiliateHref(href: string): boolean {
  return /^https?:\/\/amzn\.to\//i.test(href) || /amazon\.[a-z.]+\/.+[?&]tag=/i.test(href);
}

export function ExternalLink({ href, children, className = "" }: ExternalLinkProps) {
  const affiliate = isAffiliateHref(href);
  const rel = affiliate ? "sponsored nofollow noopener noreferrer" : "noopener noreferrer";

  return (
    <a
      href={href}
      target="_blank"
      rel={rel}
      className={`underline decoration-amber-500 decoration-[1.5px] underline-offset-[3px] hover:decoration-navy-700 ${className}`}
    >
      {children}
      <span aria-hidden="true" className="ml-0.5 text-[0.8em] text-ink-500">↗</span>
    </a>
  );
}
