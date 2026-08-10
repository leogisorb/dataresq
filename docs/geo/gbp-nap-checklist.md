# Offsite Local SEO — GBP & NAP (NRW)

## Standorte (Website = Wahrheit)

| Standort | Art | Adresse | Seite |
|----------|-----|---------|-------|
| Grevenbroich | Abgabe | Am Hammerwerk 16A, 41515 | `/standort/grevenbroich` |
| Mönchengladbach | Abgabe | Lüpertzender Str. 159, 41061 | `/standort/moenchengladbach` |
| Köln | Büro (keine Abgabe) | Pellenzstr. 15, 50823 | `/standort/koeln` |

Telefon/E-Mail: aus `SITE` in `src/lib/constants.ts`.

## sameAs (Code-Bridge)

`SITE.sameAs` in `src/lib/constants.ts` speist Organization/LocalBusiness JSON-LD.
Leere Liste = Feld wird weggelassen. **Sobald live**, hier eintragen und Array befüllen:

| Profil | URL (vom Owner) | Status |
|--------|-----------------|--------|
| Google Business Profile Grevenbroich | _ausstehend_ | offen |
| Google Business Profile Mönchengladbach | _ausstehend_ | offen |
| Google Business Profile Köln (Büro) | _ausstehend_ | offen |
| LinkedIn / Social / Bewertungsportal | _ausstehend_ | offen |

Keine Platzhalter-URLs committen.

## GBP Checkliste je Profil

- [ ] Kategorie korrekt (Datenwiederherstellung / IT-Dienstleistung)
- [ ] NAP identisch zur Website
- [ ] Köln: klar „keine Medien-Abgabe“ in Beschreibung
- [ ] Fotos Abgabe / Büro
- [ ] Produkte/Services: HDD, SSD, RAID, Analyse kostenlos
- [ ] Q&A aus `standort-faq.ts` spiegeln
- [ ] Primary Phone = `SITE.phone`
- [ ] Website-URL = passende Standortseite
- [ ] Profil-URL an Dev übergeben → `SITE.sameAs`

## Verzeichnisse

NAP 1:1 in Gelbe Seiten, Das Örtliche, regionalen Portalen — keine abweichenden PLZ/Straßen.
