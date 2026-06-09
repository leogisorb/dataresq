export interface ChevronStepStyle {
  bg: string;
  tick: string;
  text: string;
  icon: string;
  bullet: string;
}

export const CHEVRON_STEP_STYLES: ChevronStepStyle[] = [
  { bg: 'bg-chevron-1', tick: 'bg-chevron-1', text: 'text-bg-card', icon: 'text-chevron-1', bullet: 'bg-chevron-1' },
  { bg: 'bg-chevron-2', tick: 'bg-chevron-2', text: 'text-bg-card', icon: 'text-chevron-2', bullet: 'bg-chevron-2' },
  { bg: 'bg-chevron-3', tick: 'bg-chevron-3', text: 'text-bg-card', icon: 'text-chevron-3', bullet: 'bg-chevron-3' },
  { bg: 'bg-chevron-4', tick: 'bg-chevron-4', text: 'text-bg-card', icon: 'text-chevron-4', bullet: 'bg-chevron-4' },
  { bg: 'bg-chevron-5', tick: 'bg-chevron-5', text: 'text-text', icon: 'text-chevron-5', bullet: 'bg-chevron-5' },
  { bg: 'bg-chevron-6', tick: 'bg-chevron-6', text: 'text-bg-card', icon: 'text-chevron-6', bullet: 'bg-chevron-6' },
];

const SERVICE_CHEVRON_INDEX: Record<string, number> = {
  'festplatte-hdd': 0,
  ssd: 1,
  'raid-nas': 2,
  'usb-sd': 3,
  server: 4,
  smartphone: 5,
};

export function getChevronStyleForService(slug: string): ChevronStepStyle {
  const index = SERVICE_CHEVRON_INDEX[slug] ?? 0;
  return CHEVRON_STEP_STYLES[index];
}
