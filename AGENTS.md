# Repository guide for coding agents

## Purpose and source of truth

This repository contains Lange's public React portfolio. Preserve a fast,
accessible introduction and working links to GitHub, LinkedIn, and Dev.to.
Repository files are the source of truth; do not rely on decisions that exist
only in chat history.

Read the relevant document before changing behavior:

- `docs/PRODUCT.md` — product scope and content contract
- `docs/DESIGN.md` — responsive layout and interaction rules
- `docs/QUALITY.md` — required automated and manual verification
- `docs/PLANS.md` — planning template and AI delivery loop

## Stack and structure

- React 19 with JavaScript and JSX; do not introduce TypeScript implicitly.
- Vite 8 builds and serves the application.
- CSS Modules own component styling; `src/index.css` owns resets and tokens.
- Vitest and Testing Library verify semantic component behavior.
- Playwright and axe verify responsive and accessibility behavior.
- Netlify configuration lives in the repository-root `netlify.toml`.

## Commands

- Install exactly: `npm ci`
- Develop: `npm run dev`
- Lint: `npm run lint`
- Unit tests: `npm run test`
- Browser tests: `npm run test:e2e`
- Production build: `npm run build`
- Required final gate: `npm run verify`

Use Node 24 from `.nvmrc`. Install Playwright's browser once with
`npx playwright install chromium`.

## Engineering conventions

- Prefer semantic HTML and native browser behavior before ARIA.
- Give every interactive element a unique accessible name and visible keyboard
  focus state.
- Keep exactly one descriptive `h1` on this single-page site.
- Preserve the content-first mobile order and two-column desktop composition.
- Check 320, 390, 768, and 1280 pixel widths after layout changes.
- Use stable primitive React keys; never use an object as a key.
- Keep images responsive, declare intrinsic dimensions, and provide modern
  formats with a fallback.
- Test user-visible roles, names, links, and layout contracts rather than
  component implementation details.
- Keep changes small and remove superseded code, assets, and documentation.

## Boundaries

- Do not add or update dependencies without explaining the need and checking
  the audit result.
- Do not change deployment configuration, public profile URLs, product copy, or
  the mobile content order unless the task requires it.
- Do not commit generated `dist`, coverage, Playwright report, or test-result
  directories.
- Preserve unrelated user changes in the working tree.
- Add a custom agent, skill, hook, MCP integration, or automation only after a
  concrete repeated workflow demonstrates the need.

## Definition of done

A change is complete only when its acceptance criteria are observable, relevant
tests are added or updated, `npm run verify` passes, the browser console is
clean, and the final diff contains no unrelated changes. For visual changes,
also inspect one mobile and one desktop rendering.
