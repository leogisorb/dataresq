'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  CircuitBoard,
  Clock,
  Cpu,
  Droplets,
  HardDrive,
  Lock,
  Server,
  Siren,
  Trash2,
  Usb,
  Wrench,
} from 'lucide-react';

import CalcProgressBar from '@/components/calculator/CalcProgressBar';
import CalcStepDamage from '@/components/calculator/CalcStepDamage';
import CalcStepDevice from '@/components/calculator/CalcStepDevice';
import CalcStepResult from '@/components/calculator/CalcStepResult';
import CalcStepUrgency from '@/components/calculator/CalcStepUrgency';
import CalcSummaryBar from '@/components/calculator/CalcSummaryBar';
import {
  DAMAGE_OPTIONS,
  DEVICE_OPTIONS,
  URGENCY_OPTIONS,
  calculatePriceRange,
} from '@/lib/calculator';
import { BTN_BRAND_RECT } from '@/lib/button-styles';
import type { DamageKey, DeviceKey, UrgencyKey } from '@/lib/constants';

type Step = 1 | 2 | 3 | 4;

const DEVICE_ICONS = {
  hdd: HardDrive,
  ssd: CircuitBoard,
  raid: Server,
  usb: Usb,
} as const;

const DAMAGE_ICONS = {
  del: Trash2,
  mech: Wrench,
  water: Droplets,
  ctrl: Cpu,
  enc: Lock,
  crash: AlertTriangle,
} as const;

const URGENCY_ICONS = {
  std: Clock,
  now: Siren,
} as const;

interface PriceCalculatorProps {
  defaultDevice?: DeviceKey;
}

export default function PriceCalculator({ defaultDevice }: PriceCalculatorProps) {
  const [step, setStep] = useState<Step>(1);
  const [device, setDevice] = useState<DeviceKey | null>(defaultDevice ?? null);
  const [damage, setDamage] = useState<DamageKey | null>(null);
  const [urgency, setUrgency] = useState<UrgencyKey | null>(null);
  const stepRef = useRef<HTMLDivElement>(null);
  const hasMountedRef = useRef(false);

  const priceRange = useMemo(() => {
    if (!device || !damage || !urgency) return null;
    return calculatePriceRange(device, damage, urgency);
  }, [device, damage, urgency]);

  const summaryPills = useMemo(() => {
    const pills = [];

    if (device && step >= 2) {
      const label = DEVICE_OPTIONS.find((o) => o.key === device)?.label ?? '';
      pills.push({ icon: DEVICE_ICONS[device], label });
    }
    if (damage && step >= 3) {
      const label = DAMAGE_OPTIONS.find((o) => o.key === damage)?.label ?? '';
      pills.push({ icon: DAMAGE_ICONS[damage], label });
    }
    if (urgency && step >= 4) {
      const label = URGENCY_OPTIONS.find((o) => o.key === urgency)?.label ?? '';
      pills.push({ icon: URGENCY_ICONS[urgency], label });
    }

    return pills;
  }, [device, damage, urgency, step]);

  const canGoNext =
    (step === 1 && device !== null) ||
    (step === 2 && damage !== null) ||
    (step === 3 && urgency !== null);

  useEffect(() => {
    if (!hasMountedRef.current) {
      hasMountedRef.current = true;
      return;
    }

    stepRef.current?.focus({ preventScroll: true });
  }, [step]);

  const goNext = () => {
    if (step === 3 && urgency) {
      setStep(4);
      return;
    }
    if (step < 3 && canGoNext) {
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
  };

  return (
    <div className="relative w-full">
      <CalcProgressBar step={step} />

      {step >= 2 && step < 4 && <CalcSummaryBar pills={summaryPills} />}

      <div
        key={step}
        ref={stepRef}
        tabIndex={-1}
        className="transition-opacity duration-200 outline-none focus:outline-none focus-visible:outline-none"
      >
        {step === 1 && (
          <CalcStepDevice
            selected={device}
            onSelect={(value) => {
              setDevice(value);
              setDamage(null);
              setUrgency(null);
            }}
          />
        )}

        {step === 2 && <CalcStepDamage selected={damage} onSelect={setDamage} />}

        {step === 3 && <CalcStepUrgency selected={urgency} onSelect={setUrgency} />}

        {step === 4 && device && damage && urgency && priceRange && (
          <CalcStepResult
            damage={damage}
            device={device}
            priceRange={priceRange}
            urgency={urgency}
            onReset={handleReset}
          />
        )}
      </div>

      {step < 4 && (
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
