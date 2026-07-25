'use client';

import { ASCII_SHAPES, type AsciiShapeId } from '@/lib/ascii-shapes';

interface AsciiShapePickerProps {
  value: AsciiShapeId;
  onChange: (id: AsciiShapeId) => void;
}

export default function AsciiShapePicker({
  value,
  onChange,
}: AsciiShapePickerProps): React.JSX.Element {
  const active = ASCII_SHAPES.find((shape) => shape.id === value) ?? ASCII_SHAPES[0];

  return (
    <div className="pointer-events-auto absolute bottom-24 left-1/2 z-30 w-[min(92vw,36rem)] -translate-x-1/2 rounded-2xl border border-[#ECECEC] bg-white/95 px-3 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.08)] backdrop-blur-sm md:bottom-28">
      <div className="mb-2 flex items-baseline justify-between gap-3 px-1">
        <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-[#8a8a8a]">
          ASCII-Form Preview
        </p>
        <p className="truncate text-xs text-[#111111]">
          {active.label}
          <span className="text-[#8a8a8a]"> — {active.hint}</span>
        </p>
      </div>

      <div className="flex flex-wrap gap-1.5">
        {ASCII_SHAPES.map((shape) => {
          const selected = shape.id === value;
          return (
            <button
              key={shape.id}
              className={[
                'rounded-full px-3 py-1.5 text-[12px] transition-colors',
                selected
                  ? 'bg-[#111111] text-white'
                  : 'bg-[#F5F5F5] text-[#1a1a1a] hover:bg-[#EBEBEB]',
              ].join(' ')}
              type="button"
              onClick={() => onChange(shape.id)}
            >
              {shape.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
