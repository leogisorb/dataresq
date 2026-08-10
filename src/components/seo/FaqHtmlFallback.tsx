interface FaqHtmlFallbackItem {
  question: string;
  answer: string;
}

interface FaqHtmlFallbackProps {
  faqs: readonly FaqHtmlFallbackItem[];
}

/**
 * SSR-visible Q&A for crawlers when the interactive UI is a client Accordion.
 * Visually hidden; FAQPage JSON-LD remains the primary rich-result signal.
 */
export default function FaqHtmlFallback({ faqs }: FaqHtmlFallbackProps): React.JSX.Element | null {
  if (faqs.length === 0) {
    return null;
  }

  return (
    <dl className="sr-only">
      {faqs.map((faq) => (
        <div key={faq.question}>
          <dt>{faq.question}</dt>
          <dd>{faq.answer}</dd>
        </div>
      ))}
    </dl>
  );
}
