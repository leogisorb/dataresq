import type { FaqItem } from '@/lib/faq-calculator';
import {
  SECTION_CONTENT_MT,
  SECTION_HEADING,
  SECTION_PADDING,
} from '@/lib/section-styles';
import { generateFaqPageJsonLd } from '@/lib/structured-data';

interface FaqSectionProps {
  title: string;
  faqs: FaqItem[];
  id?: string;
}

export default function FaqSection({ title, faqs, id }: FaqSectionProps) {
  const faqJsonLd = generateFaqPageJsonLd(faqs);

  return (
    <section className={`${SECTION_PADDING} bg-bg`} id={id}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="site-container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className={SECTION_HEADING}>{title}</h2>

          <div className={`${SECTION_CONTENT_MT} flex flex-col gap-8 text-left`}>
            {faqs.map((faq) => (
              <article key={faq.question}>
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
