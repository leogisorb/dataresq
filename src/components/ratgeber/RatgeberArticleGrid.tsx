import Link from 'next/link';

import { TILE_CARD } from '@/lib/button-styles';
import type { RatgeberListItem } from '@/lib/sanity';

function formatDate(date: string | null): string {
  if (!date) {
    return '';
  }
  return new Date(date).toLocaleDateString('de-DE', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
}

interface RatgeberArticleGridProps {
  articles: RatgeberListItem[];
}

export default function RatgeberArticleGrid({ articles }: RatgeberArticleGridProps) {
  if (articles.length === 0) {
    return (
      <p className="text-text">
        Keine Artikel gefunden. Sobald Inhalte im Sanity Studio angelegt sind, erscheinen sie hier.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {articles.map((article) => (
        <article
          key={article.slug.current}
          className={`flex h-full flex-col p-6 ${TILE_CARD}`}
        >
          {article.category && (
            <span className="text-xs font-medium uppercase tracking-wide text-accent">
              {article.category}
            </span>
          )}
          <h2 className="mt-2 text-lg font-semibold leading-snug text-text">
            <Link
              className="active:text-accent md:hover:text-accent"
              href={`/ratgeber/${article.slug.current}`}
            >
              {article.title}
            </Link>
          </h2>
          {article.excerpt && (
            <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-text">
              {article.excerpt}
            </p>
          )}
          <p className="mt-4 text-xs text-text">
            {article.author && <span>{article.author}</span>}
            {article.author && article.publishedAt && <span className="mx-2">·</span>}
            {article.publishedAt && (
              <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
            )}
          </p>
        </article>
      ))}
    </div>
  );
}
