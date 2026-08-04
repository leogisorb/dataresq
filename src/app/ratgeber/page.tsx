import type { Metadata } from 'next';
import Link from 'next/link';

import ContentPageShell from '@/components/layout/ContentPageShell';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import { createContentMetadata, siteConfig } from '@/lib/metadata';
import { getAllRatgeberArticles } from '@/lib/ratgeber/articles';
import {
  generateBreadcrumbJsonLd,
  generateCollectionPageJsonLd,
} from '@/lib/structured-data';

export const metadata: Metadata = createContentMetadata({
  title: 'Ratgeber Datenrettung — Praxiswissen & NRW-Guides',
  description:
    'Ratgeber zu Festplatte, SSD, RAID/NAS, Kosten und Datenrettung in NRW: klare Antworten, Preise und nächste Schritte.',
  path: '/ratgeber',
});

export default function RatgeberIndexPage() {
  const articles = getAllRatgeberArticles();
  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: 'Startseite', url: siteConfig.url },
    { name: 'Ratgeber', url: `${siteConfig.url}/ratgeber` },
  ]);
  const collectionJsonLd = generateCollectionPageJsonLd(
    'Ratgeber Datenrettung',
    'Praxiswissen zu Datenrettung, Kosten und Standorten in NRW.',
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
        <div className="site-container py-12 md:px-8 md:py-16 lg:px-12">
          <Breadcrumbs
            items={[
              { label: 'Startseite', href: '/' },
              { label: 'Ratgeber' },
            ]}
          />
          <h1 className="text-3xl font-bold text-text md:text-4xl">Ratgeber Datenrettung</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-text-muted md:text-lg">
            Direkte Antworten zu typischen Ausfällen, Kosten und dem Ablauf in NRW — ohne
            Keyword-Füllung, mit Zahlen aus unserem aktuellen Preisrahmen.
          </p>

          <ul className="mt-12 space-y-8">
            {articles.map((article) => (
              <li key={article.slug} className="border-b border-black/5 pb-8 last:border-0">
                <h2 className="text-xl font-semibold text-text md:text-2xl">
                  <Link
                    className="transition-opacity hover:opacity-70"
                    href={`/ratgeber/${article.slug}`}
                  >
                    {article.title}
                  </Link>
                </h2>
                <p className="mt-2 text-sm text-text-muted">
                  Aktualisiert {article.updatedAt}
                </p>
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-text-muted">
                  {article.excerpt}
                </p>
                <p className="mt-4">
                  <Link
                    className="text-sm font-medium text-accent transition-opacity hover:opacity-70"
                    href={`/ratgeber/${article.slug}`}
                  >
                    Artikel lesen
                  </Link>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </ContentPageShell>
    </>
  );
}
