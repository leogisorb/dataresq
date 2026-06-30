import Link from 'next/link';

import CalcStepHeading from '@/components/calculator/CalcStepHeading';
import { BTN_BRAND_RECT } from '@/lib/button-styles';
import {
  DAMAGE_OPTIONS,
  DEVICE_OPTIONS,
  URGENCY_OPTIONS,
  type PriceEstimateResult,
} from '@/lib/calculator';
import type { DamageKey, DeviceKey, UrgencyKey } from '@/lib/constants';
import { DIAGNOSIS_FEE_FORMATTED, FAILED_RECOVERY_NOTE } from '@/lib/constants';

interface CalcStepResultProps {
  device: DeviceKey;
  damage: DamageKey;
  urgency: UrgencyKey;
  priceEstimate: PriceEstimateResult;
  onReset: () => void;
}

export default function CalcStepResult({
  device,
  damage,
  urgency,
  priceEstimate,
  onReset,
}: CalcStepResultProps) {
  const deviceLabel = DEVICE_OPTIONS.find((o) => o.key === device)?.label ?? '';
  const damageLabel = DAMAGE_OPTIONS.find((o) => o.key === damage)?.label ?? '';
  const urgencyLabel = URGENCY_OPTIONS.find((o) => o.key === urgency)?.label ?? '';

  return (
    <div role="group" aria-labelledby="calc-step-result">
      <CalcStepHeading id="calc-step-result">Ihr Preisrahmen</CalcStepHeading>

      <p
        aria-live="polite"
        className="mt-6 text-5xl font-semibold tracking-tight text-text md:text-6xl"
      >
        {priceEstimate.label}
      </p>

      <p className="mt-3 text-base text-text-muted">
        {deviceLabel} · {damageLabel} · {urgencyLabel}
      </p>

      {priceEstimate.range !== null && (
        <p className="mt-2 text-sm text-text-muted">
          Unverbindlicher Preisrahmen inkl. MwSt. — verbindliches Angebot nach Laboranalyse.
        </p>
      )}

      <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3 md:gap-4">
        <div className="rounded-xl border border-border bg-bg-card p-5 md:p-6">
          <p className="text-2xl font-semibold text-text">92%</p>
          <p className="mt-1 text-sm text-text-muted">Erfolgsquote · Reinraum ISO 5</p>
        </div>
        <div className="rounded-xl border border-border bg-bg-card p-5 md:p-6">
          <p className="text-2xl font-semibold text-text">{DIAGNOSIS_FEE_FORMATTED}</p>
          <p className="mt-1 text-sm text-text-muted">
            Analysepauschale — wird bei Beauftragung voll verrechnet
          </p>
        </div>
        <div className="rounded-xl border border-border bg-bg-card p-5 md:p-6">
          <p className="text-2xl font-semibold text-text">Angebot</p>
          <p className="mt-1 text-sm text-text-muted">Verbindlich nach Laboranalyse</p>
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <Link className={`${BTN_BRAND_RECT} text-center`} href="/kontakt">
          Angebot anfordern
        </Link>
        <button
          type="button"
          className="rounded-xl border border-border px-6 py-4 text-base font-medium text-text-muted transition-colors active:border-neon md:hover:border-neon md:hover:text-text"
          onClick={onReset}
        >
          Neu berechnen
        </button>
      </div>

      <p className="mt-6 text-sm text-text-dim">
        Analysepauschale {DIAGNOSIS_FEE_FORMATTED} wird bei Beauftragung zu 100 % angerechnet.{' '}
        {FAILED_RECOVERY_NOTE}
      </p>
    </div>
  );
}
