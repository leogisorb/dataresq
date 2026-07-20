'use client';

import { useState } from 'react';
import {
  Button,
  FieldError,
  Input,
  Label,
  TextArea,
  TextField,
} from '@heroui/react';

import {
  DAMAGE_OPTIONS,
  DEVICE_OPTIONS,
  EMAIL_REGEX,
  getDamageLabel,
  getDamageOptionsForDevice,
  PHONE_REGEX,
  URGENCY_OPTIONS,
} from '@/lib/calculator';
import { BTN_BRAND } from '@/lib/button-styles';
import type { DamageKey, DeviceKey, UrgencyKey } from '@/lib/constants';

export interface AnfragePrefill {
  medium: string;
  schaden: string;
  dringlichkeit: UrgencyKey;
  ruecksendung: string;
  preisrahmen: string;
}

interface AnfrageFormProps {
  prefill?: AnfragePrefill;
  onSuccess?: () => void;
  submitLabel?: string;
}

interface FieldErrors {
  name?: string;
  telefon?: string;
  email?: string;
  medium?: string;
  schaden?: string;
}

export default function AnfrageForm({
  prefill,
  onSuccess,
  submitLabel = 'Anfrage absenden',
}: AnfrageFormProps) {
  const [name, setName] = useState('');
  const [telefon, setTelefon] = useState('');
  const [email, setEmail] = useState('');
  const [medium, setMedium] = useState<DeviceKey | ''>('');
  const [schaden, setSchaden] = useState<DamageKey | ''>('');
  const [dringlichkeit, setDringlichkeit] = useState<UrgencyKey>('std');
  const [nachricht, setNachricht] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  const isCalculatorMode = Boolean(prefill);

  const validate = (): boolean => {
    const nextErrors: FieldErrors = {};

    if (name.trim().length < 2) {
      nextErrors.name = 'Bitte geben Sie Ihren Namen ein.';
    }

    if (!PHONE_REGEX.test(telefon.trim())) {
      nextErrors.telefon = 'Bitte geben Sie eine gültige Telefonnummer ein.';
    }

    if (!EMAIL_REGEX.test(email.trim())) {
      nextErrors.email = 'Bitte geben Sie eine gültige E-Mail-Adresse ein.';
    }

    if (!isCalculatorMode) {
      if (!medium) {
        nextErrors.medium = 'Bitte wählen Sie ein Medium.';
      }
      if (!schaden) {
        nextErrors.schaden = 'Bitte wählen Sie eine Schadensart.';
      }
    }

    setFieldErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;

    const mediumLabel = isCalculatorMode
      ? prefill!.medium
      : (DEVICE_OPTIONS.find((option) => option.key === medium)?.label ?? '');
    const schadenLabel = isCalculatorMode
      ? prefill!.schaden
      : medium
        ? getDamageLabel(medium, schaden as DamageKey)
        : (DAMAGE_OPTIONS.find((option) => option.key === schaden)?.label ?? '');

    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/anfrage', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          telefon: telefon.trim(),
          email: email.trim(),
          medium: mediumLabel,
          schaden: schadenLabel,
          dringlichkeit: isCalculatorMode ? prefill!.dringlichkeit : dringlichkeit,
          ruecksendung: isCalculatorMode ? prefill!.ruecksendung : undefined,
          preisrahmen: isCalculatorMode ? prefill!.preisrahmen : undefined,
          nachricht: nachricht.trim() || undefined,
        }),
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(data.error ?? 'Anfrage konnte nicht gesendet werden.');
      }

      setSubmitted(true);
      onSuccess?.();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Ein Fehler ist aufgetreten.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-border bg-bg-card p-6 text-left md:p-8">
        <h3 className="text-lg font-semibold text-text">Anfrage eingegangen</h3>
        <p className="mt-3 text-sm leading-relaxed text-text-muted">
          Vielen Dank! Wir melden uns binnen 24 Stunden per E-Mail bei Ihnen.
        </p>
      </div>
    );
  }

  return (
    <form
      className="flex flex-col gap-4 text-left"
      onSubmit={(event) => {
        event.preventDefault();
        void handleSubmit();
      }}
    >
      {isCalculatorMode && prefill && (
        <div className="rounded-xl border border-border bg-bg px-4 py-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-text">Ihre Auswahl</p>
          <p className="mt-2 text-sm text-text-muted">
            {prefill.medium} · {prefill.schaden} ·{' '}
            {URGENCY_OPTIONS.find((option) => option.key === prefill.dringlichkeit)?.label}
          </p>
          <p className="mt-1 text-sm font-medium text-text">Preisrahmen: {prefill.preisrahmen}</p>
        </div>
      )}

      <TextField
        fullWidth
        isInvalid={!!fieldErrors.name}
        isRequired
        name="anfrage-name"
        value={name}
        onChange={setName}
      >
        <Label>Name</Label>
        <Input aria-label="Name" placeholder="Ihr vollständiger Name" />
        {fieldErrors.name && <FieldError>{fieldErrors.name}</FieldError>}
      </TextField>

      <TextField
        fullWidth
        isInvalid={!!fieldErrors.telefon}
        isRequired
        name="anfrage-telefon"
        type="tel"
        value={telefon}
        onChange={setTelefon}
      >
        <Label>Telefon</Label>
        <Input aria-label="Telefon" placeholder="z. B. +49 221 1234567" type="tel" />
        {fieldErrors.telefon && <FieldError>{fieldErrors.telefon}</FieldError>}
      </TextField>

      <TextField
        fullWidth
        isInvalid={!!fieldErrors.email}
        isRequired
        name="anfrage-email"
        type="email"
        value={email}
        onChange={setEmail}
      >
        <Label>E-Mail</Label>
        <Input aria-label="E-Mail" placeholder="ihre@email.de" type="email" />
        {fieldErrors.email && <FieldError>{fieldErrors.email}</FieldError>}
      </TextField>

      {!isCalculatorMode && (
        <>
          <div className="flex flex-col gap-2">
            <Label className="text-sm font-medium text-text">Medium</Label>
            <select
              aria-label="Medium"
              className="w-full rounded-xl border border-border bg-bg px-4 py-3 text-sm text-text outline-none transition-colors focus:border-neon"
              name="anfrage-medium"
              value={medium}
              onChange={(event) => {
                const nextMedium = event.target.value as DeviceKey | '';
                setMedium(nextMedium);
                setSchaden('');
              }}
            >
              <option value="">Bitte wählen</option>
              {DEVICE_OPTIONS.map((option) => (
                <option key={option.key} value={option.key}>
                  {option.label}
                </option>
              ))}
            </select>
            {fieldErrors.medium && (
              <p className="text-sm text-danger" role="alert">
                {fieldErrors.medium}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <Label className="text-sm font-medium text-text">Schadensart</Label>
            <select
              aria-label="Schadensart"
              className="w-full rounded-xl border border-border bg-bg px-4 py-3 text-sm text-text outline-none transition-colors focus:border-neon"
              name="anfrage-schaden"
              value={schaden}
              onChange={(event) => setSchaden(event.target.value as DamageKey)}
            >
              <option value="">Bitte wählen</option>
              {getDamageOptionsForDevice(medium || null).map((option) => (
                <option key={option.key} value={option.key}>
                  {option.label}
                </option>
              ))}
            </select>
            {fieldErrors.schaden && (
              <p className="text-sm text-danger" role="alert">
                {fieldErrors.schaden}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <Label className="text-sm font-medium text-text">Service-Level</Label>
            <select
              aria-label="Service-Level"
              className="w-full rounded-xl border border-border bg-bg px-4 py-3 text-sm text-text outline-none transition-colors focus:border-neon"
              name="anfrage-dringlichkeit"
              value={dringlichkeit}
              onChange={(event) => setDringlichkeit(event.target.value as UrgencyKey)}
            >
              {URGENCY_OPTIONS.map((option) => (
                <option key={option.key} value={option.key}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </>
      )}

      <TextField fullWidth name="anfrage-nachricht" value={nachricht} onChange={setNachricht}>
        <Label>Nachricht (optional)</Label>
        <TextArea
          aria-label="Nachricht"
          placeholder="Beschreiben Sie kurz Ihren Schadenfall..."
          rows={4}
        />
      </TextField>

      {error && (
        <p className="text-sm text-danger" role="alert">
          {error}
        </p>
      )}

      <Button className={`${BTN_BRAND} w-full rounded-full`} isPending={loading} type="submit">
        {submitLabel}
      </Button>
    </form>
  );
}
