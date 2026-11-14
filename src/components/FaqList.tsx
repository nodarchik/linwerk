import Link from "next/link";
import type { FaqItem } from "@/data/faqs";

/** The questions as native <details>; <PageFx faq> eases them open and closed. */
export function FaqList({ items }: { items: FaqItem[] }) {
  return (
    <div className="faq-list">
      {items.map(({ question, answer }) => (
        <details className="faq-item" key={question}>
          <summary>
            {question}
            <span className="pm" aria-hidden="true" />
          </summary>
          <p>
            {answer.map((part) =>
              typeof part === "string" ? (
                part
              ) : (
                <Link key={part.href} href={part.href} prefetch={false}>
                  {part.label}
                </Link>
              ),
            )}
          </p>
        </details>
      ))}
    </div>
  );
}

/** schema.org FAQPage markup, built from the same items as the visible list so the two never drift apart. */
export function FaqSchema({ items }: { items: FaqItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer.map((part) => (typeof part === "string" ? part : part.label)).join(""),
      },
    })),
  };
  return (
    <script
      type="application/ld+json"
      // "<" is escaped so the JSON can never close the script element
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
      }}
    />
  );
}
