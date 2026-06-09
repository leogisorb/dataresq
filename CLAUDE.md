# Münch Datenrettung — Projekt-Dokumentation

## Stack (nicht verhandelbar)
- **Framework**: Next.js 15 App Router + TypeScript strict
- **Styling**: Tailwind CSS v4 (CSS-basiert via `@theme`, KEIN tailwind.config.ts)
- **Components**: HeroUI v3 (kein Provider, `useOverlayState` statt `useDisclosure`)
- **CMS**: Sanity (nur für Ratgeber/Blog — nicht für Core-Landingpages)
- **E-Mail**: Resend
- **Hosting**: Vercel
- **Design System**: Apple-inspired Light Theme (seit Prompt 11)

## Cursor Rules
Alle Regeln unter `.cursor/rules/`. Wichtigste Dateien:
- `00-core.mdc` — Global, immer aktiv
- `04-seo.mdc` — SEO-Pflichten (JSON-LD, Metadata)
- `08-anti-patterns.mdc` — Verbotene Patterns, immer aktiv

## Wichtige Dateipfade
```
src/lib/constants.ts      ← SITE, PRICE_MATRIX, EXPRESS_MULTIPLIER (Single Source of Truth)
src/styles/tokens.css     ← Design Tokens (CSS Custom Properties)
src/styles/globals.css    ← Tailwind v4 Config + Animationen
src/app/layout.tsx        ← Root Layout (kein HeroUIProvider)
src/app/page.tsx          ← Homepage mit JSON-LD
```

## Design System — Apple Light Theme
| Token | Wert | Verwendung |
|-------|------|-----------|
| `--color-bg` | `#ffffff` | Haupthintergrund |
| `--color-bg-subtle` | `#f5f5f7` | Sections, alternierend |
| `--color-text` | `#1d1d1f` | Primärtext |
| `--color-text-muted` | `#6e6e73` | Sekundärtext |
| `--color-accent` | `#0071e3` | Apple Blau, CTAs |

## SEO-Doktrin
White-hat only. Datenrettung ist YMYL-nah.
- Jede page.tsx: `metadata` + JSON-LD Pflicht
- Pillar→Cluster Struktur: /datenrettung → /datenrettung/[medium]
- Local-Matrix: /standort/[stadt]
- Keine Thin-Content-Seiten (Doorway-Risiko)

## HeroUI v3 Besonderheiten
```typescript
// RICHTIG
import { useOverlayState } from '@heroui/react'
// FALSCH (existiert in v3 nicht)
import { useDisclosure } from '@heroui/react'

// Buttons mit onClick brauchen "use client" Boundary
'use client'
import { Button } from '@heroui/react'
```
