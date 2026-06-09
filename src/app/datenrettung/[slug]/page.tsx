import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import PriceCalculatorSection from '@/components/calculator/PriceCalculatorSection';
import MobileNav from '@/components/layout/MobileNav';
import DatenrettungCta from '@/components/sections/datenrettung/DatenrettungCta';
import { getDatenrettungService, getDatenrettungSlugs } from '@/lib/datenrettung-services';
import { DIAGNOSIS_FEE_FORMATTED } from '@/lib/constants';
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

  return {
    title: `${service.title} — Professionelle Datenrettung`,
    description: service.description,
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `${siteConfig.url}${service.href}`,
    },
    openGraph: {
      title: `${service.title} — DATARESQ`,
      description: service.description,
      locale: 'de_DE',
    },
  };
}

export default async function DatenrettungMediumPage({ params }: DatenrettungMediumPageProps) {
  const { slug } = await params;
  const service = getDatenrettungService(slug);

  if (!service) {
    notFound();
  }

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

      <MobileNav />
      <main>
        <section className="border-b border-black/5 bg-bg-subtle px-4 py-12 text-text md:px-8 md:py-16 lg:px-12">
          <div className="site-container">
            <nav aria-label="Breadcrumb" className="mb-6 text-sm text-text">
              <Link className="active:text-text md:hover:text-text" href="/">
                Startseite
              </Link>
              <span className="mx-2">›</span>
              <Link className="active:text-text md:hover:text-text" href="/datenrettung">
                Datenrettung
              </Link>
              <span className="mx-2">›</span>
              <span className="text-text">{service.title}</span>
            </nav>

            <span aria-hidden="true" className="text-4xl">
              {service.icon}
            </span>
            <h1 className="mt-4 text-3xl font-bold md:text-4xl lg:text-5xl">{service.title}</h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-text md:text-lg">
              {service.description}
            </p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-text-muted">
              Erstprüfung für {DIAGNOSIS_FEE_FORMATTED} mit Datenübersicht, Festpreis vor
              Beauftragung — die Rettung zahlen Sie erst nach Ihrer Freigabe.
            </p>
            <div className="mt-8">
              <DatenrettungCta layout="row" />
            </div>
          </div>
        </section>

        <PriceCalculatorSection defaultDevice={service.defaultDevice} />

        <section className="border-t border-black/5 bg-bg-card px-4 py-12 text-text md:px-8 md:py-16 lg:px-12">
          <div className="site-container text-center">
            <h2 className="text-2xl font-bold md:text-3xl">Noch Fragen zu {service.title}?</h2>
            <p className="mt-4 text-base leading-relaxed text-text-muted md:text-lg">
              Unser Team berät Sie kostenlos per E-Mail.
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
