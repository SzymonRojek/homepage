---
paths:
  - ".github/**"
---

# CI and release

Five workflows. Only a push to `main` deploys, and only through the job below; the Git workflow in CLAUDE.md is what keeps changes on that path.

- Every push to `main` or `dev` and every PR to `main` or `dev` runs `npm audit` (shipped deps, high+), lint, `prettier --check` (a gate, so formatting is not something to remember), typecheck, unit tests with a coverage gate, build, e2e and Lighthouse budgets (`lighthouserc.json`, median of 3 runs, which also assert axe's Label in Name audit).
- `.github/workflows/safari.yml` runs the e2e suite in WebKit, Safari's engine, on `macos-latest` (`SAFARI=1`: Desktop Safari, iPad Pro 11 upright and landscape, iPhone 17, iPhone SE; tablets run only the untagged tests): by itself at 07:00 UTC on the 1st of every other month, and from "Run workflow" whenever a change might need it (the user's choice: a one-page site doesn't need Safari on every push; the scheduled run is the reminder, and GitHub emails when it fails). Not part of the deploy gate. GitHub turns scheduled workflows off after 60 days without a commit in a public repo, and emails before it does; re-enable it from the Actions tab.
- `.github/workflows/mutation.yml`: manual "Run workflow" (optional `mutate` glob) runs Stryker with 4 workers, writes the score per file to the run summary and uploads `reports/mutation` as the `mutation-report` artifact. Not part of the deploy gate.
- `.github/dependabot.yml` opens monthly npm and GitHub Actions updates against `dev`, holding a new version for seven days first, and groups react with react-dom so the pair can never arrive as two failing PRs. Dependabot's alerts are on; its automatic security PRs are off, since the only ones it could raise were dev-only transitives with no fix path, and the audit gate already stops a shipped advisory. Major updates of `eslint`, `@eslint/js` and `typescript` are ignored: `eslint-plugin-react` supports ESLint 9 only and `typescript-eslint` supports TypeScript below 6.1. Merge a Dependabot PR only when its CI is green, and run `npm ci` locally after pulling dependency changes.
- Only pushes to `main` (merged PRs) deploy: the `deploy` job publishes the `dist/` its run built and tested with GitHub's own Pages actions (`upload-pages-artifact`, `deploy-pages`), through the `github-pages` environment. Pages' source is GitHub Actions, not a branch, so nothing else can publish the site, and there is no manual deploy command.
- Every workflow's token only reads (`permissions: contents: read`); the deploy job alone gets `pages: write` and `id-token: write`. Checkouts keep no credentials (`persist-credentials: false`), so the steps that run other people's code (`npm ci`, the build, the tests) can't push. Every action used is GitHub's own (`actions/*`).
