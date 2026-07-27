import type { Metadata } from 'next';

import ContentPageShell from '@/components/layout/ContentPageShell';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import StandortStack from '@/components/standort/StandortStack';
import {
  getAbgabeLocations,
  getOfficeAndLabLocations,
} from '@/lib/locations';
import { createContentMetadata, siteConfig } from '@/lib/metadata';
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
  /** One deck: Abgabe first, then Büro & Labor — all cards settle into one block */
  const locations = [...getAbgabeLocations(), ...getOfficeAndLabLocations()];

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
            Persönliche Abgabe an iAmbulanz-Partnern oder Beratung aus Köln. Kostenlose DHL
            Express-Abholung bundesweit.
          </p>

          <StandortStack className="mt-12" locations={locations} />
        </div>
      </ContentPageShell>
    </>
  );
}
