# Trafexa Nordic — company website

An English-language Next.js website for **Trafexa Nordic AB** (Sweden, registration number **556855-4884**) and **Diversa Solutions LLC** (Wyoming, United States).

The website remains at `div3rsa.com`; enquiries still use `info@div3rsa.com`. The customer portal is a separate repository and is not part of this redesign.

## Development

```sh
npm ci
npm run dev
npm run lint
npm run build
npm start
```

Use the existing environment example for server-only Supabase and SMTP configuration. Never expose privileged keys in a public environment variable. A production build does not require live database or SMTP credentials. Forms return a safe failure when their backend is unavailable.

## Content and design

- `lib/company.ts`: public legal entity details.
- `lib/content.ts`: English services, website offerings and enquiry choices.
- `lib/products.ts`: product descriptions, development stages and portfolio categories.
- `app/globals.css`: responsive editorial design system.
- `/systems/[slug]`: individual project stories.

Keep the distinction between development work, pilots and verified customer outcomes. Do not add metrics, certifications, legal identifiers or customer relationships without supporting evidence. The home workflow artwork is labelled as an illustration, not live product data.

Navigation uses English paths. Existing Swedish legal and payment application URLs redirect permanently to their English equivalents. Existing website-style URLs remain compatible.

## Forms and integrations

Database fields, status values and the separate portal contract are retained. An optional contracting-entity preference is included in the existing contact message field; it does not create a contract or automatically transfer data to the US entity. No production migrations or environment changes are part of the redesign.

Contact submissions are considered received only after database storage. A notification failure does not falsely report that a saved enquiry was lost. The business payment application is not a guarantee of a financial service.

## Verification

`Website quality` runs lint, a production build, and Playwright checks against a local production server. It also performs an agent-browser smoke check and uploads screenshots and a JSON report. Browser tools are pinned and installed outside application dependencies.

Tests cover English copy, entities, route responses, 320/390/768/1440 px overflow, project filters, mobile navigation, cookie preferences, form validation and unavailable-backend errors. No production credentials or real customer submissions are used. Successful SMTP/backend delivery and the separate portal require operational acceptance in an authorised test environment.

Dependency audit evidence is archived separately. Lint/build success is not a security clearance; review the audit before production release.

See `docs/website-redesign.md` for provenance and release boundaries.
