import {
  BINDING_OFFER_BADGE,
  CONTENT_LAST_UPDATED,
  FAILED_RECOVERY_BADGE,
  FREE_DIAGNOSIS_BADGE,
  LEGAL,
  NRW_AREA_SERVED,
  SITE,
} from './constants';
import { CALCULATOR_PAGE_PATH } from './calculator-section';
import { calculatorFaqs, type FaqItem } from './faq-calculator';
import type { Location } from './locations';
import { siteConfig, OG_IMAGE } from './metadata';
import type { ProcessStep } from './datenrettung-services';
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
  email: string;
  telephone: string;
  logo: string;
  image: string;
  foundingDate: string;
  sameAs?: string[];
  employee?: Array<{
    '@type': 'Person';
    name: string;
    jobTitle: string;
  }>;
}

/** Nur reale Teammitglieder — Platzhalter mit [ … ] nicht in Schema ausgeben */
function getRealTeamEmployees(): Array<{ '@type': 'Person'; name: string; jobTitle: string }> {
  return TEAM.filter((member) => !member.name.includes('[')).map((member) => ({
    '@type': 'Person' as const,
    name: member.name,
    jobTitle: member.role,
  }));
}

export function generateOrganizationJsonLd(): OrganizationJsonLdSchema {
  const employees = getRealTeamEmployees();
  const sameAs = SITE.sameAs.filter((url) => url.length > 0);

  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
    email: SITE.email,
    telephone: SITE.phone,
    logo: `${siteConfig.url}/images/logo_2.svg`,
    image: `${siteConfig.url}${OG_IMAGE.url}`,
    foundingDate: String(FOUNDING_YEAR),
    ...(sameAs.length > 0 ? { sameAs: [...sameAs] } : {}),
    ...(employees.length > 0 ? { employee: employees } : {}),
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

export type AreaServedValue =
  | string
  | string[]
  | {
      '@type': 'AdministrativeArea' | 'City' | 'Country';
      name: string;
    }[];

export interface LocalBusinessSchema {
  '@context': 'https://schema.org';
  '@type': 'LocalBusiness';
  name: string;
  description: string;
  url: string;
  email: string;
  telephone: string;
  image: string;
  logo: string;
  priceRange: string;
  address: {
    '@type': 'PostalAddress';
    streetAddress?: string;
    postalCode?: string;
    addressLocality?: string;
    addressRegion?: string;
    addressCountry: string;
  };
  areaServed: AreaServedValue;
  sameAs?: string[];
  openingHoursSpecification: Array<{
    '@type': 'OpeningHoursSpecification';
    dayOfWeek: string[];
    opens: string;
    closes: string;
  }>;
  hasOfferCatalog: {
    '@type': 'OfferCatalog';
    name: string;
  };
}

function buildNrwAreaServed(): AreaServedValue {
  return [
    { '@type': 'Country' as const, name: 'Deutschland' },
    { '@type': 'AdministrativeArea' as const, name: 'Nordrhein-Westfalen' },
    ...NRW_AREA_SERVED.filter((name) => name !== 'Nordrhein-Westfalen').map((name) => ({
      '@type': 'City' as const,
      name,
    })),
  ];
}

export function generateLocalBusinessJsonLd(): LocalBusinessSchema {
  const sameAs = SITE.sameAs.filter((url) => url.length > 0);

  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: siteConfig.name,
    description: `Professionelle Datenrettung für Festplatten, SSD, RAID und NAS. ${FREE_DIAGNOSIS_BADGE}, ${BINDING_OFFER_BADGE.toLowerCase()}. Standorte in NRW: Abgabe Grevenbroich und Mönchengladbach, Büro Köln.`,
    url: siteConfig.url,
    email: SITE.email,
    telephone: SITE.phone,
    image: `${siteConfig.url}${OG_IMAGE.url}`,
    logo: `${siteConfig.url}/images/logo_2.svg`,
    priceRange: '€€',
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.address.street,
      postalCode: SITE.address.zip,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.region,
      addressCountry: SITE.address.country,
    },
    areaServed: buildNrwAreaServed(),
    ...(sameAs.length > 0 ? { sameAs: [...sameAs] } : {}),
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [...SITE.openingHours.weekdays],
        opens: SITE.openingHours.opens,
        closes: SITE.openingHours.closes,
      },
    ],
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
  areaServed: AreaServedValue;
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
    url: `${siteConfig.url}${CALCULATOR_PAGE_PATH}`,
    provider: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: buildNrwAreaServed(),
    offers: {
      '@type': 'Offer',
      priceCurrency: 'EUR',
      description: `${FREE_DIAGNOSIS_BADGE} — ${BINDING_OFFER_BADGE.toLowerCase()}, ${FAILED_RECOVERY_BADGE.toLowerCase()}.`,
    },
  };
}

export interface DatenrettungServiceSchema {
  '@context': 'https://schema.org';
  '@type': 'Service';
  '@id': string;
  name: string;
  url: string;
  provider: {
    '@type': 'LocalBusiness';
    name: string;
    url: string;
  };
  serviceType: string;
  areaServed: AreaServedValue;
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
  const url = `${siteConfig.url}/datenrettung`;
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${url}#service`,
    name: 'Professionelle Datenrettung',
    url,
    provider: {
      '@type': 'LocalBusiness',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    serviceType: 'Datenrettung',
    areaServed: buildNrwAreaServed(),
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

export interface MediumServiceSchema {
  '@context': 'https://schema.org';
  '@type': 'Service';
  '@id': string;
  name: string;
  description: string;
  url: string;
  provider: {
    '@type': 'LocalBusiness';
    name: string;
    url: string;
  };
  serviceType: string;
  areaServed: AreaServedValue;
}

export function generateMediumServiceJsonLd(
  name: string,
  description: string,
  path: string,
): MediumServiceSchema {
  const url = `${siteConfig.url}${path.startsWith('/') ? path : `/${path}`}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${url}#service`,
    name,
    description,
    url,
    provider: {
      '@type': 'LocalBusiness',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    serviceType: 'Datenrettung',
    areaServed: buildNrwAreaServed(),
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

export interface HowToSchema {
  '@context': 'https://schema.org';
  '@type': 'HowTo';
  name: string;
  description: string;
  totalTime?: string;
  step: Array<{
    '@type': 'HowToStep';
    position: number;
    name: string;
    text: string;
  }>;
}

export function generateHowToJsonLd(
  steps: ProcessStep[],
  name = 'So funktioniert professionelle Datenrettung bei RSQDATA',
  description = 'Von der Anfrage über kostenlose Analyse inkl. Dateiliste bis zur sicheren Übergabe Ihrer geretteten Daten.',
): HowToSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    step: steps.map((item) => ({
      '@type': 'HowToStep',
      position: item.step,
      name: item.title,
      text: item.description,
    })),
  };
}

export interface ArticleSchema {
  '@context': 'https://schema.org';
  '@type': 'Article';
  headline: string;
  description: string;
  datePublished: string;
  dateModified: string;
  author: {
    '@type': 'Person';
    name: string;
    url: string;
  };
  publisher: {
    '@type': 'Organization';
    name: string;
    url: string;
    logo: {
      '@type': 'ImageObject';
      url: string;
    };
  };
  mainEntityOfPage: string;
}

export function generateArticleJsonLd(options: {
  headline: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified?: string;
}): ArticleSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: options.headline,
    description: options.description,
    datePublished: options.datePublished,
    dateModified: options.dateModified ?? options.datePublished,
    author: {
      '@type': 'Person',
      name: LEGAL.ownerName,
      url: `${siteConfig.url}/ueber-uns`,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/images/logo_2.svg`,
      },
    },
    mainEntityOfPage: `${siteConfig.url}${options.path}`,
  };
}

export interface WebSiteSchema {
  '@context': 'https://schema.org';
  '@type': 'WebSite';
  name: string;
  url: string;
  description: string;
  publisher: {
    '@type': 'Organization';
    name: string;
  };
}

export function generateWebSiteJsonLd(): WebSiteSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
    },
  };
}

export interface CollectionPageSchema {
  '@context': 'https://schema.org';
  '@type': 'CollectionPage';
  name: string;
  description: string;
  url: string;
  dateModified?: string;
}

export function generateCollectionPageJsonLd(
  name: string,
  description: string,
  path: string,
): CollectionPageSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name,
    description,
    url: `${siteConfig.url}${path}`,
    dateModified: CONTENT_LAST_UPDATED,
  };
}

export interface LocalBusinessLocationSchema {
  '@context': 'https://schema.org';
  '@type': 'LocalBusiness';
  name: string;
  url: string;
  telephone: string;
  email: string;
  image: string;
  areaServed: string[];
  geo: {
    '@type': 'GeoCoordinates';
    latitude: number;
    longitude: number;
  };
  address: {
    '@type': 'PostalAddress';
    streetAddress: string;
    postalCode: string;
    addressLocality: string;
    addressRegion: string;
    addressCountry: string;
  };
  openingHoursSpecification?: Array<{
    '@type': 'OpeningHoursSpecification';
    dayOfWeek: string[];
    opens: string;
    closes: string;
  }>;
  sameAs?: string[];
  parentOrganization: {
    '@type': 'Organization';
    name: string;
    url: string;
  };
}

export function generateLocalBusinessLocationJsonLd(loc: Location): LocalBusinessLocationSchema {
  const sameAs = SITE.sameAs.filter((url) => url.length > 0);
  const isGermany = loc.region === 'NRW' || loc.region === 'DE';

  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `${siteConfig.name} ${loc.name}`,
    url: `${siteConfig.url}/standort/${loc.slug}`,
    telephone: SITE.phone,
    email: SITE.email,
    image: `${siteConfig.url}${OG_IMAGE.url}`,
    areaServed: isGermany
      ? Array.from(new Set([loc.name, ...loc.nearbyAreas, ...NRW_AREA_SERVED]))
      : [loc.name, ...loc.nearbyAreas],
    geo: {
      '@type': 'GeoCoordinates',
      latitude: loc.lat,
      longitude: loc.lng,
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: loc.street,
      postalCode: loc.zip,
      addressLocality: loc.name,
      addressRegion: loc.region,
      addressCountry: isGermany ? 'DE' : 'GB',
    },
    ...(loc.kind === 'buero'
      ? {
          openingHoursSpecification: [
            {
              '@type': 'OpeningHoursSpecification' as const,
              dayOfWeek: [...SITE.openingHours.weekdays],
              opens: SITE.openingHours.opens,
              closes: SITE.openingHours.closes,
            },
          ],
        }
      : {}),
    ...(sameAs.length > 0 ? { sameAs: [...sameAs] } : {}),
    parentOrganization: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
}
