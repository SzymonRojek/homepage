---
description: "Audit step 5: fix one spec file from the review's plan, proving each test fails against its bug"
argument-hint: e2e/<name>.spec.ts
---

Fixing tests from `audit/04-review.md`. This session covers only: $ARGUMENTS

Step 0: read that file's section in `audit/04-review.md`, `audit/03-sabotage.md`, `CLAUDE.md`, and the fixture and helpers this spec uses. Don't add a helper where one exists.

Rules:

- Change only this spec file. Ask before touching `e2e/fixtures.ts` or adding a shared helper.
- Never change the page's code.
- Never weaken an existing assertion, and never add `test.skip`, `test.fixme`, `.only`, `force: true` or `waitForTimeout`. Replace a sleep with the thing itself (`expect.poll`, `toPass`, a web-first assertion).
- Invoking this command is the yes for running this one spec as often as the loop below needs. Leave `npm run test:e2e:serve` running.

For each fix:

1. Make the change in the test.
2. Run it against clean page code; it must pass.
3. Apply the matching patch from `audit/sabotage-patches/` (`git apply`), run it; it must FAIL. Quote the first line of the error.
4. Revert the patch (`git apply -R`) and confirm the page's `git diff` is empty.
5. Run it 5 times: `npx playwright test $ARGUMENTS --repeat-each=5 --retries=0 --reporter=line`. It must be stable.

If the test does not fail with the patch applied, do not work around it: say why and wait.

Finish with what changed, which bug IDs are now caught, and what you could not fix. Commit nothing. Stop.
