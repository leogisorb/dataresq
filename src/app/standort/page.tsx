import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import ContentPageShell from '@/components/layout/ContentPageShell';
import { TILE_CARD } from '@/lib/button-styles';
import { LOCATIONS } from '@/lib/locations';
import { siteConfig } from '@/lib/metadata';

export const metadata: Metadata = {
  title: 'Abgabestellen & Kundenbetreuung — NRW',
  description:
    'RSQDATA: Abgabestellen in Grevenbroich und Mönchengladbach. Alle Datenträgertypen — kostenlose DHL Express-Abholung an Ihrer Haustür.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: `${siteConfig.url}/standort`,
  },
};

export default function StandortOverviewPage() {
  return (
    <ContentPageShell>
      <div className="site-container px-4 py-12 md:px-8 md:py-16 lg:px-12">
        <h1 className="text-3xl font-bold text-text md:text-4xl">
          Abgabestellen &amp; Kundenbetreuung
        </h1>
        <p className="mt-4 max-w-2xl text-text">
          Geben Sie Ihren Datenträger ohne Termin an einer unserer Abgabestellen ab — alle
          Datenträgertypen willkommen. Oder nutzen Sie die kostenlose DHL Express-Abholung direkt
          an Ihrer Haustür.
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
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  src={location.image}
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold text-text">{location.name}</h2>
                <p className="mt-1 text-sm text-neon">
                  {location.partner === 'iambulanz' ? 'RSQDATA / iAmbulanz' : 'RSQDATA Büro'} ·{' '}
                  {location.region}
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
  );
}
