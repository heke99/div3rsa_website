# English company website redesign — 22 September 2026

## Scope and identities

Owner request: redesign the public company website; use Trafexa Nordic AB with the existing organisation number; present Diversa Solutions LLC in Wyoming as a second entity; make the whole website English. Existing source identifies registration number 556855-4884. No EIN, new address, email domain or legal ownership structure has been inferred.

Repository: `heke99/div3rsa_website`. `heke99/div3rsa-web-portal` remains untouched. The public domain and email are retained.

## Content evidence

The prior `lib/products.ts` and `lib/content.ts` supply the existing portfolio and project domains. The owner's project discussions supply Flexexa's smart-charging/flexibility scope and clarify Trafexa as a vehicle-sourcing initiative. Gridex OPS is described as pilot preparation, not a live or externally certified customer deployment. Other work is labelled by its development stage. No testimonial, client logo or performance metric has been invented.

Legal pages translate the main substance of the previous Swedish notices, with the requested entity correction and separate-contracting-entity explanation. They are not an external legal opinion or evidence of regulatory compliance. Confirm that agreements and privacy arrangements reflect actual operations before production publication.

## Design approach

Editorial software-company identity: pale paper, deep petrol, restrained rules, generous spacing and a clear type hierarchy. Next.js-optimised fonts: Manrope, IBM Plex Sans and IBM Plex Mono. Portfolio canvases are typographic, and the home workflow is labelled an illustration. No generated customer screenshots or stock team photographs.

Open-source guidance consulted as reference, without executing remote skill code:

- Anthropic frontend-design: https://github.com/anthropics/skills/tree/main/skills/frontend-design
- Vercel Web Interface Guidelines: https://github.com/vercel-labs/web-interface-guidelines
- Vercel agent-browser (Apache-2.0): https://github.com/vercel-labs/agent-browser
- Next.js App Router: https://nextjs.org/docs/app

Semantic navigation and forms, focus indicators, skip link, reduced-motion support and responsive layouts are included. A pre-existing cookie state-in-effect lint failure and contact-email HTML escaping issue are addressed.

## Release boundary

No production database, provider agreement, portal repository or environment settings are modified. Changes are proposed on an isolated design branch for review. Verify successful SMTP delivery and backend submissions in an authorised test environment before accepting the entire lead-delivery chain. Review the archived dependency audit before deploying.
