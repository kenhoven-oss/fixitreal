export const kenHoven = {
  slug: "ken-hoven",
  name: "Ken Hoven",
  role: "Founder & Editor",
  url: "/about/authors/ken-hoven",
  bio: "Ken Hoven is the founder and editor of FixItReal. He spent 20+ years running industrial manufacturing plants — reading vendor quotes, catching padded scopes of work, and deciding what actually needs fixing versus what can wait — before turning that same scrutiny on home repairs. After one too many contractor quotes that didn't survive a second look, Ken started FixItReal to give homeowners the same plain-numbers approach: what a repair should actually cost, when DIY makes sense, and how to spot a quote that's built to pad the bill.",
  shortBio: "Founder and editor of FixItReal — a former plant manager applying 20+ years of vendor-quote and cost-control experience to honest home repair pricing, DIY-vs-pro decisions, and contractor vetting for US homeowners.",
  photo: "/authors/ken-hoven.jpg",
  social: {
    linkedin: null as string | null,
    twitter: null as string | null,
  },
  credentials: ["20+ years manufacturing operations", "Plant management background"] as const,
  expertiseAreas: [
    "Repair cost analysis",
    "DIY-vs-pro decisions",
    "Contractor vetting",
    "Consumer advocacy",
  ] as const,
} as const;

export type Author = typeof kenHoven;
