import type { Metadata } from 'next';

import { DIAGNOSIS_FEE_FORMATTED } from './constants';

export const siteConfig = {
  name: 'RSQDATA',
  url: 'https://muench-datenrettung.de',
  description: `Professionelle Datenrettung für Festplatten, SSD, RAID und NAS. Analysepauschale ${DIAGNOSIS_FEE_FORMATTED}, garantierter Festpreis vor dem Versand. Jetzt Festpreis berechnen.`,
  locale: 'de_DE',
} as const;

export const OG_IMAGE = {
  url: '/images/hero-storage-devices.png',
  width: 1200,
  height: 630,
  alt: 'Professionelle Datenrettung — RSQDATA',
} as const;

interface ContentMetadataOptions {
  title: string;
  description: string;
  path: string;
  openGraph?: Metadata['openGraph'];
}

export function createContentMetadata({
  title,
  description,
  path,
  openGraph,
}: ContentMetadataOptions): Metadata {
  const canonical = `${siteConfig.url}${path}`;
  const ogTitle =
    openGraph && typeof openGraph === 'object' && 'title' in openGraph && openGraph.title
      ? openGraph.title
      : `${title} | ${siteConfig.name}`;

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
    openGraph: {
      title: ogTitle,
      description,
      url: canonical,
      locale: siteConfig.locale,
      siteName: siteConfig.name,
      type: 'website',
      images: [OG_IMAGE],
      ...openGraph,
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle,
      description,
      images: [OG_IMAGE.url],
    },
  };
}

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
  return createContentMetadata({ title, description, path });
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
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    type: 'website',
    locale: siteConfig.locale,
    siteName: siteConfig.name,
    images: [OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    images: [OG_IMAGE.url],
  },
};
