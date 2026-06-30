'use client';

import Link from 'next/link';
import { Accordion } from '@heroui/react';

import { CALCULATOR_PAGE_PATH } from '@/lib/calculator-section';
import { DIAGNOSIS_FEE_FORMATTED, FAILED_RECOVERY_NOTE } from '@/lib/constants';

const faqItems = [
  {
    id: 'dauer',
    question: 'Wie lange dauert eine Datenrettung?',
    answer:
      'Standard: 3–5 Arbeitstage nach Eingang. Express: 1–2 Arbeitstage nach Eingang. Notfall: 24/7-Bearbeitung bis Ihre Daten gerettet sind — auf Anfrage.',
  },
  {
    id: 'kosten',
    question: 'Was kostet eine Datenrettung?',
    answer: null,
  },
  {
    id: 'pruefgebuehr',
    question: 'Was kostet die Analysepauschale?',
    answer: `Die Analysepauschale von ${DIAGNOSIS_FEE_FORMATTED} deckt die Laboranalyse und Dateiliste. Bei Beauftragung wird sie zu 100 % auf Ihren Festpreis angerechnet. ${FAILED_RECOVERY_NOTE} Rückversand ist kostenlos.`,
  },
  {
    id: 'sicherheit',
    question: 'Sind meine Daten bei Ihnen sicher?',
    answer: null,
  },
  {
    id: 'medien',
    question: 'Welche Medien können Sie retten?',
    answer:
      'Festplatten (2,5" und 3,5"), SSDs (SATA, NVMe, M.2), RAID-Arrays, NAS-Systeme, USB-Sticks, SD-Karten und Smartphones.',
  },
];

export default function DatenrettungFaq() {
  return (
    <Accordion className="w-full" variant="surface">
      {faqItems.map((item) => (
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
                  Preisrahmen: HDD/SSD Standard 899 – 1.799 €, Express 1.099 – 1.999 € · Flash
                  Standard 699 – 999 €, Express 899 – 1.199 € · RAID / NAS / Server individuell ·
                  Notfall auf Anfrage. Warum dieses Modell? Weil Sie nur dann eine gute Entscheidung
                  treffen können, wenn Sie Preis und rettbare Daten kennen, bevor Sie zahlen. Nutzen
                  Sie unseren{' '}
                  <Link className="text-accent" href={CALCULATOR_PAGE_PATH}>
                    Preisrahmen-Rechner
                  </Link>
                  .
                </>
              ) : item.id === 'sicherheit' ? (
                <>
                  Ja. DSGVO-konforme Verarbeitung, verschlüsselte Übertragung und zertifizierte
                  Löschung mit Nachweis. Alle Arbeiten erfolgen in unserem Reinraum. Für
                  Unternehmen schließen wir einen{' '}
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
