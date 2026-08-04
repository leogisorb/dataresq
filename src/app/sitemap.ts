import type { MetadataRoute } from 'next';

import { CONTENT_LAST_UPDATED } from '@/lib/constants';
import { getDatenrettungSlugs } from '@/lib/datenrettung-services';
import { LOCATIONS } from '@/lib/locations';
import { siteConfig } from '@/lib/metadata';
import { getAllRatgeberArticles } from '@/lib/ratgeber/articles';

const lastModified = new Date(CONTENT_LAST_UPDATED);

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '/',
    '/datenrettung',
    '/preisrechner',
    '/ueber-uns',
    '/standort',
    '/ratgeber',
  ].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: path === '/' ? 1 : 0.8,
  }));

  const datenrettungRoutes = getDatenrettungSlugs().map((slug) => ({
    url: `${siteConfig.url}/datenrettung/${slug}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }));

  const locationRoutes = LOCATIONS.map((location) => ({
    url: `${siteConfig.url}/standort/${location.slug}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const ratgeberRoutes = getAllRatgeberArticles().map((article) => ({
    url: `${siteConfig.url}/ratgeber/${article.slug}`,
    lastModified: new Date(article.updatedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...datenrettungRoutes, ...locationRoutes, ...ratgeberRoutes];
}
