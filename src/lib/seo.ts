import { site } from "@/content/site";
import { env } from "@/lib/env";

export type BreadcrumbItem = { name: string; href: string };

/** Build a breadcrumb trail from URL path segments, assuming pillar hub titling. */
export function buildBreadcrumb(path: string, title?: string): BreadcrumbItem[] {
  const segments = path.replace(/^\/|\/$/g, "").split("/").filter(Boolean);
  const crumbs: BreadcrumbItem[] = [{ name: "Home", href: "/" }];

  let href = "";
  for (let i = 0; i < segments.length; i++) {
    href += `/${segments[i]}`;
    const isLast = i === segments.length - 1;
    const pillar = site.pillars.find((p) => p.slug === segments[i]);
    if (pillar && i === 0) {
      crumbs.push({ name: pillar.name, href });
      continue;
    }
    if (segments[0] === "tools" && segments[i] === "tools") {
      crumbs.push({ name: "Tools", href });
      continue;
    }
    if (segments[0] === "about" && segments[i] === "about") {
      crumbs.push({ name: "About", href });
      continue;
    }
    crumbs.push({
      name: isLast && title ? title : toTitleCase(segments[i]),
      href,
    });
  }
  return crumbs;
}

function toTitleCase(slug: string): string {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export function absoluteUrl(path: string): string {
  if (path.startsWith("http")) return path;
  return `${env.siteUrl}${path.startsWith("/") ? "" : "/"}${path}`;
}
