# SEA Checkliste — DE / NRW (situativ)

SEA kauft **keine** organischen KI-Zitationen. Sinnvoll als Kompensation, wenn AI Overviews die CTR auf organische Treffer drücken.

## Kampagnenstruktur (Google Ads Search)

| Kampagne | Beispiel-Keywords | Landing |
|----------|-------------------|---------|
| Brand | RSQDATA, rsqdata datenrettung | `/` |
| Generic Datenrettung | datenrettung, festplatte daten retten | `/datenrettung` |
| Medium | ssd datenrettung, raid datenrettung preis | `/datenrettung/[slug]` |
| Local NRW | datenrettung köln, festplatte retten düsseldorf, datenrettung nrw | `/standort`, `/standort/koeln`, Ratgeber NRW |
| Preis | datenrettung kosten, festplatte retten preis | `/preisrechner` |

Negative Keywords: DIY-Software, Kurs, Ausbildung, gebraucht kaufen.

## Tracking

- Conversions: Anfrage-Formular, Telefonklick, Preisrechner-Abschluss
- An Vercel Analytics / GA4 (mit Consent) koppeln
- UTM-Konvention: `utm_source=google&utm_medium=cpc&utm_campaign=…`

## AI-Oberflächen Ads

- Google AI Overviews / AI Mode: nur testen, wenn Search-Kampagnen stabil convertieren
- ChatGPT Ads: Enterprise-Budget — aktuell nicht priorisieren
- Perplexity: werbefrei — kein Kanal

## Budget-Empfehlung (Start)

Kleine Marke NRW: zuerst Brand + Local + 1 Generic Medium (HDD oder SSD). Wochenreview: CPA vs. organische Anfragen aus Prompt-Monitoring.
