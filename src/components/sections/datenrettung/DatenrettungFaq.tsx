'use client';

import Link from 'next/link';
import { Accordion } from '@heroui/react';

import { CALCULATOR_PAGE_PATH } from '@/lib/calculator-section';
import { FAILED_RECOVERY_NOTE } from '@/lib/constants';
import { datenrettungFaqs } from '@/lib/faq-datenrettung';

export default function DatenrettungFaq() {
  return (
    <Accordion className="w-full" variant="surface">
      {datenrettungFaqs.map((item) => (
        <Accordion.Item key={item.id} id={item.id}>
          <Accordion.Heading>
            <Accordion.Trigger>
              {item.question}
              <Accordion.Indicator />
            </Accordion.Trigger>
          </Accordion.Heading>
          <Accordion.Panel>
            <Accordion.Body className="leading-relaxed text-text">
              {item.id === 'kosten' ? (
                <>
                  Preisrahmen: HDD/SSD Standard 899 – 1.799 €, Express 1.149 – 2.049 € · Flash
                  Standard 699 – 999 €, Express 949 – 1.249 € · RAID / NAS / Server individuell ·
                  Notfall auf Anfrage. Warum dieses Modell? Weil Sie nur dann eine gute Entscheidung
                  treffen können, wenn Sie Preis und rettbare Daten kennen, bevor Sie zahlen. Nutzen
                  Sie unseren{' '}
                  <Link className="text-accent" href={CALCULATOR_PAGE_PATH}>
                    Preisrahmen-Rechner
                  </Link>
                  . {FAILED_RECOVERY_NOTE}
                </>
              ) : item.id === 'sicherheit' ? (
                <>
                  Ja. DSGVO-konforme Verarbeitung, verschlüsselte Übertragung und zertifizierte
                  Löschung mit Nachweis. Für Unternehmen schließen wir einen{' '}
                  <Link className="text-accent" href="/auftragsverarbeitung">
                    AVV
                  </Link>{' '}
                  ab.
                </>
              ) : (
                item.answer
              )}
            </Accordion.Body>
          </Accordion.Panel>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}
