/**
 * Builds a soft density mask from the RSQDATA wordmark for ASCII sampling.
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

  // ~25% of canvas height (scaled +25% with hero content)
  const fontSize = Math.max(25, Math.floor(rows * 0.25));
  ctx.fillStyle = '#ffffff';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.font = `800 ${fontSize}px Inter, ui-sans-serif, system-ui, sans-serif`;

  // Draw with manual tracking for clearer ASCII letter separation
  const label = 'RSQDATA';
  const gap = Math.max(2, Math.floor(fontSize * 0.08));
  const widths = label.split('').map((ch) => ctx.measureText(ch).width);
  const total =
    widths.reduce((sum, w) => sum + w, 0) + gap * Math.max(0, label.length - 1);
  let x = cols / 2 - total / 2;
  const y = rows * 0.48;

  for (let i = 0; i < label.length; i += 1) {
    const ch = label[i] ?? '';
    const w = widths[i] ?? 0;
    ctx.fillText(ch, x + w / 2, y);
    ctx.lineWidth = Math.max(1, Math.floor(fontSize * 0.035));
    ctx.strokeStyle = '#ffffff';
    ctx.strokeText(ch, x + w / 2, y);
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
