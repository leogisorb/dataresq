import type { Metadata } from 'next';
import Link from 'next/link';

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
  title: 'Datenrettung NRW — Standorte Grevenbroich, Mönchengladbach, Köln',
  description:
    'Datenrettung in NRW: persönliche Abgabe in Grevenbroich und Mönchengladbach, Koordination aus Köln, kostenlose DHL Express-Abholung bundesweit.',
  path: '/standort',
});

export default function StandortOverviewPage() {
  const locations = [...getAbgabeLocations(), ...getOfficeAndLabLocations()];

  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: 'Startseite', url: siteConfig.url },
    { name: 'Standorte', url: `${siteConfig.url}/standort` },
  ]);
  const collectionJsonLd = generateCollectionPageJsonLd(
    'Datenrettung NRW — Standorte',
    'RSQDATA in Nordrhein-Westfalen: Abgabe Grevenbroich und Mönchengladbach, Büro Köln, bundesweite DHL Express-Abholung.',
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
          <h1 className="text-3xl font-bold text-text md:text-4xl">
            Datenrettung in NRW — Standorte
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-text md:text-lg">
            Datenrettung in Nordrhein-Westfalen: Geben Sie Ihren Datenträger ohne Termin in
            Grevenbroich oder Mönchengladbach ab — oder lassen Sie ihn kostenlos per DHL Express
            abholen. Beratung und Auftragssteuerung laufen über das Büro Köln. Die technische
            Laborarbeit erfolgt über unseren Reinraum-Partner.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-text-muted">
            Einzugsgebiet u. a. Köln, Düsseldorf, Neuss, Krefeld, Bonn, Leverkusen, Viersen und
            Aachen — ohne Thin-Doorway-Seiten, mit echten Abgabe- und Büroadressen.
          </p>
          <p className="mt-4 text-sm text-text-muted">
            Leistungen:{' '}
            <Link className="text-accent transition-opacity hover:opacity-70" href="/datenrettung">
              Datenrettung Übersicht
            </Link>
            {' · '}
            <Link className="text-accent transition-opacity hover:opacity-70" href="/preisrechner">
              Preisrechner
            </Link>
            {' · '}
            <Link
              className="text-accent transition-opacity hover:opacity-70"
              href="/ratgeber/datenrettung-nrw-abgabe-dhl"
            >
              Ratgeber Abgabe vs. DHL
            </Link>
          </p>

          <StandortStack className="mt-12" locations={locations} />
        </div>
      </ContentPageShell>
    </>
  );
}
