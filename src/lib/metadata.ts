import type { Metadata } from 'next';

import { DIAGNOSIS_FEE_FORMATTED } from './constants';

export const siteConfig = {
  name: 'RSQDATA',
  url: 'https://muench-datenrettung.de',
  description: `Professionelle Datenrettung für Festplatten, SSD, RAID und NAS. Analysepauschale ${DIAGNOSIS_FEE_FORMATTED}, garantierter Festpreis vor dem Versand. Jetzt Festpreis berechnen.`,
  locale: 'de_DE',
};

interface PageMetadataOptions {
  title: string;
  description?: string;
  path: string;
}

export function createPageMetadata({
  title,
  description = siteConfig.description,
  path,
}: PageMetadataOptions): Metadata {
  const canonical = `${siteConfig.url}${path}`;

  return {
    title,
    description,
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical,
    },
  };
}

export const defaultMetadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: siteConfig.url,
  },
};
