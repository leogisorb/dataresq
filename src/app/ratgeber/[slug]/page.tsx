import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import ContentPageShell from '@/components/layout/ContentPageShell';
import RatgeberArticleFaq from '@/components/ratgeber/RatgeberArticleFaq';
import RatgeberArticleGrid from '@/components/ratgeber/RatgeberArticleGrid';
import RatgeberPortableText from '@/components/ratgeber/RatgeberPortableText';
import DatenrettungCta from '@/components/sections/datenrettung/DatenrettungCta';
import { siteConfig } from '@/lib/metadata';
import {
  fetchRatgeberBySlug,
  fetchRatgeberSlugs,
  fetchRelatedRatgeber,
} from '@/lib/sanity';
import {
  generateArticleJsonLd,
  generateBreadcrumbJsonLd,
  generateRatgeberFaqPageJsonLd,
} from '@/lib/structured-data';

export const revalidate = 3600;

interface RatgeberDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await fetchRatgeberSlugs();
  return slugs.map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({ params }: RatgeberDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await fetchRatgeberBySlug(slug);

  if (!article) {
    return {};
  }

  return {
    title: article.metaTitle ?? article.title,
    description: article.metaDesc ?? article.excerpt ?? undefined,
    alternates: {
      canonical: `${siteConfig.url}/ratgeber/${slug}`,
    },
    openGraph: {
      type: 'article',
      publishedTime: article.publishedAt ?? undefined,
    },
  };
}

function formatDate(date: string | null): string {
  if (!date) {
    return '';
  }
  return new Date(date).toLocaleDateString('de-DE', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
}

export default async function RatgeberDetailPage({ params }: RatgeberDetailPageProps) {
  const { slug } = await params;
  const article = await fetchRatgeberBySlug(slug);

  if (!article) {
    notFound();
  }

  const related = await fetchRelatedRatgeber(article.category, slug);
  const articleJsonLd = generateArticleJsonLd(article);
  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: 'Startseite', url: siteConfig.url },
    { name: 'Ratgeber', url: `${siteConfig.url}/ratgeber` },
    { name: article.title, url: `${siteConfig.url}/ratgeber/${slug}` },
  ]);
  const faqJsonLd =
    article.faq && article.faq.length > 0
      ? generateRatgeberFaqPageJsonLd(article.faq)
      : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      <ContentPageShell>
        <div className="site-container px-4 py-12 md:px-8 md:py-16 lg:px-12">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-text">
            <Link className="active:text-accent md:hover:text-accent" href="/">
              Startseite
            </Link>
            <span className="mx-2">›</span>
            <Link className="active:text-accent md:hover:text-accent" href="/ratgeber">
              Ratgeber
            </Link>
            <span className="mx-2">›</span>
            <span>{article.title}</span>
          </nav>

          <article>
            <header>
              {article.category && (
                <span className="text-xs font-medium uppercase tracking-wide text-accent">
                  {article.category}
                </span>
              )}
              <h1 className="mt-2 text-3xl font-bold text-text md:text-4xl">{article.title}</h1>
              <p className="mt-4 text-sm text-text">
                {article.author && <span>{article.author}</span>}
                {article.author && article.publishedAt && <span className="mx-2">·</span>}
                {article.publishedAt && (
                  <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
                )}
              </p>
            </header>

            <div className="mt-8">
              <RatgeberPortableText value={article.body} />
            </div>

            {article.faq && article.faq.length > 0 && (
              <RatgeberArticleFaq faqs={article.faq} />
            )}

            <aside className="mt-12 rounded-lg border border-black/5 bg-bg-card p-6 md:sticky md:top-24">
              <h2 className="text-lg font-semibold text-text">
                Betroffen? Jetzt Festpreis berechnen — Analysepauschale 79€.
              </h2>
              <div className="mt-4">
                <DatenrettungCta layout="column" />
              </div>
            </aside>
          </article>

          {related.length > 0 && (
            <section className="mt-16 border-t border-black/5 pt-12">
              <h2 className="text-2xl font-bold text-text">Verwandte Artikel</h2>
              <div className="mt-6">
                <RatgeberArticleGrid articles={related} />
              </div>
            </section>
          )}
        </div>
      </ContentPageShell>
    </>
  );
}
