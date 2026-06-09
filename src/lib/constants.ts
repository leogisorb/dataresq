export const SITE = {
  phone: '+49-[NUMMER]',
  phoneTel: 'tel:+49[NUMMER]',
  email: 'info@muench-datenrettung.de',
  address: {
    street: '[STRASSE]',
    city: '[ORT]',
    zip: '[PLZ]',
    country: 'DE',
  },
} as const;

export const PRICE_MATRIX: Record<string, Record<string, [number, number]>> = {
  hdd: {
    logisch: [149, 299],
    elektronik: [249, 449],
    mechanisch: [349, 699],
    wasser: [449, 899],
    ransomware: [299, 599],
  },
  ssd: {
    logisch: [199, 349],
    elektronik: [299, 549],
    mechanisch: [349, 649],
    ransomware: [349, 649],
  },
  raid: {
    logisch: [399, 699],
    elektronik: [599, 999],
    mechanisch: [599, 1199],
    ransomware: [499, 999],
  },
  usb_sd: {
    logisch: [99, 199],
    elektronik: [149, 299],
    mechanisch: [149, 299],
  },
  smartphone: {
    logisch: [299, 499],
    mechanisch: [399, 699],
  },
} as const;

export const EXPRESS_MULTIPLIER = 1.3;

/** @deprecated Use SITE.phone */
export const PHONE_NUMBER = SITE.phone;

/** @deprecated Use SITE.phone */
export const PHONE_DISPLAY = SITE.phone;
