import type { Metadata } from 'next';
import dynamic from 'next/dynamic';

import PriceCalculatorSection from '@/components/calculator/PriceCalculatorSection';
import ProcessTimeline from '@/components/sections/datenrettung/ProcessTimeline';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import { datenrettungFaqs } from '@/lib/faq-datenrettung';
import { DATENRETTUNG_META_DESCRIPTION, FAILED_RECOVERY_NOTE } from '@/lib/constants';
import { createContentMetadata } from '@/lib/metadata';
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
  generateServiceJsonLd,
} from '@/lib/structured-data';
import { siteConfig } from '@/lib/metadata';

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
            <p className="mt-3 text-lg text-text-muted md:text-xl">
              HDD · SSD · RAID · NAS · USB · Smartphone
            </p>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-text-muted md:text-lg">
              Sie kennen den Preis, bevor Sie uns Ihren Datenträger anvertrauen. Sie sehen Ihre
              Dateien, bevor Sie beauftragen. {FAILED_RECOVERY_NOTE} Über {RESCUED_DATASETS}{' '}
              gerettete Datensätze.
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
