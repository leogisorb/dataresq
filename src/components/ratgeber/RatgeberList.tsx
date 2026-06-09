'use client';

import Link from 'next/link';
import { useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { Chip } from '@heroui/react';

import RatgeberArticleGrid from '@/components/ratgeber/RatgeberArticleGrid';
import { RATGEBER_CATEGORIES, type RatgeberListItem } from '@/lib/sanity';

interface RatgeberListProps {
  articles: RatgeberListItem[];
}

const filterOptions = ['Alle', ...RATGEBER_CATEGORIES] as const;

export default function RatgeberList({ articles }: RatgeberListProps) {
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get('kategorie') ?? 'Alle';

  const filtered = useMemo(() => {
    if (activeCategory === 'Alle') {
      return articles;
    }
    return articles.filter((article) => article.category === activeCategory);
  }, [activeCategory, articles]);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {filterOptions.map((category) => {
          const isActive = activeCategory === category;
          const href = category === 'Alle' ? '/ratgeber' : `/ratgeber?kategorie=${category}`;

          return (
            <Link key={category} href={href}>
              <Chip size="sm" variant={isActive ? 'primary' : 'soft'}>
                {category}
              </Chip>
            </Link>
          );
        })}
      </div>
      <div className="mt-8">
        <RatgeberArticleGrid articles={filtered} />
      </div>
    </div>
  );
}
