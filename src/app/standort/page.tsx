import type { Metadata } from 'next';

import ContentPageShell from '@/components/layout/ContentPageShell';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import StandortLocationCard from '@/components/standort/StandortLocationCard';
import { LOCATIONS } from '@/lib/locations';
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

          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
            {LOCATIONS.map((location) => (
              <StandortLocationCard key={location.slug} location={location} />
            ))}
          </div>
        </div>
      </ContentPageShell>
    </>
  );
}
