import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import ContentPageShell from '@/components/layout/ContentPageShell';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import LastUpdatedBadge from '@/components/seo/LastUpdatedBadge';
import { createContentMetadata, siteConfig } from '@/lib/metadata';
import { getDatenrettungService } from '@/lib/datenrettung-services';
import { getLocation } from '@/lib/locations';
import {
  getAllRatgeberArticles,
  getRatgeberArticle,
  getRatgeberSlugs,
} from '@/lib/ratgeber/articles';
import {
  generateArticleJsonLd,
  generateBreadcrumbJsonLd,
  generateFaqPageJsonLd,
} from '@/lib/structured-data';

interface RatgeberArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getRatgeberSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: RatgeberArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getRatgeberArticle(slug);
  if (!article) return {};

  return createContentMetadata({
    title: article.title,
    description: article.excerpt,
    path: `/ratgeber/${article.slug}`,
  });
}

export default async function RatgeberArticlePage({ params }: RatgeberArticlePageProps) {
  const { slug } = await params;
  const article = getRatgeberArticle(slug);

  if (!article) {
    notFound();
  }

  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: 'Startseite', url: siteConfig.url },
    { name: 'Ratgeber', url: `${siteConfig.url}/ratgeber` },
    { name: article.title, url: `${siteConfig.url}/ratgeber/${article.slug}` },
  ]);
  const articleJsonLd = generateArticleJsonLd({
    headline: article.title,
    description: article.excerpt,
    path: `/ratgeber/${article.slug}`,
    datePublished: article.datePublished,
    dateModified: article.updatedAt,
  });
  const faqJsonLd =
    article.faqs && article.faqs.length > 0 ? generateFaqPageJsonLd(article.faqs) : null;

  const otherArticles = getAllRatgeberArticles().filter((item) => item.slug !== article.slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      {faqJsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      ) : null}

      <ContentPageShell>
        <article className="site-container py-12 md:px-8 md:py-16 lg:px-12">
          <Breadcrumbs
            items={[
              { label: 'Startseite', href: '/' },
              { label: 'Ratgeber', href: '/ratgeber' },
              { label: article.title },
            ]}
          />
          <h1 className="mt-2 max-w-3xl text-3xl font-bold text-text md:text-4xl">
            {article.title}
          </h1>
          <LastUpdatedBadge className="mt-3" dateIso={article.updatedAt} />
          <p className="mt-2 text-sm text-text-muted">
            Veröffentlicht {article.datePublished}
          </p>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-text-muted">{article.excerpt}</p>

          <div className="mt-12 max-w-3xl space-y-10">
            {article.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-xl font-semibold text-text md:text-2xl">{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 48)}
                    className="mt-4 text-base leading-relaxed text-text-muted"
                  >
                    {paragraph}
                  </p>
                ))}
                {section.list ? (
                  section.ordered ? (
                    <ol className="mt-4 list-decimal space-y-2 pl-5 text-base leading-relaxed text-text-muted">
                      {section.list.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ol>
                  ) : (
                    <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-relaxed text-text-muted">
                      {section.list.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )
                ) : null}
              </section>
            ))}
          </div>

          {article.faqs && article.faqs.length > 0 ? (
            <section className="mt-14 max-w-3xl">
              <h2 className="text-xl font-semibold text-text md:text-2xl">Häufige Fragen</h2>
              <dl className="mt-6 space-y-6">
                {article.faqs.map((faq) => (
                  <div key={faq.question}>
                    <dt className="font-medium text-text">{faq.question}</dt>
                    <dd className="mt-2 text-base leading-relaxed text-text-muted">{faq.answer}</dd>
                  </div>
                ))}
              </dl>
            </section>
          ) : null}

          {(article.relatedMediumSlugs?.length || article.relatedStandortSlugs?.length) ? (
            <section className="mt-14 max-w-3xl">
              <h2 className="text-xl font-semibold text-text md:text-2xl">Weiterführend</h2>
              <ul className="mt-4 space-y-2 text-base text-accent">
                {article.relatedMediumSlugs?.map((mediumSlug) => {
                  const service = getDatenrettungService(mediumSlug);
                  return (
                    <li key={mediumSlug}>
                      <Link
                        className="transition-opacity hover:opacity-70"
                        href={`/datenrettung/${mediumSlug}`}
                      >
                        {service?.title ?? mediumSlug} — Datenrettung
                      </Link>
                    </li>
                  );
                })}
                {article.relatedStandortSlugs?.map((stadt) => {
                  const loc = getLocation(stadt);
                  return (
                    <li key={stadt}>
                      <Link
                        className="transition-opacity hover:opacity-70"
                        href={`/standort/${stadt}`}
                      >
                        Standort {loc?.name ?? stadt}
                      </Link>
                    </li>
                  );
                })}
                <li>
                  <Link className="transition-opacity hover:opacity-70" href="/preisrechner">
                    Preisrechner
                  </Link>
                </li>
              </ul>
            </section>
          ) : null}

          <section className="mt-14 max-w-3xl border-t border-black/5 pt-10">
            <h2 className="text-lg font-semibold text-text">Weitere Ratgeber</h2>
            <ul className="mt-4 space-y-3">
              {otherArticles.slice(0, 4).map((item) => (
                <li key={item.slug}>
                  <Link
                    className="text-base text-accent transition-opacity hover:opacity-70"
                    href={`/ratgeber/${item.slug}`}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-6">
              <Link className="text-sm font-medium text-text-muted hover:opacity-70" href="/ratgeber">
                ← Alle Ratgeber
              </Link>
            </p>
          </section>
        </article>
      </ContentPageShell>
    </>
  );
}
