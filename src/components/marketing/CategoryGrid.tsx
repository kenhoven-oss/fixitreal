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
 * Imagery currently uses the Stitch-exported Google AIDA CDN URLs as
 * placeholders — replace with self-hosted / licensed photography before
 * production. Each entry already has proper alt text for accessibility.
 */
const categories: Category[] = [
  {
    href: "/advice/faucet-dripping",
    title: "Plumbing",
    description: "Leaks, fixtures, and your home's water system.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCFdEl-PODt7giVdSQd96ImxS31W7OBUaz0yxykMQ60RtT0iRHePfko_m-wLpSDwHUlfn-8s8bh_B1S5LakMHYWtB7EfwHj6bD6Op7pdpjnUwqbKeZ3271Ft87FosAQc56MHzPhl71Ek32DS0OZ4EGI5tV2AzVlGR3ny2d7RK8Q2rVYGb7XIiDpnyj0a_3b_Sdur4fXjJG3HfNgPmZgKP0EmWq6L_yNAos6UXTcbnPerLyOyIYVU-VD3S6hjPmba4BUY9jMiDd5vw",
    imageAlt: "Close-up of a chrome bathroom faucet with water droplets",
    span: "large",
  },
  {
    href: "/advice/breaker-keeps-tripping",
    title: "Electrical",
    description: "Outlets, breakers, and the safety margin that keeps them safe.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDOztHAGYC1_AC87ZdwNBjuAyJ4Y4D9tEJr0NR9O8mC2kB9XpPb0VUVAXyb5cl4teb6A01yYLaZ-F62gkPWgYvI-edNWm-3a2V_h9IoWmy4i8y87WjN8Zoikw2yVNhIFTV0W3Vt_G-eck6SgTKiYRmJiS1ZLcVtVfyT2Vkxaj6OojZhaGZiwe1X3wdNzldKpw19whLbzbMy8MYgt_wq1ywNzv3_PsIFKsGxj3gBm9WelC2XQa4VTbp9rkuIOx3QYZiReWQlJPajRA",
    imageAlt: "Modern light switch on a minimalist grey wall",
    span: "large",
  },
  {
    href: "/advice/ac-not-cooling",
    title: "HVAC",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC9NGPDPlorSTHzuivuW1C3Kn9qSBpYzLOvPZ45gqKD8UXKLmDdcUBwoioPdl0aCr0PqeDeXaTLpMUaV50ylWsUa0547B8I0sFPo6oQW5D2vrBGbPD7EB8Gp8Q8LIzYcydgsq47hb5CECe1PmOoZzY1UseSI7hFsFNmOK5hjBG44UOe1N7qA3OmR1c1XbTjj-Go7xEqzykNGMpiDjmwpKeUqL4QkQDusxIq9wX0v3q2bgv64HtZvE3pJxIlur-w6WZcLJQ-faKSSg",
    imageAlt: "Exterior siding of a modern home with clean lines",
    span: "small",
  },
  {
    href: "/advice/garbage-disposal-leaking",
    title: "Kitchen",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBWYGk1ia6vT-YTxceqvlf5Lvd-xL52IcvTsSZNWdwcIL5-ryEKZcaqdIaqWNsh-q50ZosGHPQEwaMZYjzQQ9Mw5ESaGKDPQO3W3gQ2xEPBy2pYC9atB4c2Wef_PZlMYeT2erWvNu1Y10AoUk6-bcZd_CROpbqmBn53nojj6Orvr8uH1UnJEN-7TTEdcxpbIVTsdGCrH1LeaMymNBT476Foi5XdG3c3BbVUdqMOAxLoaBi3XgkTG2suCuj5iR-8_m1HhEQtAAjk-w",
    imageAlt: "Stainless steel stovetop against a tiled backsplash",
    span: "small",
  },
  {
    href: "/advice/drywall-damage-after-a-leak",
    title: "Walls & Ceilings",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA7lZKz9HLIHNKIfU3l7VGFLKjkcQcFuilHT2olAhD6P-wW2mHEXaDvKJtIyFZAGx2Ah_fndqK4otSSukry6tz9P9ei6fjZc-NZ_cuDeIzIPg9NyXm9L7yictWmaqNjbPQkDuLVT5FuSd5zwd65VRYKLovjYn3ZsuxEyH6oWrTttvPV5MW5awBO1Atkbh3bU8uAnalSCMoLkLF8xy4Yrey5WDEyAQbMZOxkkKNCoYLqkxLwo8IvFp9HQpH-VtzTbnIkW5T0CjLZ6g",
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
              unoptimized
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
