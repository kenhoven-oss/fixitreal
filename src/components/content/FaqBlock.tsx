import { jsonLdScript, faqSchema } from "@/lib/jsonld";

type FaqBlockProps = {
  items: Array<{ question: string; answer: string }>;
  emitSchema?: boolean;
};

export function FaqBlock({ items, emitSchema = true }: FaqBlockProps) {
  if (!items.length) return null;

  return (
    <div className="mt-10">
      {emitSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLdScript(faqSchema(items))}
        />
      )}
      <h2 className="font-serif text-2xl text-navy-900">Frequently asked</h2>
      <dl className="mt-5 divide-y divide-ink-200 border-y border-ink-200">
        {items.map((item) => (
          <div key={item.question} className="py-5">
            <dt className="font-medium text-navy-900">{item.question}</dt>
            <dd className="mt-2 text-ink-700 leading-relaxed">{item.answer}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
