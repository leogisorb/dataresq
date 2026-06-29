import { datenrettungServices } from '@/lib/datenrettung-services';

export interface StandortService {
  title: string;
  description: string;
  href: string;
}

export const STANDORT_SERVICES: StandortService[] = [
  ...datenrettungServices.map((service) => ({
    title: service.title,
    description: service.description,
    href: service.href,
  })),
  {
    title: 'Notebook & Laptop',
    description:
      'Boot-Fehler, Sturz, Wasserschaden oder defekte SSD/HDD — Datenrettung für alle Notebook-Typen.',
    href: '/datenrettung/ssd',
  },
];
