import type { DamageKey, DeviceKey, ReturnMediumKey, UrgencyKey } from '@/lib/constants';

export type CalcIconKey = DeviceKey | DamageKey | UrgencyKey | ReturnMediumKey;

const ICON_COLORS: Record<CalcIconKey, string> = {
  hdd: 'text-[#007aff]',
  ssd: 'text-[#5856d6]',
  raid: 'text-[#ff9500]',
  usb: 'text-[#34c759]',
  smartphone: 'text-[#af52de]',
  notebook: 'text-[#64d2ff]',
  del: 'text-[#ff3b30]',
  unreadable: 'text-[#ff9500]',
  crash: 'text-[#ff2d55]',
  mech: 'text-[#ff9500]',
  not_recognized: 'text-[#8e8e93]',
  water: 'text-[#32ade6]',
  ctrl: 'text-[#5856d6]',
  unknown: 'text-[#86868b]',
  std: 'text-[#34c759]',
  express: 'text-[#ff9500]',
  notfall: 'text-[#ff3b30]',
  new: 'text-[#5856d6]',
  download: 'text-[#007aff]',
  both: 'text-[#af52de]',
};

export function calcTileIconClasses(isSelected: boolean, key: CalcIconKey): string {
  if (isSelected) return 'text-accent';
  return ICON_COLORS[key] ?? 'text-text-muted';
}
