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
  { label: 'Über uns', href: '/ueber-uns' },
  { label: 'Kontakt', href: '/#kontakt' },
];

export const mobileNavItems: MobileNavItem[] = [
  {
    label: 'Startseite',
    href: '/',
    description: 'Datenrettung mit Festpreis — bevor Sie uns Ihren Datenträger anvertrauen.',
  },
  {
    label: 'Datenrettung',
    href: '/datenrettung',
    description: 'HDD, SSD, RAID, NAS, USB und Smartphone — alle Medien, ein Prozess.',
  },
  {
    label: 'Preisrechner',
    href: '/preisrechner',
    description: 'Kostenloser Preisrahmen in vier Schritten — unverbindlich, ohne Registrierung.',
  },
  {
    label: 'Standorte',
    href: '/standort',
    description: 'Abgabestellen in Grevenbroich und Mönchengladbach oder DHL Express-Abholung.',
  },
  {
    label: 'Über uns',
    href: '/ueber-uns',
    description: 'Von der Werkstatt zum Labor — seit 2013 in Grevenbroich.',
  },
  {
    label: 'Kontakt',
    href: '/#kontakt',
    description: 'Kostenlose Erstberatung per E-Mail — wir melden uns schnellstmöglich.',
  },
];
