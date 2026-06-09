'use client';

import {
  CircuitBoard,
  HardDrive,
  Monitor,
  Plus,
  Server,
  Smartphone,
  Usb,
  type LucideIcon,
} from 'lucide-react';
import { useState } from 'react';

import { calcTileClasses } from '@/components/calculator/calc-tile-styles';
import { DIAGNOSIS_FEE_FORMATTED } from '@/lib/constants';
import { getChevronStyleForService } from '@/lib/chevron-colors';
import { datenrettungServices } from '@/lib/datenrettung-services';

interface ServiceIconConfig {
  Icon: LucideIcon;
}

const SERVICE_ICONS: Record<string, ServiceIconConfig> = {
  'festplatte-hdd': { Icon: HardDrive },
  ssd: { Icon: CircuitBoard },
  'raid-nas': { Icon: Server },
  'usb-sd': { Icon: Usb },
  server: { Icon: Monitor },
  smartphone: { Icon: Smartphone },
};

interface ServiceStat {
  value: string;
  label: string;
}

interface ServiceExpandContent {
  features: string[];
  stats?: ServiceStat[];
  brands?: string[];
  note?: string;
}

const expandContent: Record<string, ServiceExpandContent> = {
  'festplatte-hdd': {
    features: [
      'Headcrash & mechanische Schäden',
      'Elektronikdefekte & Controller-Ausfall',
      'Gelöschte oder überschriebene Partitionen',
      'Reinraum ISO 5 — Class 100',
    ],
    stats: [
      { value: '95%', label: 'Erfolgsquote' },
      { value: DIAGNOSIS_FEE_FORMATTED, label: 'Prüfgebühr' },
      { value: 'Festpreis', label: 'Garantiert' },
    ],
    brands: ['WD', 'Seagate', 'Toshiba', 'Hitachi', 'Samsung', 'Fujitsu'],
  },
  ssd: {
    features: [
      'Controller-Defekt & Firmware-Fehler',
      'NAND-Flash Datenverlust',
      'Physische Beschädigung & Wasserschaden',
      'NVMe, SATA, M.2, eMMC',
    ],
    stats: [
      { value: '92%', label: 'Erfolgsquote' },
      { value: '48h', label: 'Standard' },
      { value: DIAGNOSIS_FEE_FORMATTED, label: 'Prüfgebühr' },
    ],
    brands: ['Samsung', 'WD', 'Crucial', 'Kingston', 'Corsair', 'Intel'],
  },
  'raid-nas': {
    features: [
      'RAID 0/1/5/6/10 Rekonstruktion',
      'NAS-Gehäuse & Controller-Defekte',
      'Mehrere gleichzeitig ausgefallene Disks',
      'NDA & SLA für Unternehmen',
    ],
    stats: [
      { value: '89%', label: 'Erfolgsquote' },
      { value: 'SLA', label: 'B2B' },
      { value: 'NDA', label: 'Verfügbar' },
    ],
    brands: ['Synology', 'QNAP', 'Buffalo', 'Drobo', 'LaCie', 'NetApp'],
  },
  'usb-sd': {
    features: [],
    note: 'USB-Stick ab 99€, SD-Karte ab 99€ — schnelle Diagnose, Festpreis.',
  },
  server: {
    features: [],
    note: 'VMware, Hyper-V, Windows Server — diskrete Unternehmens-Rettung mit NDA.',
  },
  smartphone: {
    features: [],
    note: 'Android & iPhone — Wassereinbruch, kaputtes Display, gelöschte Fotos.',
  },
};

function ServiceExpandBody({ slug, bulletClass }: { slug: string; bulletClass: string }) {
  const content = expandContent[slug];
  if (!content) return null;

  if (content.note) {
    return <p className="text-sm text-text-muted">{content.note}</p>;
  }

  return (
    <>
      <ul className="space-y-2 text-sm text-text-muted">
        {content.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2">
            <span className={`mt-1.5 size-1.5 shrink-0 rounded-full ${bulletClass}`} />
            {feature}
          </li>
        ))}
      </ul>

      {content.stats ? (
        <div className="mt-4 flex gap-3">
          {content.stats.map((stat) => (
            <div key={stat.label} className="flex-1 rounded-xl bg-bg-subtle p-3 text-center">
              <p className="text-base font-medium text-text">{stat.value}</p>
              <p className="text-xs text-text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      ) : null}

      {content.brands ? (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {content.brands.map((brand) => (
            <span
              key={brand}
              className="rounded-md bg-bg-subtle px-2 py-1 text-xs font-semibold text-text-muted"
            >
              {brand}
            </span>
          ))}
        </div>
      ) : null}
    </>
  );
}

export default function ServiceGrid() {
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  const toggle = (slug: string) => {
    setOpenSlug((prev) => (prev === slug ? null : slug));
  };

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:gap-4 lg:grid-cols-3">
      {datenrettungServices.map((service) => {
        const isOpen = openSlug === service.slug;
        const iconConfig = SERVICE_ICONS[service.slug];
        const Icon = iconConfig?.Icon ?? HardDrive;
        const chevronStyle = getChevronStyleForService(service.slug);

        return (
          <div key={service.slug} className={calcTileClasses(isOpen)}>
            <button
              type="button"
              aria-expanded={isOpen}
              className="flex w-full flex-col gap-3 p-5 text-left md:p-6"
              onClick={() => toggle(service.slug)}
            >
              <div className="flex w-full items-start justify-between gap-3">
                <Icon
                  aria-hidden="true"
                  className={['size-6 shrink-0 transition-colors duration-200', chevronStyle.icon].join(' ')}
                  strokeWidth={1.5}
                />
                <Plus
                  aria-hidden="true"
                  className={[
                    'size-5 shrink-0 text-text-dim transition-transform duration-300',
                    isOpen ? 'rotate-45' : 'rotate-0',
                  ].join(' ')}
                  strokeWidth={1.5}
                />
              </div>
              <span className="pr-6 text-base font-medium text-text">{service.title}</span>
              <p className="text-sm leading-relaxed text-text-muted">{service.description}</p>
            </button>

            <div
              className={[
                'grid transition-[grid-template-rows] duration-500 ease-in-out',
                isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
              ].join(' ')}
            >
              <div className="overflow-hidden">
                <div className="px-5 pb-5 md:px-6 md:pb-6">
                  <ServiceExpandBody bulletClass={chevronStyle.bullet} slug={service.slug} />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
