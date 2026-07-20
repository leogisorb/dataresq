'use client';

import { Button, Modal, useOverlayState } from '@heroui/react';

import AnfrageForm, { type AnfragePrefill } from '@/components/contact/AnfrageForm';
import { BTN_BRAND, BTN_CALC_PAIR_PRIMARY } from '@/lib/button-styles';

interface AnfrageFormModalProps {
  prefill: AnfragePrefill;
  triggerLabel?: string;
  triggerClassName?: string;
}

export default function AnfrageFormModal({
  prefill,
  triggerLabel = 'Angebot anfordern',
  triggerClassName = BTN_CALC_PAIR_PRIMARY,
}: AnfrageFormModalProps) {
  const modalState = useOverlayState();

  const handleClose = () => {
    modalState.close();
  };

  return (
    <>
      <button className={triggerClassName} type="button" onClick={modalState.open}>
        {triggerLabel}
      </button>

      <Modal.Backdrop isOpen={modalState.isOpen} onOpenChange={modalState.setOpen}>
        <Modal.Container>
          <Modal.Dialog className="max-w-lg">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Heading>Angebot anfordern</Modal.Heading>
            </Modal.Header>
            <Modal.Body>
              <p className="mb-4 text-sm text-muted">
                Hinterlassen Sie Ihre Kontaktdaten — wir melden uns binnen 24 Stunden.
              </p>
              <AnfrageForm prefill={prefill} submitLabel="Angebot anfordern" />
            </Modal.Body>
            <Modal.Footer>
              <Button className={`${BTN_BRAND} rounded-full`} onPress={handleClose}>
                Schließen
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </>
  );
}
