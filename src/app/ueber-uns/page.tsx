import type { Metadata } from 'next';

import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import AboutStorySection from '@/components/sections/ueber-uns/AboutStorySection';
import CertificationGrid from '@/components/sections/ueber-uns/CertificationGrid';
import ComparisonTable from '@/components/sections/ueber-uns/ComparisonTable';
import IambulanzPartnerSection from '@/components/sections/ueber-uns/IambulanzPartnerSection';
import DatenrettungCta from '@/components/sections/datenrettung/DatenrettungCta';
import { createContentMetadata, siteConfig } from '@/lib/metadata';
import {
  generateBreadcrumbJsonLd,
  generateOrganizationJsonLd,
} from '@/lib/structured-data';
import { ABOUT_STORY_HEADLINE } from '@/lib/ueber-uns-content';

export const metadata: Metadata = createContentMetadata({
  title: 'Über uns — Von der Werkstatt zum Labor',
  description:
    'RSQDATA aus Köln: Koordination und Kundenbetreuung bei Datenverlust. Abgabestellen iAmbulanz in NRW.',
  path: '/ueber-uns',
});

export default function UeberUnsPage() {
  const organizationJsonLd = generateOrganizationJsonLd();
  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: 'Startseite', url: siteConfig.url },
    { name: 'Über uns', url: `${siteConfig.url}/ueber-uns` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <main>
        <section className="border-b border-black/5 bg-bg-subtle py-12 text-text md:border-b-0 md:px-8 md:py-16 lg:px-12">
          <div className="site-container">
            <Breadcrumbs
              items={[
                { label: 'Startseite', href: '/' },
                { label: 'Über uns' },
              ]}
            />

            <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">{ABOUT_STORY_HEADLINE}</h1>
          </div>
        </section>

        <section className="py-12 md:px-8 md:py-16 lg:px-12">
          <div className="site-container">
            <AboutStorySection />
          </div>
        </section>

        <section className="border-t border-black/5 bg-bg-subtle py-12 md:border-t-0 md:px-8 md:py-16 lg:px-12">
          <div className="site-container">
            <h2 className="text-2xl font-bold text-text md:text-3xl">Partner & Qualitätsversprechen</h2>
            <div className="mt-8">
              <CertificationGrid />
            </div>
          </div>
        </section>

        <section className="py-12 md:px-8 md:py-16 lg:px-12">
          <div className="site-container">
            <h2 className="text-2xl font-bold text-text md:text-3xl">Warum RSQDATA?</h2>
            <div className="mt-8">
              <ComparisonTable />
            </div>
          </div>
        </section>

        <section className="py-12 md:px-8 md:py-16 lg:px-12">
          <div className="site-container">
            <h2 className="text-2xl font-bold text-text md:text-3xl">
              Offizieller Partner: iAmbulanz
            </h2>
            <div className="mt-8">
              <IambulanzPartnerSection />
            </div>
          </div>
        </section>

        <section className="border-t border-black/5 bg-bg-card py-12 text-text md:border-t-0 md:px-8 md:py-16 lg:px-12">
          <div className="site-container text-center">
            <h2 className="text-2xl font-bold md:text-3xl">
              Überzeugt? Schildern Sie uns Ihren Fall.
            </h2>
            <div className="mt-8 flex justify-center">
              <DatenrettungCta />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
