import type { Metadata } from 'next';
import dynamic from 'next/dynamic';

import PriceCalculatorSection from '@/components/calculator/PriceCalculatorSection';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import ComparisonTable from '@/components/sections/ueber-uns/ComparisonTable';
import CitationAnswerBlock from '@/components/seo/CitationAnswerBlock';
import LastUpdatedBadge from '@/components/seo/LastUpdatedBadge';
import {
  CALCULATOR_HEADING,
  CALCULATOR_PAGE_PATH,
  CALCULATOR_SUBHEADING,
} from '@/lib/calculator-section';
import { CONTENT_LAST_UPDATED, NO_COST_GUARANTEE_NOTE } from '@/lib/constants';
import { HOME_CITATION_ANSWER } from '@/lib/datenrettung-geo-ui';
import { calculatorFaqs } from '@/lib/faq-calculator';
import { createContentMetadata, siteConfig } from '@/lib/metadata';
import {
  PAGE_HERO_HEADING,
  SECTION_CONTENT_MT,
  SECTION_HEADING,
  SECTION_PADDING,
  SECTION_SUBHEADING,
} from '@/lib/section-styles';
import {
  generateBreadcrumbJsonLd,
  generateCalculatorServiceJsonLd,
  generateFaqPageJsonLd,
} from '@/lib/structured-data';
import { comparisonRows } from '@/lib/ueber-uns-content';

const FaqSection = dynamic(() => import('@/components/sections/FaqSection'));

export const metadata: Metadata = createContentMetadata({
  title: 'Preisrechner — Datenrettungskosten berechnen',
  description: `Kostenloser Preisrechner für Datenrettung: HDD, SSD, RAID, USB, Smartphone, Notebook & PC. ${NO_COST_GUARANTEE_NOTE} Verbindliches Angebot nach Laboranalyse.`,
  path: CALCULATOR_PAGE_PATH,
});

export default function PreisrechnerPage() {
  const calculatorServiceJsonLd = generateCalculatorServiceJsonLd();
  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: 'Startseite', url: siteConfig.url },
    { name: 'Preisrechner', url: `${siteConfig.url}${CALCULATOR_PAGE_PATH}` },
  ]);
  const faqJsonLd = generateFaqPageJsonLd(calculatorFaqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(calculatorServiceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main>
        <section className={`${SECTION_PADDING} bg-bg-subtle`}>
          <div className="site-container">
            <Breadcrumbs
              items={[
                { label: 'Startseite', href: '/' },
                { label: 'Preisrechner' },
              ]}
            />

            <h1 className={PAGE_HERO_HEADING}>{CALCULATOR_HEADING}</h1>
            <LastUpdatedBadge className="mt-3" dateIso={CONTENT_LAST_UPDATED} />
            <CitationAnswerBlock
              answer={HOME_CITATION_ANSWER.answer}
              facts={[...HOME_CITATION_ANSWER.facts]}
              question={HOME_CITATION_ANSWER.question}
            />
            <p className={`${SECTION_SUBHEADING} mt-4 max-w-2xl`}>{CALCULATOR_SUBHEADING}</p>
          </div>
        </section>

        <PriceCalculatorSection showHeading={false} />

        <section className={`${SECTION_PADDING} bg-bg`}>
          <div className="site-container">
            <h2 className={SECTION_HEADING}>Preistransparenz im Vergleich</h2>
            <p className={`${SECTION_SUBHEADING} max-w-2xl`}>
              Warum Sie bei uns den Indikator und die Dateiliste vor der Beauftragung sehen.
            </p>
            <div className={SECTION_CONTENT_MT}>
              <ComparisonTable rows={comparisonRows.slice(0, 4)} />
            </div>
          </div>
        </section>

        <FaqSection faqs={calculatorFaqs} title="Häufige Fragen zu Datenrettungskosten" />
      </main>
    </>
  );
}
