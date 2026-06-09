# Coding Standards — Münch Datenrettung

## Mobile-First (nicht verhandelbar)
- Alle Styles beginnen ohne Breakpoint-Prefix (= mobile)
- Erweiterung nur mit md: und lg: nach oben
- Kein hover-only Interaction

## Kein Inline-Style
- Ausnahme: dynamische Werte die nicht in Tailwind abbildbar sind
- CSS Custom Properties für alle Design-Entscheidungen

## TypeScript
- strict: true — kein any ohne Kommentar mit Begründung
- Alle Props-Types explizit definiert (kein implicit any)

## Semantisches HTML (SEO-kritisch)
- Genau 1× <h1> pro Seite
- Korrekte Heading-Hierarchie: h1 → h2 → h3
- <main>, <nav>, <footer>, <article>, <section> korrekt einsetzen
- Alle <img> haben alt-Text (next/image erzwingt das)

## Komponenten
- Eine Verantwortlichkeit pro Komponente
- Props mit TypeScript-Interface, kein inline type
- Server Components default — Client Components nur bei Interaktivität

## SEO
- Jede page.tsx exportiert generateMetadata()
- Jede Seite hat Canonical
- JSON-LD über src/lib/structured-data.ts bauen

## Accessibility
- Kontrast-Ratio min. 4.5:1 (WCAG AA)
- Fokus-States sichtbar (ring-2 ring-accent)
- Labels für alle Formularfelder
