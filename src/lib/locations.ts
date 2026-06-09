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
    slug: 'muenchen',
    name: 'München',
    region: 'Bayern',
    zip: '80',
    lat: 48.1351,
    lng: 11.582,
    description:
      'Professionelle Datenrettung in München — schnell, diskret, zum Festpreis.',
    localFact:
      'Als Wirtschaftsmetropole mit hoher Unternehmens- und Startup-Dichte ist schnelle Datenrettung in München besonders geschäftskritisch.',
    nearbyAreas: ['Augsburg', 'Ingolstadt', 'Rosenheim', 'Landshut', 'Freising'],
    serviceNote: 'Persönliche Abgabe in München möglich — Termin per Telefon vereinbaren.',
  },
  {
    slug: 'berlin',
    name: 'Berlin',
    region: 'Berlin',
    zip: '10',
    lat: 52.52,
    lng: 13.405,
    description: 'Datenrettung in Berlin — für Privat, Unternehmen und Behörden.',
    localFact:
      'Berlins vielfältige Tech- und Kreativwirtschaft erzeugt täglich sensible Daten auf heterogenen Speichermedien — von NAS im Homeoffice bis zum RAID im Serverraum.',
    nearbyAreas: ['Potsdam', 'Brandenburg', 'Oranienburg', 'Strausberg'],
    serviceNote: 'Einsenden per DHL — kostenloses Versandlabel auf Anfrage.',
  },
  {
    slug: 'hamburg',
    name: 'Hamburg',
    region: 'Hamburg',
    zip: '20',
    lat: 53.5753,
    lng: 10.0153,
    description: 'Datenrettung in Hamburg — für Logistik, Handel und Privatpersonen.',
    localFact:
      'Als größter Seehafen Deutschlands ist Hamburg auf lückenlosen Datenzugriff angewiesen — Datenverlust hat hier direkte wirtschaftliche Konsequenzen.',
    nearbyAreas: ['Lübeck', 'Kiel', 'Lüneburg', 'Buchholz', 'Norderstedt'],
    serviceNote: 'Expressversand ab Hamburg in der Regel 24h Laufzeit.',
  },
];

export function getLocation(slug: string): Location | undefined {
  return LOCATIONS.find((location) => location.slug === slug);
}
