import type { DamageKey, DeviceKey, UrgencyKey } from '@/lib/constants';

export type CalcIconKey = DeviceKey | DamageKey | UrgencyKey;

export const CALC_ICON_COLORS: Record<CalcIconKey, string> = {
  hdd: 'text-[#0071e3]',
  ssd: 'text-[#5856d6]',
  raid: 'text-[#ff9500]',
  usb: 'text-[#34c759]',
  smartphone: 'text-[#007aff]',
  notebook: 'text-[#86868b]',
  del: 'text-[#ff3b30]',
  mech: 'text-[#ff9500]',
  water: 'text-[#32ade6]',
  ctrl: 'text-[#5856d6]',
  enc: 'text-[#af52de]',
  crash: 'text-[#ff2d55]',
  std: 'text-[#86868b]',
  express: 'text-[#ff9500]',
  notfall: 'text-[#ff3b30]',
};

export function calcTileIconClasses(isSelected: boolean, key: CalcIconKey): string {
  const base = 'transition-colors duration-200';
  if (!isSelected) return `${base} text-text-dim`;
  return `${base} ${CALC_ICON_COLORS[key]}`;
}
