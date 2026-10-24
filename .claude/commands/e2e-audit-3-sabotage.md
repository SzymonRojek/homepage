---
description: "Audit step 3: inject realistic bugs into the page and record which tests catch them"
disable-model-invocation: true
---

Driven by the user, step by step: step 3 changes the page's code and step 5 changes tests, so no step starts on an agent's own judgement. Type it to run it.

Fault injection: does this suite catch bugs that could really land here?

Step 0: read `audit/02-coverage.md` (the version the user corrected) and `CLAUDE.md`. `git status` must be clean; if it is not, stop and say so.

Rules:

- Work in a separate git worktree on a new branch `audit/sabotage`. The main working directory stays untouched. Other sessions share this tree, so never `git add -A` and never commit.
- Change only the page's own code (`src/`, including the CONTENT data files). Never a spec, the fixture, `playwright.config.ts`, the CI workflows or `scripts/`.
- One bug at a time. After each: run only the specs that cover that journey (`npm run test:e2e:agent -- e2e/<name>.spec.ts`, or `npx playwright test <spec> --reporter=dot`), record the result, restore with `git checkout -- <file>`, and confirm `git diff` is empty before the next one.
- Invoking this command is the yes for those targeted runs. Leave `npm run test:e2e:serve` running so they don't each rebuild. Still ask before any full-suite run.

Task: for every CRITICAL and IMPORTANT journey, inject 2 to 3 bugs of different kinds, each one that could realistically land in a commit here. For example:

- a band taking the theme's `topBar` colour, so the sticky bar vanishes against it
- a text colour dropped below 4.5:1, or a border colour used for text
- the top bar's state machine off by one step (`nextBarState`): it flashes green over the hero, or fades where it should fill at once
- a decoration's offset losing `columnInset`, so it drifts with the window
- a heading's `clamp()` loosened, so it breaks onto two lines on a phone
- a wrong or missing word in a recommendation, a figure in the stats that no longer matches the repo, a claim added to "How I use AI"
- a case study that no longer opens from its `#case-study-…` address, or no longer takes focus
- the prerender losing the JSON-LD, the canonical, the description, or writing a dark-theme page
- `hydrateRoot` conditions broken so React redraws the static copy
- a storage read moved out of its `try`, or the hash read without `decodeHash`
- the stats or gates animation running with reduced motion
- an `aria-label`, `aria-expanded` or heading level dropped
- the email button's accessible name changed, or the address hard-coded away from `email.ts`

Nothing artificial: do not delete a section or break the build.

Output `audit/03-sabotage.md`, table: ID, journey, bug, file and line, CAUGHT / SURVIVED, which test caught it. End with the overall catch rate, the catch rate for critical journeys, and the specs that let bugs through. Save each bug as `audit/sabotage-patches/<ID>.patch` so it can be replayed. Remove the worktree when done. Commit nothing. Stop.
