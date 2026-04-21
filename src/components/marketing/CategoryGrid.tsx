import Link from "next/link";
import Image from "next/image";

type Category = {
  href: string;
  title: string;
  description?: string;
  imageUrl: string;
  imageAlt: string;
  /** Span controls bento layout. */
  span: "large" | "medium" | "small";
};

/**
 * Category imagery is self-hosted under /public/images/categories/ so that
 * Next can run full image optimization (resizing + AVIF/WebP conversion) and
 * we aren't dependent on an external CDN for above-the-fold assets.
 */
const categories: Category[] = [
  {
    href: "/advice/faucet-dripping",
    title: "Plumbing",
    description: "Leaks, fixtures, and your home's water system.",
    imageUrl: "/images/categories/plumbing.jpg",
    imageAlt: "Close-up of a chrome bathroom faucet with water droplets",
    span: "large",
  },
  {
    href: "/advice/breaker-keeps-tripping",
    title: "Electrical",
    description: "Outlets, breakers, and the safety margin that keeps them safe.",
    imageUrl: "/images/categories/electrical.jpg",
    imageAlt: "Modern light switch on a minimalist grey wall",
    span: "large",
  },
  {
    href: "/advice/ac-not-cooling",
    title: "HVAC",
    imageUrl: "/images/categories/hvac.jpg",
    imageAlt: "Exterior siding of a modern home with clean lines",
    span: "small",
  },
  {
    href: "/advice/garbage-disposal-leaking",
    title: "Kitchen",
    imageUrl: "/images/categories/kitchen.jpg",
    imageAlt: "Stainless steel stovetop against a tiled backsplash",
    span: "small",
  },
  {
    href: "/advice/drywall-damage-after-a-leak",
    title: "Walls & Ceilings",
    imageUrl: "/images/categories/walls-ceilings.jpg",
    imageAlt: "Smoothly finished drywall and clean trim detail",
    span: "small",
  },
];

export function CategoryGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-6">
      {categories.map((cat) => {
        const spanClass =
          cat.span === "large"
            ? "md:col-span-3 h-72 md:h-96"
            : "md:col-span-2 h-64 md:h-72";
        return (
          <Link
            key={cat.title}
            href={cat.href}
            className={`relative group overflow-hidden rounded-lg bg-navy-900 no-underline ${spanClass}`}
          >
            <Image
              src={cat.imageUrl}
              alt={cat.imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-7">
              <h3 className="font-serif text-xl md:text-2xl font-semibold text-white leading-snug">
                {cat.title}
              </h3>
              {cat.description && (
                <p className="mt-1.5 text-sm text-white/80 leading-relaxed max-w-xs">
                  {cat.description}
                </p>
              )}
              <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-white/90 group-hover:text-white">
                Read the guide →
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
