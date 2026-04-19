import Link from "next/link";
import type { BreadcrumbItem } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/jsonld";
import { jsonLdScript } from "@/lib/jsonld";

type BreadcrumbProps = {
  items: BreadcrumbItem[];
};

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-ink-500">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(breadcrumbSchema(items))}
      />
      <ol className="flex flex-wrap items-center gap-1">
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={item.href} className="flex items-center gap-1">
              {isLast ? (
                <span aria-current="page" className="text-ink-700">
                  {item.name}
                </span>
              ) : (
                <Link href={item.href} className="no-underline hover:text-navy-900">
                  {item.name}
                </Link>
              )}
              {!isLast && (
                <span aria-hidden="true" className="text-ink-400">
                  /
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
