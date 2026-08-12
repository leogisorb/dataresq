export interface NavItem {
  label: string;
  href: string;
}

export interface MobileNavItem extends NavItem {
  description: string;
}

export const mainNavItems: NavItem[] = [
  { label: 'Startseite', href: '/' },
  { label: 'Datenrettung', href: '/datenrettung' },
  { label: 'Preisrechner', href: '/preisrechner' },
  { label: 'Standorte', href: '/standort' },
  { label: 'Ratgeber', href: '/ratgeber' },
  { label: 'Über uns', href: '/ueber-uns' },
  { label: 'Kontakt', href: '/#kontakt' },
];

/** Fullscreen mobile circle menu — aligned with VARIANTE_B_NAV labels. */
export const mobileNavItems: MobileNavItem[] = [
  {
    label: 'Datenrettung',
    href: '/datenrettung',
    description: 'HDD, SSD, RAID, NAS, USB und Smartphone — alle Medien, ein Prozess.',
  },
  {
    label: 'Preise',
    href: '/preisrechner',
    description: 'Festpreis-Indikator in wenigen Schritten — verbindlich nach Analyse.',
  },
  {
    label: 'Standorte',
    href: '/standort',
    description: 'Abgabestellen in Grevenbroich und Mönchengladbach oder DHL Express-Abholung.',
  },
  {
    label: 'Ratgeber',
    href: '/ratgeber',
    description: 'Praxiswissen zu Datenverlust, Analyse und Abgabe in NRW.',
  },
  {
    label: 'Über uns',
    href: '/ueber-uns',
    description: 'Standorte, Abgabe und Kundenbetreuung — RSQDATA aus Köln.',
  },
  {
    label: 'Kontakt',
    href: '/#kontakt',
    description: 'Kostenlose Erstberatung per E-Mail — wir melden uns schnellstmöglich.',
  },
];
