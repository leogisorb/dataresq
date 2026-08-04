import type { Metadata } from 'next';
import dynamic from 'next/dynamic';

import RebootHeroCard from '@/components/variante-b/RebootHeroCard';
import Features from '@/components/sections/Features';
import PromisesSection from '@/components/sections/PromisesSection';
import Testimonials from '@/components/sections/Testimonials';
import { calculatorFaqs } from '@/lib/faq-calculator';
import { HOME_META_DESCRIPTION, HOME_META_TITLE } from '@/lib/constants';
import { createContentMetadata } from '@/lib/metadata';
import {
  generateCalculatorServiceJsonLd,
  generateFaqPageJsonLd,
  generateLocalBusinessJsonLd,
  generateWebSiteJsonLd,
} from '@/lib/structured-data';

const CalculatorSection = dynamic(
  () => import('@/components/sections/CalculatorSection'),
  { loading: () => <div className="min-h-[32rem] bg-bg" aria-hidden="true" /> },
);

const ExpertiseSection = dynamic(
  () => import('@/components/sections/ExpertiseSection'),
  { loading: () => <div className="h-[100dvh] bg-bg" aria-hidden="true" /> },
);

const FaqSection = dynamic(() => import('@/components/sections/FaqSection'));

export const metadata: Metadata = {
  ...createContentMetadata({
    title: HOME_META_TITLE,
    description: HOME_META_DESCRIPTION,
    path: '/',
  }),
  title: {
    absolute: `${HOME_META_TITLE} – RSQDATA`,
  },
};

export default function HomePage() {
  const localBusinessJsonLd = generateLocalBusinessJsonLd();
  const calculatorServiceJsonLd = generateCalculatorServiceJsonLd();
  const webSiteJsonLd = generateWebSiteJsonLd();
  const faqJsonLd = generateFaqPageJsonLd(calculatorFaqs);

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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <main>
        <RebootHeroCard />
        <PromisesSection />
        <CalculatorSection />
        <ExpertiseSection />
        <Features />
        <FaqSection faqs={calculatorFaqs} title="Häufige Fragen zu Datenrettungskosten" />
        <Testimonials />
      </main>
    </>
  );
}
