import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

import { SITE } from '@/lib/constants';
import { EMAIL_REGEX, PHONE_REGEX } from '@/lib/calculator';

function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return null;
  return new Resend(apiKey);
}

interface AnfrageBody {
  name?: string;
  telefon?: string;
  email?: string;
  medium?: string;
  schaden?: string;
  express?: boolean;
  preisrange?: string;
  nachricht?: string;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export async function POST(req: NextRequest) {
  const body = (await req.json()) as AnfrageBody;
  const { name, telefon, email, medium, schaden, express, preisrange, nachricht } = body;

  if (!name || !telefon || !email || !medium || !schaden) {
    return NextResponse.json({ error: 'Pflichtfelder fehlen' }, { status: 400 });
  }

  if (name.trim().length < 2) {
    return NextResponse.json({ error: 'Name ungültig' }, { status: 400 });
  }

  if (!PHONE_REGEX.test(telefon.trim())) {
    return NextResponse.json({ error: 'Telefonnummer ungültig' }, { status: 400 });
  }

  if (!EMAIL_REGEX.test(email.trim())) {
    return NextResponse.json({ error: 'E-Mail ungültig' }, { status: 400 });
  }

  const emailNotConfigured =
    !process.env.RESEND_API_KEY ||
    process.env.RESEND_API_KEY === 're_placeholder' ||
    !process.env.CONTACT_EMAIL;

  if (emailNotConfigured) {
    if (process.env.NODE_ENV === 'development') {
      console.info('[dev] Anfrage empfangen (E-Mail-Versand übersprungen):', {
        name: name.trim(),
        telefon: telefon.trim(),
        email: email.trim(),
        medium,
        schaden,
        express,
        preisrange,
      });
      return NextResponse.json({ success: true, dev: true });
    }
    return NextResponse.json({ error: 'E-Mail nicht konfiguriert' }, { status: 503 });
  }

  const resend = getResendClient();
  const contactEmail = process.env.CONTACT_EMAIL;
  if (!resend || !contactEmail) {
    return NextResponse.json({ error: 'E-Mail-Konfiguration fehlt' }, { status: 503 });
  }

  const safeName = escapeHtml(name.trim());
  const safeTelefon = escapeHtml(telefon.trim());
  const safeEmail = escapeHtml(email.trim());
  const safeMedium = escapeHtml(medium);
  const safeSchaden = escapeHtml(schaden);
  const safePreisrange = escapeHtml(preisrange ?? '—');
  const safeNachricht = escapeHtml(nachricht?.trim() || '—');
  const addressLine = `${SITE.address.street}, ${SITE.address.zip} ${SITE.address.city}`;

  try {
    await resend.emails.send({
      from: 'Anfragen <noreply@muench-datenrettung.de>',
      to: contactEmail,
      subject: `Neue Datenrettungs-Anfrage: ${medium} / ${schaden}`,
      html: `
        <h2>Neue Anfrage über den Preiskalkulator</h2>
        <table>
          <tr><td><b>Name:</b></td><td>${safeName}</td></tr>
          <tr><td><b>Telefon:</b></td><td>${safeTelefon}</td></tr>
          <tr><td><b>E-Mail:</b></td><td>${safeEmail}</td></tr>
          <tr><td><b>Medium:</b></td><td>${safeMedium}</td></tr>
          <tr><td><b>Schaden:</b></td><td>${safeSchaden}</td></tr>
          <tr><td><b>Dringlichkeit:</b></td><td>${express ? 'Notfall' : 'Standard'}</td></tr>
          <tr><td><b>Preisspanne:</b></td><td>${safePreisrange}</td></tr>
          <tr><td><b>Nachricht:</b></td><td>${safeNachricht}</td></tr>
        </table>
        <p><b>Bitte binnen 24h zurückrufen.</b></p>
      `,
    });

    await resend.emails.send({
      from: 'DATARESQ <noreply@muench-datenrettung.de>',
      to: email.trim(),
      subject: 'Ihre Anfrage ist eingegangen — wir melden uns binnen 24h',
      html: `
        <h2>Vielen Dank, ${safeName}!</h2>
        <p>Ihre Anfrage ist bei uns eingegangen.</p>
        <p><b>Ihre geschätzte Preisspanne: ${safePreisrange}</b></p>
        <p>Unser Team meldet sich binnen <b>24 Stunden per E-Mail</b> bei Ihnen
        und sendet Ihnen anschließend ein individuelles schriftliches Angebot.</p>
        <p>Bei Rückfragen antworten Sie einfach auf diese E-Mail.</p>
        <hr>
        <p style="font-size:12px;color:#666">
        DATARESQ · ${addressLine} ·
        <a href="https://muench-datenrettung.de/datenschutz">Datenschutz</a>
        </p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'E-Mail-Versand fehlgeschlagen' }, { status: 500 });
  }
}
