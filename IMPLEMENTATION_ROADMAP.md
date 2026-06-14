Implementation Roadmap — LLE STEM Redesign

Audit summary (repo snapshot)
- Root static site: `index.html`, `about.html`, `partner.html`, `pinboard.html`, `resources.html`, `calendar.html`, etc. These are the source of truth and must remain untouched during development.
- Assets: `logo.png`, `favicon.png`, `pinboard_logo.png`, `aboutus.jpg`, `background.jpg`, `virtualcircuitbuilding.png`, `visualcode.png`, `githubss.png`, and `partnerlogos/*` containing partner images. Also `STEM_Sprouts_Partnership_Guide.pdf`.
- package.json: minimal with Vercel scripts.
- Existing design: dark theme with green accent `#4ade80`, Montserrat font on Google Fonts.

Content sources
- Static HTML files are authoritative content for now. They include: program descriptions, testimonials, founder message (video), partners list, contact form (Formspree), and Pinboard product details.
- Media assets in repo root and `partnerlogos/`.

Reusable assets
- Logo files: `logo.png`, `pinboard_logo.png` (convert to SVG later if available).
- Screenshots: `virtualcircuitbuilding.png`, `visualcode.png`, `githubss.png`, `pinboard_logo.png`.
- Background/hero imagery: `background.jpg`.
- Partner logos.

Constraints & Goals
- Do not move/modify/delete existing HTML files until the new site is complete.
- Implement using Next.js 15 App Router + TypeScript + Tailwind CSS + Framer Motion.
- Prioritize Lighthouse >95, WCAG AA, mobile-first, zero content loss.
- Pinboard is a flagship product showcase.

Phased roadmap (concrete)
1) Audit & planning (current) — inventory assets, content, and pages. Produce this roadmap.
2) Safe scaffold — create `web/` folder with Next.js 15 App Router + TypeScript + Tailwind. Keep static HTML untouched. Add README with dev instructions.
3) Content import adapters — write small scripts to extract content from existing HTML into JSON/MD files (read-only extraction) to seed CMS or local fixtures. This preserves "zero content loss" and keeps HTML as canonical.
4) Design system — create design tokens, Tailwind config, typography scale, and color tokens from Canva (or infer from current site if Canva missing).
5) CMS integration — provision Sanity (recommended) or optional Supabase; implement content models for homepage, programs, testimonials, partners, officers, and pinboard product entries. Seed CMS with extracted content.
6) Iterative redesign — implement pages section-by-section (homepage hero → story → programs → impact stats → teams → pinboard flagship → partners → get involved → donate/contact). Each section is a committed milestone.
7) Motion & visuals — ambient SVG growth system, liquid glass nav, bento impact layout, partner ecosystem interactions, team micro-interactions, animated statistics, workshop storytelling, scroll reveals.
8) Performance & accessibility tuning — image optimization, LCP/Cumulative Layout Shift fixes, ARIA roles, keyboard navigation, contrast checks, Lighthouse tuning to >95.
9) CI, testing & deploy — GitHub Actions build & lint, Vercel deployment, preview URLs.
10) Handoff — editor docs, CMS guide, contributor README, and training notes.

Immediate next tasks (I'll execute now if you say go)
- Create safe scaffold at `web/` with Next.js 15 App Router, TypeScript, Tailwind, and a placeholder homepage that reads content from JSON fixtures derived from HTML.
- Add a small script `scripts/extract-content.js` (read-only) that parses `index.html`/`about.html`/`pinboard.html` and creates JSON fixtures in `web/content/` for seeding.
- Commit the scaffold and fixtures to a branch `feature/nextjs-redesign` so the repo root static html files remain untouched.

Notes
- I will create a branch before committing if you prefer. Otherwise I'll commit on the current branch (`stem-sprouts-revamp`).
- To keep Lighthouse high, I will avoid heavy runtime JS for initial loads, prefer SSR/SSG where appropriate, and use optimized images.

Questions for you
- Do you want me to create a new branch `feature/nextjs-redesign` for all new work? (recommended)
- Do you have the Canva slides available to upload? If so, please share to convert exact tokens.

If you confirm branch creation, I'll scaffold `web/` and add the content extraction script next (no changes to existing HTML files).