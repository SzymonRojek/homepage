---
description: "Audit step 1: baseline of the Playwright suite (structure, one full run, types, lint, risky patterns)"
---

Diagnosis only. Change no file but `audit/01-baseline.md`. Install nothing.

Step 0, structure:

1. Read `CLAUDE.md` (the "E2E tests (Playwright)" section and Conventions), `playwright.config.ts`, `package.json`.
2. Find the specs, the fixture (`e2e/fixtures.ts`) and any helpers. There is no auth, no API and no page objects here; say so rather than hunting for them.
3. Count files and tests: `npx playwright test --list --reporter=line` (summary only).
4. Check for `eslint-plugin-playwright`, `@typescript-eslint/no-floating-promises` (is `eslint.config.js` using the type-checked config?) and TypeScript coverage of `e2e/` in `tsconfig.json`.

Step 1, runs. Propose these and wait for a yes; the full suite takes about 5 minutes and rebuilds the site.

a) `npm run test:e2e:agent` (writes `audit/run.json`, prints the summary). Keep the report: `cp audit/run.json audit/run-1.json`.
b) Stability, separately and only with a yes: `npx playwright test --repeat-each=3 --retries=0` with the JSON reporter into `audit/run-repeat.json`, then `node scripts/e2e-summary.ts audit/run-repeat.json`. Leave `npm run test:e2e:serve` running first so the three runs don't rebuild.
c) `npx tsc --noEmit`.
d) `npx eslint e2e`.

Step 2, static scan with grep; don't read every file in full. Count and locate: `waitForTimeout`, `.only`, `test.skip`, `test.fixme`, `force: true`, `expect(await …)`, CSS/XPath selectors and `.nth()`, tests with no assertion (watch for `await expect.poll(…)` spread over lines), `if`/`try` inside a test body, actions without `await`, and helpers duplicated between specs. Check every hit in context before reporting it: this suite's grep hits have been false positives before.

Output `audit/01-baseline.md`: Structure, Run results, Flaky, Types and lint, Risky patterns (table: pattern, count, files), Missing tooling (recommendation only, no installs). End with the five most important problems in priority order, and the commands to reproduce. Stop.
