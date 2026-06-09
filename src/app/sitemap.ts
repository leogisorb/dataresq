import type { MetadataRoute } from 'next';

import { getDatenrettungSlugs } from '@/lib/datenrettung-services';
import { LOCATIONS } from '@/lib/locations';
import { siteConfig } from '@/lib/metadata';
import { fetchRatgeberSlugs } from '@/lib/sanity';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const ratgeberSlugs = await fetchRatgeberSlugs();

  const staticRoutes = [
    '/',
    '/datenrettung',
    '/ueber-uns',
    '/ratgeber',
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

  const ratgeberRoutes = ratgeberSlugs.map((entry) => ({
    url: `${siteConfig.url}/ratgeber/${entry.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...datenrettungRoutes, ...locationRoutes, ...ratgeberRoutes];
}
