'use client';

import { ASCII_SHAPES, type AsciiShapeId } from '@/lib/ascii-shapes';

interface AsciiThemeRailProps {
  value: AsciiShapeId;
  onChange: (id: AsciiShapeId) => void;
}

interface ThemeIconProps {
  id: AsciiShapeId;
  active: boolean;
}

function ThemeIcon({ id, active }: ThemeIconProps): React.JSX.Element {
  const stroke = active ? '#111111' : '#8a8a8a';
  const common = {
    fill: 'none' as const,
    stroke,
    strokeWidth: 1.4,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };

  switch (id) {
    case 'platter':
      return (
        <svg aria-hidden className="size-3.5" viewBox="0 0 16 16">
          <circle cx="8" cy="8" r="6" {...common} />
          <circle cx="8" cy="8" r="3.2" {...common} />
          <circle cx="8" cy="8" r="1" fill={stroke} stroke="none" />
        </svg>
      );
    case 'chip':
      return (
        <svg aria-hidden className="size-3.5" viewBox="0 0 16 16">
          <rect x="4" y="4" width="8" height="8" rx="1" {...common} />
          <path d="M6 2v2M10 2v2M6 12v2M10 12v2M2 6h2M2 10h2M12 6h2M12 10h2" {...common} />
        </svg>
      );
    case 'shield':
      return (
        <svg aria-hidden className="size-3.5" viewBox="0 0 16 16">
          <path d="M8 2.5 13 5v3.5c0 3-2.2 4.8-5 5.5-2.8-.7-5-2.5-5-5.5V5l5-2.5Z" {...common} />
          <path d="M5.8 8.1 7.3 9.5l3-3" {...common} />
        </svg>
      );
    case 'magnifier':
      return (
        <svg aria-hidden className="size-3.5" viewBox="0 0 16 16">
          <circle cx="7" cy="7" r="4.2" {...common} />
          <path d="M10.2 10.2 13.5 13.5" {...common} />
        </svg>
      );
    case 'waveform':
      return (
        <svg aria-hidden className="size-3.5" viewBox="0 0 16 16">
          <path d="M1.5 8h2l1.2-3.5L7 12l2-6.5L11 9h3.5" {...common} />
        </svg>
      );
    case 'folder':
      return (
        <svg aria-hidden className="size-3.5" viewBox="0 0 16 16">
          <path d="M2.5 5.2h3.2l1.2 1.3H13.5v6H2.5V5.2Z" {...common} />
          <path d="M3 7.4h10v5H3V7.4Z" {...common} />
        </svg>
      );
    case 'logo':
      return (
        <svg aria-hidden className="size-3.5" viewBox="0 0 16 16">
          <text
            x="8"
            y="11.2"
            fill={stroke}
            fontFamily="ui-sans-serif, system-ui, sans-serif"
            fontSize="9"
            fontWeight="700"
            textAnchor="middle"
          >
            R
          </text>
        </svg>
      );
    case 'progress':
      return (
        <svg aria-hidden className="size-3.5" viewBox="0 0 16 16">
          <circle cx="8" cy="8" r="5.5" {...common} strokeOpacity="0.35" />
          <path d="M8 2.5a5.5 5.5 0 0 1 5.5 5.5" {...common} />
        </svg>
      );
    default:
      return (
        <svg aria-hidden className="size-3.5" viewBox="0 0 16 16">
          <circle cx="8" cy="8" r="5" {...common} />
        </svg>
      );
  }
}

const STORAGE_KEY = 'rsq-ascii-theme';

export function readStoredAsciiTheme(): AsciiShapeId | null {
  if (typeof window === 'undefined') {
    return null;
  }
  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    return null;
  }
  return ASCII_SHAPES.some((shape) => shape.id === raw) ? (raw as AsciiShapeId) : null;
}

export function storeAsciiTheme(id: AsciiShapeId): void {
  if (typeof window === 'undefined') {
    return;
  }
  window.localStorage.setItem(STORAGE_KEY, id);
}

export default function AsciiThemeRail({
  value,
  onChange,
}: AsciiThemeRailProps): React.JSX.Element {
  return (
    <aside
      aria-label="ASCII-Theme wählen"
      className="pointer-events-auto absolute left-2 top-1/2 z-30 flex -translate-y-1/2 flex-col gap-1 md:left-3"
    >
      {ASCII_SHAPES.map((shape) => {
        const active = shape.id === value;
        return (
          <button
            key={shape.id}
            aria-label={shape.label}
            aria-pressed={active}
            className={[
              'inline-flex size-7 items-center justify-center rounded-md transition-colors',
              active
                ? 'bg-[#111111]/10 text-[#111111]'
                : 'text-[#8a8a8a] hover:bg-black/5 hover:text-[#111111]',
            ].join(' ')}
            title={shape.label}
            type="button"
            onClick={() => {
              storeAsciiTheme(shape.id);
              onChange(shape.id);
            }}
          >
            <ThemeIcon active={active} id={shape.id} />
          </button>
        );
      })}
    </aside>
  );
}
