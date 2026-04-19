import { Section } from "@/components/ui/Section";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { buildMetadata } from "@/lib/metadata";
import { jsonLdScript, contactPageSchema } from "@/lib/jsonld";
import { site } from "@/content/site";

export const metadata = buildMetadata({
  title: "Contact",
  description: `Email FixItReal directly at ${site.contactEmail}. We read every message and respond to legitimate inquiries within a few days.`,
  path: "/about/contact",
});

export default function ContactPage() {
  return (
    <>
      <Section padding="md" size="lg">
        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "About", href: "/about" },
            { name: "Contact", href: "/about/contact" },
          ]}
        />
      </Section>

      <Section padding="sm" size="sm">
        <h1 className="font-serif text-4xl text-navy-900">Contact</h1>

        <div className="mt-8 space-y-5 text-ink-800 leading-relaxed">
          <p>
            The fastest way to reach FixItReal is email.
          </p>
          <p>
            <a
              href={`mailto:${site.contactEmail}`}
              className="font-mono text-navy-800 text-lg no-underline hover:text-navy-900"
            >
              {site.contactEmail}
            </a>
          </p>

          <div className="mt-10">
            <h2 className="font-serif text-2xl text-navy-900">What to reach out about</h2>
            <ul className="mt-4 list-disc pl-6 space-y-2">
              <li>
                <strong>Cost corrections:</strong> Just got a contractor quote that
                doesn&apos;t match the range we published? Tell us the metro,
                date, and quote. We update our data on real feedback.
              </li>
              <li>
                <strong>Factual errors:</strong> We correct visibly at the bottom
                of any article we get wrong.
              </li>
              <li>
                <strong>Topic suggestions:</strong> Something we should cover?
                Send the job and why you&apos;re stuck.
              </li>
              <li>
                <strong>Press &amp; partnerships:</strong> Reasonable inquiries
                welcome. No paid-placement pitches — we don&apos;t sell editorial
                space.
              </li>
            </ul>
          </div>

          <div className="mt-10">
            <h2 className="font-serif text-2xl text-navy-900">What we don&apos;t respond to</h2>
            <ul className="mt-4 list-disc pl-6 space-y-2">
              <li>Link-exchange requests.</li>
              <li>Home warranty affiliate pitches.</li>
              <li>&ldquo;Guest post&rdquo; outreach that&apos;s obviously a link play.</li>
              <li>SEO vendor pitches.</li>
            </ul>
          </div>
        </div>
      </Section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          contactPageSchema({ name: "Contact FixItReal", url: "/about/contact" })
        )}
      />
    </>
  );
}
