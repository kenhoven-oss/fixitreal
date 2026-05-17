import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // ----------------------------------------------------------------------
      // Duplicate URL consolidation: 301 from the /tools/diy-or-hire/<job> tool
      // pages to the corresponding /diy-or-hire/<article> long-form articles.
      //
      // Both URLs previously served substantially-overlapping content (verdict,
      // cost comparison, when-to-DIY vs when-to-hire). The article is the
      // stronger long-form result; the tool page added an interactive verdict
      // banner but the article carries the same information in narrative form.
      // Consolidating to the article eliminates keyword cannibalization.
      //
      // Pass 8 added a canonical-tag override pointing job → article. That's
      // still in place as defense-in-depth. This redirect is the primary fix.
      //
      // Permanent (301) — these old URLs are not coming back.
      // ----------------------------------------------------------------------
      {
        source: "/tools/diy-or-hire/replace-toilet",
        destination: "/diy-or-hire/toilet",
        permanent: true,
      },
      {
        source: "/tools/diy-or-hire/replace-garbage-disposal",
        destination: "/diy-or-hire/garbage-disposal",
        permanent: true,
      },
      {
        source: "/tools/diy-or-hire/install-ceiling-fan",
        destination: "/diy-or-hire/ceiling-fan",
        permanent: true,
      },
      {
        source: "/tools/diy-or-hire/install-dishwasher",
        destination: "/diy-or-hire/dishwasher",
        permanent: true,
      },
      {
        source: "/tools/diy-or-hire/install-garage-door-opener",
        destination: "/diy-or-hire/garage-door-opener",
        permanent: true,
      },
      // Pass 10: 3 additional duplicates whose job records didn't carry an
      // explicit relatedArticles.decision field but whose slugs map clearly
      // to existing /diy-or-hire/<article> long-form content.
      {
        source: "/tools/diy-or-hire/replace-water-heater",
        destination: "/diy-or-hire/water-heater",
        permanent: true,
      },
      {
        source: "/tools/diy-or-hire/unclog-drain",
        destination: "/diy-or-hire/unclog-drain",
        permanent: true,
      },
      {
        source: "/tools/diy-or-hire/replace-outlet-gfci",
        destination: "/diy-or-hire/gfci-outlet",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
