/** Reproduce the existing Trafexa mark. Built-in Node APIs only; no network or fonts. */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { deflateSync } from 'node:zlib';

const root = fileURLToPath(new URL('../', import.meta.url));
const brand = JSON.parse(fs.readFileSync(path.join(root, 'lib/brand.json'), 'utf8'));
const check = process.argv.includes('--check');
const rgb = value => value.match(/[a-f\d]{2}/gi).map(part => parseInt(part, 16));
const bg = rgb(brand.background);
const fg = rgb(brand.foreground);
const accent = rgb(brand.accent);

function crc32(buffer) {
  let crc = 0xffffffff;
  for (const byte of buffer) {
    crc ^= byte;
    for (let bit = 0; bit < 8; bit++) crc = (crc >>> 1) ^ (0xedb88320 & -(crc & 1));
  }
  return (crc ^ 0xffffffff) >>> 0;
}
function chunk(type, data) {
  const name = Buffer.from(type);
  const size = Buffer.alloc(4);
  size.writeUInt32BE(data.length);
  const checksum = Buffer.alloc(4);
  checksum.writeUInt32BE(crc32(Buffer.concat([name, data])));
  return Buffer.concat([size, name, data, checksum]);
}
const inside = (x, y, rects) => rects.some(([left, top, width, height]) =>
  x >= left && x < left + width && y >= top && y < top + height);

function png(size, { opaque = false, maskable = false } = {}) {
  const raw = Buffer.alloc(size * (1 + size * 4));
  const samples = 4;
  const scale = maskable ? 1.1 : 1.25;
  const offset = (64 - brand.viewBox * scale) / 2;
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const total = [0, 0, 0, 0];
      for (let sy = 0; sy < samples; sy++) {
        for (let sx = 0; sx < samples; sx++) {
          const px = (x + (sx + 0.5) / samples) * 64 / size;
          const py = (y + (sy + 0.5) / samples) * 64 / size;
          const cx = Math.max(12, Math.min(52, px));
          const cy = Math.max(12, Math.min(52, py));
          if (!opaque && (px - cx) ** 2 + (py - cy) ** 2 > 144) continue;
          const mx = (px - offset) / scale;
          const my = (py - offset) / scale;
          const color = inside(mx, my, brand.primary) ? fg : inside(mx, my, brand.secondary) ? accent : bg;
          for (let c = 0; c < 3; c++) total[c] += color[c];
          total[3]++;
        }
      }
      const pixel = y * (1 + size * 4) + 1 + x * 4;
      for (let c = 0; c < 3; c++) raw[pixel + c] = total[3] ? Math.round(total[c] / total[3]) : 0;
      raw[pixel + 3] = Math.round(255 * total[3] / samples ** 2);
    }
  }
  const header = Buffer.alloc(13);
  header.writeUInt32BE(size, 0); header.writeUInt32BE(size, 4);
  header[8] = 8; header[9] = 6; // RGBA, 8 bits per channel.
  return Buffer.concat([Buffer.from('89504e470d0a1a0a', 'hex'), chunk('IHDR', header), chunk('IDAT', deflateSync(raw, { level: 9 })), chunk('IEND', Buffer.alloc(0))]);
}
function ico(sizes) {
  const images = sizes.map(size => png(size));
  const header = Buffer.alloc(6 + sizes.length * 16);
  header.writeUInt16LE(1, 2); header.writeUInt16LE(sizes.length, 4);
  let offset = header.length;
  sizes.forEach((size, index) => {
    const entry = 6 + index * 16;
    header[entry] = size; header[entry + 1] = size;
    header.writeUInt16LE(1, entry + 4); header.writeUInt16LE(32, entry + 6);
    header.writeUInt32LE(images[index].length, entry + 8);
    header.writeUInt32LE(offset, entry + 12);
    offset += images[index].length;
  });
  return Buffer.concat([header, ...images]);
}
function rectangles(rects, fill) {
  return rects.map(([x, y, width, height]) => `<rect x="${x}" y="${y}" width="${width}" height="${height}" fill="${fill}"/>`).join('');
}
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="12" fill="${brand.background}"/><g transform="translate(7 7) scale(1.25)">${rectangles(brand.primary, brand.foreground)}${rectangles(brand.secondary, brand.accent)}</g></svg>\n`;
const monochrome = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">${rectangles([...brand.primary, ...brand.secondary], '#000000')}</svg>\n`;
const assets = {
  'app/icon.svg': Buffer.from(svg),
  'app/favicon.ico': ico([16, 32, 48, 64]),
  'app/apple-icon.png': png(180, { opaque: true }),
  'public/brand/favicon-96.png': png(96),
  'public/brand/icon-192.png': png(192, { opaque: true }),
  'public/brand/icon-512.png': png(512, { opaque: true }),
  'public/brand/icon-maskable-512.png': png(512, { opaque: true, maskable: true }),
  'public/brand/safari-pinned-tab.svg': Buffer.from(monochrome),
};
for (const [relative, bytes] of Object.entries(assets)) {
  const target = path.join(root, relative);
  if (check) {
    if (!fs.existsSync(target) || !fs.readFileSync(target).equals(bytes)) {
      throw new Error(`Brand asset drift: ${relative}. Run node scripts/generate-brand-assets.mjs.`);
    }
  } else {
    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.writeFileSync(target, bytes);
  }
  console.log(`${check ? 'Verified' : 'Generated'} ${relative} (${bytes.length} bytes)`);
}
