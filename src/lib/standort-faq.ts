import { ANALYSIS_DURATION, LAB_PARTNER, LAB_PARTNER_NOTE, SITE } from '@/lib/constants';
import type { Location } from '@/lib/locations';

export interface StandortFaqItem {
  question: string;
  answer: string;
}

function getAbgabeFaqs(loc: Location): StandortFaqItem[] {
  const nearby = loc.nearbyAreas.slice(0, 3).join(', ');
  return [
    {
      question: 'Kann ich das Medium persönlich vorbeibringen?',
      answer: `${loc.serviceNote} Unsere Kundenbetreuung dokumentiert den Zustand gemeinsam mit Ihnen und beantwortet Ihre Fragen direkt vor Ort.`,
    },
    {
      question: `Für welche Orte in NRW ist ${loc.name} geeignet?`,
      answer: `Die Abgabestelle ${loc.name} ist für Kundinnen und Kunden aus ${loc.name} sowie dem Umland (u. a. ${nearby}) praktisch. Wer weiter entfernt wohnt, nutzt die kostenlose DHL Express-Abholung bundesweit — Analyse und Angebot bleiben gleich.`,
    },
    {
      question: 'Wie lange dauert die Laboranalyse?',
      answer: `Die technische Analyse inklusive Dateiliste dauert in der Regel ${ANALYSIS_DURATION} nach Eingang. Danach erhalten Sie ein verbindliches Angebot.`,
    },
    {
      question: `Wie lange dauert die Datenrettung ab ${loc.name}?`,
      answer:
        'Standard: 3–5 Arbeitstage nach Eingang. Express: 1–2 Arbeitstage. Notfall: 24/7-Bearbeitung bis Ihre Daten gerettet sind — auf Anfrage.',
    },
    {
      question: `Gibt es eine kostenlose Abholung in ${loc.name}?`,
      answer:
        'Ja — DHL Express holt Ihren Datenträger kostenlos und versichert an Ihrer Haustür oder im Büro ab. Auf Wunsch senden wir vorab eine kostenlose Schutzbox mit Verpackungsanleitung.',
    },
  ];
}

function getBueroFaqs(loc: Location): StandortFaqItem[] {
  return [
    {
      question: 'Kann ich Medien im Büro in Köln abgeben?',
      answer:
        'Nein — am Bürostandort ist keine Medien-Abgabe möglich. Nutzen Sie die iAmbulanz-Abgabestellen in Grevenbroich oder Mönchengladbach oder die kostenlose DHL Express-Abholung.',
    },
    {
      question: 'Was passiert im Büro Köln?',
      answer:
        'Aus Köln koordinieren wir Ihren Auftrag für ganz NRW und bundesweit: Beratung, Annahme-Koordination, Kommunikation zu Analyse und Angebot. Technische Rettung erfolgt im Partner-Reinraumlabor.',
    },
    {
      question: 'Wie erreiche ich RSQDATA?',
      answer: `E-Mail: ${SITE.email} · ${loc.serviceNote}`,
    },
  ];
}

function getLaborFaqs(): StandortFaqItem[] {
  return [
    {
      question: 'Kann ich Medien direkt im Labor abgeben?',
      answer:
        'Nein — hier ist keine Abgabe für Endkunden vorgesehen. RSQDATA koordiniert die Zuleitung Ihres Mediums aus Deutschland.',
    },
    {
      question: `Ist ${LAB_PARTNER.name} das Labor von RSQDATA?`,
      answer: LAB_PARTNER_NOTE,
    },
    {
      question: 'Wie lange dauert die Laboranalyse?',
      answer: `Die technische Analyse inklusive Dateiliste dauert in der Regel ${ANALYSIS_DURATION} nach Eingang.`,
    },
  ];
}

export function getStandortFaqs(loc: Location): StandortFaqItem[] {
  if (loc.kind === 'buero') {
    return getBueroFaqs(loc);
  }
  if (loc.kind === 'labor') {
    return getLaborFaqs();
  }
  return getAbgabeFaqs(loc);
}
