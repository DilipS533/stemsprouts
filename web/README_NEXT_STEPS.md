Next steps (immediate)

1. Install web dependencies:
   cd web
   npm install

2. Start dev server and preview the scaffold:
   npm run dev

3. Install Sanity and initialize studio (see studio/README.md). You'll need a Sanity account and project.

4. Replace hero visual placeholder with an accessible SVG or WebGL generative visual. Prefer minimal JS; use canvas or SVG.

5. Connect Next.js to Sanity via `@sanity/client` and fetch content for homepage and programs.

6. Add Framer Motion micro-interactions and scroll-linked storytelling sections.

Design notes
- Use the Canva slides (once shared) to convert colors, typography, and imagery into tokens at `web/design-tokens.json`.
- Keep animations subtle and purposeful. Prefer prefers-reduced-motion checks.
