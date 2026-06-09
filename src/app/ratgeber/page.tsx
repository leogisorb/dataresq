import type { Metadata } from 'next';
import { Suspense } from 'react';

import ContentPageShell from '@/components/layout/ContentPageShell';
import RatgeberList from '@/components/ratgeber/RatgeberList';
import { siteConfig } from '@/lib/metadata';
import { fetchRatgeberList } from '@/lib/sanity';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Ratgeber Datenrettung — Tipps & Anleitungen',
  description:
    'Expertenwissen zu Datenverlust: Was tun bei klackernder Festplatte, Wasserschaden, gelöschten Daten? Kostenlose Ratgeber von DATARESQ.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: `${siteConfig.url}/ratgeber`,
  },
};

export default async function RatgeberPage() {
  const articles = await fetchRatgeberList();

  return (
    <>
      <ContentPageShell>
        <div className="site-container px-4 py-12 md:px-8 md:py-16 lg:px-12">
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
