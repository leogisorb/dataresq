import type { Metadata } from 'next';

import { siteConfig } from './metadata';

interface LegalMetadataOptions {
  title: string;
  description?: string;
  path: string;
  index?: boolean;
}

export function createLegalMetadata({
  title,
  description,
  path,
  index = false,
}: LegalMetadataOptions): Metadata {
  return {
    title,
    description,
    robots: {
      index,
      follow: false,
    },
    alternates: {
      canonical: `${siteConfig.url}${path}`,
    },
  };
}
