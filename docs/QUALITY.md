# Quality contract

## Required gate

Run `npm run verify` before merging. It executes, in order:

1. ESLint
2. Vitest semantic component tests
3. Vite production build
4. Playwright browser and axe tests

GitHub Actions runs the same command on pull requests and pushes to `main`.
Local and CI verification must not use different acceptance criteria.

## Automated coverage

Vitest verifies the one-heading contract, the three uniquely named social
links, and portrait semantics. Playwright verifies:

- No horizontal overflow at 320, 390, 768, and 1280 pixels
- Content-first portrait ordering on mobile
- A useful mobile portrait width
- No browser console errors at each required width
- No automatically detectable axe violations at 390 and 1280 pixels

Tests should use roles, accessible names, and observable geometry. Avoid tests
that assert CSS class names or component internals.

## Manual review

Automation does not prove visual quality or full accessibility. For visual
changes, inspect 390 and 1280 pixel renderings, tab through all links, confirm
the focus indicator is visible, and check that the portrait crop remains
intentional.

## Dependency and performance checks

- Run `npm audit` after dependency changes.
- Review production bundle output after asset or dependency changes.
- Do not regress to downloading the 1.3 MB PNG in browsers that support AVIF or
  WebP.
- Investigate any new React warning, browser console error, or layout overflow
  as a failing quality gate.
