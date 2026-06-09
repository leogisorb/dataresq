'use client';

import { Accordion } from '@heroui/react';

import type { RatgeberFaqItem } from '@/lib/sanity';

interface RatgeberArticleFaqProps {
  faqs: RatgeberFaqItem[];
}

export default function RatgeberArticleFaq({ faqs }: RatgeberArticleFaqProps) {
  if (!faqs.length) {
    return null;
  }

  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold text-text">Häufige Fragen</h2>
      <Accordion className="mt-6" variant="surface">
        {faqs.map((faq, index) => (
          <Accordion.Item key={faq.question} id={`faq-${index}`}>
            <Accordion.Heading>
              <Accordion.Trigger>{faq.question}</Accordion.Trigger>
            </Accordion.Heading>
            <Accordion.Panel>
              <Accordion.Body>
                <p className="text-sm leading-relaxed text-text">{faq.answer}</p>
              </Accordion.Body>
            </Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>
    </section>
  );
}
