import type { Metadata } from 'next';
import { Suspense } from 'react';

import ContentPageShell from '@/components/layout/ContentPageShell';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import RatgeberList from '@/components/ratgeber/RatgeberList';
import { createContentMetadata } from '@/lib/metadata';
import { siteConfig } from '@/lib/metadata';
import { fetchRatgeberList } from '@/lib/sanity';
import {
  generateBreadcrumbJsonLd,
  generateCollectionPageJsonLd,
} from '@/lib/structured-data';

export const revalidate = 3600;

export const metadata: Metadata = createContentMetadata({
  title: 'Ratgeber Datenrettung — Tipps & Anleitungen',
  description:
    'Expertenwissen zu Datenverlust: Was tun bei klackernder Festplatte, Wasserschaden, gelöschten Daten? Kostenlose Ratgeber von RSQDATA.',
  path: '/ratgeber',
});

export default async function RatgeberPage() {
  const articles = await fetchRatgeberList();
  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: 'Startseite', url: siteConfig.url },
    { name: 'Ratgeber', url: `${siteConfig.url}/ratgeber` },
  ]);
  const collectionJsonLd = generateCollectionPageJsonLd(
    'Ratgeber Datenrettung',
    'Expertenwissen zu Datenverlust und Datenrettung.',
    '/ratgeber',
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
        <div className="site-container px-4 py-12 md:px-8 md:py-16 lg:px-12">
          <Breadcrumbs
            items={[
              { label: 'Startseite', href: '/' },
              { label: 'Ratgeber' },
            ]}
          />
          <h1 className="text-3xl font-bold text-text md:text-4xl">
            Ratgeber: Datenrettung & Datenverlust
          </h1>
          <p className="mt-4 max-w-2xl text-text">
            Expertenwissen — kostenlos und verständlich erklärt.
          </p>

          <Suspense fallback={<p className="mt-8 text-text">Artikel werden geladen…</p>}>
            <RatgeberList articles={articles} />
          </Suspense>
        </div>
      </ContentPageShell>
    </>
  );
}
