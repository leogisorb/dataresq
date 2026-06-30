'use client';

import { Accordion } from '@heroui/react';

import type { FaqItem } from '@/lib/faq-calculator';
import {
  SECTION_CONTENT_MT,
  SECTION_HEADING,
  SECTION_NARROW_WIDTH,
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
        <div className={`${SECTION_NARROW_WIDTH} text-center`}>
          <h2 className={SECTION_HEADING}>{title}</h2>

          <Accordion className={`${SECTION_CONTENT_MT} w-full text-left`} variant="surface">
            {faqs.map((faq, index) => (
              <Accordion.Item key={faq.question} id={id ? `${id}-${index}` : `faq-${index}`}>
                <Accordion.Heading>
                  <Accordion.Trigger>
                    {faq.question}
                    <Accordion.Indicator />
                  </Accordion.Trigger>
                </Accordion.Heading>
                <Accordion.Panel>
                  <Accordion.Body className="leading-relaxed text-text-muted">
                    {faq.answer}
                  </Accordion.Body>
                </Accordion.Panel>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
