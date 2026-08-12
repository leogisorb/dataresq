import { LAB_PARTNER, SITE } from '@/lib/constants';

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
  /** Empty for confidential locations (e.g. Reinraumlabor). */
  mapsUrl: string;
}

export function getGoogleMapsUrl(address: string, country = 'Deutschland'): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${address}, ${country}`)}`;
}

/** Embed URL for privacy-friendly two-click Google Maps (no API key). */
export function getGoogleMapsEmbedUrl(loc: Location): string {
  const query = encodeURIComponent(`${loc.street}, ${loc.zip} ${loc.name}`);
  return `https://maps.google.com/maps?q=${query}&hl=de&z=15&output=embed`;
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
      'RSQDATA / iAmbulanz Grevenbroich — persönliche Abgabe ohne Termin. Alle Datenträgertypen: HDD, SSD, RAID, USB, Smartphone, Notebook & PC und mehr.',
    localFact:
      'An der iAmbulanz-Abgabestelle in Grevenbroich (Rhein-Kreis Neuss, NRW) nehmen wir ohne Termin jeden Datenträgertyp entgegen — HDD, SSD, RAID-Member, USB, Smartphone und mehr. Zustand und Übergabe werden vor Ort dokumentiert; die Laboranalyse inkl. Dateiliste ist kostenlos. Einzugsgebiet u. a. Neuss, Düsseldorf, Krefeld und Erkelenz; alternativ bundesweite DHL Express-Abholung.',
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
      'RSQDATA / iAmbulanz Mönchengladbach — persönliche Abgabe ohne Termin. Alle Datenträgertypen: HDD, SSD, RAID, USB, Smartphone, Notebook & PC und mehr.',
    localFact:
      'In Mönchengladbach (NRW) nehmen wir alle Datenträgertypen ohne Termin entgegen — von der privaten Festplatte bis zu NAS-Laufwerken. Zustand und nächste Schritte bis zur Laboranalyse werden vor Ort erklärt. Praktisch für Viersen, Krefeld, Düsseldorf und Jüchen; wer nicht vorbeikommen kann, nutzt die kostenlose DHL Express-Abholung.',
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
    image: '/images/standort/koeln-pellenzstrasse.png',
    imageAlt: 'RSQDATA Büro Köln, Pellenzstr. 15 — Gebäudeansicht',
    description:
      'RSQDATA Büro in Köln — Ihr Ansprechpartner für Beratung, Koordination und Kommunikation während der Datenrettung. Keine Abgabe vor Ort; Medien senden Sie per DHL Express oder geben sie an einer iAmbulanz-Abgabestelle ab.',
    localFact:
      'Aus dem Büro Köln (Pellenzstr. 15, 50823) koordinieren wir Annahme, Laboranalyse und verbindliches Angebot für Kundinnen und Kunden in ganz NRW — Bonn, Düsseldorf, Leverkusen, Bergisch Gladbach und Aachen eingeschlossen. Am Bürostandort ist keine Medien-Abgabe möglich; nutzen Sie Grevenbroich, Mönchengladbach oder DHL Express.',
    nearbyAreas: ['Bonn', 'Düsseldorf', 'Leverkusen', 'Bergisch Gladbach', 'Aachen'],
    serviceNote: `${KOELN_OFFICE_ADDRESS} — Büro & Kundenbetreuung. Keine Medien-Abgabe vor Ort.`,
    mapsUrl: getGoogleMapsUrl(KOELN_OFFICE_ADDRESS),
  },
  {
    slug: 'labor-fields',
    name: 'Partnerlabor UK',
    region: 'UK',
    zip: '',
    street: '',
    lat: 0,
    lng: 0,
    kind: 'labor',
    partner: 'fields',
    image: '/images/standort/labor-reinraum.png',
    imageAlt: `Reinraumlabor ${LAB_PARTNER.name} — Festplattenrettung unter dem Mikroskop`,
    description: `Reinraumlabor in Großbritannien (Partner ${LAB_PARTNER.name}). Keine Abgabe vor Ort.`,
    localFact:
      'Mechanische HDD-Rettung und Reinraumarbeiten. Medien werden hierher geleitet, nachdem Sie sie bei RSQDATA angemeldet haben. Die genaue Anschrift bleibt aus Sicherheitsgründen vertraulich.',
    nearbyAreas: [],
    serviceNote:
      'Genaue Laboranschrift aus Sicherheitsgründen nicht öffentlich — keine Abgabe vor Ort.',
    mapsUrl: '',
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

export function getOfficeAndLabLocations(): Location[] {
  return LOCATIONS.filter(
    (location) => location.kind === 'buero' || location.kind === 'labor',
  );
}
