import { NextRequest, NextResponse } from 'next/server';

interface WiderrufBody {
  name?: string;
  auftragsnummer?: string;
  datum?: string;
  begruendung?: string;
}

export async function POST(req: NextRequest) {
  const body = (await req.json()) as WiderrufBody;
  const { name, auftragsnummer, datum, begruendung } = body;

  if (!name || name.trim().length < 2) {
    return NextResponse.json({ error: 'Name ist erforderlich' }, { status: 400 });
  }

  // Stub: loggt den Widerruf — kein echter E-Mail-Versand
  console.log('[Widerruf registriert]', {
    name: name.trim(),
    auftragsnummer: auftragsnummer?.trim() || '—',
    datum: datum?.trim() || '—',
    begruendung: begruendung?.trim() || '—',
    timestamp: new Date().toISOString(),
  });

  return NextResponse.json({ success: true });
}
