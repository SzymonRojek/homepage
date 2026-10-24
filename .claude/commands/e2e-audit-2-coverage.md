---
description: "Audit step 2: map what a visitor does against what the tests cover, and rate each journey"
---

Read only. Change no file but `audit/02-coverage.md`. Write no tests.

Step 0: read `audit/01-baseline.md` and `CLAUDE.md`.

Task:

1. Go through the page and list the journeys. This is one prerendered page with no backend, so a journey is what a visitor, a search engine or an assistive technology actually does: reading the hero, opening and closing a case study, landing on a `#case-study-…` address, copying the email, switching the theme, the theme following the OS, the top bar's three states, the phone menu, the skip link and keyboard path, a reload below the top, reading with no JavaScript, reading with storage blocked, a search engine reading the head and the JSON-LD, the share card, the fonts swapping without moving the page, and the content each section promises (every claim in "How I use AI", the six recommendations word for word, the skills groups, the job points).
2. Rate each: CRITICAL (a recruiter cannot see the work, the page is unreadable, a false claim is published, the site stops being indexed), IMPORTANT, MINOR, with a short justification.
3. For each journey, name the tests that cover it (file and test name) and rate the coverage: FULL (the happy path, at least one failure path, and a check of the effect — the state survives a reload, the HTML really holds the content), PARTIAL, NONE.
4. Separately list tests that match no journey, and tests doing work that belongs in a unit test (wording of a single string, a computed colour that `theme.test.ts` already asserts, data ordering).

Output `audit/02-coverage.md`, table: journey, criticality, justification, tests, coverage, notes. Flag explicitly anywhere you are guessing what matters to a recruiter. Stop: the criticality ratings are the user's to correct before step 3.
