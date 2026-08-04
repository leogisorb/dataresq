'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  CircuitBoard,
  Clock,
  Cpu,
  Download,
  Droplets,
  EyeOff,
  FileWarning,
  HardDrive,
  HelpCircle,
  Laptop,
  Layers,
  Server,
  Siren,
  Smartphone,
  Trash2,
  Usb,
  Wrench,
  Zap,
} from 'lucide-react';

import CalcProgressBar from '@/components/calculator/CalcProgressBar';
import CalcStepDamage from '@/components/calculator/CalcStepDamage';
import CalcStepDevice from '@/components/calculator/CalcStepDevice';
import CalcStepForm from '@/components/calculator/CalcStepForm';
import CalcStepResult from '@/components/calculator/CalcStepResult';
import CalcStepReturnMedium from '@/components/calculator/CalcStepReturnMedium';
import CalcStepUrgency from '@/components/calculator/CalcStepUrgency';
import CalcSummaryBar from '@/components/calculator/CalcSummaryBar';
import type { AnfragePrefill } from '@/components/contact/AnfrageForm';
import {
  buildAnfragePrefillLabel,
  calculatePriceEstimate,
  DEVICE_OPTIONS,
  getDamageLabel,
  RETURN_MEDIUM_OPTIONS,
  skipsServiceFlow,
  URGENCY_OPTIONS,
  type PriceEstimateResult,
} from '@/lib/calculator';
import { BTN_BRAND_RECT } from '@/lib/button-styles';
import type {
  DamageKey,
  DeviceKey,
  PriceGroup,
  ReturnMediumKey,
  UrgencyKey,
} from '@/lib/constants';

type Step = 1 | 2 | 3 | 4 | 5;

const DEVICE_ICONS = {
  hdd: HardDrive,
  ssd: CircuitBoard,
  raid: Server,
  usb: Usb,
  smartphone: Smartphone,
  notebook: Laptop,
} as const;

const DAMAGE_ICONS = {
  del: Trash2,
  unreadable: FileWarning,
  crash: AlertTriangle,
  mech: Wrench,
  not_recognized: EyeOff,
  water: Droplets,
  ctrl: Cpu,
  unknown: HelpCircle,
} as const;

const URGENCY_ICONS = {
  std: Clock,
  express: Zap,
  notfall: Siren,
} as const;

const RETURN_MEDIUM_ICONS = {
  new: HardDrive,
  download: Download,
  both: Layers,
} as const;

const ANFRAGE_ESTIMATE: PriceEstimateResult = {
  priceGroup: 'anfrage',
  amount: null,
  ceiling: null,
  logicalAmount: null,
  label: 'Preis nach Analyse',
  detail: 'Festpreis nach kostenloser Analyse — verbindlich vor Beauftragung.',
};

interface PriceCalculatorProps {
  defaultDevice?: DeviceKey;
}

export default function PriceCalculator({ defaultDevice }: PriceCalculatorProps): React.JSX.Element {
  const rootRef = useRef<HTMLDivElement>(null);
  const [step, setStep] = useState<Step>(1);
  const [device, setDevice] = useState<DeviceKey | null>(defaultDevice ?? null);
  const [damage, setDamage] = useState<DamageKey | null>(null);
  const [urgency, setUrgency] = useState<UrgencyKey | null>(null);
  const [returnMedium, setReturnMedium] = useState<ReturnMediumKey | null>(null);
  const [forceAnfrage, setForceAnfrage] = useState(false);
  const skipInitialCenter = useRef(true);

  const isDirectForm = device !== null && skipsServiceFlow(device);
  const totalSteps = isDirectForm ? 3 : 5;

  const centerCalculator = () => {
    rootRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  useEffect(() => {
    if (skipInitialCenter.current) {
      skipInitialCenter.current = false;
      return;
    }
    centerCalculator();
  }, [step]);

  const priceEstimate = useMemo(() => {
    if (!device) return null;
    if (forceAnfrage) return ANFRAGE_ESTIMATE;

    if (isDirectForm) {
      if (!damage) return null;
      return calculatePriceEstimate(device, damage, 'std', 'download');
    }

    if (!damage || !urgency || !returnMedium) return null;
    return calculatePriceEstimate(device, damage, urgency, returnMedium);
  }, [device, damage, urgency, returnMedium, isDirectForm, forceAnfrage]);

  const resolvedPriceGroup: PriceGroup = forceAnfrage
    ? 'anfrage'
    : (priceEstimate?.priceGroup ?? 'anfrage');

  const formPrefill = useMemo((): AnfragePrefill | null => {
    if (!device || !priceEstimate) return null;

    const deviceLabel = DEVICE_OPTIONS.find((o) => o.key === device)?.label ?? '';
    const schadenLabel = forceAnfrage
      ? 'Verschlüsselt / individuelle Prüfung'
      : damage
        ? getDamageLabel(device, damage)
        : 'Individuelle Prüfung';

    return {
      medium: deviceLabel,
      schaden: schadenLabel,
      dringlichkeit: isDirectForm || forceAnfrage ? undefined : (urgency ?? undefined),
      ruecksendung:
        isDirectForm || forceAnfrage
          ? undefined
          : returnMedium
            ? (RETURN_MEDIUM_OPTIONS.find((o) => o.key === returnMedium)?.label ?? undefined)
            : undefined,
      preisrahmen: buildAnfragePrefillLabel(priceEstimate),
      preisgruppe: resolvedPriceGroup,
    };
  }, [
    device,
    damage,
    urgency,
    returnMedium,
    priceEstimate,
    forceAnfrage,
    isDirectForm,
    resolvedPriceGroup,
  ]);

  const showForm =
    Boolean(formPrefill) &&
    (forceAnfrage || (isDirectForm && step === 3));

  const showResult =
    !isDirectForm &&
    !forceAnfrage &&
    step === 5 &&
    Boolean(device && damage && urgency && returnMedium && priceEstimate);

  const summaryPills = useMemo(() => {
    const pills = [];

    if (device && step >= 2) {
      const label = DEVICE_OPTIONS.find((o) => o.key === device)?.label ?? '';
      pills.push({ icon: DEVICE_ICONS[device], label });
    }
    if (damage && device && step >= 3 && !forceAnfrage) {
      const label = getDamageLabel(device, damage);
      pills.push({ icon: DAMAGE_ICONS[damage], label });
    }
    if (!isDirectForm && !forceAnfrage && urgency && step >= 4) {
      const label = URGENCY_OPTIONS.find((o) => o.key === urgency)?.label ?? '';
      pills.push({ icon: URGENCY_ICONS[urgency], label });
    }
    if (!isDirectForm && !forceAnfrage && returnMedium && step >= 5) {
      const label = RETURN_MEDIUM_OPTIONS.find((o) => o.key === returnMedium)?.label ?? '';
      pills.push({ icon: RETURN_MEDIUM_ICONS[returnMedium], label });
    }

    return pills;
  }, [device, damage, urgency, returnMedium, step, isDirectForm, forceAnfrage]);

  const canGoNext =
    (step === 1 && device !== null) ||
    (step === 2 && damage !== null) ||
    (!isDirectForm && step === 3 && urgency !== null) ||
    (!isDirectForm && step === 4 && returnMedium !== null);

  const goNext = () => {
    if (!canGoNext) return;

    if (isDirectForm && step === 2) {
      setForceAnfrage(false);
      setStep(3);
      return;
    }

    if (step === 4 && returnMedium) {
      setStep(5);
      return;
    }

    if (step < 4) {
      setStep((s) => (s + 1) as Step);
    }
  };

  const goBack = () => {
    if (forceAnfrage) {
      setForceAnfrage(false);
      setStep(2);
      return;
    }
    if (step > 1) {
      setStep((s) => (s - 1) as Step);
    }
  };

  const handleReset = () => {
    setStep(1);
    setDevice(defaultDevice ?? null);
    setDamage(null);
    setUrgency(null);
    setReturnMedium(null);
    setForceAnfrage(false);
  };

  const handleAnfrageClick = () => {
    setDamage(null);
    setForceAnfrage(true);
    setUrgency(null);
    setReturnMedium(null);
    setStep(isDirectForm ? 3 : 5);
  };

  const showNav = !showForm && !showResult;

  return (
    <div ref={rootRef} className="relative w-full">
      <CalcProgressBar
        step={forceAnfrage ? totalSteps : Math.min(step, totalSteps)}
        totalSteps={totalSteps}
      />

      {step >= 2 && showNav && <CalcSummaryBar pills={summaryPills} />}

      <div
        key={`${step}-${forceAnfrage ? 'anfrage' : 'default'}`}
        aria-atomic="true"
        aria-live="polite"
        className="transition-opacity duration-200"
      >
        {step === 1 && (
          <CalcStepDevice
            selected={device}
            onSelect={(value) => {
              setDevice(value);
              setDamage(null);
              setUrgency(null);
              setReturnMedium(null);
              setForceAnfrage(false);
              centerCalculator();
            }}
          />
        )}

        {step === 2 && !forceAnfrage && (
          <CalcStepDamage
            device={device}
            selected={damage}
            onAnfrageClick={handleAnfrageClick}
            onSelect={(value) => {
              setDamage(value);
              setForceAnfrage(false);
              centerCalculator();
            }}
          />
        )}

        {!isDirectForm && step === 3 && !forceAnfrage && (
          <CalcStepUrgency
            selected={urgency}
            onSelect={(value) => {
              setUrgency(value);
              centerCalculator();
            }}
          />
        )}

        {!isDirectForm && step === 4 && !forceAnfrage && (
          <CalcStepReturnMedium
            selected={returnMedium}
            onSelect={(value) => {
              setReturnMedium(value);
              centerCalculator();
            }}
          />
        )}

        {showForm && formPrefill ? (
          <CalcStepForm prefill={formPrefill} onReset={handleReset} />
        ) : null}

        {showResult && device && damage && urgency && returnMedium && priceEstimate ? (
          <CalcStepResult
            damage={damage}
            device={device}
            priceEstimate={priceEstimate}
            priceGroup={resolvedPriceGroup}
            returnMedium={returnMedium}
            urgency={urgency}
            onReset={handleReset}
          />
        ) : null}
      </div>

      {showNav && (
        <div className="mt-8 flex items-center justify-between">
          <button
            type="button"
            aria-label="Zurück"
            className={[
              'inline-flex items-center gap-2 text-sm text-text-muted transition-opacity',
              step === 1 ? 'invisible' : 'hover:text-text',
            ].join(' ')}
            disabled={step === 1}
            onClick={goBack}
          >
            <ArrowLeft aria-hidden="true" className="size-4" strokeWidth={1.5} />
            Zurück
          </button>

          <button
            type="button"
            aria-label="Weiter"
            className={[
              BTN_BRAND_RECT,
              'inline-flex items-center gap-2',
              canGoNext ? 'hover:opacity-90' : 'cursor-not-allowed opacity-40',
            ].join(' ')}
            disabled={!canGoNext}
            onClick={goNext}
          >
            Weiter
            <ArrowRight aria-hidden="true" className="size-4" strokeWidth={1.5} />
          </button>
        </div>
      )}

      {showForm ? (
        <div className="mt-8">
          <button
            type="button"
            aria-label="Zurück"
            className="inline-flex items-center gap-2 text-sm text-text-muted transition-opacity hover:text-text"
            onClick={goBack}
          >
            <ArrowLeft aria-hidden="true" className="size-4" strokeWidth={1.5} />
            Zurück
          </button>
        </div>
      ) : null}
    </div>
  );
}
