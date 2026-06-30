import type { Metadata } from 'next';
import Link from 'next/link';

import MobileNav from '@/components/layout/MobileNav';
import AboutStorySection from '@/components/sections/ueber-uns/AboutStorySection';
import CertificationGrid from '@/components/sections/ueber-uns/CertificationGrid';
import ComparisonTable from '@/components/sections/ueber-uns/ComparisonTable';
import FeelgoodManagerSection from '@/components/sections/ueber-uns/FeelgoodManagerSection';
import IambulanzPartnerSection from '@/components/sections/ueber-uns/IambulanzPartnerSection';
import DatenrettungCta from '@/components/sections/datenrettung/DatenrettungCta';
import { siteConfig } from '@/lib/metadata';
import {
  generateBreadcrumbJsonLd,
  generateOrganizationJsonLd,
} from '@/lib/structured-data';
import { ABOUT_STORY_HEADLINE } from '@/lib/ueber-uns-content';

export const metadata: Metadata = {
  title: 'Über uns — RSQDATA: Von der Werkstatt zum Labor',
  description:
    'Seit 2013 in Grevenbroich: aus Handy-Reparatur gewachsen zum Datenrettungslabor mit Reinraum, Microsoldering und Abgabestellen in NRW.',
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
        <section className="border-b border-black/5 bg-bg-subtle px-4 py-12 text-text md:px-8 md:py-16 lg:px-12">
          <div className="site-container">
            <nav aria-label="Breadcrumb" className="mb-6 text-sm text-text">
              <Link className="active:text-text md:hover:text-text" href="/">
                Startseite
              </Link>
              <span className="mx-2">›</span>
              <span className="text-text">Über uns</span>
            </nav>

            <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">{ABOUT_STORY_HEADLINE}</h1>
          </div>
        </section>

        <section className="px-4 py-12 md:px-8 md:py-16 lg:px-12">
          <div className="site-container">
            <AboutStorySection />
          </div>
        </section>

        <section className="border-t border-black/5 bg-bg-subtle px-4 py-12 md:px-8 md:py-16 lg:px-12">
          <div className="site-container">
            <FeelgoodManagerSection />
          </div>
        </section>

        <section className="px-4 py-12 md:px-8 md:py-16 lg:px-12">
          <div className="site-container">
            <h2 className="text-2xl font-bold text-text md:text-3xl">Zertifikate & Partner</h2>
            <div className="mt-8">
              <CertificationGrid />
            </div>
          </div>
        </section>

        <section className="bg-bg-subtle px-4 py-12 md:px-8 md:py-16 lg:px-12">
          <div className="site-container">
            <h2 className="text-2xl font-bold text-text md:text-3xl">Warum RSQDATA?</h2>
            <div className="mt-8">
              <ComparisonTable />
            </div>
          </div>
        </section>

        <section className="px-4 py-12 md:px-8 md:py-16 lg:px-12">
          <div className="site-container">
            <h2 className="text-2xl font-bold text-text md:text-3xl">
              Offizieller Partner: iAmbulanz
            </h2>
            <div className="mt-8">
              <IambulanzPartnerSection />
            </div>
          </div>
        </section>

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
