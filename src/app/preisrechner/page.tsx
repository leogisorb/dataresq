import type { Metadata } from 'next';
import Link from 'next/link';

import PriceCalculatorSection from '@/components/calculator/PriceCalculatorSection';
import MobileNav from '@/components/layout/MobileNav';
import FaqSection from '@/components/sections/FaqSection';
import {
  CALCULATOR_HEADING,
  CALCULATOR_PAGE_PATH,
} from '@/lib/calculator-section';
import { DIAGNOSIS_FEE_FORMATTED, FAILED_RECOVERY_NOTE } from '@/lib/constants';
import { calculatorFaqs } from '@/lib/faq-calculator';
import { siteConfig } from '@/lib/metadata';
import {
  PAGE_HERO_HEADING,
  SECTION_PADDING,
  SECTION_SUBHEADING,
} from '@/lib/section-styles';
import {
  generateBreadcrumbJsonLd,
  generateCalculatorServiceJsonLd,
} from '@/lib/structured-data';

export const metadata: Metadata = {
  title: 'Preisrechner — Datenrettungskosten berechnen',
  description: `Kostenloser Preisrechner für Datenrettung: HDD, SSD, RAID, USB, Smartphone, Notebook. Analysepauschale ${DIAGNOSIS_FEE_FORMATTED}, Preisrahmen vor dem Versand. ${FAILED_RECOVERY_NOTE}`,
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: `${siteConfig.url}${CALCULATOR_PAGE_PATH}`,
  },
};

export default function PreisrechnerPage() {
  const calculatorServiceJsonLd = generateCalculatorServiceJsonLd();
  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: 'Startseite', url: siteConfig.url },
    { name: 'Preisrechner', url: `${siteConfig.url}${CALCULATOR_PAGE_PATH}` },
  ]);

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

      <MobileNav />
      <main>
        <section className={`${SECTION_PADDING} bg-bg-subtle`}>
          <div className="site-container">
            <nav aria-label="Breadcrumb" className="mb-6 text-sm text-text-muted">
              <Link className="transition-colors hover:text-text" href="/">
                Startseite
              </Link>
              <span className="mx-2">›</span>
              <span className="text-text">Preisrechner</span>
            </nav>

            <h1 className={PAGE_HERO_HEADING}>{CALCULATOR_HEADING}</h1>
            <p className={`${SECTION_SUBHEADING} mt-4 max-w-2xl`}>
              In vier Schritten zum Preisrahmen für Ihren Datenträger. Unverbindlich, ohne
              Registrierung.
            </p>
          </div>
        </section>

        <PriceCalculatorSection showHeading={false} />

        <FaqSection faqs={calculatorFaqs} title="Häufige Fragen zu Datenrettungskosten" />
      </main>
    </>
  );
}
