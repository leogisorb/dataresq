import type { Metadata } from 'next';

export const siteConfig = {
  name: 'DATARESQ',
  url: 'https://muench-datenrettung.de',
  description:
    'Professionelle Datenrettung für Festplatten, SSD, RAID und NAS. Prüfgebühr 39€, Festpreis. Jetzt Kostenrechner nutzen.',
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
