import type { Metadata } from 'next';
import Link from 'next/link';

import DatenrettungCta from '@/components/sections/datenrettung/DatenrettungCta';
import DatenrettungFaq from '@/components/sections/datenrettung/DatenrettungFaq';
import ServiceGrid from '@/components/sections/datenrettung/ServiceGrid';
import MobileNav from '@/components/layout/MobileNav';
import { datenrettungFaqs } from '@/lib/faq-datenrettung';
import { processSteps, trustBadges, trustMetrics } from '@/lib/datenrettung-services';
import { siteConfig } from '@/lib/metadata';
import {
  generateBreadcrumbJsonLd,
  generateFaqPageJsonLd,
  generateServiceJsonLd,
} from '@/lib/structured-data';

export const metadata: Metadata = {
  title: 'Professionelle Datenrettung — Festplatte, SSD, RAID, NAS',
  description:
    'Datenrettung vom Experten: HDD, SSD, RAID, NAS, USB-Sticks. Kostenlose Diagnose, Festpreis, 95% Erfolgsquote. Kein Befund = keine Kosten.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: `${siteConfig.url}/datenrettung`,
  },
  openGraph: {
    title: 'Professionelle Datenrettung — DATARESQ',
    description: 'HDD, SSD, RAID, NAS. Kostenlose Diagnose. Festpreis.',
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
        {/* Hero */}
        <section className="border-b border-black/5 bg-bg-subtle px-4 py-12 text-text md:px-8 md:py-16 lg:px-12">
          <div className="site-container">
            <nav aria-label="Breadcrumb" className="mb-6 text-sm text-text">
              <Link className="active:text-text md:hover:text-text" href="/">
                Startseite
              </Link>
              <span className="mx-2">›</span>
              <span className="text-text">Datenrettung</span>
            </nav>

            <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">
              Professionelle Datenrettung
            </h1>
            <p className="mt-3 text-lg text-text md:text-xl">
              HDD · SSD · RAID · NAS · USB · Smartphone
            </p>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-text md:text-lg">
              Über [X] gerettete Datensätze. Kostenlose Diagnose. Festpreis vor Beauftragung. Kein
              Befund — keine Kosten.
            </p>
          </div>
        </section>

        {/* Service Grid */}
        <section className="py-12 md:py-16">
          <div className="site-container">
            <h2 className="text-2xl font-bold text-text md:text-3xl">Unsere Leistungen</h2>
            <p className="mt-3 max-w-2xl text-text">
              Spezialisierte Datenrettung für alle gängigen Speichermedien — von der einzelnen
              Festplatte bis zum komplexen RAID-System.
            </p>
            <div className="mt-8">
              <ServiceGrid />
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="bg-bg-subtle px-4 py-12 md:px-8 md:py-16 lg:px-12">
          <div className="site-container">
            <h2 className="text-2xl font-bold text-text md:text-3xl">So funktioniert es</h2>
            <div className="mt-8 flex flex-col gap-8 md:flex-row md:gap-6 lg:gap-8">
              {processSteps.map((step, index) => (
                <div key={step.title} className="relative flex-1">
                  {index < processSteps.length - 1 && (
                    <div
                      aria-hidden="true"
                      className="absolute top-8 left-6 hidden h-full w-px bg-black/5 md:block"
                    />
                  )}
                  <div className="flex gap-4 md:flex-col md:gap-3">
                    <span
                      aria-hidden="true"
                      className="flex size-12 shrink-0 items-center justify-center rounded-full bg-accent text-lg font-bold text-white"
                    >
                      {step.step}
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-text">{step.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-text md:text-base">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <DatenrettungCta layout="row" />
            </div>
          </div>
        </section>

        {/* Trust */}
        <section className="py-12 md:py-16">
          <div className="site-container">
            <h2 className="text-2xl font-bold text-text md:text-3xl">Vertrauen &amp; Qualität</h2>
            <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
              {trustMetrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-lg border border-black/5 bg-bg-card p-6 text-center"
                >
                  <p className="text-3xl font-bold text-text md:text-4xl">{metric.value}</p>
                  <p className="mt-2 text-sm text-text">{metric.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              {trustBadges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-md border border-black/5 bg-bg-subtle px-4 py-2 text-sm text-text"
                >
                  [{badge}]
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-bg-subtle px-4 py-12 md:px-8 md:py-16 lg:px-12">
          <div className="site-container">
            <h2 className="text-2xl font-bold text-text md:text-3xl">Häufige Fragen</h2>
            <div className="mt-8">
              <DatenrettungFaq />
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="border-t border-black/5 bg-bg-card px-4 py-12 text-text md:px-8 md:py-16 lg:px-12">
          <div className="site-container text-center">
            <h2 className="text-2xl font-bold md:text-3xl">Daten verloren? Jetzt handeln.</h2>
            <p className="mt-4 text-base leading-relaxed text-text md:text-lg">
              Jede Stunde zählt — nicht weiter versuchen, das Medium zu reparieren. Senden Sie es uns
              zu.
            </p>
            <div className="mt-8 flex justify-center">
              <DatenrettungCta layout="column" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
