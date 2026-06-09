'use client';

import Link from 'next/link';
import { Accordion } from '@heroui/react';

const faqItems = [
  {
    id: 'dauer',
    question: 'Wie lange dauert eine Datenrettung?',
    answer:
      'Standard 3–5 Werktage nach Eingang des Mediums. Express-Service binnen 24 Stunden auf Anfrage möglich (+30% Aufschlag).',
  },
  {
    id: 'kosten',
    question: 'Was kostet eine Datenrettung?',
    answer: null,
  },
  {
    id: 'kein-befund',
    question: 'Zahle ich auch wenn keine Daten gerettet werden?',
    answer:
      'Nein. Unser Prinzip: Kein Befund — keine Kosten. Sie zahlen nur bei erfolgreich geretteten Daten.',
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
                  Der Preis hängt vom Medium und Schadenstyp ab. Richtwerte: HDD ab 149 €, SSD ab
                  199 €, RAID ab 399 €. Nutzen Sie unseren{' '}
                  <Link className="text-accent" href="/#kostenrechner">
                    Preisrechner
                  </Link>{' '}
                  für eine sofortige Schätzung.
                </>
              ) : item.id === 'sicherheit' ? (
                <>
                  Ja. Alle Arbeiten erfolgen intern in unserem Reinraum. Keine Weitergabe an Dritte.
                  DSGVO-konforme Verarbeitung. Für Unternehmen schließen wir einen{' '}
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
