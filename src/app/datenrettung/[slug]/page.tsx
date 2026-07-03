import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import PriceCalculatorSection from '@/components/calculator/PriceCalculatorSection';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import DatenrettungCta from '@/components/sections/datenrettung/DatenrettungCta';
import MediumDetailSections from '@/components/sections/datenrettung/MediumDetailSections';
import RelatedServices from '@/components/sections/datenrettung/RelatedServices';
import { getMediumDetailContent } from '@/lib/datenrettung-medium-content';
import { getDatenrettungService, getDatenrettungSlugs } from '@/lib/datenrettung-services';
import { DIAGNOSIS_FEE_FORMATTED, FAILED_RECOVERY_NOTE } from '@/lib/constants';
import { createContentMetadata } from '@/lib/metadata';
import { siteConfig } from '@/lib/metadata';
import {
  generateBreadcrumbJsonLd,
  generateMediumServiceJsonLd,
} from '@/lib/structured-data';

interface DatenrettungMediumPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getDatenrettungSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: DatenrettungMediumPageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getDatenrettungService(slug);

  if (!service) {
    return {};
  }

  return createContentMetadata({
    title: `${service.title} — Professionelle Datenrettung`,
    description: service.description,
    path: service.href,
  });
}

export default async function DatenrettungMediumPage({ params }: DatenrettungMediumPageProps) {
  const { slug } = await params;
  const service = getDatenrettungService(slug);

  if (!service) {
    notFound();
  }

  const detailContent = getMediumDetailContent(slug);
  const serviceJsonLd = generateMediumServiceJsonLd(service.title, service.description);
  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: 'Startseite', url: siteConfig.url },
    { name: 'Datenrettung', url: `${siteConfig.url}/datenrettung` },
    { name: service.title, url: `${siteConfig.url}${service.href}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <main>
        <section className="border-b border-black/5 bg-bg-subtle py-12 text-text md:px-8 md:py-16 lg:px-12">
          <div className="site-container">
            <Breadcrumbs
              items={[
                { label: 'Startseite', href: '/' },
                { label: 'Datenrettung', href: '/datenrettung' },
                { label: service.title },
              ]}
            />

            <span aria-hidden="true" className="text-4xl">
              {service.icon}
            </span>
            <h1 className="mt-4 text-3xl font-bold md:text-4xl lg:text-5xl">{service.title}</h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-text md:text-lg">
              {service.description}
            </p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-text-muted">
              Analysepauschale {DIAGNOSIS_FEE_FORMATTED} mit Dateiliste im Kundenportal, garantierter
              Festpreis vor Beauftragung — {FAILED_RECOVERY_NOTE}
            </p>
            <div className="mt-8">
              <DatenrettungCta layout="row" />
            </div>
          </div>
        </section>

        {detailContent ? (
          <MediumDetailSections content={detailContent} title={service.title} />
        ) : null}

        <PriceCalculatorSection defaultDevice={service.defaultDevice} />

        {detailContent ? (
          <RelatedServices currentSlug={slug} relatedSlugs={detailContent.relatedSlugs} />
        ) : null}

        <section className="border-t border-black/5 bg-bg-card py-12 text-text md:px-8 md:py-16 lg:px-12">
          <div className="site-container text-center">
            <h2 className="text-2xl font-bold md:text-3xl">Noch Fragen zu {service.title}?</h2>
            <p className="mt-4 text-base leading-relaxed text-text-muted md:text-lg">
              Unser Team berät Sie kostenlos per E-Mail.
            </p>
            <div className="mt-8 flex justify-center">
              <DatenrettungCta layout="column" />
            </div>
            <p className="mt-8 text-sm text-text-muted">
              <Link className="font-medium text-text transition-opacity hover:opacity-70" href="/datenrettung">
                ← Zurück zur Datenrettungs-Übersicht
              </Link>
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
