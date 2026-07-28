/**
 * Builds a soft density mask from the RSQDATA wordmark for ASCII sampling.
 * Scales + tracks the wordmark to fill most of the hero width (ultrawide-safe).
 * Call again after resize (cols/rows change).
 */
export function buildRsqLogoMask(cols: number, rows: number): Float32Array<ArrayBuffer> {
  const mask = new Float32Array(cols * rows) as Float32Array<ArrayBuffer>;
  if (cols < 8 || rows < 8 || typeof document === 'undefined') {
    return mask;
  }

  const canvas = document.createElement('canvas');
  canvas.width = cols;
  canvas.height = rows;
  const ctx = canvas.getContext('2d', { willReadFrequently: true });
  if (!ctx) {
    return mask;
  }

  ctx.fillStyle = '#000000';
  ctx.fillRect(0, 0, cols, rows);

  const label = 'RSQDATA';
  const targetWidth = cols * 0.92;
  const maxFont = Math.floor(rows * 0.52);
  const minFont = 25;

  const applyFont = (size: number): void => {
    ctx.font = `800 ${size}px Inter, ui-sans-serif, system-ui, sans-serif`;
  };

  const measureGlyphWidths = (size: number): number[] => {
    applyFont(size);
    return label.split('').map((ch) => ctx.measureText(ch).width);
  };

  // Fit font to width first, then clamp to height so letters stay in frame
  let fontSize = Math.max(minFont, Math.floor(rows * 0.28));
  let widths = measureGlyphWidths(fontSize);
  let baseGap = Math.max(2, Math.floor(fontSize * 0.08));
  let total =
    widths.reduce((sum, w) => sum + w, 0) + baseGap * Math.max(0, label.length - 1);

  if (total > 0) {
    fontSize = Math.floor(fontSize * (targetWidth / total));
  }
  fontSize = Math.min(Math.max(fontSize, minFont), maxFont);

  widths = measureGlyphWidths(fontSize);
  const glyphsWidth = widths.reduce((sum, w) => sum + w, 0);
  // Extra tracking on wide canvases so the wordmark still spans the hero
  const gapSlots = Math.max(1, label.length - 1);
  const gap = Math.max(
    Math.floor(fontSize * 0.06),
    Math.floor((targetWidth - glyphsWidth) / gapSlots),
  );

  ctx.fillStyle = '#ffffff';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  applyFont(fontSize);

  const drawnTotal = glyphsWidth + gap * gapSlots;
  let x = cols / 2 - drawnTotal / 2;
  const y = rows * 0.48;

  for (let i = 0; i < label.length; i += 1) {
    const ch = label[i] ?? '';
    const w = widths[i] ?? 0;
    const cx = x + w / 2;
    ctx.fillText(ch, cx, y);
    ctx.lineWidth = Math.max(1, Math.floor(fontSize * 0.035));
    ctx.strokeStyle = '#ffffff';
    ctx.strokeText(ch, cx, y);
    x += w + gap;
  }

  const { data } = ctx.getImageData(0, 0, cols, rows);

  // Box-blur pass → softer glyph edges (Ascii Formatter feel)
  const raw = new Float32Array(cols * rows);
  for (let i = 0; i < cols * rows; i += 1) {
    raw[i] = (data[i * 4] ?? 0) / 255;
  }

  const radius = 1;
  for (let y = 0; y < rows; y += 1) {
    for (let x = 0; x < cols; x += 1) {
      let sum = 0;
      let count = 0;
      for (let dy = -radius; dy <= radius; dy += 1) {
        for (let dx = -radius; dx <= radius; dx += 1) {
          const sx = x + dx;
          const sy = y + dy;
          if (sx < 0 || sy < 0 || sx >= cols || sy >= rows) {
            continue;
          }
          sum += raw[sy * cols + sx] ?? 0;
          count += 1;
        }
      }
      mask[y * cols + x] = count > 0 ? sum / count : 0;
    }
  }

  return mask;
}
