---
description: "Audit step 4: find out why each surviving bug was missed, file by file, and write the fix plan"
---

Read only. Change no file but `audit/04-review.md`.

Step 0: read `audit/03-sabotage.md`, `audit/01-baseline.md` and `CLAUDE.md`.

Task: for every bug marked SURVIVED, find the cause. Go file by file, critical journeys first:

1. Read the tests and the page code they exercise.
2. For each surviving bug, say precisely why it was missed: no assertion on the value, visibility only, a stub so broad the test only proves the stub, no failure path, a locator that matches either way, a fixed sleep that hid the state, the behaviour tested in only one project, or the test never touches it at all.
3. List the other weaknesses in that file that would let a similar bug through.

Be sceptical. Do not praise and do not summarise what the tests do. Skip cosmetic points unless they hide a real problem. The `playwright-reviewer` agent can do a file as a second opinion: give it the file and the surviving bug IDs, not your conclusion.

Output `audit/04-review.md`, one section per file, table: test, verdict (SOLID / WEAK / BROKEN), bugs it lets through, proposed fix. End with a fix plan in priority order, each change mapped to the sabotage ID it must catch afterwards. Stop.
