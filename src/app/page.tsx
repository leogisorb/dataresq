import type { Metadata } from 'next';
import dynamic from 'next/dynamic';

import RebootHeroCard from '@/components/variante-b/RebootHeroCard';
import Features from '@/components/sections/Features';
import PromisesSection from '@/components/sections/PromisesSection';
import Testimonials from '@/components/sections/Testimonials';
import CitationAnswerBlock from '@/components/seo/CitationAnswerBlock';
import LastUpdatedBadge from '@/components/seo/LastUpdatedBadge';
import RatgeberTeaser from '@/components/seo/RatgeberTeaser';
import { calculatorFaqs } from '@/lib/faq-calculator';
import {
  CONTENT_LAST_UPDATED,
  HOME_META_DESCRIPTION,
  HOME_META_TITLE,
} from '@/lib/constants';
import { HOME_CITATION_ANSWER } from '@/lib/datenrettung-geo-ui';
import { HOME_RATGEBER_TEASERS } from '@/lib/ratgeber/articles';
import { createContentMetadata } from '@/lib/metadata';
import {
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
  const webSiteJsonLd = generateWebSiteJsonLd();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }}
      />
      <main>
        <RebootHeroCard />
        <section className="border-b border-black/5 bg-bg py-10 md:px-8 md:py-12 lg:px-12">
          <div className="site-container">
            <LastUpdatedBadge dateIso={CONTENT_LAST_UPDATED} />
            <CitationAnswerBlock
              answer={HOME_CITATION_ANSWER.answer}
              facts={[...HOME_CITATION_ANSWER.facts]}
              question={HOME_CITATION_ANSWER.question}
            />
          </div>
        </section>
        <PromisesSection />
        <CalculatorSection />
        <ExpertiseSection />
        <Features />
        <FaqSection faqs={calculatorFaqs} title="Häufige Fragen zu Datenrettungskosten" />
        <RatgeberTeaser links={HOME_RATGEBER_TEASERS} title="Ratgeber & Erste Hilfe" />
        <Testimonials />
      </main>
    </>
  );
}
