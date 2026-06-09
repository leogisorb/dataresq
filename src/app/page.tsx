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
import { siteConfig } from '@/lib/metadata';
import {
  generateCalculatorServiceJsonLd,
  generateLocalBusinessJsonLd,
} from '@/lib/structured-data';

export const metadata: Metadata = {
  title: 'Datenrettung Festplatte, SSD, RAID — dataresq',
  description:
    'Professionelle Datenrettung: Festplatte, SSD, RAID, NAS. Prüfgebühr 39€, Festpreis. Jetzt Kosten berechnen.',
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
        <div className="bg-bg pb-16 md:pb-24">
          <BrandCarousel />
        </div>
        <Features />
        <FaqSection faqs={calculatorFaqs} title="Häufige Fragen zu Datenrettungskosten" />
        <Testimonials />
      </main>
    </>
  );
}
