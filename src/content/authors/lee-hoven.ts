export const leeHoven = {
  slug: "lee-hoven",
  name: "Lee Hoven",
  role: "Founder & Editor",
  url: "/about/authors/lee-hoven",
  bio: "Lee Hoven is the founder and editor of FixItReal. After years of homeowner repairs, contractor quotes, and the occasional $600 disaster that should have been a $120 afternoon, Lee started FixItReal to help other homeowners fix the right things, skip the wrong ones, and know a fair price when they hear it.",
  shortBio: "Founder & Editor of FixItReal. Homeowner, DIY-er, advocate for honest home repair.",
  photo: "/authors/lee-hoven.jpg",
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

export type Author = typeof leeHoven;
