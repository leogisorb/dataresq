'use client';

import { Accordion } from '@heroui/react';

import type { StandortFaqItem } from '@/lib/standort-faq';

interface StandortFaqProps {
  faqs: StandortFaqItem[];
}

export default function StandortFaq({ faqs }: StandortFaqProps) {
  return (
    <Accordion className="w-full" variant="surface">
      {faqs.map((faq, index) => (
        <Accordion.Item key={faq.question} id={`standort-faq-${index}`}>
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
  );
}
