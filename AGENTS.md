<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Cursor Cloud specific instructions

Multi-repo workspace root: `/agent/repos/`. This app lives at `/agent/repos/div3rsa_website`.

- **Install:** `npm install` in this directory (no backend or Supabase).
- **Dev:** `npm run dev` → `http://localhost:3000`. Best repo for verifying the cloud VM without external services.
- **Lint / build:** `npm run lint` and `npm run build` both pass cleanly.
- **Content:** Static copy in `lib/content.ts`; contact form uses `mailto:` only.
- **Tests:** No `test` script in `package.json`.
