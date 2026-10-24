# End-to-end tests: how this repository works

The site is one prerendered page with no backend, no login and no database, tested with Playwright and axe. 184 tests run in two projects (desktop Chrome and a Pixel 7), and five more projects run in WebKit on demand. This page explains where everything lives and how a change gets tested. The rules themselves — what is forbidden, how to run things, the conventions — live in one place only, the "E2E tests (Playwright)" section of [CLAUDE.md](../CLAUDE.md), so they cannot drift from what the agents read.

## Where things live

| Path                                                | What it is                                                                        | When it is used                                              |
| --------------------------------------------------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| [CLAUDE.md](../CLAUDE.md)                           | the rules: how to run tests, what is forbidden, the conventions                   | read automatically at the start of every Claude Code session |
| [e2e/](../e2e/)                                     | the specs, one per part of the page                                               | `npm run test:e2e`                                           |
| [e2e/fixtures.ts](../e2e/fixtures.ts)               | the only fixture: fails a test that calls the GitHub API                          | imported by every spec instead of `@playwright/test`         |
| [playwright.config.ts](../playwright.config.ts)     | projects, tags, the build-and-serve step                                          | every run                                                    |
| `.claude/commands/e2e-*.md`                         | the audit prompts, as slash commands                                              | when you type `/e2e-…` in Claude Code                        |
| `.claude/agents/playwright-reviewer.md`             | a read-only reviewer that looks for ways a test can pass while the page is broken | audit step 4, or any time you ask for a review               |
| [scripts/e2e-summary.ts](../scripts/e2e-summary.ts) | turns a JSON report into a few lines                                              | every run an agent reads                                     |
| `audit/`                                            | the audit's reports and bug patches                                               | during and after an audit                                    |
| `docs/e2e-workflow.md`                              | this page                                                                         | for anyone new to the repository                             |

`audit/` is deliberately **not** in the repository: everything in it but the two `.gitkeep` files is ignored. The reports name which tests let bugs through and the patches are ready-made sabotage, and this repository is public.

## Daily commands

| Situation                                           | Command                                                                                                |
| --------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| working on one spec                                 | `npm run test:e2e:agent -- e2e/navigation.spec.ts`                                                     |
| the whole suite, as CI runs it                      | `npm run test:e2e`                                                                                     |
| a quick check that the page still works             | `npm run test:e2e:smoke`                                                                               |
| several runs in a row, without rebuilding each time | `npm run test:e2e:serve` in another terminal first                                                     |
| seeing why something failed                         | `npm run test:e2e:report` (opens the HTML report in a browser)                                         |
| hunting a flaky test                                | `npm run test:e2e:flaky -- e2e/navigation.spec.ts`                                                     |
| before pushing                                      | nothing locally: CI runs the full suite on every push to `dev`, and only a merged pull request deploys |
| reviewing new tests                                 | ask Claude Code: "use the playwright-reviewer agent on e2e/x.spec.ts"                                  |

`@smoke` marks one test per core promise of the page — the hero, the section links, a case study opening, the theme surviving a reload, the built HTML holding the content, the head, and the page surviving blocked storage. Thirteen tests across the two projects; list them with `npx playwright test --grep @smoke --list`. The other tags, `@desktop` and `@mobile`, pick which project a test runs in.

Every run rebuilds the site first (`webServer` runs `npm run build`), which is why `test:e2e:serve` exists: start it once and the runs reuse it.

`test:e2e:agent` writes a JSON report to `audit/run.json`, prints the counts, the failures with their first error line and the five slowest tests, and leaves an HTML report behind for `test:e2e:report`. It is the one to use when an agent, or anyone, wants the result without reading a 240KB file.

Pushing to `dev` runs the full suite in CI, along with the audit, lint, formatting, typecheck, unit coverage and Lighthouse gates. Only a pull request merged into `main` deploys.

## The audit

A periodic check that the tests catch real bugs — worth repeating after a large change, or a couple of times a year. Each step writes a report into `audit/` and stops, so a person reads the result before the next step runs.

1. Commit everything first; `git status` must be clean for step 3.
2. `/e2e-setup` — once. Checks the rules, the agent, the scripts and the `@smoke` set are in place.
3. `/clear`, then `/e2e-audit-1-baseline` → read `audit/01-baseline.md`.
4. `/clear`, then `/e2e-audit-2-coverage` → **correct the criticality ratings yourself** in `audit/02-coverage.md`. That is business knowledge the model does not have.
5. `/clear`, then `/e2e-audit-3-sabotage` → read `audit/03-sabotage.md`. Realistic bugs are injected into the page in a throwaway git worktree, one at a time, and the result is whether a test caught each one.
6. `/clear`, then `/e2e-audit-4-review` → read `audit/04-review.md`: why each surviving bug was missed, and the fix plan.
7. For each file in that plan: `/clear`, then `/e2e-audit-5-fix e2e/<name>.spec.ts` → review the diff → commit. Every fixed test is shown failing against its bug patch before it counts.
8. `/clear`, then `/e2e-audit-6-verify` → read `audit/05-final.md`: before and after.

`/clear` between steps keeps each one reading the report rather than the previous conversation.

## What the tests are actually for

Worth knowing before you add one. On a page like this a bug is not a failed request; it is a colour that stops being readable, a sticky bar that flashes, a heading that breaks onto two lines on a phone, a claim in the text that is no longer true, a case study that stops opening from its address, or a prerendered page that search engines read differently from visitors. That is why the specs measure colours, contrast, positions and the built HTML, and why they assert on content and state rather than on things being visible.
