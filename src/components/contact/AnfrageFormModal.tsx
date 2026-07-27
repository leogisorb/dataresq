'use client';

import { Button, Modal, useOverlayState } from '@heroui/react';

import AnfrageForm, { type AnfragePrefill } from '@/components/contact/AnfrageForm';
import { BTN_CALC_PAIR_PRIMARY } from '@/lib/button-styles';

interface AnfrageFormModalProps {
  prefill?: AnfragePrefill;
  triggerLabel?: string;
  triggerClassName?: string;
  hideTrigger?: boolean;
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export default function AnfrageFormModal({
  prefill,
  triggerLabel = 'Angebot anfordern',
  triggerClassName = BTN_CALC_PAIR_PRIMARY,
  hideTrigger = false,
  isOpen,
  onOpenChange,
}: AnfrageFormModalProps) {
  const modalState = useOverlayState();
  const controlled = typeof isOpen === 'boolean' && typeof onOpenChange === 'function';
  const open = controlled ? isOpen : modalState.isOpen;
  const setOpen = controlled ? onOpenChange : modalState.setOpen;

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {!hideTrigger ? (
        <button className={triggerClassName} type="button" onClick={() => setOpen(true)}>
          {triggerLabel}
        </button>
      ) : null}

      <Modal.Backdrop isOpen={open} onOpenChange={setOpen}>
        <Modal.Container placement="center" scroll="inside" size="lg">
          <Modal.Dialog className="flex max-h-[min(92dvh,40rem)] w-full max-w-lg flex-col overflow-hidden">
            <Modal.CloseTrigger />
            <Modal.Header className="shrink-0">
              <Modal.Heading>Angebot anfordern</Modal.Heading>
            </Modal.Header>
            <Modal.Body className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
              <p className="mb-4 text-sm text-text-muted">
                Hinterlassen Sie Ihre Kontaktdaten — wir melden uns binnen 24 Stunden.
              </p>
              <AnfrageForm prefill={prefill} submitLabel="Angebot anfordern" />
            </Modal.Body>
            <Modal.Footer className="shrink-0">
              <Button
                className="inline-flex min-h-11 w-full items-center justify-center rounded-full border border-border bg-bg-card px-5 text-sm font-semibold text-text transition-colors hover:border-text-muted hover:bg-bg sm:min-h-12 sm:px-6 sm:text-base"
                onPress={handleClose}
              >
                Schließen
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </>
  );
}
