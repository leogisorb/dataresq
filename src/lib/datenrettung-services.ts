import type { DeviceKey } from '@/lib/constants';

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

export const processSteps = [
  {
    step: '①',
    title: 'Einsenden (kostenlos)',
    description:
      'Verpacken Sie Ihr Medium sicher und senden Sie es uns zu — kostenloses Versandlabel auf Anfrage.',
  },
  {
    step: '②',
    title: 'Kostenlose Diagnose (24–48h)',
    description:
      'Wir analysieren den Schaden und senden Ihnen einen Festpreis-Kostenvoranschlag. Keine Überraschungen.',
  },
  {
    step: '③',
    title: 'Daten zurück',
    description:
      'Nach Ihrer Freigabe retten wir Ihre Daten und senden sie auf einem neuen Medium zurück.',
  },
];

export const trustMetrics = [
  { value: '92%', label: 'Erfolgsquote' },
  { value: '0€', label: 'Diagnosekosten' },
  { value: '24h', label: 'Express möglich' },
  { value: '100%', label: 'Interne Bearbeitung' },
];

export const trustBadges = ['ISO-Zertifikat', 'Reinraum Klasse 100', 'DSGVO-konform'];
