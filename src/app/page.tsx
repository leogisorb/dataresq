import type { Metadata } from 'next';

import MobileNav from '@/components/layout/MobileNav';
import CalculatorSection from '@/components/sections/CalculatorSection';
import ExpertiseSection from '@/components/sections/ExpertiseSection';
import FaqSection from '@/components/sections/FaqSection';
import Features from '@/components/sections/Features';
import Hero from '@/components/sections/Hero';
import Metrics from '@/components/sections/Metrics';
import Testimonials from '@/components/sections/Testimonials';
import { calculatorFaqs } from '@/lib/faq-calculator';
import { siteConfig } from '@/lib/metadata';
import {
  generateCalculatorServiceJsonLd,
  generateLocalBusinessJsonLd,
} from '@/lib/structured-data';

export const metadata: Metadata = {
  title: 'Datenrettung Festplatte, SSD, RAID — dataresq',
  description:
    'Professionelle Datenrettung: Festplatte, SSD, RAID, NAS. Kostenlose Diagnose, Festpreis, 24h Express. Jetzt Kosten berechnen.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function HomePage() {
  const localBusinessJsonLd = generateLocalBusinessJsonLd();
  const calculatorServiceJsonLd = generateCalculatorServiceJsonLd();

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
      <MobileNav />
      <main>
        <Hero />
        <CalculatorSection />
        <ExpertiseSection />
        <Features />
        <Metrics />
        <Testimonials />
        <FaqSection faqs={calculatorFaqs} title="Häufige Fragen zu Datenrettungskosten" />
      </main>
    </>
  );
}
