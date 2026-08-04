import CalcStepHeading from '@/components/calculator/CalcStepHeading';
import AnfrageFormModal from '@/components/contact/AnfrageFormModal';
import {
  getDamageLabel,
  DEVICE_OPTIONS,
  RETURN_MEDIUM_OPTIONS,
  URGENCY_OPTIONS,
  buildAnfragePrefillLabel,
  type PriceEstimateResult,
} from '@/lib/calculator';
import { BTN_CALC_PAIR_PRIMARY, BTN_CALC_PAIR_SECONDARY } from '@/lib/button-styles';
import { calcCardClasses } from '@/components/calculator/calc-tile-styles';
import {
  DIAGNOSIS_FEE_FORMATTED,
  FREE_DIAGNOSIS_CAPTION,
  NO_COST_GUARANTEE_NOTE,
  type DamageKey,
  type DeviceKey,
  type PriceGroup,
  type ReturnMediumKey,
  type UrgencyKey,
} from '@/lib/constants';

interface CalcStepResultProps {
  device: DeviceKey;
  damage: DamageKey;
  urgency: UrgencyKey;
  returnMedium: ReturnMediumKey;
  priceEstimate: PriceEstimateResult;
  priceGroup: PriceGroup;
  onReset: () => void;
}

export default function CalcStepResult({
  device,
  damage,
  urgency,
  returnMedium,
  priceEstimate,
  priceGroup,
  onReset,
}: CalcStepResultProps): React.JSX.Element {
  const deviceLabel = DEVICE_OPTIONS.find((o) => o.key === device)?.label ?? '';
  const damageLabel = getDamageLabel(device, damage);
  const urgencyLabel = URGENCY_OPTIONS.find((o) => o.key === urgency)?.label ?? '';
  const returnMediumLabel =
    RETURN_MEDIUM_OPTIONS.find((o) => o.key === returnMedium)?.label ?? '';

  return (
    <div role="group" aria-labelledby="calc-step-result">
      <CalcStepHeading id="calc-step-result">Ihr Preisindikator</CalcStepHeading>

      <p
        aria-live="polite"
        className="mt-6 text-5xl font-semibold tracking-tight text-text md:text-6xl"
      >
        {priceEstimate.label}
      </p>

      {priceEstimate.detail ? (
        <p className="mt-3 text-base text-text-muted">{priceEstimate.detail}</p>
      ) : null}

      <p className="mt-3 text-base text-text-muted">
        {deviceLabel} · {damageLabel} · {urgencyLabel} · {returnMediumLabel}
      </p>

      <p className="mt-2 text-sm text-text-muted">
        Alle Preise inkl. MwSt. Der Festpreis wird nach der kostenlosen Analyse verbindlich — erst
        dann entscheiden Sie über die Beauftragung.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3 md:gap-4">
        <div className={`${calcCardClasses()} p-5 md:p-6`}>
          <p className="text-2xl font-semibold text-text">92%</p>
          <p className="mt-1 text-sm text-text-muted">Erfolgsquote · Partner-Reinraumlabor</p>
        </div>
        <div className={`${calcCardClasses()} p-5 md:p-6`}>
          <p className="text-2xl font-semibold text-text">{DIAGNOSIS_FEE_FORMATTED}</p>
          <p className="mt-1 text-sm text-text-muted">{FREE_DIAGNOSIS_CAPTION}</p>
        </div>
        <div className={`${calcCardClasses()} p-5 md:p-6`}>
          <p className="text-2xl font-semibold text-text">Festpreis</p>
          <p className="mt-1 text-sm text-text-muted">Verbindlich nach Laboranalyse</p>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <AnfrageFormModal
          prefill={{
            medium: deviceLabel,
            schaden: damageLabel,
            dringlichkeit: urgency,
            ruecksendung: returnMediumLabel,
            preisrahmen: buildAnfragePrefillLabel(priceEstimate),
            preisgruppe: priceGroup,
          }}
          triggerClassName={BTN_CALC_PAIR_PRIMARY}
        />
        <button className={BTN_CALC_PAIR_SECONDARY} type="button" onClick={onReset}>
          Neu berechnen
        </button>
      </div>

      <p className="mt-6 text-center text-sm text-text-muted">{NO_COST_GUARANTEE_NOTE}</p>
    </div>
  );
}
