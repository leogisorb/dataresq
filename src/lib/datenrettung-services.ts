import { DIAGNOSIS_FEE_FORMATTED, FAILED_RECOVERY_BADGE, FAILED_RECOVERY_NOTE, type DeviceKey } from '@/lib/constants';

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
      'RAID 0/1/5/6, Synology, QNAP, Drobo — auch bei mehrfachem Laufwerksausfall. Preis individuell nach kostenloser Voranfrage.',
    href: '/datenrettung/raid-nas',
    imageAlt: 'Datenrettung RAID NAS',
    defaultDevice: 'raid',
  },
  {
    slug: 'usb-sd',
    icon: '🔌',
    title: 'USB-Stick & SD-Karte',
    description:
      'Abgebrochener Stecker, beschädigter Chip, gelöschte Fotos — Preisrahmen 699 – 999 € (Flash-Speicher, Standard).',
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
    phaseLabel: 'Anfrage & Angebot',
    title: 'Anfrage stellen & Angebot erhalten',
    description:
      'Beschreiben Sie über unser Online-Formular Datenträger, Auslöser und wichtige Daten — und wählen Sie Ihr Service-Level. Sie erhalten sofort Ihr unverbindliches Angebot: Festplatte (HDD) / SSD — Standard (3–5 AT) 899 – 1.799 €, Express (1–2 AT) 1.099 – 1.999 €. Flash (USB-Stick, Speicherkarte) — Standard 699 – 999 €, Express 899 – 1.199 €. RAID / NAS / Server: individuell nach kostenloser Voranfrage. Notfall (24/7): auf Anfrage. Alle Preise inkl. MwSt. Wichtig: Schalten Sie den Datenträger nicht mehr ein und starten Sie keine eigenen Rettungsversuche.',
  },
  {
    step: 2,
    phase: 1,
    phaseLabel: 'Anfrage & Angebot',
    title: 'Kostenlose Express-Abholung oder persönliche Abgabe',
    description:
      'DHL Express holt Ihren Datenträger kostenlos und versichert an Ihrer Haustür ab — mit Wunschzeitfenster. Auf Wunsch senden wir vorab eine kostenlose Schutzbox mit Verpackungsanleitung. Oder geben Sie Ihren Datenträger ohne Termin an unseren Abgabestellen in Grevenbroich oder Mönchengladbach ab.',
  },
  {
    step: 3,
    phase: 1,
    phaseLabel: 'Anfrage & Angebot',
    title: 'Laboranalyse mit fairer Verrechnungs-Garantie',
    description: `Nach Eingang dokumentieren wir den Zustand und führen die vollständige technische Analyse durch. Standard: 3–5 Arbeitstage, Express: 1–2 Arbeitstage, Notfall: 24/7 bis Ihre Daten gerettet sind. Die Analysepauschale von ${DIAGNOSIS_FEE_FORMATTED}: Bei Beauftragung wird sie zu 100 % auf Ihren Festpreis angerechnet. ${FAILED_RECOVERY_NOTE} Rückversand ist kostenlos. Entscheiden Sie sich gegen die Rettung, obwohl Daten rettbar sind, berechnen wir ${DIAGNOSIS_FEE_FORMATTED} als Aufwandspauschale.`,
  },
  {
    step: 4,
    phase: 2,
    phaseLabel: 'Rettung & Übergabe',
    title: 'Dateiliste der verfügbaren Daten & verbindliche Bestätigung',
    description:
      'Sie erhalten Zugang zu Ihrem Kundenportal mit der vollständigen Dateiliste aller verfügbaren Daten — durchklickbar wie im Datei-Explorer. Dazu eine ehrliche Einschätzung und die verbindliche Festpreis-Bestätigung nach Laboranalyse, abzüglich der bereits angerechneten Analysepauschale. Keine Nachforderungen.',
  },
  {
    step: 5,
    phase: 2,
    phaseLabel: 'Rettung & Übergabe',
    title: 'Beauftragung & Bezahlung',
    description:
      'Beauftragen Sie uns direkt im Kundenportal. Verschlüsselter Download-Link ist im Festpreis enthalten; ein neuer Datenträger per versichertem Versand gegen Aufpreis je nach Speichergröße. Nach Zahlungseingang beginnt die finale Wiederherstellung — Express- und Notfall-Aufträge werden priorisiert.',
  },
  {
    step: 6,
    phase: 2,
    phaseLabel: 'Rettung & Übergabe',
    title: 'Sichere Übergabe Ihrer Daten',
    description:
      'Sie erhalten Ihre Daten als verschlüsselten, passwortgeschützten Download oder auf einem neuen Datenträger per versichertem Versand. Ihre Daten bleiben 14 Tage als Sicherheitskopie bei uns — danach werden alle Kopien unwiderruflich und nachweisbar gelöscht. Auf Wunsch erhalten Sie ein Löschzertifikat.',
  },
];

export const trustMetrics = [
  { value: DIAGNOSIS_FEE_FORMATTED, label: 'Analysepauschale' },
  { value: '3–5 Tage', label: 'Standardbearbeitung' },
  { value: 'Festpreis', label: 'Garantiert vor Versand' },
];

export const trustBadges = [
  'Festpreis vor dem Versand',
  'Kostenlose DHL Express-Abholung',
  'Dateiliste vor dem Kauf',
  'Analysepauschale wird voll verrechnet',
  FAILED_RECOVERY_BADGE,
  'DSGVO-konform',
];
