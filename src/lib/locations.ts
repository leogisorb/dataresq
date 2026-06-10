export type Location = {
  slug: string;
  name: string;
  region: string;
  zip: string;
  lat: number;
  lng: number;
  description: string;
  localFact: string;
  nearbyAreas: string[];
  serviceNote: string;
};

export const LOCATIONS: Location[] = [
  {
    slug: 'grevenbroich',
    name: 'Grevenbroich',
    region: 'NRW',
    zip: '41515',
    lat: 51.0897,
    lng: 6.5924,
    description:
      'RSQDATA / iAmbulanz Grevenbroich — persönliche Abgabe ohne Termin, Kundenbetreuung vor Ort.',
    localFact:
      'Unsere Abgabestelle in Grevenbroich dokumentiert den Zustand Ihres Datenträgers gemeinsam mit Ihnen und beantwortet Ihre Fragen direkt vor Ort.',
    nearbyAreas: ['Neuss', 'Mönchengladbach', 'Krefeld', 'Düsseldorf', 'Erkelenz'],
    serviceNote:
      'RSQDATA / iAmbulanz, Am Hammerwerk 16A, 41515 Grevenbroich — Abgabe ohne Termin. Kostenlose DHL Express-Abholung an Ihrer Haustür.',
  },
  {
    slug: 'moenchengladbach',
    name: 'Mönchengladbach',
    region: 'NRW',
    zip: '41061',
    lat: 51.1805,
    lng: 6.4428,
    description:
      'RSQDATA / iAmbulanz Mönchengladbach — persönliche Abgabe ohne Termin in der Region Niederrhein.',
    localFact:
      'In Mönchengladbach können Sie Ihren Datenträger ohne Termin abgeben. Unsere Kundenbetreuung dokumentiert den Zustand und erklärt den weiteren Ablauf.',
    nearbyAreas: ['Grevenbroich', 'Viersen', 'Krefeld', 'Düsseldorf', 'Jüchen'],
    serviceNote:
      'RSQDATA / iAmbulanz, Lüpertzender Str. 159, 41061 Mönchengladbach — Abgabe ohne Termin. Kostenlose DHL Express-Abholung an Ihrer Haustür.',
  },
  {
    slug: 'koeln',
    name: 'Köln',
    region: 'NRW',
    zip: '50823',
    lat: 50.9375,
    lng: 6.9603,
    description:
      'RSQDATA Büro Köln — persönliche Abgabe ohne Termin im Rheinland.',
    localFact:
      'Unser Kölner Büro ist Ihre Abgabestelle für den Großraum Köln/Bonn — mit direkter Kundenbetreuung und Dokumentation des Datenträger-Zustands.',
    nearbyAreas: ['Bonn', 'Leverkusen', 'Bergisch Gladbach', 'Hürth', 'Brühl'],
    serviceNote:
      'RSQDATA Büro Köln, Pellenzstr. 15, 50823 Köln — Abgabe ohne Termin. Kostenlose DHL Express-Abholung an Ihrer Haustür.',
  },
];

export function getLocation(slug: string): Location | undefined {
  return LOCATIONS.find((location) => location.slug === slug);
}
