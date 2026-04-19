export const site = {
  name: "FixItReal",
  domain: "fixitreal.com",
  url: "https://www.fixitreal.com",
  tagline: "Fix it right, not twice.",
  explainer: "Know what to fix, what to buy, and when to hire help.",
  description:
    "FixItReal is a consumer-advocate home repair site. Honest answers on what to fix, what it should cost, and when to hire help.",
  locale: "en_US",
  contactEmail: "hello@fixitreal.com",
  authorSlug: "lee-hoven",
  nav: [
    { href: "/diy-or-hire", label: "DIY or Hire" },
    { href: "/costs", label: "Costs" },
    { href: "/advice", label: "Advice" },
    { href: "/tools", label: "Tools" },
    { href: "/about", label: "About" },
  ] as const,
  pillars: [
    {
      slug: "diy-or-hire",
      href: "/diy-or-hire",
      name: "DIY or Hire",
      description: "Honest verdicts on whether to do it yourself or call a pro.",
    },
    {
      slug: "costs",
      href: "/costs",
      name: "Repair Costs",
      description: "What home repairs actually cost, with the math shown.",
    },
    {
      slug: "advice",
      href: "/advice",
      name: "Honest Advice",
      description: "Contractor vetting, pricing red flags, and consumer-first guidance.",
    },
  ] as const,
  social: {
    twitter: null as string | null,
    linkedin: null as string | null,
  },
  verification: {
    google: "97rfapfS5wg2O5RCryKUEabuEcBEGHmaxmvTFNeaoNA",
  },
} as const;

export type Pillar = (typeof site.pillars)[number];
export type PillarSlug = Pillar["slug"];
