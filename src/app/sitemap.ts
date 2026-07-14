import type { MetadataRoute } from 'next';

import { getDatenrettungSlugs } from '@/lib/datenrettung-services';
import { LOCATIONS } from '@/lib/locations';
import { siteConfig } from '@/lib/metadata';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '/',
    '/datenrettung',
    '/preisrechner',
    '/ueber-uns',
    '/standort',
  ].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: path === '/' ? 1 : 0.8,
  }));

  const datenrettungRoutes = getDatenrettungSlugs().map((slug) => ({
    url: `${siteConfig.url}/datenrettung/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }));

  const locationRoutes = LOCATIONS.map((location) => ({
    url: `${siteConfig.url}/standort/${location.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...datenrettungRoutes, ...locationRoutes];
}
