export const kenHoven = {
  slug: "ken-hoven",
  name: "Ken Hoven",
  role: "Founder & Editor",
  url: "/about/authors/ken-hoven",
  bio: "Ken Hoven is the founder and editor of FixItReal. After years of homeowner repairs, contractor quotes, and the occasional $600 disaster that should have been a $120 afternoon, Ken started FixItReal to help other homeowners fix the right things, skip the wrong ones, and know a fair price when they hear it.",
  shortBio: "Founder and editor of FixItReal — writing honest home repair cost data, DIY-vs-pro decisions, and contractor-vetting advice for US homeowners.",
  photo: "/authors/ken-hoven.jpg",
  social: {
    linkedin: null as string | null,
    twitter: null as string | null,
  },
  credentials: ["Homeowner", "15+ years DIY repairs"] as const,
  expertiseAreas: [
    "Repair cost analysis",
    "DIY-vs-pro decisions",
    "Contractor vetting",
    "Consumer advocacy",
  ] as const,
} as const;

export type Author = typeof kenHoven;
