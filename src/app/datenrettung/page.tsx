import type { Metadata } from 'next';
import dynamic from 'next/dynamic';

import PriceCalculatorSection from '@/components/calculator/PriceCalculatorSection';
import ProcessTimeline from '@/components/sections/datenrettung/ProcessTimeline';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import CitationAnswerBlock from '@/components/seo/CitationAnswerBlock';
import ExpertQuote from '@/components/seo/ExpertQuote';
import GlossarySection from '@/components/seo/GlossarySection';
import LastUpdatedBadge from '@/components/seo/LastUpdatedBadge';
import ComparisonTable from '@/components/sections/ueber-uns/ComparisonTable';
import { datenrettungFaqs } from '@/lib/faq-datenrettung';
import {
  ANALYSIS_DURATION,
  CONTENT_LAST_UPDATED,
  DATENRETTUNG_META_DESCRIPTION,
  DIAGNOSIS_FEE_FORMATTED,
  NO_COST_GUARANTEE_NOTE,
} from '@/lib/constants';
import {
  DATENRETTUNG_GLOSSARY,
  FOUNDER_EXPERT_QUOTE,
  PILLAR_CITATION_ANSWER,
} from '@/lib/datenrettung-geo-ui';
import { createContentMetadata } from '@/lib/metadata';
import { processSteps } from '@/lib/datenrettung-services';
import {
  PAGE_HERO_HEADING,
  SECTION_CONTENT_MT,
  SECTION_HEADING,
  SECTION_NARROW_WIDTH,
  SECTION_PADDING,
  SECTION_SUBHEADING,
} from '@/lib/section-styles';
import { RESCUED_DATASETS } from '@/lib/team';
import {
  generateBreadcrumbJsonLd,
  generateFaqPageJsonLd,
  generateHowToJsonLd,
  generateServiceJsonLd,
} from '@/lib/structured-data';
import { siteConfig } from '@/lib/metadata';
import { comparisonRows } from '@/lib/ueber-uns-content';

const ServiceGrid = dynamic(() => import('@/components/sections/datenrettung/ServiceGrid'));
const DatenrettungFaq = dynamic(() => import('@/components/sections/datenrettung/DatenrettungFaq'));

export const metadata: Metadata = createContentMetadata({
  title: 'Professionelle Datenrettung — Festplatte, SSD, RAID, NAS',
  description: DATENRETTUNG_META_DESCRIPTION,
  path: '/datenrettung',
});

export default function DatenrettungPage() {
  const serviceJsonLd = generateServiceJsonLd();
  const faqJsonLd = generateFaqPageJsonLd(datenrettungFaqs);
  const howToJsonLd = generateHowToJsonLd(processSteps);
  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: 'Startseite', url: siteConfig.url },
    { name: 'Datenrettung', url: `${siteConfig.url}/datenrettung` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <main>
        <section className="bg-bg-subtle pb-10 pt-20 md:pb-14 md:pt-28">
          <div className="site-container">
            <Breadcrumbs
              items={[
                { label: 'Startseite', href: '/' },
                { label: 'Datenrettung' },
              ]}
            />
            <h1 className={PAGE_HERO_HEADING}>Professionelle Datenrettung</h1>
            <LastUpdatedBadge className="mt-3" dateIso={CONTENT_LAST_UPDATED} />
            <p className="mt-3 text-lg text-text-muted md:text-xl">
              HDD · SSD · RAID · NAS · USB · Smartphone
            </p>
            <CitationAnswerBlock
              answer={PILLAR_CITATION_ANSWER.answer}
              facts={[...PILLAR_CITATION_ANSWER.facts]}
              question={PILLAR_CITATION_ANSWER.question}
            />
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-text-muted md:text-lg">
              Datenrettung ist die Wiederherstellung von Dateien von defekten, gelöschten oder
              nicht zugänglichen Speichermedien — ohne weitere Schreibzugriffe auf Ihr Original.
              Analyse inklusive Dateiliste: {DIAGNOSIS_FEE_FORMATTED}, Dauer in der Regel{' '}
              {ANALYSIS_DURATION}. Sie kennen den Preis, bevor Sie beauftragen. {NO_COST_GUARANTEE_NOTE}{' '}
              Über {RESCUED_DATASETS} gerettete Datensätze. Abgabe in Grevenbroich und
              Mönchengladbach oder kostenlose DHL Express-Abholung bundesweit; Koordination aus Köln
              (NRW).
            </p>
          </div>
        </section>

        <section className="overflow-visible pb-20 pt-10 md:pb-28 md:pt-14">
          <div className="site-container overflow-visible">
            <h2 className={SECTION_HEADING}>So funktioniert es</h2>
            <div className="mt-5 overflow-visible">
              <ProcessTimeline />
            </div>
          </div>
        </section>

        <section className={`${SECTION_PADDING} bg-bg-subtle`}>
          <div className="site-container">
            <h2 className={SECTION_HEADING}>Unsere Leistungen</h2>
            <p className={`${SECTION_SUBHEADING} max-w-2xl`}>
              Spezialisierte Datenrettung für alle gängigen Speichermedien — HDD bis RAID.
            </p>
            <div className={SECTION_CONTENT_MT}>
              <ServiceGrid />
            </div>
          </div>
        </section>

        <section className={`${SECTION_PADDING} bg-bg`}>
          <div className="site-container">
            <h2 className={SECTION_HEADING}>RSQDATA im Vergleich</h2>
            <p className={`${SECTION_SUBHEADING} max-w-2xl`}>
              Was Sie vor der Beauftragung sehen — und was in der Branche oft fehlt.
            </p>
            <div className={SECTION_CONTENT_MT}>
              <ComparisonTable rows={comparisonRows} />
            </div>
            <div className="mt-10">
              <ExpertQuote
                attribution={FOUNDER_EXPERT_QUOTE.attribution}
                quote={FOUNDER_EXPERT_QUOTE.quote}
                role={FOUNDER_EXPERT_QUOTE.role}
              />
            </div>
          </div>
        </section>

        <GlossarySection terms={DATENRETTUNG_GLOSSARY} />

        <section className={`${SECTION_PADDING} bg-bg-subtle`}>
          <div className="site-container">
            <div className={`${SECTION_NARROW_WIDTH} text-center`}>
              <h2 className={SECTION_HEADING}>Häufige Fragen</h2>
              <div className={`${SECTION_CONTENT_MT} text-left`}>
                <DatenrettungFaq />
              </div>
            </div>
          </div>
        </section>

        <PriceCalculatorSection />
      </main>
    </>
  );
}
