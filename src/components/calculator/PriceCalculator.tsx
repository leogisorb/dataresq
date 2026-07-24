'use client';

import { useMemo, useState } from 'react';
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  CircuitBoard,
  Clock,
  Cpu,
  Download,
  Droplets,
  HardDrive,
  HelpCircle,
  Laptop,
  Layers,
  Lock,
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
import CalcStepResult from '@/components/calculator/CalcStepResult';
import CalcStepReturnMedium from '@/components/calculator/CalcStepReturnMedium';
import CalcStepUrgency from '@/components/calculator/CalcStepUrgency';
import CalcSummaryBar from '@/components/calculator/CalcSummaryBar';
import {
  getDamageLabel,
  DEVICE_OPTIONS,
  RETURN_MEDIUM_OPTIONS,
  URGENCY_OPTIONS,
  calculatePriceEstimate,
} from '@/lib/calculator';
import { BTN_BRAND_RECT } from '@/lib/button-styles';
import type { DamageKey, DeviceKey, ReturnMediumKey, UrgencyKey } from '@/lib/constants';

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
  mech: Wrench,
  water: Droplets,
  ctrl: Cpu,
  enc: Lock,
  crash: AlertTriangle,
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

interface PriceCalculatorProps {
  defaultDevice?: DeviceKey;
}

export default function PriceCalculator({ defaultDevice }: PriceCalculatorProps) {
  const [step, setStep] = useState<Step>(1);
  const [device, setDevice] = useState<DeviceKey | null>(defaultDevice ?? null);
  const [damage, setDamage] = useState<DamageKey | null>(null);
  const [urgency, setUrgency] = useState<UrgencyKey | null>(null);
  const [returnMedium, setReturnMedium] = useState<ReturnMediumKey | null>(null);

  const priceEstimate = useMemo(() => {
    if (!device || !urgency || !returnMedium) return null;
    return calculatePriceEstimate(device, urgency, returnMedium);
  }, [device, urgency, returnMedium]);

  const summaryPills = useMemo(() => {
    const pills = [];

    if (device && step >= 2) {
      const label = DEVICE_OPTIONS.find((o) => o.key === device)?.label ?? '';
      pills.push({ icon: DEVICE_ICONS[device], label });
    }
    if (damage && device && step >= 3) {
      const label = getDamageLabel(device, damage);
      pills.push({ icon: DAMAGE_ICONS[damage], label });
    }
    if (urgency && step >= 4) {
      const label = URGENCY_OPTIONS.find((o) => o.key === urgency)?.label ?? '';
      pills.push({ icon: URGENCY_ICONS[urgency], label });
    }
    if (returnMedium && step >= 5) {
      const label = RETURN_MEDIUM_OPTIONS.find((o) => o.key === returnMedium)?.label ?? '';
      pills.push({ icon: RETURN_MEDIUM_ICONS[returnMedium], label });
    }

    return pills;
  }, [device, damage, urgency, returnMedium, step]);

  const canGoNext =
    (step === 1 && device !== null) ||
    (step === 2 && damage !== null) ||
    (step === 3 && urgency !== null) ||
    (step === 4 && returnMedium !== null);

  const goNext = () => {
    if (step === 4 && returnMedium) {
      setStep(5);
      return;
    }
    if (step < 4 && canGoNext) {
      setStep((s) => (s + 1) as Step);
    }
  };

  const goBack = () => {
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
  };

  return (
    <div className="relative w-full">
      <CalcProgressBar step={step} />

      {step >= 2 && step < 5 && <CalcSummaryBar pills={summaryPills} />}

      <div
        key={step}
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
            }}
          />
        )}

        {step === 2 && (
          <CalcStepDamage device={device} selected={damage} onSelect={setDamage} />
        )}

        {step === 3 && <CalcStepUrgency selected={urgency} onSelect={setUrgency} />}

        {step === 4 && (
          <CalcStepReturnMedium selected={returnMedium} onSelect={setReturnMedium} />
        )}

        {step === 5 && device && damage && urgency && returnMedium && priceEstimate && (
          <CalcStepResult
            damage={damage}
            device={device}
            priceEstimate={priceEstimate}
            returnMedium={returnMedium}
            urgency={urgency}
            onReset={handleReset}
          />
        )}
      </div>

      {step < 5 && (
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
    </div>
  );
}
