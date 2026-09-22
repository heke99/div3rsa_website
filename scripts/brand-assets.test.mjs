import assert from 'node:assert/strict';
import fs from 'node:fs';
import { inflateSync } from 'node:zlib';
import test from 'node:test';

const read = relative => fs.readFileSync(new URL(`../${relative}`, import.meta.url));
const brand = JSON.parse(read('lib/brand.json'));

function decodePng(bytes) {
  assert.equal(bytes.subarray(0, 8).toString('hex'), '89504e470d0a1a0a');
  const width = bytes.readUInt32BE(16);
  const height = bytes.readUInt32BE(20);
  assert.equal(bytes[24], 8);
  assert.equal(bytes[25], 6);
  const data = [];
  for (let offset = 8; offset < bytes.length;) {
    const length = bytes.readUInt32BE(offset);
    if (bytes.toString('ascii', offset + 4, offset + 8) === 'IDAT') data.push(bytes.subarray(offset + 8, offset + 8 + length));
    offset += length + 12;
  }
  const pixels = inflateSync(Buffer.concat(data));
  assert.equal(pixels.length, height * (1 + width * 4));
  for (let y = 0; y < height; y++) assert.equal(pixels[y * (1 + width * 4)], 0, 'Generated PNG uses no row filter');
  return { width, height, pixel: (x, y) => pixels.subarray(y * (1 + width * 4) + 1 + x * 4, y * (1 + width * 4) + 5 + x * 4) };
}

test('ICO contains valid 16, 32, 48 and 64 pixel PNG frames', () => {
  const bytes = read('app/favicon.ico');
  assert.equal(bytes.readUInt16LE(0), 0); assert.equal(bytes.readUInt16LE(2), 1); assert.equal(bytes.readUInt16LE(4), 4);
  for (const [index, size] of [16, 32, 48, 64].entries()) {
    const entry = 6 + index * 16;
    assert.equal(bytes[entry], size); assert.equal(bytes[entry + 1], size);
    const offset = bytes.readUInt32LE(entry + 12);
    const length = bytes.readUInt32LE(entry + 8);
    const image = decodePng(bytes.subarray(offset, offset + length));
    assert.equal(image.width, size); assert.equal(image.height, size);
  }
});

test('PNG dimensions match browser and home-screen declarations', () => {
  for (const [file, size] of [['app/apple-icon.png', 180], ['public/brand/favicon-96.png', 96], ['public/brand/icon-192.png', 192], ['public/brand/icon-512.png', 512], ['public/brand/icon-maskable-512.png', 512]]) {
    const image = decodePng(read(file));
    assert.equal(image.width, size, file); assert.equal(image.height, size, file);
  }
});

test('Apple home-screen artwork is completely opaque', () => {
  const image = decodePng(read('app/apple-icon.png'));
  for (let y = 0; y < image.height; y++) for (let x = 0; x < image.width; x++) assert.equal(image.pixel(x, y)[3], 255);
});

test('Maskable foreground survives the circular 40% radius safe zone', () => {
  const image = decodePng(read('public/brand/icon-maskable-512.png'));
  const background = [...brand.background.match(/[a-f\d]{2}/gi).map(part => parseInt(part, 16)), 255];
  for (let y = 0; y < image.height; y++) for (let x = 0; x < image.width; x++) {
    const pixel = [...image.pixel(x, y)];
    assert.equal(pixel[3], 255);
    if (pixel.some((value, index) => value !== background[index])) assert.ok(Math.hypot(x + 0.5 - 256, y + 0.5 - 256) < 512 * 0.4);
  }
});

test('The master mark preserves the existing Trafexa geometry', () => {
  assert.equal(brand.viewBox, 40);
  assert.deepEqual(brand.primary, [[4, 6, 32, 7], [16, 13, 8, 21]]);
  assert.deepEqual(brand.secondary, [[29, 19, 7, 15]]);
  assert.match(read('app/icon.svg').toString(), /viewBox="0 0 64 64"/);
  assert.match(read('public/brand/safari-pinned-tab.svg').toString(), /fill="#000000"/);
});
