import type { Metadata } from 'next';

import MobileNav from '@/components/layout/MobileNav';
import CalculatorSection from '@/components/sections/CalculatorSection';
import ExpertiseSection from '@/components/sections/ExpertiseSection';
import BrandCarousel from '@/components/sections/BrandCarousel';
import FaqSection from '@/components/sections/FaqSection';
import Features from '@/components/sections/Features';
import Hero from '@/components/sections/Hero';
import Testimonials from '@/components/sections/Testimonials';
import { calculatorFaqs } from '@/lib/faq-calculator';
import { createContentMetadata } from '@/lib/metadata';
import {
  generateCalculatorServiceJsonLd,
  generateFaqPageJsonLd,
  generateLocalBusinessJsonLd,
  generateWebSiteJsonLd,
} from '@/lib/structured-data';

export const metadata: Metadata = {
  ...createContentMetadata({
    title: 'Datenrettung Festplatte, SSD, RAID',
    description:
      'Professionelle Datenrettung: Festplatte, SSD, RAID, NAS. Analysepauschale 79€, garantierter Festpreis vor dem Versand. Jetzt Festpreis berechnen.',
    path: '/',
  }),
  title: {
    absolute: 'Datenrettung Festplatte, SSD, RAID | RSQDATA',
  },
};

export default function HomePage() {
  const localBusinessJsonLd = generateLocalBusinessJsonLd();
  const calculatorServiceJsonLd = generateCalculatorServiceJsonLd();
  const faqJsonLd = generateFaqPageJsonLd(calculatorFaqs);
  const webSiteJsonLd = generateWebSiteJsonLd();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(calculatorServiceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }}
      />
      <MobileNav />
      <main>
        <Hero />
        <CalculatorSection />
        <ExpertiseSection />
        <div className="bg-bg pt-16 pb-16 md:pt-0 md:pb-24">
          <BrandCarousel />
        </div>
        <Features />
        <FaqSection faqs={calculatorFaqs} title="Häufige Fragen zu Datenrettungskosten" />
        <Testimonials />
      </main>
    </>
  );
}
