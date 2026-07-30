import { FREE_DIAGNOSIS_BADGE } from '@/lib/constants';

export interface VarianteBNavItem {
  label: string;
  href: string;
}

export interface VarianteBBrand {
  name: string;
  src: string;
  /** True when SVG is essentially a single-color mark (often white) */
  monochrome: boolean;
  imgClass?: string;
}

export const VARIANTE_B_COPY = {
  logoLabel: 'RSQDATA',
  headlineLine1: 'Wir retten',
  headlineLine2: 'Ihre Daten.',
  /** Hero subline — top-intent media + free diagnosis USP (NAS with RAID; phone/USB on cluster pages) */
  subline: `Datenrettung für Festplatte, SSD, RAID & NAS. ${FREE_DIAGNOSIS_BADGE}.`,
  ctaLabel: 'Datenrettung anfragen',
  secondaryCtaLabel: 'Abgabestelle finden',
} as const;

export const VARIANTE_B_NAV: VarianteBNavItem[] = [
  { label: 'Leistungen', href: '/datenrettung' },
  { label: 'Ablauf', href: '/datenrettung' },
  { label: 'Preise', href: '/preisrechner' },
  { label: 'Über uns', href: '/ueber-uns' },
  { label: 'Kontakt', href: '/#kontakt' },
];

export const VARIANTE_B_BRANDS: VarianteBBrand[] = [
  { name: 'Apple', src: '/images/Apple_Logo_0.svg', monochrome: true },
  { name: 'Samsung', src: '/images/Samsung_idLNQNZGf5_0.svg', monochrome: true },
  { name: 'LaCie', src: '/images/LaCie_idLci2C7-__1.svg', monochrome: false },
  { name: 'Seagate', src: '/images/Seagate_idsCmr5TeW_1.svg', monochrome: false },
  { name: 'Toshiba', src: '/images/Toshiba_idUntBByXp_0.svg', monochrome: true },
  { name: 'Western Digital', src: '/images/Western_Digital_idiaGcEimZ_0.svg', monochrome: false },
];
