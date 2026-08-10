import type { MetadataRoute } from 'next';

import { siteConfig } from '@/lib/metadata';

const disallow = ['/api/', '/variante-b'] as const;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [...disallow],
      },
      {
        userAgent: 'OAI-SearchBot',
        allow: '/',
        disallow: [...disallow],
      },
      {
        userAgent: 'GPTBot',
        allow: '/',
        disallow: [...disallow],
      },
      {
        userAgent: 'ClaudeBot',
        allow: '/',
        disallow: [...disallow],
      },
      {
        userAgent: 'PerplexityBot',
        allow: '/',
        disallow: [...disallow],
      },
      {
        userAgent: '*',
        allow: '/',
        disallow: [...disallow],
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
