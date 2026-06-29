import { SITE } from '@/lib/constants';

export type LocationPartner = 'iambulanz' | 'rsqdata';

export type Location = {
  slug: string;
  name: string;
  region: string;
  zip: string;
  street: string;
  lat: number;
  lng: number;
  partner: LocationPartner;
  image: string;
  imageAlt: string;
  description: string;
  localFact: string;
  nearbyAreas: string[];
  serviceNote: string;
  mapsUrl: string;
};

export function getGoogleMapsUrl(address: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${address}, Deutschland`)}`;
}

const GREVENBROICH_ADDRESS = `${SITE.address.street}, ${SITE.address.zip} ${SITE.address.city}`;
const MOENCHENGLADBACH_ADDRESS = 'Lüpertzender Str. 159, 41061 Mönchengladbach';
const KOELN_ADDRESS = 'Pellenzstr. 15, 50823 Köln';

export const LOCATIONS: Location[] = [
  {
    slug: 'grevenbroich',
    name: 'Grevenbroich',
    region: 'NRW',
    zip: '41515',
    street: SITE.address.street,
    lat: 51.0897,
    lng: 6.5924,
    partner: 'iambulanz',
    image: '/images/standort/grevenbroich.png',
    imageAlt: 'iAmbulanz Abgabestelle Grevenbroich — RSQDATA Datenrettung',
    description:
      'RSQDATA / iAmbulanz Grevenbroich — persönliche Abgabe ohne Termin. Alle Datenträgertypen: HDD, SSD, RAID, USB, Smartphone, Notebook und mehr.',
    localFact:
      'An unserer iAmbulanz-Abgabestelle in Grevenbroich nehmen wir jeden Datenträgertyp entgegen — von der Festplatte bis zum Smartphone. Zustand und Übergabe werden vor Ort dokumentiert.',
    nearbyAreas: ['Neuss', 'Mönchengladbach', 'Krefeld', 'Düsseldorf', 'Erkelenz'],
    serviceNote: `RSQDATA / iAmbulanz, ${GREVENBROICH_ADDRESS} — Abgabe ohne Termin. Kostenlose DHL Express-Abholung an Ihrer Haustür.`,
    mapsUrl: getGoogleMapsUrl(GREVENBROICH_ADDRESS),
  },
  {
    slug: 'moenchengladbach',
    name: 'Mönchengladbach',
    region: 'NRW',
    zip: '41061',
    street: 'Lüpertzender Str. 159',
    lat: 51.1805,
    lng: 6.4428,
    partner: 'iambulanz',
    image: '/images/standort/moenchengladbach.png',
    imageAlt: 'iAmbulanz Abgabestelle Mönchengladbach — RSQDATA Datenrettung',
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
    zip: '50823',
    street: 'Pellenzstr. 15',
    lat: 50.9375,
    lng: 6.9603,
    partner: 'rsqdata',
    image: '/images/standort/koeln.png',
    imageAlt: 'RSQDATA Abgabestelle Köln — Datenrettung Rheinland',
    description:
      'RSQDATA Büro Köln — persönliche Abgabe ohne Termin im Rheinland. Alle Datenträgertypen willkommen.',
    localFact:
      'Unser Kölner Büro ist Ihre Abgabestelle für den Großraum Köln/Bonn — mit direkter Kundenbetreuung, Dokumentation und Annahme aller Datenträgertypen.',
    nearbyAreas: ['Bonn', 'Leverkusen', 'Bergisch Gladbach', 'Hürth', 'Brühl'],
    serviceNote: `RSQDATA Büro Köln, ${KOELN_ADDRESS} — Abgabe ohne Termin. Kostenlose DHL Express-Abholung an Ihrer Haustür.`,
    mapsUrl: getGoogleMapsUrl(KOELN_ADDRESS),
  },
];

export function getLocation(slug: string): Location | undefined {
  return LOCATIONS.find((location) => location.slug === slug);
}

export function getIambulanzLocations(): Location[] {
  return LOCATIONS.filter((location) => location.partner === 'iambulanz');
}
