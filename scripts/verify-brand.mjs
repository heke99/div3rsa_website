import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const tools = process.env.VERIFICATION_TOOLS_DIR;
if (!tools) throw new Error('VERIFICATION_TOOLS_DIR must point to the isolated Playwright installation.');
const { chromium } = await import(pathToFileURL(path.join(tools, 'node_modules/playwright/index.mjs')).href);
const origin = process.env.WEBSITE_TEST_URL || 'http://127.0.0.1:3000';
assert.ok(['localhost', '127.0.0.1'].includes(new URL(origin).hostname), 'Verification is restricted to a local server');
const canonicalOrigin = 'https://www.div3rsa.com';
fs.mkdirSync('verification', { recursive: true });
const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 }, reducedMotion: 'reduce' });
const errors = [];
page.on('pageerror', error => errors.push(error.message));
const passed = [];
const check = (name, condition) => { assert.ok(condition, name); passed.push(name); console.log(`PASS ${name}`); };
const localUrl = url => {
  const parsed = new URL(url, origin);
  // Images and metadata are fetched from the local build, never from production.
  return `${origin}${parsed.pathname}${parsed.search}`;
};
const attribute = (selector, name) => page.locator(selector).first().getAttribute(name);
const pngSize = buffer => {
  assert.equal(buffer.subarray(0, 8).toString('hex'), '89504e470d0a1a0a');
  return `${buffer.readUInt32BE(16)}x${buffer.readUInt32BE(20)}`;
};
try {
  const response = await page.goto(origin);
  check('Home page serves successfully', response?.status() === 200);
  const headers = response.headers();
  check('Content sniffing is disabled', headers['x-content-type-options'] === 'nosniff');
  check('Referrer policy is explicit', headers['referrer-policy'] === 'strict-origin-when-cross-origin');
  check('Cross-origin framing is denied', headers['x-frame-options'] === 'SAMEORIGIN');
  check('Framework advertising header is removed', !headers['x-powered-by']);
  const iconLinks = await page.locator('link[rel="icon"]').evaluateAll(nodes => nodes.map(node => ({ href: node.href, type: node.type, sizes: node.sizes.value })));
  check('ICO fallback is declared', iconLinks.some(link => new URL(link.href).pathname === '/favicon.ico'));
  check('SVG icon is declared', iconLinks.some(link => new URL(link.href).pathname === '/icon.svg' && link.type === 'image/svg+xml'));
  check('96px PNG fallback is declared', iconLinks.some(link => new URL(link.href).pathname === '/brand/favicon-96.png' && link.sizes === '96x96'));
  for (const link of iconLinks) {
    const icon = await page.request.get(localUrl(link.href));
    check(`Icon is accessible: ${new URL(link.href).pathname}`, icon.ok());
    if (new URL(link.href).pathname.endsWith('.png')) check('PNG icon dimensions are 96x96', pngSize(await icon.body()) === '96x96');
    if (new URL(link.href).pathname.endsWith('.ico')) {
      const bytes = await icon.body();
      check('Favicon response contains four ICO frames', bytes.readUInt16LE(2) === 1 && bytes.readUInt16LE(4) === 4);
    }
  }
  const appleLink = await attribute('link[rel="apple-touch-icon"]', 'href');
  check('Apple touch icon is declared', Boolean(appleLink));
  const apple = await page.request.get(localUrl(appleLink));
  check('Apple touch icon returns a 180x180 PNG', apple.ok() && pngSize(await apple.body()) === '180x180');
  const safariLink = await attribute('link[rel="mask-icon"]', 'href');
  const safari = await page.request.get(localUrl(safariLink));
  check('Safari pinned tab mark is served', safari.ok() && (await safari.text()).includes('viewBox="0 0 40 40"'));
  const manifestLink = await attribute('link[rel="manifest"]', 'href');
  const manifestResponse = await page.request.get(localUrl(manifestLink));
  check('Manifest is served successfully', manifestResponse.ok());
  const manifest = await manifestResponse.json();
  check('Manifest names the correct brand and language', manifest.name === 'Trafexa Nordic' && manifest.short_name === 'Trafexa' && manifest.lang === 'en');
  check('Manifest preserves normal website navigation', manifest.display === 'browser' && manifest.start_url === '/' && manifest.scope === '/');
  check('Manifest has a separate maskable icon', manifest.icons.some(icon => icon.purpose === 'maskable' && icon.sizes === '512x512'));
  for (const icon of manifest.icons) {
    const image = await page.request.get(localUrl(icon.src));
    check(`Manifest icon ${icon.src} matches declared size`, image.ok() && pngSize(await image.body()) === icon.sizes);
  }
  const schema = JSON.parse(await page.locator('#site-structured-data').textContent());
  const organisation = schema['@graph'].find(item => item['@type'] === 'Organization');
  const website = schema['@graph'].find(item => item['@type'] === 'WebSite');
  check('Organisation schema has the published legal identity', organisation.legalName === 'Trafexa Nordic AB' && organisation.identifier.value === '556855-4884');
  check('Website schema uses the primary host', website.url === canonicalOrigin && website.name === 'Trafexa Nordic');
  check('No unverified ownership hierarchy is inferred', !organisation.parentOrganization && !organisation.subOrganization);
  const logo = await page.request.get(localUrl(organisation.logo.url));
  check('Search engine logo resolves to a 512px image', logo.ok() && pngSize(await logo.body()) === '512x512');
  for (const route of ['/opengraph-image', '/twitter-image']) {
    const image = await page.request.get(`${origin}${route}`);
    const bytes = await image.body();
    check(`Share artwork ${route} is 1200x630 PNG`, image.ok() && pngSize(bytes) === '1200x630');
    fs.writeFileSync(`verification/brand-${route.slice(1)}.png`, bytes);
  }
  const sitemap = await page.request.get(`${origin}/sitemap.xml`);
  const locations = [...(await sitemap.text()).matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1]);
  check('Sitemap contains all 23 canonical pages', locations.length === 23 && new Set(locations).size === 23);
  check('Sitemap does not point to the redirecting host', locations.every(url => new URL(url).origin === canonicalOrigin));
  const robots = await page.request.get(`${origin}/robots.txt`);
  check('Robots publishes the canonical sitemap and permits icon crawling', (await robots.text()).includes(`Sitemap: ${canonicalOrigin}/sitemap.xml`) && !(await robots.text()).includes('Disallow: /'));
  for (const url of locations) {
    const route = new URL(url).pathname;
    const result = await page.goto(`${origin}${route}`);
    await page.locator('link[rel="canonical"]').waitFor({ state: 'attached' });
    const canonical = await attribute('link[rel="canonical"]', 'href');
    const ogUrl = await attribute('meta[property="og:url"]', 'content');
    const ogTitle = await attribute('meta[property="og:title"]', 'content');
    const twitterTitle = await attribute('meta[name="twitter:title"]', 'content');
    const description = await attribute('meta[name="description"]', 'content');
    const ogDescription = await attribute('meta[property="og:description"]', 'content');
    check(`Canonical URL and HTTP status ${route}`, result.status() === 200 && canonical === new URL(route, canonicalOrigin).href);
    check(`Social URL points to this page ${route}`, ogUrl === canonical);
    check(`Social title matches this page ${route}`, ogTitle === await page.title() && twitterTitle === ogTitle);
    check(`Social description matches this page ${route}`, description === ogDescription);
    check(`One canonical declaration ${route}`, await page.locator('link[rel="canonical"]').count() === 1);
  }
  await page.setContent(`<html lang="en"><head><title>Trafexa icon verification</title></head><body style="margin:0;font:18px Arial;color:#152a31;background:#f7f9fa;padding:60px"><h1>Trafexa Nordic · browser identity</h1><p>Rendered from the actual website assets, not a browser screenshot.</p><div style="display:flex;gap:40px;align-items:center;margin:50px 0">${[16,32,48,96].map(size => `<div><img src="${origin}/icon.svg" width="${size}" height="${size}" alt="Trafexa mark at ${size}px"><p>${size}px</p></div>`).join('')}<div><img src="${origin}/apple-icon.png" width="180" height="180" alt="Apple home screen"><p>Apple · 180px</p></div><div><img src="${origin}/brand/icon-maskable-512.png" style="border-radius:50%" width="180" height="180" alt="Circular mask"><p>Android · circular mask</p></div></div><div style="background:#14343c;color:white;padding:35px;display:flex;gap:35px;align-items:center"><img src="${origin}/icon.svg" width="32" height="32" alt="Dark surface favicon"><span>Icon on a dark surface</span></div></body></html>`);
  await page.evaluate(() => Promise.all([...document.images].map(image => image.decode())));
  await page.screenshot({ path: 'verification/brand-icons.png' });
  check('No browser runtime errors', errors.length === 0);
  fs.writeFileSync('verification/brand-report.json', JSON.stringify({ testedCommit: process.env.GITHUB_SHA, passed, errors }, null, 2));
} catch (error) {
  await page.screenshot({ path: 'verification/brand-failure.png', fullPage: true });
  fs.writeFileSync('verification/brand-failure.txt', String(error.stack || error));
  throw error;
} finally { await browser.close(); }
