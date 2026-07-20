import { LAB_PARTNER, LAB_PARTNER_ADDRESS_LINE, SITE } from '@/lib/constants';

export type LocationKind = 'abgabe' | 'buero' | 'labor';

export type LocationPartner = 'iambulanz' | 'rsqdata' | 'fields';

export interface Location {
  slug: string;
  name: string;
  region: string;
  zip: string;
  street: string;
  lat: number;
  lng: number;
  kind: LocationKind;
  partner: LocationPartner;
  image: string;
  imageAlt: string;
  description: string;
  localFact: string;
  nearbyAreas: string[];
  serviceNote: string;
  mapsUrl: string;
}

export function getGoogleMapsUrl(address: string, country = 'Deutschland'): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${address}, ${country}`)}`;
}

export function getLocationPartnerLabel(loc: Location): string {
  if (loc.kind === 'labor') {
    return 'Labor (UK)';
  }
  if (loc.partner === 'iambulanz') {
    return 'RSQDATA / iAmbulanz';
  }
  return 'RSQDATA Büro';
}

export function getLocationPageTitle(loc: Location): string {
  if (loc.kind === 'buero') {
    return `RSQDATA Büro ${loc.name}`;
  }
  if (loc.kind === 'labor') {
    return `Labor ${LAB_PARTNER.name}`;
  }
  return `Datenrettung ${loc.name}`;
}

export function getLocationMetaDescription(loc: Location): string {
  if (loc.kind === 'buero') {
    return `RSQDATA Büro ${loc.name} — Beratung und Koordination bei Datenverlust. ${loc.street}, ${loc.zip} ${loc.name}. Keine Medien-Abgabe vor Ort.`;
  }
  if (loc.kind === 'labor') {
    return `Reinraumlabor ${LAB_PARTNER.name} (UK) — technische Datenrettung. Keine Abgabe vor Ort.`;
  }
  return `Datenrettung ${loc.name} — Abgabe ohne Termin an RSQDATA / iAmbulanz. Alle Datenträgertypen, kostenlose DHL Express-Abholung bundesweit.`;
}

const IAMBULANZ_GREVENBROICH_ADDRESS = 'Am Hammerwerk 16A, 41515 Grevenbroich';
const MOENCHENGLADBACH_ADDRESS = 'Lüpertzender Str. 159, 41061 Mönchengladbach';
const KOELN_OFFICE_ADDRESS = `${SITE.address.street}, ${SITE.address.zip} ${SITE.address.city}`;

export const LOCATIONS: Location[] = [
  {
    slug: 'grevenbroich',
    name: 'Grevenbroich',
    region: 'NRW',
    zip: '41515',
    street: 'Am Hammerwerk 16A',
    lat: 51.0897,
    lng: 6.5924,
    kind: 'abgabe',
    partner: 'iambulanz',
    image: '/images/standort/grevenbroich.jpeg',
    imageAlt: 'iAmbulanz Abgabestelle Grevenbroich — Empfang und Übergabe',
    description:
      'RSQDATA / iAmbulanz Grevenbroich — persönliche Abgabe ohne Termin. Alle Datenträgertypen: HDD, SSD, RAID, USB, Smartphone, Notebook und mehr.',
    localFact:
      'An unserer iAmbulanz-Abgabestelle in Grevenbroich nehmen wir jeden Datenträgertyp entgegen — von der Festplatte bis zum Smartphone. Zustand und Übergabe werden vor Ort dokumentiert.',
    nearbyAreas: ['Neuss', 'Mönchengladbach', 'Krefeld', 'Düsseldorf', 'Erkelenz'],
    serviceNote: `RSQDATA / iAmbulanz, ${IAMBULANZ_GREVENBROICH_ADDRESS} — Abgabe ohne Termin. Kostenlose DHL Express-Abholung an Ihrer Haustür.`,
    mapsUrl: getGoogleMapsUrl(IAMBULANZ_GREVENBROICH_ADDRESS),
  },
  {
    slug: 'moenchengladbach',
    name: 'Mönchengladbach',
    region: 'NRW',
    zip: '41061',
    street: 'Lüpertzender Str. 159',
    lat: 51.1805,
    lng: 6.4428,
    kind: 'abgabe',
    partner: 'iambulanz',
    image: '/images/standort/moenchengladbach.jpeg',
    imageAlt: 'iAmbulanz Abgabestelle Mönchengladbach — Storefront',
    description:
      'RSQDATA / iAmbulanz Mönchengladbach — persönliche Abgabe ohne Termin. Alle Datenträgertypen: HDD, SSD, RAID, USB, Smartphone, Notebook und mehr.',
    localFact:
      'In Mönchengladbach nehmen wir alle Datenträgertypen ohne Termin entgegen. Unsere Kundenbetreuung dokumentiert den Zustand und erklärt den weiteren Ablauf bis zur Laborrettung.',
    nearbyAreas: ['Grevenbroich', 'Viersen', 'Krefeld', 'Düsseldorf', 'Jüchen'],
    serviceNote: `RSQDATA / iAmbulanz, ${MOENCHENGLADBACH_ADDRESS} — Abgabe ohne Termin. Kostenlose DHL Express-Abholung an Ihrer Haustür.`,
    mapsUrl: getGoogleMapsUrl(MOENCHENGLADBACH_ADDRESS),
  },
  {
    slug: 'koeln',
    name: 'Köln',
    region: 'NRW',
    zip: SITE.address.zip,
    street: SITE.address.street,
    lat: 50.9589,
    lng: 6.9128,
    kind: 'buero',
    partner: 'rsqdata',
    image: '/images/hero-devices-v3.png',
    imageAlt: 'RSQDATA Büro Köln — Kundenbetreuung und Koordination',
    description:
      'RSQDATA Büro in Köln — Ihr Ansprechpartner für Beratung, Koordination und Kommunikation während der Datenrettung. Keine Abgabe vor Ort; Medien senden Sie per DHL Express oder geben sie an einer iAmbulanz-Abgabestelle ab.',
    localFact:
      'Aus Köln koordinieren wir Annahme, Analyse und Angebot. Sie erreichen uns per E-Mail — RSQDATA ist Vermittler und Kundenbetreuung, nicht das Labor selbst.',
    nearbyAreas: ['Bonn', 'Düsseldorf', 'Leverkusen', 'Bergisch Gladbach', 'Aachen'],
    serviceNote: `${KOELN_OFFICE_ADDRESS} — Büro & Kundenbetreuung. Keine Medien-Abgabe vor Ort.`,
    mapsUrl: getGoogleMapsUrl(KOELN_OFFICE_ADDRESS),
  },
  {
    slug: 'labor-fields',
    name: 'Bridgend',
    region: 'UK',
    zip: LAB_PARTNER.address.zip,
    street: LAB_PARTNER.address.street,
    lat: 51.524,
    lng: -3.697,
    kind: 'labor',
    partner: 'fields',
    image: '/images/reinraum.svg',
    imageAlt: `Reinraumlabor ${LAB_PARTNER.name} — technische Datenrettung`,
    description: `Reinraumlabor in Großbritannien (Partner ${LAB_PARTNER.name}). Keine Abgabe vor Ort.`,
    localFact:
      'Mechanische HDD-Rettung und Reinraumarbeiten. Medien werden hierher geleitet, nachdem Sie sie bei RSQDATA angemeldet haben.',
    nearbyAreas: ['Cardiff', 'Swansea', 'Newport', 'Pencoed'],
    serviceNote: `${LAB_PARTNER_ADDRESS_LINE} — keine Abgabe vor Ort.`,
    mapsUrl: getGoogleMapsUrl(LAB_PARTNER_ADDRESS_LINE, 'United Kingdom'),
  },
];

export function getLocation(slug: string): Location | undefined {
  return LOCATIONS.find((location) => location.slug === slug);
}

export function getIambulanzLocations(): Location[] {
  return LOCATIONS.filter((location) => location.partner === 'iambulanz');
}

export function getAbgabeLocations(): Location[] {
  return LOCATIONS.filter((location) => location.kind === 'abgabe');
}
