import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({ noIndex: true });

export default function Home() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24">
      <h1 className="text-4xl font-semibold tracking-tight">FixItReal</h1>
      <p className="mt-4 text-black/70 dark:text-white/70">
        Site in development.
      </p>
    </section>
  );
}
