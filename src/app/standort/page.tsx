import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import ContentPageShell from '@/components/layout/ContentPageShell';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import { TILE_CARD } from '@/lib/button-styles';
import { getLocationPartnerLabel, LOCATIONS } from '@/lib/locations';
import { createContentMetadata } from '@/lib/metadata';
import { siteConfig } from '@/lib/metadata';
import {
  generateBreadcrumbJsonLd,
  generateCollectionPageJsonLd,
} from '@/lib/structured-data';

export const metadata: Metadata = createContentMetadata({
  title: 'Standorte — Abgabe & Kundenbetreuung',
  description:
    'RSQDATA Standorte: iAmbulanz-Abgabe in Grevenbroich und Mönchengladbach, Büro Köln. Kostenlose DHL Express-Abholung bundesweit.',
  path: '/standort',
});

export default function StandortOverviewPage() {
  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: 'Startseite', url: siteConfig.url },
    { name: 'Standorte', url: `${siteConfig.url}/standort` },
  ]);
  const collectionJsonLd = generateCollectionPageJsonLd(
    'Standorte — Abgabe & Kundenbetreuung',
    'RSQDATA: Abgabestellen in Grevenbroich und Mönchengladbach, Büro Köln.',
    '/standort',
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <ContentPageShell>
        <div className="site-container py-12 md:px-8 md:py-16 lg:px-12">
          <Breadcrumbs
            items={[
              { label: 'Startseite', href: '/' },
              { label: 'Standorte' },
            ]}
          />
          <h1 className="text-3xl font-bold text-text md:text-4xl">Standorte</h1>
          <p className="mt-4 max-w-2xl text-text">
            Abgabe an iAmbulanz-Standorten oder Kundenbetreuung aus Köln. Kostenlose DHL
            Express-Abholung bundesweit.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {LOCATIONS.map((location) => (
              <Link
                key={location.slug}
                className={`group overflow-hidden ${TILE_CARD}`}
                href={`/standort/${location.slug}`}
              >
                <div className="relative aspect-[16/10] w-full bg-bg-subtle">
                  <Image
                    alt={location.imageAlt}
                    className={
                      location.kind === 'labor'
                        ? 'object-contain p-6'
                        : 'object-cover transition-transform duration-300 group-hover:scale-[1.02]'
                    }
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    src={location.image}
                    unoptimized={location.kind === 'labor'}
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-text">{location.name}</h2>
                  <p className="mt-1 text-sm font-medium text-text">
                    {getLocationPartnerLabel(location)} · {location.region}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-text-muted">
                    {location.serviceNote}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </ContentPageShell>
    </>
  );
}
