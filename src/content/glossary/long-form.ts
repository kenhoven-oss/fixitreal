/**
 * Glossary terms that have been expanded from a short definition into a full
 * article at the SAME URL (/glossary/<slug>).
 *
 * Every other glossary term page is noindex,follow and out of the sitemap:
 * they run 130-200 words and repeat /glossary (see the AdSense "Low value
 * content" audit, 2026-11-17). A term listed here is the exception: its page
 * renders the long-form body, is indexable, self-canonical and in the sitemap.
 *
 * The URL is kept, not moved to /advice, when the short page already ranks.
 * header-vs-lintel sat around position 5 for "lintel vs header" on a
 * 178-word page (Search Console, 21 Oct - 17 Nov 2026), so moving it would
 * have traded an earned position for a redirect.
 *
 * Add a term here only with real search evidence and a body that stands on
 * its own. This is not a switch for re-indexing the glossary.
 *
 * Kept free of JSX so sitemap.ts can import it. The body component for each
 * slug is registered in src/components/content/glossary/long-form-bodies.tsx.
 */
export type GlossaryLongForm = {
  /** <title> tag. */
  title: string;
  /** Meta description. */
  description: string;
  /** On-page H1 and Article headline. */
  heading: string;
  /** Lede under the H1. */
  lede: string;
  publishedAt: string;
  updatedAt: string;
  faq: Array<{ question: string; answer: string }>;
  sources: Array<{ label: string; url: string }>;
  related: Array<{ path: string; label: string }>;
};

export const GLOSSARY_LONG_FORM: Record<string, GlossaryLongForm> = {
  "header-vs-lintel": {
    title: "Header vs. Lintel: What's the Difference? (With Examples)",
    description:
      "A header and a lintel both carry the load over a door or window. One sits in a wood-framed wall, the other in brick. How to tell them apart and spot trouble.",
    heading: "Header vs. lintel: what's the difference?",
    lede: "Both are short beams that carry the weight above a door or window opening. In the US, a header is the one inside a wood-framed wall and a lintel is the one in brick, block or stone. Many brick houses have both over the same window.",
    publishedAt: "2026-05-16",
    updatedAt: "2026-11-19",
    faq: [
      {
        question: "Is a lintel the same as a header?",
        answer:
          "They do the same job: carry the load above an opening across to the wall on each side. The difference is the wall. In US usage a header is the member in a wood- or steel-framed wall, usually built from lumber or engineered wood. A lintel is the member in a masonry wall or brick veneer, usually a steel angle, precast concrete or reinforced masonry. In British usage 'lintel' is used for both.",
      },
      {
        question: "Is a header the same as a beam?",
        answer:
          "A header is a kind of beam: a short one that sits inside a wall over a door, window or pass-through. 'Beam' is the general word and usually refers to a longer member carrying a floor or roof across open space. When a wall is removed and replaced with a long member, most contractors call that a beam rather than a header.",
      },
      {
        question: "Does every door and window need a header?",
        answer:
          "Every opening in a load-bearing wall does. The International Residential Code sizes those headers from span tables. In a wall that carries no load from above, the same code does not require a load-bearing header, which is why you may find only a flat piece of lumber over an interior closet door. Whether a particular wall is load-bearing is a question to settle before anyone cuts into it.",
      },
      {
        question: "Can I replace a rusted lintel myself?",
        answer:
          "No, treat it as a job for a mason. The brick above has to be temporarily supported or removed, the old steel cut out, new steel and flashing installed, and the brick rebuilt to match. Done wrong, the masonry above the opening can come down. Scraping and painting light surface rust on an exposed lintel edge is reasonable maintenance; replacing the steel is not a DIY project.",
      },
      {
        question: "What is over my garage door: a header or a lintel?",
        answer:
          "In a wood-framed garage wall it is a header, and because the opening is wide it is usually a large engineered-wood or steel member. If the garage has a brick face, there is normally also a long steel lintel carrying the brick across the opening. Cracks in the brick above a garage door are a common sign that this lintel is rusting or sagging.",
      },
      {
        question: "Who do I call for a sagging header or a cracked lintel?",
        answer:
          "Start with a structural engineer if anything is sagging, cracks are widening, or you plan to widen an opening; their written report tells a contractor exactly what to build. For the repair itself, a framing or general contractor replaces a header and a mason replaces a lintel.",
      },
    ],
    sources: [
      {
        label: "Brick Industry Association — Technical Note 31B, Structural Steel Lintels",
        url: "https://www.gobrick.com/media/file/31b-structural-steel-lintels.pdf",
      },
      {
        label: "Brick Industry Association — Technical Note 28, Brick Veneer / Wood Stud Walls",
        url: "https://www.gobrick.com/media/file/28-brick-veneer-wood-stud-walls.pdf",
      },
      {
        label: "Journal of Light Construction — Exterior Wall Headers (IRC Section R602.7 and its span tables)",
        url: "https://www.jlconline.com/how-to/framing/exterior-wall-headers_o",
      },
      {
        label: "National Park Service — Common Problems with Brick Masonry",
        url: "https://www.nps.gov/articles/common-problems-with-brick-masonry.htm",
      },
      {
        label: "Mason Contractors Association of America — Loose Steel or Reinforced Masonry Lintels?",
        url: "https://masoncontractors.org/technical-talks/loose-steel-or-reinforced-masonry-lintels",
      },
    ],
    related: [
      { path: "/advice/cracked-brick-veneer", label: "Cracked brick veneer: cosmetic or structural, and what repairs cost" },
      { path: "/glossary/load-bearing-wall", label: "What is a load-bearing wall?" },
      { path: "/advice/vetting-a-contractor", label: "How to vet a contractor" },
      { path: "/advice/three-contractor-quotes", label: "Getting three contractor quotes" },
      { path: "/resources/sample-home-inspection-report", label: "Sample home inspection report" },
    ],
  },
};

export function getGlossaryLongForm(slug: string): GlossaryLongForm | undefined {
  return GLOSSARY_LONG_FORM[slug];
}

export function getGlossaryLongFormSlugs(): string[] {
  return Object.keys(GLOSSARY_LONG_FORM);
}
