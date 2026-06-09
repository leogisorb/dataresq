import { DIAGNOSIS_FEE_FORMATTED, type DeviceKey } from '@/lib/constants';

export interface ServiceCard {
  slug: string;
  icon: string;
  title: string;
  description: string;
  href: string;
  imageAlt: string;
  defaultDevice?: DeviceKey;
}

export const datenrettungServices: ServiceCard[] = [
  {
    slug: 'festplatte-hdd',
    icon: '💾',
    title: 'Festplatte (HDD)',
    description:
      'Headcrash, Elektronikschaden, nicht erkannt — wir retten Ihre Daten aus allen HDD-Typen.',
    href: '/datenrettung/festplatte-hdd',
    imageAlt: 'Datenrettung Festplatte HDD',
    defaultDevice: 'hdd',
  },
  {
    slug: 'ssd',
    icon: '⚡',
    title: 'SSD & NVMe',
    description:
      'Controller-Defekt, gelöschte Partitionen, Firmware-Fehler — spezialisierte SSD-Rettung.',
    href: '/datenrettung/ssd',
    imageAlt: 'Datenrettung SSD',
    defaultDevice: 'ssd',
  },
  {
    slug: 'raid-nas',
    icon: '🗄️',
    title: 'RAID & NAS',
    description:
      'RAID 0/1/5/6, Synology, QNAP, Drobo — auch bei mehrfachem Laufwerksausfall.',
    href: '/datenrettung/raid-nas',
    imageAlt: 'Datenrettung RAID NAS',
    defaultDevice: 'raid',
  },
  {
    slug: 'usb-sd',
    icon: '🔌',
    title: 'USB-Stick & SD-Karte',
    description:
      'Abgebrochener Stecker, beschädigter Chip, gelöschte Fotos — Rettung ab 99 €.',
    href: '/datenrettung/usb-sd',
    imageAlt: 'Datenrettung USB SD-Karte',
    defaultDevice: 'usb',
  },
  {
    slug: 'server',
    icon: '🖥️',
    title: 'Server & Virtuell',
    description:
      'VMware, Hyper-V, Windows Server — Datenverlust im Unternehmen schnell und diskret beheben.',
    href: '/datenrettung/server',
    imageAlt: 'Datenrettung Server',
    defaultDevice: 'raid',
  },
  {
    slug: 'smartphone',
    icon: '📱',
    title: 'Smartphone',
    description:
      'Kaputtes Display, Wassereinbruch, gelöschte Fotos — Datenrettung für Android und iPhone.',
    href: '/datenrettung/smartphone',
    imageAlt: 'Datenrettung Smartphone',
  },
];

export function getDatenrettungService(slug: string): ServiceCard | undefined {
  return datenrettungServices.find((service) => service.slug === slug);
}

export function getDatenrettungSlugs(): string[] {
  return datenrettungServices.map((service) => service.slug);
}

export interface ProcessStep {
  step: number;
  phase: 1 | 2;
  phaseLabel: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    phase: 1,
    phaseLabel: 'Kontakt & Einsendung',
    title: 'Anfrage stellen',
    description:
      'Online, per Telefon oder direkt in einem unserer Shops — kostenlos und unverbindlich.',
  },
  {
    step: 2,
    phase: 1,
    phaseLabel: 'Kontakt & Einsendung',
    title: 'Prüfung & Kontaktaufnahme',
    description:
      'Wir melden uns innerhalb von 2 Stunden mit einem ersten Kostenrahmen und dem weiteren Ablauf.',
  },
  {
    step: 3,
    phase: 1,
    phaseLabel: 'Kontakt & Einsendung',
    title: 'Einsendung oder Shop-Abgabe',
    description:
      'Datenträger sicher per Versand einsenden (Versandlabel auf Anfrage) oder persönlich in einem unserer Shops abgeben.',
  },
  {
    step: 4,
    phase: 2,
    phaseLabel: 'Rettung & Rückgabe',
    title: 'Diagnose im Reinraum',
    description: `Erstprüfung in unserem ISO-5-Reinraum für ${DIAGNOSIS_FEE_FORMATTED}. Ergebnis und Festpreis-Angebot binnen 24–48h.`,
  },
  {
    step: 5,
    phase: 2,
    phaseLabel: 'Rettung & Rückgabe',
    title: 'Datenrettung bei Zusage',
    description:
      'Erst nach Ihrer ausdrücklichen Freigabe beginnt die Rettung zum vereinbarten Festpreis.',
  },
  {
    step: 6,
    phase: 2,
    phaseLabel: 'Rettung & Rückgabe',
    title: 'Sichere Datenübergabe',
    description:
      'Gerettete Daten per verschlüsseltem Transfer oder auf einer neuen Festplatte — DSGVO-konform.',
  },
];

export const trustMetrics = [
  { value: '92%', label: 'Erfolgsquote' },
  { value: DIAGNOSIS_FEE_FORMATTED, label: 'Prüfgebühr' },
  { value: '3–5 Tage', label: 'Standardbearbeitung' },
];

export const trustBadges = ['ISO-Zertifikat', 'Reinraum Klasse 100', 'DSGVO-konform'];
