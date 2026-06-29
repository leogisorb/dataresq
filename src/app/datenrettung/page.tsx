import type { Metadata } from 'next';

import PriceCalculatorSection from '@/components/calculator/PriceCalculatorSection';
import DatenrettungFaq from '@/components/sections/datenrettung/DatenrettungFaq';
import ProcessTimeline from '@/components/sections/datenrettung/ProcessTimeline';
import ServiceGrid from '@/components/sections/datenrettung/ServiceGrid';
import MobileNav from '@/components/layout/MobileNav';
import { datenrettungFaqs } from '@/lib/faq-datenrettung';
import { DIAGNOSIS_FEE_FORMATTED, FAILED_RECOVERY_NOTE } from '@/lib/constants';
import { siteConfig } from '@/lib/metadata';
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

export const metadata: Metadata = {
  title: 'Professionelle Datenrettung — Festplatte, SSD, RAID, NAS',
  description: `Datenrettung vom Experten: HDD, SSD, RAID, NAS, USB-Sticks. Analysepauschale ${DIAGNOSIS_FEE_FORMATTED}, garantierter Festpreis vor dem Versand.`,
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: `${siteConfig.url}/datenrettung`,
  },
  openGraph: {
    title: 'Professionelle Datenrettung — RSQDATA',
    description: `HDD, SSD, RAID, NAS. Analysepauschale ${DIAGNOSIS_FEE_FORMATTED}. Garantierter Festpreis.`,
    locale: 'de_DE',
  },
};

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

      <MobileNav />
      <main>
        <section className={`${SECTION_PADDING} bg-bg-subtle`}>
          <div className="site-container">
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

        <section className={`${SECTION_PADDING} overflow-visible`}>
          <div className="site-container overflow-visible">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-text-muted">
              So funktioniert es
            </p>
            <h2 className={`${SECTION_HEADING} mb-10`}>
              So funktioniert Ihre Datenrettung – transparent in 6 Schritten
            </h2>
            <ProcessTimeline />
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
