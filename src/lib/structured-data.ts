import type { RatgeberArticle, RatgeberFaqItem } from './sanity';

import { SITE } from './constants';
import { calculatorFaqs, type FaqItem } from './faq-calculator';
import type { Location } from './locations';
import { siteConfig } from './metadata';
import { FOUNDING_YEAR, TEAM } from './team';

export interface OrganizationSchema {
  '@context': 'https://schema.org';
  '@type': 'Organization';
  name: string;
  url: string;
  description: string;
}

export interface WebPageSchema {
  '@context': 'https://schema.org';
  '@type': 'WebPage';
  name: string;
  description: string;
  url: string;
}

export function buildOrganizationSchema(): OrganizationSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
  };
}

export interface OrganizationJsonLdSchema {
  '@context': 'https://schema.org';
  '@type': 'Organization';
  name: string;
  url: string;
  telephone: string;
  email: string;
  foundingDate: string;
  employee: Array<{
    '@type': 'Person';
    name: string;
    jobTitle: string;
  }>;
}

export function generateOrganizationJsonLd(): OrganizationJsonLdSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
    telephone: SITE.phone,
    email: SITE.email,
    foundingDate: FOUNDING_YEAR,
    employee: TEAM.map((member) => ({
      '@type': 'Person',
      name: member.name,
      jobTitle: member.role,
    })),
  };
}

interface WebPageSchemaOptions {
  title: string;
  description: string;
  url: string;
}

export function buildWebPageSchema({
  title,
  description,
  url,
}: WebPageSchemaOptions): WebPageSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    url,
  };
}

export interface LocalBusinessSchema {
  '@context': 'https://schema.org';
  '@type': 'LocalBusiness';
  name: string;
  description: string;
  url: string;
  telephone: string;
  priceRange: string;
  address: {
    '@type': 'PostalAddress';
    addressCountry: string;
  };
  areaServed: string;
  hasOfferCatalog: {
    '@type': 'OfferCatalog';
    name: string;
  };
}

export function generateLocalBusinessJsonLd(): LocalBusinessSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: siteConfig.name,
    description: 'Professionelle Datenrettung für Festplatten, SSD, RAID und NAS.',
    url: siteConfig.url,
    telephone: SITE.phone,
    priceRange: '€€',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'DE',
    },
    areaServed: 'DE',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Datenrettungsservices',
    },
  };
}

export interface ServiceSchema {
  '@context': 'https://schema.org';
  '@type': 'Service';
  name: string;
  description: string;
  url: string;
  provider: {
    '@type': 'Organization';
    name: string;
    url: string;
  };
  areaServed: string;
  offers: {
    '@type': 'Offer';
    priceCurrency: string;
    description: string;
  };
}

export function generateCalculatorServiceJsonLd(): ServiceSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Datenrettung Kostenrechner',
    description:
      'Kostenloser Online-Preisrechner für Datenrettung: Festplatte, SSD, RAID, NAS und Smartphone.',
    url: `${siteConfig.url}/#kostenrechner`,
    provider: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: 'DE',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'EUR',
      description: 'Kostenlose Diagnose mit Festpreis — kein Befund, keine Kosten.',
    },
  };
}

export interface DatenrettungServiceSchema {
  '@context': 'https://schema.org';
  '@type': 'Service';
  name: string;
  provider: {
    '@type': 'LocalBusiness';
    name: string;
  };
  serviceType: string;
  areaServed: string;
  hasOfferCatalog: {
    '@type': 'OfferCatalog';
    itemListElement: Array<{
      '@type': 'Offer';
      itemOffered: {
        '@type': 'Service';
        name: string;
      };
    }>;
  };
}

export function generateServiceJsonLd(): DatenrettungServiceSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Professionelle Datenrettung',
    provider: {
      '@type': 'LocalBusiness',
      name: siteConfig.name,
    },
    serviceType: 'Datenrettung',
    areaServed: 'DE',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Festplatten Datenrettung' },
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'SSD Datenrettung' },
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'RAID Datenrettung' },
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'NAS Datenrettung' },
        },
      ],
    },
  };
}

export interface BreadcrumbSchema {
  '@context': 'https://schema.org';
  '@type': 'BreadcrumbList';
  itemListElement: Array<{
    '@type': 'ListItem';
    position: number;
    name: string;
    item: string;
  }>;
}

export function generateBreadcrumbJsonLd(
  items: Array<{ name: string; url: string }>,
): BreadcrumbSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export interface FaqPageSchema {
  '@context': 'https://schema.org';
  '@type': 'FAQPage';
  mainEntity: Array<{
    '@type': 'Question';
    name: string;
    acceptedAnswer: {
      '@type': 'Answer';
      text: string;
    };
  }>;
}

export function generateFaqPageJsonLd(faqs: FaqItem[] = calculatorFaqs): FaqPageSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function generateRatgeberFaqPageJsonLd(faqs: RatgeberFaqItem[]): FaqPageSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export interface ArticleSchema {
  '@context': 'https://schema.org';
  '@type': 'Article';
  headline: string;
  author: {
    '@type': 'Person';
    name: string;
  };
  datePublished: string | null;
  publisher: {
    '@type': 'Organization';
    name: string;
  };
}

export function generateArticleJsonLd(article: RatgeberArticle): ArticleSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    author: {
      '@type': 'Person',
      name: article.author ?? siteConfig.name,
    },
    datePublished: article.publishedAt,
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
    },
  };
}

export interface LocalBusinessLocationSchema {
  '@context': 'https://schema.org';
  '@type': 'LocalBusiness';
  name: string;
  url: string;
  telephone: string;
  areaServed: string[];
  geo: {
    '@type': 'GeoCoordinates';
    latitude: number;
    longitude: number;
  };
  address: {
    '@type': 'PostalAddress';
    addressLocality: string;
    addressRegion: string;
    addressCountry: string;
  };
}

export function generateLocalBusinessLocationJsonLd(loc: Location): LocalBusinessLocationSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `${siteConfig.name} ${loc.name}`,
    url: `${siteConfig.url}/standort/${loc.slug}`,
    telephone: SITE.phone,
    areaServed: [loc.name, ...loc.nearbyAreas],
    geo: {
      '@type': 'GeoCoordinates',
      latitude: loc.lat,
      longitude: loc.lng,
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: loc.name,
      addressRegion: loc.region,
      addressCountry: 'DE',
    },
  };
}
