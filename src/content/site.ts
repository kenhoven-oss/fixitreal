export const site = {
  name: "FixItReal",
  domain: "fixitreal.com",
  url: "https://www.fixitreal.com",
  tagline: "Fix It Right — Not Twice.",
  explainer: "Know what to fix, what to buy, and when to hire help.",
  description:
    "FixItReal is a consumer-advocate home repair site. Honest answers on what to fix, what it should cost, and when to hire help.",
  locale: "en_US",
  contactEmail: "hello@fixitreal.com",
  authorSlug: "ken-hoven",
  nav: [
    { href: "/diy-or-hire", label: "DIY or Hire" },
    { href: "/costs", label: "Costs" },
    { href: "/home-inspection-repairs", label: "Inspection" },
    { href: "/senior-home-safety", label: "Senior Safety" },
    { href: "/contractor-red-flags", label: "Red Flags" },
    { href: "/emergency-repairs", label: "Emergency" },
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
    {
      slug: "home-inspection-repairs",
      href: "/home-inspection-repairs",
      name: "Inspection Repairs",
      description:
        "What sellers must fix, what buyers can ask for, and how to handle post-inspection negotiations.",
    },
    {
      slug: "senior-home-safety",
      href: "/senior-home-safety",
      name: "Senior Home Safety",
      description:
        "Practical home modifications to reduce fall risk and make a home easier to navigate as parents age.",
    },
    {
      slug: "emergency-repairs",
      href: "/emergency-repairs",
      name: "Emergency Repairs",
      description:
        "What to do first when something goes badly wrong — water, electrical, gas, sewage — before the pro arrives.",
    },
    {
      slug: "what-is-this",
      href: "/what-is-this",
      name: "What Is This?",
      description:
        "Identifying the unfamiliar switches, pipes, valves, vents, and small doors that come with every house.",
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
