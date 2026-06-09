'use client';

import { BTN_BRAND, BTN_BRAND_SM } from '@/lib/button-styles';
import {
  Button,
  FieldError,
  Input,
  Label,
  Modal,
  TextArea,
  TextField,
  useOverlayState,
} from '@heroui/react';
import { useState } from 'react';

export default function WiderrufsButtonClient() {
  const modalState = useOverlayState();
  const [name, setName] = useState('');
  const [auftragsnummer, setAuftragsnummer] = useState('');
  const [datum, setDatum] = useState('');
  const [begruendung, setBegruendung] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fieldError, setFieldError] = useState<string | null>(null);

  const resetForm = () => {
    setName('');
    setAuftragsnummer('');
    setDatum('');
    setBegruendung('');
    setSubmitted(false);
    setError(null);
    setFieldError(null);
  };

  const handleOpen = () => {
    resetForm();
    modalState.open();
  };

  const handleClose = () => {
    modalState.close();
    resetForm();
  };

  const handleSubmit = async () => {
    if (name.trim().length < 2) {
      setFieldError('Bitte geben Sie Ihren Namen ein.');
      return;
    }

    setFieldError(null);
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/widerruf', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          auftragsnummer: auftragsnummer.trim() || undefined,
          datum: datum.trim() || undefined,
          begruendung: begruendung.trim() || undefined,
        }),
      });

      if (!response.ok) {
        throw new Error('Widerruf konnte nicht registriert werden.');
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Ein Fehler ist aufgetreten.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Button className={BTN_BRAND_SM} size="sm" onPress={handleOpen}>
        Verträge hier widerrufen
      </Button>

      <Modal.Backdrop isOpen={modalState.isOpen} onOpenChange={modalState.setOpen}>
        <Modal.Container>
          <Modal.Dialog className="max-w-lg">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Heading>Vertrag widerrufen</Modal.Heading>
            </Modal.Header>
            <Modal.Body>
              {submitted ? (
                <p className="text-base text-foreground">
                  Ihr Widerruf wurde registriert.
                </p>
              ) : (
                <div className="flex flex-col gap-4">
                  <p className="text-sm text-muted">
                    Sie können hier Ihren Vertrag widerrufen.
                  </p>

                  <TextField
                    fullWidth
                    isInvalid={!!fieldError}
                    isRequired
                    name="widerruf-name"
                    value={name}
                    onChange={setName}
                  >
                    <Label>Name</Label>
                    <Input aria-label="Name" placeholder="Ihr vollständiger Name" />
                    {fieldError && <FieldError>{fieldError}</FieldError>}
                  </TextField>

                  <TextField
                    fullWidth
                    name="widerruf-auftragsnummer"
                    value={auftragsnummer}
                    onChange={setAuftragsnummer}
                  >
                    <Label>Auftragsnummer (optional)</Label>
                    <Input aria-label="Auftragsnummer" placeholder="z. B. DR-2026-001" />
                  </TextField>

                  <TextField
                    fullWidth
                    name="widerruf-datum"
                    type="date"
                    value={datum}
                    onChange={setDatum}
                  >
                    <Label>Datum</Label>
                    <Input aria-label="Datum" type="date" />
                  </TextField>

                  <TextField
                    fullWidth
                    name="widerruf-begruendung"
                    value={begruendung}
                    onChange={setBegruendung}
                  >
                    <Label>Begründung (optional)</Label>
                    <TextArea
                      aria-label="Begründung"
                      placeholder="Optional: Grund für den Widerruf..."
                      rows={4}
                    />
                  </TextField>

                  {error && (
                    <p className="text-sm text-danger" role="alert">
                      {error}
                    </p>
                  )}
                </div>
              )}
            </Modal.Body>
            <Modal.Footer>
              {submitted ? (
                <Button className={`${BTN_BRAND} w-full rounded-full`} onPress={handleClose}>
                  Schließen
                </Button>
              ) : (
                <>
                  <Button className={`${BTN_BRAND} rounded-full`} onPress={handleClose}>
                    Abbrechen
                  </Button>
                  <Button
                    className={`${BTN_BRAND} rounded-full`}
                    isPending={loading}
                    onPress={handleSubmit}
                  >
                    Widerruf absenden
                  </Button>
                </>
              )}
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </>
  );
}
