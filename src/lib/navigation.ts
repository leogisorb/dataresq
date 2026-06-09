export interface NavItem {
  label: string;
  href: string;
}

export const mainNavItems: NavItem[] = [
  { label: 'Startseite', href: '/' },
  { label: 'Datenrettung', href: '/datenrettung' },
  { label: 'Preise & Kosten', href: '/#kostenrechner' },
  { label: 'Über uns', href: '/ueber-uns' },
  { label: 'Kontakt', href: '/#kontakt' },
];
