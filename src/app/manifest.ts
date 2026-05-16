import type { MetadataRoute } from "next";
import { site } from "@/content/site";

/**
 * Web App Manifest — used when users add the site to a homescreen (mobile)
 * or pin it as an installable PWA. Most editorial sites don't bother, but
 * the manifest also feeds Google's "name", "short_name", and "theme_color"
 * into how the SERP-result favicon row renders on mobile.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.name} — ${site.tagline}`,
    short_name: site.name,
    description: site.description,
    start_url: "/",
    display: "browser",
    background_color: "#F7F4ED",
    theme_color: "#182D4A",
    icons: [
      {
        src: "/FIXitREALlogo.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
