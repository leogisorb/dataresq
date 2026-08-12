# GEO Messung — Playbook (NRW)

## 1. Analytics (Website)

- **Vercel Web Analytics** lädt nur nach Cookie-Einwilligung Kategorie Analyse (`VercelAnalytics` in `ConsentRoot`).
- Optional **GA4**: `NEXT_PUBLIC_GA_ID` ebenfalls nur mit Consent (`GoogleAnalytics.tsx`).
- ChatGPT-Referrals: in Vercel/GA Segment bzw. Filter auf Referrer/`utm_source=chatgpt.com` (OpenAI setzt dies bei Klicks aus ChatGPT-Suche).
- Verification: `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` in Env setzen — greift über `defaultMetadata.verification` in `src/lib/metadata.ts`.
- Canonical-Host: Production **muss** `NEXT_PUBLIC_SITE_URL=https://www.rsqdata.de` setzen (kein apex-Split).

## 2. Google Search Console

1. Property `https://www.rsqdata.de` verifizieren (DNS oder Meta via Env).
2. Sitemap einreichen: `/sitemap.xml`.
3. Report **Generative AI performance** (AI Overviews / AI Mode) monatlich exportieren.
4. Indexierung der neuen URLs prüfen: `/ratgeber/*`, aktualisierte `/standort`, Medium-Seiten.

## 3. Prompt-Monitoring (monatlich)

Frischer, ausgeloggter oder privater Kontext. Jede Frage 2× mit Variante. Engines: ChatGPT (Suche), Perplexity, Google (AI Overview sofern sichtbar).

### National / Intent

1. Was kostet Datenrettung Festplatte?
2. SSD Datenrettung Erfolgschancen
3. Festplatte klackert was tun
4. RAID Volume degraded was tun
5. Datenrettung ohne Analysegebühr
6. USB Stick Daten retten Preis
7. Wie lange dauert Datenrettung Analyse
8. Beste Datenrettung Deutschland

### NRW / Local (≥8)

9. Datenrettung Köln
10. Datenrettung Düsseldorf
11. Festplatte retten Mönchengladbach
12. Datenrettung Grevenbroich Abgabe
13. Datenrettung NRW
14. Festplatte abgeben Neuss
15. SSD retten Krefeld
16. Datenrettung Bonn
17. iAmbulanz Datenrettung
18. RSQDATA Erfahrungen

### Marke

19. RSQDATA Datenrettung
20. RSQDATA Preise
21. RSQDATA Standorte

### Protokoll

| Datum | Prompt | Engine | Genannt? | URL zitiert | Konkurrenten | Notiz |
|-------|--------|--------|----------|-------------|--------------|-------|
|       |        |        |          |             |              |       |

## 4. Offline-Attribution

Im Auftrag/Kontakt nachfragen: „Wie sind Sie auf uns aufmerksam geworden?“ inkl. Option KI-Assistent (UI-Freigabe Phase 2b).
