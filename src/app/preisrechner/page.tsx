import type { Metadata } from 'next';

import PriceCalculatorSection from '@/components/calculator/PriceCalculatorSection';
import MobileNav from '@/components/layout/MobileNav';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import FaqSection from '@/components/sections/FaqSection';
import {
  CALCULATOR_HEADING,
  CALCULATOR_PAGE_PATH,
} from '@/lib/calculator-section';
import { DIAGNOSIS_FEE_FORMATTED, FAILED_RECOVERY_NOTE } from '@/lib/constants';
import { calculatorFaqs } from '@/lib/faq-calculator';
import { createContentMetadata, siteConfig } from '@/lib/metadata';
import {
  PAGE_HERO_HEADING,
  SECTION_PADDING,
  SECTION_SUBHEADING,
} from '@/lib/section-styles';
import {
  generateBreadcrumbJsonLd,
  generateCalculatorServiceJsonLd,
  generateFaqPageJsonLd,
} from '@/lib/structured-data';

export const metadata: Metadata = createContentMetadata({
  title: 'Preisrechner — Datenrettungskosten berechnen',
  description: `Kostenloser Preisrechner für Datenrettung: HDD, SSD, RAID, USB, Smartphone, Notebook. Analysepauschale ${DIAGNOSIS_FEE_FORMATTED}, Preisrahmen vor dem Versand. ${FAILED_RECOVERY_NOTE}`,
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

      <MobileNav />
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
