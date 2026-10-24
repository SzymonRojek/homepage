---
description: Fix a bug reported as a GitHub issue, from reading it to the regression test
argument-hint: <issue number>
---

Fix issue #$ARGUMENTS.

Bugs are reported as issues in `SzymonRojek/homepage` with the `bug` label (asked for by the user on 2026-10-17). Read the issue with `gh issue view <n>`, follow its "Done when" list, and treat its "Notes for whoever fixes it" as leads to check, not facts. Fix on `dev`; the Git workflow above still applies (ask before every push). Commit messages link the issue with `Refs #<n>`, never `Fixes`/`Closes`, which would close it at the merge. After the merge to `main` the issue stays open with the `to verify` label (add it when the user says the PR is merged), so it reads as waiting for a check, not for a fix. It is commented on and closed only once the user has tested the live site on their own devices: one comment with the cause, the fix (commit or PR link), what the tests proved and the user's check; post it only when the user says so. If the check fails, the user's findings go into a comment on the same issue (not a new one), the label comes off and the fix starts again from there.

Which tests to run depends on the change; as always, propose them and wait for a yes before running any:

- **Usually, locally, only what the fix touches:** the unit tests of the changed files (`npx vitest run <name>`), the e2e specs that cover the changed behaviour in both projects, desktop and mobile (`npx playwright test <spec>`), and `npm run lint` and `npm run typecheck`. CI runs the full suite (audit, coverage gate, build, all e2e, Lighthouse) on the push to `dev`, so it isn't repeated locally; Lighthouse is never run locally.
- **The full suite locally** only when the fix touches something the whole page shares (the theme, `GlobalStyle`, the layout, the prerender, the dependencies), or to find why CI failed.
- **A regression test for every bug,** unit or e2e, that fails on the old code and passes with the fix, so it proves it catches the bug.
- **The user's own phone** for anything a real device can change (scrolling, the address bar, touch, fonts): Playwright emulates a phone in desktop Chromium, and Chrome on an iPhone is WebKit, which the e2e suite doesn't run. Ask the user to check there before closing the issue.
