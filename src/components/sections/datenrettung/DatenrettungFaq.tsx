'use client';

import Link from 'next/link';
import { Accordion } from '@heroui/react';

import { CALCULATOR_PAGE_PATH } from '@/lib/calculator-section';
import {
  BASE_PRICES,
  EXPRESS_SURCHARGE,
  formatPriceEuro,
  NO_COST_GUARANTEE_NOTE,
} from '@/lib/constants';
import { datenrettungFaqs } from '@/lib/faq-datenrettung';

export default function DatenrettungFaq(): React.JSX.Element {
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
                  Festpreise inkl. MwSt.: HDD/SSD/Notebook logisch{' '}
                  {formatPriceEuro(BASE_PRICES.hddSsd.logical)}, physisch{' '}
                  {formatPriceEuro(BASE_PRICES.hddSsd.physical)} · Flash logisch{' '}
                  {formatPriceEuro(BASE_PRICES.flash.logical)}, physisch{' '}
                  {formatPriceEuro(BASE_PRICES.flash.physical)} · Express +{EXPRESS_SURCHARGE} € ·
                  RAID/NAS/Smartphone nach Analyse · Notfall auf Anfrage. Verbindlicher Festpreis
                  nach der kostenlosen Analyse. Nutzen Sie unseren{' '}
                  <Link className="text-accent" href={CALCULATOR_PAGE_PATH}>
                    Preisrechner
                  </Link>
                  . {NO_COST_GUARANTEE_NOTE}
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
