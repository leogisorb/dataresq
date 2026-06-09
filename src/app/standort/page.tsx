import type { Metadata } from 'next';
import Link from 'next/link';

import ContentPageShell from '@/components/layout/ContentPageShell';
import { LOCATIONS } from '@/lib/locations';
import { siteConfig } from '@/lib/metadata';

export const metadata: Metadata = {
  title: 'Datenrettung Deutschland — Alle Standorte & Regionen',
  description:
    'DATARESQ: Bundesweiter Service per Versand. Alle Regionen, alle Medien. Kostenloser Versand auf Anfrage.',
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
          Datenrettung Deutschland — Alle Standorte
        </h1>
        <p className="mt-4 max-w-2xl text-text">
          Bundesweiter Datenrettungs-Service per Versand. Wählen Sie Ihre Region für
          lokalspezifische Informationen.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {LOCATIONS.map((location) => (
            <Link
              key={location.slug}
              className="rounded-lg border border-black/5 bg-bg-card p-6 transition-colors active:border-accent md:hover:border-accent"
              href={`/standort/${location.slug}`}
            >
              <h2 className="text-xl font-semibold text-text">{location.name}</h2>
              <p className="mt-1 text-sm text-accent">{location.region}</p>
              <p className="mt-3 text-sm leading-relaxed text-text">
                {location.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </ContentPageShell>
  );
}
