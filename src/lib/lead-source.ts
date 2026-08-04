export const LEAD_SOURCES = [
  { key: 'google', label: 'Google / Suche' },
  { key: 'empfehlung', label: 'Empfehlung' },
  { key: 'ki-assistent', label: 'KI-Assistent (ChatGPT, Perplexity, …)' },
  { key: 'sonstiges', label: 'Sonstiges' },
] as const;

export type LeadSource = (typeof LEAD_SOURCES)[number]['key'];

export function getLeadSourceLabel(key: LeadSource | '' | undefined): string {
  if (!key) return '—';
  return LEAD_SOURCES.find((item) => item.key === key)?.label ?? key;
}
