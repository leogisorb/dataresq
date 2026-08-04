import CalcStepHeading from '@/components/calculator/CalcStepHeading';
import AnfrageForm, { type AnfragePrefill } from '@/components/contact/AnfrageForm';
import { BTN_CALC_PAIR_SECONDARY } from '@/lib/button-styles';
import { NO_COST_GUARANTEE_NOTE } from '@/lib/constants';

interface CalcStepFormProps {
  prefill: AnfragePrefill;
  onReset: () => void;
}

export default function CalcStepForm({ prefill, onReset }: CalcStepFormProps): React.JSX.Element {
  return (
    <div className="flex flex-col gap-6">
      <CalcStepHeading id="calc-step-form">Anfrage absenden</CalcStepHeading>
      <p className="text-sm text-text-muted">
        Festpreis nach kostenloser Analyse — verbindlich vor Beauftragung.
      </p>
      <AnfrageForm prefill={prefill} submitLabel="Angebot anfordern" />
      <button className={BTN_CALC_PAIR_SECONDARY} type="button" onClick={onReset}>
        Neu berechnen
      </button>
      <p className="text-center text-sm text-text-muted">{NO_COST_GUARANTEE_NOTE}</p>
    </div>
  );
}
