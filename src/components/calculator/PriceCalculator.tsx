'use client';

import { useMemo, useState } from 'react';
import {
  Button,
  Checkbox,
  FieldError,
  Input,
  Label,
  TextArea,
  TextField,
} from '@heroui/react';

import { BTN_BRAND_LG } from '@/lib/button-styles';
import {
  calculatePriceRange,
  EMAIL_REGEX,
  getSchadenOptions,
  MEDIUM_OPTIONS,
  PHONE_REGEX,
  SCHADEN_LABELS,
} from '@/lib/calculator';

type Step = 1 | 2 | 3 | 4;

interface CalcState {
  step: Step;
  medium: string | null;
  schaden: string | null;
  express: boolean;
  name: string;
  telefon: string;
  email: string;
  nachricht: string;
  dsgvoAccepted: boolean;
  submitted: boolean;
  loading: boolean;
  error: string | null;
  fieldErrors: Record<string, string>;
}

const INITIAL_STATE: CalcState = {
  step: 1,
  medium: null,
  schaden: null,
  express: false,
  name: '',
  telefon: '',
  email: '',
  nachricht: '',
  dsgvoAccepted: false,
  submitted: false,
  loading: false,
  error: null,
  fieldErrors: {},
};

function ProgressBar({ step }: { step: Step }) {
  return (
    <div aria-label="Fortschritt" className="mb-8 flex items-center justify-center gap-3">
      {([1, 2, 3, 4] as Step[]).map((s) => (
        <div
          key={s}
          aria-current={s === step ? 'step' : undefined}
          className={[
            'size-3 rounded-full transition-colors',
            s <= step ? 'bg-accent' : 'bg-border',
          ].join(' ')}
        />
      ))}
    </div>
  );
}

export default function PriceCalculator() {
  const [state, setState] = useState<CalcState>(INITIAL_STATE);

  const priceRange = useMemo(() => {
    if (!state.medium || !state.schaden) return null;
    return calculatePriceRange(state.medium, state.schaden, state.express);
  }, [state.medium, state.schaden, state.express]);

  const schadenOptions = state.medium ? getSchadenOptions(state.medium) : [];

  const goToStep = (step: Step) => setState((prev) => ({ ...prev, step, error: null }));

  const validateContactForm = (): Record<string, string> => {
    const errors: Record<string, string> = {};

    if (state.name.trim().length < 2) {
      errors.name = 'Bitte geben Sie Ihren Namen ein (mind. 2 Zeichen).';
    }
    if (!PHONE_REGEX.test(state.telefon.trim())) {
      errors.telefon = 'Bitte geben Sie eine gültige Telefonnummer ein.';
    }
    if (!EMAIL_REGEX.test(state.email.trim())) {
      errors.email = 'Bitte geben Sie eine gültige E-Mail-Adresse ein.';
    }
    if (!state.dsgvoAccepted) {
      errors.dsgvo = 'Bitte stimmen Sie der Datenverarbeitung zu.';
    }

    return errors;
  };

  const handleSubmit = async () => {
    const fieldErrors = validateContactForm();
    if (Object.keys(fieldErrors).length > 0) {
      setState((prev) => ({ ...prev, fieldErrors, error: null }));
      return;
    }

    if (!state.medium || !state.schaden || !priceRange) {
      setState((prev) => ({ ...prev, error: 'Bitte vervollständigen Sie die Auswahl.' }));
      return;
    }

    setState((prev) => ({ ...prev, loading: true, error: null, fieldErrors: {} }));

    try {
      const response = await fetch('/api/anfrage', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: state.name.trim(),
          telefon: state.telefon.trim(),
          email: state.email.trim(),
          medium: state.medium,
          schaden: state.schaden,
          express: state.express,
          preisrange: priceRange,
          nachricht: state.nachricht.trim() || undefined,
        }),
      });

      if (!response.ok) {
        const data = (await response.json()) as { error?: string };
        throw new Error(data.error ?? 'Anfrage fehlgeschlagen');
      }

      setState((prev) => ({ ...prev, submitted: true, loading: false }));
    } catch (err) {
      setState((prev) => ({
        ...prev,
        loading: false,
        error: err instanceof Error ? err.message : 'Anfrage fehlgeschlagen',
      }));
    }
  };

  const resetCalculator = () => setState(INITIAL_STATE);

  if (state.submitted && priceRange) {
    return (
      <div className="rounded-2xl bg-bg-card p-8 text-center shadow-md md:p-12">
        <p className="text-4xl" aria-hidden="true">
          ✅
        </p>
        <h2 className="mt-4 text-2xl font-bold text-text md:text-3xl">
          Vielen Dank, {state.name}!
        </h2>
        <p className="mt-4 text-text">
          Wir melden uns binnen 24 Stunden telefonisch.
        </p>
        <p className="mt-6 text-lg font-semibold text-text">
          Ihre geschätzte Preisspanne: {priceRange}
        </p>
        <Button className={`${BTN_BRAND_LG} mt-8`} size="lg" onPress={resetCalculator}>
          Nochmal berechnen
        </Button>
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-bg-card p-6 shadow-md md:p-10">
      <ProgressBar step={state.step} />

      {state.step === 1 && (
        <div>
          <h2 className="text-xl font-bold text-text md:text-2xl">Schritt 1: Medium wählen</h2>
          <p className="mt-2 text-text">Welches Speichermedium ist betroffen?</p>

          <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
            {MEDIUM_OPTIONS.map((option) => (
              <button
                key={option.id}
                type="button"
                className={[
                  'touch-target flex w-full flex-col items-center gap-2 rounded-xl border p-4 text-center transition-colors',
                  state.medium === option.id
                    ? 'border-accent bg-bg-subtle ring-2 ring-accent'
                    : 'border-black/5 bg-bg-card active:bg-bg-subtle',
                ].join(' ')}
                onClick={() =>
                  setState((prev) => ({ ...prev, medium: option.id, schaden: null }))
                }
              >
                <span aria-hidden="true" className="text-2xl">
                  {option.icon}
                </span>
                <span className="text-sm font-medium text-text md:text-base">
                  {option.label}
                </span>
              </button>
            ))}
          </div>

          <div className="mt-8 flex justify-end">
            <button
              className={`${BTN_BRAND_LG} touch-target disabled:cursor-not-allowed disabled:opacity-50`}
              disabled={!state.medium}
              type="button"
              onClick={() => goToStep(2)}
            >
              Weiter
            </button>
          </div>
        </div>
      )}

      {state.step === 2 && (
        <div>
          <button
            type="button"
            className="touch-target mb-4 text-sm text-text active:opacity-70"
            onClick={() => goToStep(1)}
          >
            ← Zurück
          </button>

          <h2 className="text-xl font-bold text-text md:text-2xl">Schritt 2: Schadenstyp wählen</h2>
          <p className="mt-2 text-text">Was ist passiert?</p>

          <div className="mt-6 flex flex-col gap-3">
            {schadenOptions.map((schadenKey) => (
              <button
                key={schadenKey}
                type="button"
                className={[
                  'touch-target w-full rounded-lg px-4 py-4 text-left transition-colors',
                  state.schaden === schadenKey
                    ? 'border-2 border-accent bg-bg-subtle'
                    : 'border border-black/5 bg-bg-card active:bg-bg-subtle',
                ].join(' ')}
                onClick={() => setState((prev) => ({ ...prev, schaden: schadenKey }))}
              >
                <span className="font-medium text-text">{SCHADEN_LABELS[schadenKey]}</span>
              </button>
            ))}
          </div>

          <div className="mt-8 flex justify-end">
            <button
              className={`${BTN_BRAND_LG} touch-target disabled:cursor-not-allowed disabled:opacity-50`}
              disabled={!state.schaden}
              type="button"
              onClick={() => goToStep(3)}
            >
              Weiter
            </button>
          </div>
        </div>
      )}

      {state.step === 3 && (
        <div>
          <button
            type="button"
            className="touch-target mb-4 text-sm text-text active:opacity-70"
            onClick={() => goToStep(2)}
          >
            ← Zurück
          </button>

          <h2 className="text-xl font-bold text-text md:text-2xl">
            Schritt 3: Dringlichkeit &amp; Richtpreis
          </h2>
          <p className="mt-2 text-text">Wie schnell benötigen Sie die Datenrettung?</p>

          <div className="mt-6 flex flex-col gap-3 md:flex-row">
            <button
              type="button"
              className={[
                'touch-target flex-1 rounded-lg border px-4 py-4 text-left',
                !state.express
                  ? 'border-accent bg-bg-subtle ring-2 ring-accent'
                  : 'border-black/5 bg-bg-card active:bg-bg-subtle',
              ].join(' ')}
              onClick={() => setState((prev) => ({ ...prev, express: false }))}
            >
              <span className="font-medium text-text">Standard 3–5 Werktage</span>
            </button>
            <button
              type="button"
              className={[
                'touch-target flex-1 rounded-lg border px-4 py-4 text-left',
                state.express
                  ? 'border-accent bg-bg-subtle ring-2 ring-accent'
                  : 'border-black/5 bg-bg-card active:bg-bg-subtle',
              ].join(' ')}
              onClick={() => setState((prev) => ({ ...prev, express: true }))}
            >
              <span className="font-medium text-text">Express 24h (+30%)</span>
            </button>
          </div>

          {priceRange && (
            <div
              aria-live="polite"
              className="mt-8 rounded-lg border border-black/5 bg-bg-subtle p-6 md:p-8"
            >
              <p className="text-sm font-medium text-text">Geschätzter Richtpreis:</p>
              <p className="mt-2 text-3xl font-bold text-text md:text-4xl">{priceRange}</p>
              <p className="mt-4 text-sm text-text">
                Kostenlose Diagnose — Festpreis vor Beauftragung.
                <br />
                Kein Befund = keine Kosten.
              </p>
            </div>
          )}

          <div className="mt-8 flex justify-end">
            <button
              className={`${BTN_BRAND_LG} touch-target`}
              type="button"
              onClick={() => goToStep(4)}
            >
              Weiter zum Angebot
            </button>
          </div>
        </div>
      )}

      {state.step === 4 && (
        <div>
          <button
            type="button"
            className="touch-target mb-4 text-sm text-text active:opacity-70"
            onClick={() => goToStep(3)}
          >
            ← Zurück
          </button>

          <h2 className="text-xl font-bold text-text md:text-2xl">
            Schritt 4: Kostenloses Angebot anfordern
          </h2>

          {priceRange && (
            <p className="mt-2 text-text">
              Ihre geschätzte Preisspanne: <strong className="text-text">{priceRange}</strong>
            </p>
          )}

          <div className="mt-6 flex flex-col gap-5">
            <TextField
              fullWidth
              isInvalid={!!state.fieldErrors.name}
              isRequired
              name="name"
              value={state.name}
              onChange={(value) =>
                setState((prev) => ({
                  ...prev,
                  name: value,
                  fieldErrors: { ...prev.fieldErrors, name: '' },
                }))
              }
            >
              <Label>Name</Label>
              <Input aria-label="Name" placeholder="Ihr Name" />
              {state.fieldErrors.name && <FieldError>{state.fieldErrors.name}</FieldError>}
            </TextField>

            <TextField
              fullWidth
              isInvalid={!!state.fieldErrors.telefon}
              isRequired
              name="telefon"
              type="tel"
              value={state.telefon}
              onChange={(value) =>
                setState((prev) => ({
                  ...prev,
                  telefon: value,
                  fieldErrors: { ...prev.fieldErrors, telefon: '' },
                }))
              }
            >
              <Label>Telefon</Label>
              <Input aria-label="Telefon" placeholder="+49 ..." type="tel" />
              {state.fieldErrors.telefon && <FieldError>{state.fieldErrors.telefon}</FieldError>}
            </TextField>

            <TextField
              fullWidth
              isInvalid={!!state.fieldErrors.email}
              isRequired
              name="email"
              type="email"
              value={state.email}
              onChange={(value) =>
                setState((prev) => ({
                  ...prev,
                  email: value,
                  fieldErrors: { ...prev.fieldErrors, email: '' },
                }))
              }
            >
              <Label>E-Mail</Label>
              <Input aria-label="E-Mail" placeholder="ihre@email.de" type="email" />
              {state.fieldErrors.email && <FieldError>{state.fieldErrors.email}</FieldError>}
            </TextField>

            <TextField
              fullWidth
              name="nachricht"
              value={state.nachricht}
              onChange={(value) => setState((prev) => ({ ...prev, nachricht: value }))}
            >
              <Label>Kurzbeschreibung (optional)</Label>
              <TextArea
                aria-label="Kurzbeschreibung"
                placeholder="Beschreiben Sie kurz Ihren Fall..."
                rows={4}
              />
            </TextField>

            <div>
              <Checkbox
                id="dsgvo-consent"
                isInvalid={!!state.fieldErrors.dsgvo}
                isSelected={state.dsgvoAccepted}
                onChange={(selected) =>
                  setState((prev) => ({
                    ...prev,
                    dsgvoAccepted: selected,
                    fieldErrors: { ...prev.fieldErrors, dsgvo: '' },
                  }))
                }
              >
                <Checkbox.Control>
                  <Checkbox.Indicator />
                </Checkbox.Control>
                <Checkbox.Content>
                  <Label htmlFor="dsgvo-consent">
                    Ich stimme der Verarbeitung meiner Daten zur Angebotserstellung zu (Art. 6 Abs.
                    1 lit. b DSGVO). *
                  </Label>
                </Checkbox.Content>
              </Checkbox>
              {state.fieldErrors.dsgvo && (
                <p className="mt-2 text-sm text-accent">{state.fieldErrors.dsgvo}</p>
              )}
            </div>

            {state.error && (
              <p className="rounded-md bg-bg-subtle p-3 text-sm text-accent" role="alert">
                {state.error}
              </p>
            )}

            <Button
              fullWidth
              className={BTN_BRAND_LG}
              isPending={state.loading}
              size="lg"
              onPress={handleSubmit}
            >
              Jetzt kostenloses Angebot anfordern
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
