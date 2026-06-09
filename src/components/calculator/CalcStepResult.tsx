import Link from 'next/link';

import CalcStepHeading from '@/components/calculator/CalcStepHeading';
import { BTN_BRAND_RECT } from '@/lib/button-styles';
import {
  DAMAGE_OPTIONS,
  DEVICE_OPTIONS,
  URGENCY_OPTIONS,
  formatPriceRange,
} from '@/lib/calculator';
import type { DamageKey, DeviceKey, UrgencyKey } from '@/lib/constants';
import { DIAGNOSIS_FEE_FORMATTED } from '@/lib/constants';

interface CalcStepResultProps {
  device: DeviceKey;
  damage: DamageKey;
  urgency: UrgencyKey;
  priceRange: [number, number];
  onReset: () => void;
}

export default function CalcStepResult({
  device,
  damage,
  urgency,
  priceRange,
  onReset,
}: CalcStepResultProps) {
  const deviceLabel = DEVICE_OPTIONS.find((o) => o.key === device)?.label ?? '';
  const damageLabel = DAMAGE_OPTIONS.find((o) => o.key === damage)?.label ?? '';
  const urgencyLabel = URGENCY_OPTIONS.find((o) => o.key === urgency)?.label ?? '';

  return (
    <div role="group" aria-labelledby="calc-step-result">
      <CalcStepHeading id="calc-step-result">Ihr Richtpreis</CalcStepHeading>

      <p
        aria-live="polite"
        className="mt-6 text-5xl font-semibold tracking-tight text-text md:text-6xl"
      >
        {formatPriceRange(priceRange)}
      </p>

      <p className="mt-3 text-base text-text-muted">
        {deviceLabel} · {damageLabel} · {urgencyLabel}
      </p>

      <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3 md:gap-4">
        <div className="rounded-xl border border-border bg-bg-card p-5 md:p-6">
          <p className="text-2xl font-semibold text-text">97%</p>
          <p className="mt-1 text-sm text-text-muted">Erfolgsrate · Reinraum ISO 5</p>
        </div>
        <div className="rounded-xl border border-border bg-bg-card p-5 md:p-6">
          <p className="text-2xl font-semibold text-text">{DIAGNOSIS_FEE_FORMATTED}</p>
          <p className="mt-1 text-sm text-text-muted">Prüfgebühr Erstdiagnose</p>
        </div>
        <div className="rounded-xl border border-border bg-bg-card p-5 md:p-6">
          <p className="text-2xl font-semibold text-text">Festpreis</p>
          <p className="mt-1 text-sm text-text-muted">Verbindliches Angebot vor Beauftragung</p>
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <Link className={`${BTN_BRAND_RECT} text-center`} href="/kontakt">
          Angebot anfordern
        </Link>
        <button
          type="button"
          className="rounded-xl border border-border px-6 py-4 text-base font-medium text-text-muted transition-colors hover:border-text-dim hover:text-text"
          onClick={onReset}
        >
          Neu berechnen
        </button>
      </div>

      <p className="mt-6 text-sm text-text-dim">
        Richtpreis — verbindlicher Festpreis nach Erstprüfung ({DIAGNOSIS_FEE_FORMATTED}).
      </p>
    </div>
  );
}
