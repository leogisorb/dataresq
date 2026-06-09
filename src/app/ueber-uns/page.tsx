import type { Metadata } from 'next';
import Link from 'next/link';

import MobileNav from '@/components/layout/MobileNav';
import CertificationGrid from '@/components/sections/ueber-uns/CertificationGrid';
import ComparisonTable from '@/components/sections/ueber-uns/ComparisonTable';
import MetricsSection from '@/components/sections/ueber-uns/MetricsSection';
import ReinraumSection from '@/components/sections/ueber-uns/ReinraumSection';
import TeamGrid from '@/components/sections/ueber-uns/TeamGrid';
import DatenrettungCta from '@/components/sections/datenrettung/DatenrettungCta';
import { siteConfig } from '@/lib/metadata';
import {
  generateBreadcrumbJsonLd,
  generateOrganizationJsonLd,
} from '@/lib/structured-data';
import { FOUNDING_YEAR, LAB_LOCATION, RESCUED_DATASETS } from '@/lib/team';

export const metadata: Metadata = {
  title: 'Über uns — DATARESQ: Team & Reinraum',
  description:
    'Lernen Sie das Team hinter DATARESQ kennen. Reinraumlabor, ISO-zertifiziert, über [X] Jahre Erfahrung. Ihre Daten in Expertenhand.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: `${siteConfig.url}/ueber-uns`,
  },
};

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

      <MobileNav />
      <main>
        {/* Intro Hero */}
        <section className="border-b border-black/5 bg-bg-subtle px-4 py-12 text-text md:px-8 md:py-16 lg:px-12">
          <div className="site-container">
            <nav aria-label="Breadcrumb" className="mb-6 text-sm text-text">
              <Link className="active:text-text md:hover:text-text" href="/">
                Startseite
              </Link>
              <span className="mx-2">›</span>
              <span className="text-text">Über uns</span>
            </nav>

            <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">
              Ihr Datenrettungs-Experte
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-text md:text-lg">
              Gegründet {FOUNDING_YEAR}. Inhabergeführt. Reinraum in {LAB_LOCATION}. Über{' '}
              {RESCUED_DATASETS} erfolgreich abgeschlossene Datenrettungen.
            </p>
          </div>
        </section>

        {/* Team */}
        <section className="px-4 py-12 md:px-8 md:py-16 lg:px-12">
          <div className="site-container">
            <h2 className="text-2xl font-bold text-text md:text-3xl">Unser Team</h2>
            <p className="mt-3 max-w-2xl text-text">
              Benannte Experten mit nachweisbarer Fachkompetenz — keine anonymen
              „Unser-Team&quot;-Texte.
            </p>
            <div className="mt-8">
              <TeamGrid />
            </div>
          </div>
        </section>

        {/* Reinraum */}
        <section className="bg-bg-subtle px-4 py-12 md:px-8 md:py-16 lg:px-12">
          <div className="site-container">
            <h2 className="text-2xl font-bold text-text md:text-3xl">Unser Reinraumlabor</h2>
            <div className="mt-8">
              <ReinraumSection />
            </div>
          </div>
        </section>

        {/* Kennzahlen */}
        <section className="px-4 py-12 md:px-8 md:py-16 lg:px-12">
          <div className="site-container">
            <MetricsSection />
          </div>
        </section>

        {/* Zertifikate */}
        <section className="bg-bg-subtle px-4 py-12 md:px-8 md:py-16 lg:px-12">
          <div className="site-container">
            <h2 className="text-2xl font-bold text-text md:text-3xl">Zertifikate & Partner</h2>
            <div className="mt-8">
              <CertificationGrid />
            </div>
          </div>
        </section>

        {/* Vergleich */}
        <section className="px-4 py-12 md:px-8 md:py-16 lg:px-12">
          <div className="site-container">
            <h2 className="text-2xl font-bold text-text md:text-3xl">Warum DATARESQ?</h2>
            <p className="mt-3 text-text">
              Ein direkter Vergleich mit typischen Datenrettungs-Anbietern.
            </p>
            <div className="mt-8">
              <ComparisonTable />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-black/5 bg-bg-card px-4 py-12 text-text md:px-8 md:py-16 lg:px-12">
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
