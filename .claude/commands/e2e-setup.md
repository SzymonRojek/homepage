---
description: Check the Playwright audit setup is in place (rules, reviewer agent, scripts, audit directory) and bring it up to date
---

Run once; it was first run on 2026-10-24. Running it again checks the setup rather than redoing it. Change nothing outside the list below, and report what is missing instead of guessing.

Check:

1. `CLAUDE.md` has its "E2E tests (Playwright)" section, and `## Commands` lists the `test:e2e:*` scripts.
2. `.claude/agents/playwright-reviewer.md` exists.
3. `scripts/e2e-summary.ts` still runs: `node scripts/e2e-summary.ts audit/run.json` against any report in `audit/`.
4. `audit/` and `audit/sabotage-patches/` exist with their `.gitkeep`, and `.gitignore` keeps everything else in `audit/` out of the repo (reports and sabotage patches are never published).
5. `package.json` has `test:e2e:agent`, `test:e2e:smoke`, `test:e2e:flaky`, `test:e2e:report`, `test:e2e:serve`.
6. `docs/e2e-workflow.md` still matches reality.
7. `jq` and `@playwright/cli`: report whether they are installed. Never install either; `node scripts/e2e-summary.ts` replaces `jq` here.
8. The `@smoke` set: list the tests tagged `@smoke` (`npx playwright test --grep @smoke --list --reporter=line`). If the set is empty or out of date, propose one — the few tests that must pass before anything else is believed — and wait for a yes before editing any spec file.

Finish with: what you changed, what is missing, and a suggested commit message. Do not commit. Stop.
