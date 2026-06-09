import type { FaqItem } from '@/lib/faq-calculator';
import { generateFaqPageJsonLd } from '@/lib/structured-data';

interface FaqSectionProps {
  title: string;
  faqs: FaqItem[];
  id?: string;
}

export default function FaqSection({ title, faqs, id }: FaqSectionProps) {
  const faqJsonLd = generateFaqPageJsonLd(faqs);

  return (
    <section className="bg-bg px-4 py-16 md:py-24" id={id}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="site-container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-text md:text-3xl">{title}</h2>

          <div className="mt-10 flex flex-col gap-6 text-left">
            {faqs.map((faq) => (
              <article key={faq.question} className="border-b border-border pb-6 last:border-0">
                <h3 className="text-lg font-semibold text-text">{faq.question}</h3>
                <p className="mt-2 leading-relaxed text-text-muted">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
