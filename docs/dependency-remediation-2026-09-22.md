# Dependency audit remediation — 22 September 2026

Scope: the nine npm audit dependency findings in `heke99/div3rsa_website` PR #6. No redesign content, production database, SMTP configuration or portal code is changed by this remediation.

## Reviewed version changes

| Package | Previous lock | Updated lock |
| --- | --- | --- |
| next / eslint-config-next | 16.2.7 | 16.3.5 |
| nodemailer | 7.0.13 | 10.0.10 |
| postcss | 8.5.15 | 8.5.23 |
| sharp | 0.34.5 | 0.35.4 |
| js-yaml | 4.2.0 | 4.3.2 |
| brace-expansion | 1.1.15 / 5.0.6 | 1.1.21 / 5.0.12 |
| nanoid | 3.3.12 | 3.3.19 |
| browserslist | 4.28.2 | 4.29.0 |
| baseline-browser-mapping | 2.10.34 | 2.11.25 |

Related Next.js compiler/image binaries and browser data follow the corresponding package upgrades. Other direct application dependencies are unchanged. Targeted direct upgrades are pinned, and the generated npm lock retains registry integrity hashes. `npm audit fix` was run without `--force` for compatible transitive fixes. No vulnerability is hidden, excluded or waived.

## Compatibility review

Next.js remains on major 16. Version 16.3.5 depends on patched PostCSS 8.5.23 and Sharp ^0.35.4. The existing PostCSS override now references the exact direct version with `$postcss` rather than forcing an old version.

Nodemailer 10 requires Node >=20 and includes its own TypeScript declarations, so obsolete `@types/nodemailer` is removed. The project already uses Next.js 16 (Node >=20.9) and CI Node 24. Nodemailer 9 tightened TLS certificate verification for remote content; no TLS relaxation has been added. The site's existing explicit SMTP transport and `sendMail` options are retained.

Primary upstream references:
- https://github.com/vercel/next.js/releases/tag/v16.3.5
- https://github.com/vercel/next.js/blob/v16.3.5/packages/next/package.json
- https://github.com/nodemailer/nodemailer/blob/v10.0.10/CHANGELOG.md
- https://docs.npmjs.com/cli/v11/commands/npm-audit/

## Candidate provenance

Dependency preparation run: https://github.com/heke99/div3rsa_website/actions/runs/35707086933

Preparation source: `0e5aba720555562023781dadb68330b248963691`.

Generated lock SHA-256: `099b1255c2d5baa4b539d60e22e798eef2a7ecf95fc914f90aeb1c460f4e66f3`.

The candidate was reinstalled using `npm ci`; full and production audits both reported zero vulnerabilities. Lint and production build passed on the candidate. The temporary preparation workflow only staged manifest/lock Git blobs and is removed from the final tree; it did not update a ref or merge itself.

## Repeatable release checks

`Website quality` now fails if either the full dependency audit or production dependency audit reports a vulnerability, returns invalid JSON, cannot reach the registry or exits unsuccessfully. Both JSON reports are retained as artifacts. The old report-only `|| true` audit step is removed.

Five loopback-only tests exercise the actual SMTP helper: text/HTML/Reply-To delivery, subject newline/header-injection handling, rejection propagation, missing configuration and invalid port. They use only fake `.invalid` addresses and a local receiver; no real provider credentials or customer mail are used.

The final published commit must pass the normal lint, SMTP tests, production build, existing 169 browser assertions and agent-browser checks before merging. Actual-main verification follows the merge. Final CI run IDs and merge SHA are recorded in PR #6 rather than asserted in advance here.

Zero npm audit findings is a current registry result, not a guarantee that all application vulnerabilities are absent. Real SMTP/TLS delivery and persistence through the production integrations remain separate from the local compatibility tests.
