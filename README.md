# Lange portfolio

A responsive, accessible single-page portfolio built with React 19 and Vite 8.
It introduces Lange and links to his GitHub, LinkedIn, and Dev.to profiles.

## Requirements

- Node.js 24 (`.nvmrc`)
- npm 11

## Local development

```sh
nvm use
npm ci
npm run dev
```

Open the local URL printed by Vite.

## Quality commands

```sh
npm run lint          # Static JavaScript and React checks
npm run test          # Semantic component tests
npm run test:e2e      # Responsive and accessibility browser tests
npm run build         # Production bundle
npm run verify        # Complete required verification suite
```

Install the browser used by the end-to-end suite once with:

```sh
npx playwright install chromium
```

## Repository map

- `src/components/` — page sections and their CSS Modules
- `src/assets/` — social icons and responsive portrait assets
- `src/App.test.jsx` — semantic component contract
- `tests/e2e/` — responsive, console, and accessibility checks
- `docs/` — product, design, quality, and delivery decisions
- `AGENTS.md` — concise working agreement for coding agents
- `netlify.toml` — Netlify build, publish, and SPA redirect configuration

## Deployment

Netlify runs `npm run build` and publishes `dist/`. The root
`netlify.toml` is the version-controlled source of deployment configuration.

Before merging any change, run `npm run verify` and inspect the result in both
a mobile and desktop browser viewport.
