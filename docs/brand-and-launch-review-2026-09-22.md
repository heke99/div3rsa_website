# Browser identity and launch review — 22 September 2026

Base: `3c076f64c474d03fc4a5f43e3586591bd172bc98` (merged PR #6).

## Findings addressed

- The site declared an SVG favicon, but had no ICO fallback, Apple touch icon or home-screen manifest. Export the existing Trafexa mark for these surfaces; do not introduce a different logo.
- The production apex domain redirects to `https://www.div3rsa.com`. Align `company.url`, canonical tags, social URLs, sitemap and robots with that actual primary host. The email address and public domain remain unchanged.
- The home page had no canonical URL. Interior pages inherited home-page Open Graph/Twitter titles, descriptions and URL. Use page-specific metadata for all public routes, preserving their copy.
- Social artwork contained a text name but not the symbol. Reuse the same mark in the Open Graph and Twitter PNG images.
- Add a WebSite/Organization JSON-LD block with a public logo URL and the already-published operator identity. Do not infer an ownership relationship with the Wyoming entity or add unverified contact details.
- Vercel used `npm install` while CI used `npm ci`. Make deployment install the committed lockfile using `npm ci` too.
- Add basic no-sniff, referrer and same-origin framing headers, and stop advertising the framework in response headers. This is not a complete application security audit or a CSP implementation.

## One source for the mark

`lib/brand.json` describes the existing rectangular geometry and brand colours. `components/BrandMark.tsx` renders it in the header/footer and social artwork. `scripts/generate-brand-assets.mjs` exports the favicon and home-screen assets using built-in Node APIs only (no packages, remote requests or fonts).

```sh
node scripts/generate-brand-assets.mjs
npm run test:brand
```

Build-time exports: SVG, a four-frame ICO (16/32/48/64), a 96px PNG favicon, an opaque 180px Apple icon, 192/512px icons, a separate 512px maskable icon, and a monochrome Safari pinned-tab SVG. The maskable foreground is contained inside the circular 40%-radius safe zone. The committed geometry and generator are the source of truth. `predev` and `prebuild` generate the binary files before Next.js discovers its metadata routes. The manifest keeps `display: browser`; it does not promise offline behaviour or a separate application.

## Verification

`test:brand` generates and verifies the exports, checks the ICO/PNG payloads and dimensions, verifies Apple opacity and the maskable safe zone, and preserves the original mark geometry. `verify-brand.mjs` tests the production build locally: served icon declarations, manifest, schema/logo, social artwork, security headers, and canonical/social metadata across the sitemap. It archives diagnostic images and a report with the tested commit. These supplement, not replace, the existing audit, SMTP and 169-assertion browser checks.

No new runtime dependencies or lockfile changes. No database, credentials or separate client-portal changes. Native Safari pinned-tab appearance, physical iOS/Android launchers and actual search-engine indexing are not exercised by the Chromium tests. Browser or crawler caches may retain old icons; Google decides when and whether an icon appears in search.

## Remaining operational recommendations (not silently implemented)

1. Verify a complete authorised enquiry through database persistence, the existing portal and real SMTP delivery. Loopback SMTP tests are not production delivery acceptance.
2. Add server-side rate limiting / abuse controls for the public enquiry and payment application endpoints. The existing contact honeypot is not a rate limiter. Storage and retention need an explicit deployment choice.
3. Require the Website quality check on protected `main` through repository rules. A failing workflow alone is not a merge prohibition on an unprotected branch.

## References consulted

- https://nextjs.org/docs/app/api-reference/file-conventions/metadata/app-icons
- https://nextjs.org/docs/app/api-reference/functions/generate-metadata
- https://developers.google.com/search/docs/appearance/favicon-in-search
- https://developers.google.com/search/blog/2023/11/introducing-organization-markup
- https://web.dev/articles/maskable-icon
- https://github.com/vercel-labs/web-interface-guidelines/blob/main/command.md
