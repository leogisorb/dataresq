'use client';

import { Accordion } from '@heroui/react';

import SectionHeader from '@/components/sections/SectionHeader';
import type { FaqItem } from '@/lib/faq-calculator';
import {
  SECTION_CONTENT_MT,
  SECTION_NARROW_WIDTH,
  SECTION_PADDING,
} from '@/lib/section-styles';

interface FaqSectionProps {
  title: string;
  faqs: FaqItem[];
  id?: string;
}

export default function FaqSection({ title, faqs, id }: FaqSectionProps) {
  return (
    <section className={`${SECTION_PADDING} bg-bg`} id={id}>
      <div className="site-container">
        <SectionHeader title={title} />

        <div className={`${SECTION_CONTENT_MT} ${SECTION_NARROW_WIDTH}`}>
          <Accordion className="w-full text-left" variant="surface">
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
