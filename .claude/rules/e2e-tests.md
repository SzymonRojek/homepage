---
paths:
  - "e2e/**"
  - "playwright.config.ts"
---

# The e2e suite

The rules for `e2e/`. The commands for running it are in CLAUDE.md; `eslint-plugin-playwright` enforces what is forbidden, so lint and CI fail on it rather than relying on this file being read. Specs import `test`/`expect` from `e2e/fixtures.ts`, so GitHub is always mocked.

## Non-negotiable rules

- Never change a test to make it pass. If a test fails, say whether the fault is in the page or in the test, explain why, and wait for the user's decision.
- Forbidden, and `eslint-plugin-playwright` fails CI on each: `test.skip`, `test.fixme`, `.only`, `force: true`, `page.waitForTimeout`, a conditional `expect`, a test with no assertion, an unawaited assertion or action, and `isVisible()` where `toBeVisible()` belongs. Also forbidden, though no rule can see it: weakening an assertion. A branch on the viewport width is the one conditional a test may hold, since that is how one test covers both projects; the two that do it carry an `eslint-disable-next-line playwright/no-conditional-in-test -- <reason>` naming the width they split on, and every other conditional in a test fails CI.
- A new `page.waitForTimeout` fails lint: wait for the thing itself (`expect.poll`, `toPass`, a web-first assertion). The suite holds 13, each carrying an `eslint-disable-next-line playwright/no-wait-for-timeout -- <reason>` line, and the reasons are the only ones that count: pacing a simulated scroll or wheel, and a dwell whose point is that nothing moved. Two are marked for replacement. Never add one without a reason of that kind.
- Every new or fixed test is shown failing against an injected bug before it counts as done. `audit/sabotage-patches/` keeps the bugs already used: `audit/` stays in the working tree and is never published, since everything in it but the two `.gitkeep` files is ignored.

## Conventions

- Locators: `getByRole` > `getByLabel` > `getByText` > `getByTestId`. No CSS chains, no XPath, no `nth()`. A CSS selector is allowed only for a document node with no accessible role (`meta`, `link`, `style`, `script`, `html`, `body`, `mark`, `details`) and for a structural step such as `locator("..")`.
- Web-first assertions only: `await expect(locator).toX()`, never `expect(await ...)`.
- Assert on content, values, counts, colours and state, not on visibility alone.
- Mock anything from outside the page with `page.route`; the fixture already fails a test that calls `api.github.com`.
- There is no backend, no auth and no database here, so there is no test data to prepare and no `storageState`: the page's state comes from the URL hash, `localStorage` and `prefers-color-scheme`, set with `page.goto("#...")`, `addInitScript` and `emulateMedia`. If a backend ever arrives, prepare data through the `request` fixture and authenticate in a setup project, never through the UI.
- Tags: `@desktop` and `@mobile` pick the project a test runs in (`grepInvert` in the config); `@smoke` marks the handful that must pass before anything else is believed — one per core promise of the page, 13 across the two projects. Keep the set small, and don't tag the axe test: it takes 30 seconds.
- New page behaviour gets a test here; a bug gets one that fails on the old code.
- Before writing a helper or a fixture, check `e2e/fixtures.ts` and the specs for one that exists already.

## The audit

The suite is audited periodically for whether it really catches bugs: `/e2e-setup` once, then `/e2e-audit-1-baseline`, `-2-coverage`, `-3-sabotage`, `-4-review`, `-5-fix <spec>` and `-6-verify`, in that order, each in a fresh session. Every step writes a report into `audit/` and stops, so the user reads it before the next one runs; the reports and the bug patches stay out of the repository. `.claude/agents/playwright-reviewer.md` is the read-only second opinion on a spec, and `docs/e2e-workflow.md` explains the whole arrangement for a reader who is new to it.

Two things an audit must do with the build, learned the hard way: **rebuild after the last restore**, because a loop that injects a bug, builds, then restores the source leaves `dist/` carrying that bug; and **stop the preview server it started**, since `vite preview` survives a terminated parent and the next local run will reuse it. A stale server plus a sabotaged build looks exactly like a regression in the page.
