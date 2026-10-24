---
description: "Audit step 6: replay every sabotage patch against the fixed suite and compare with step 3"
---

Verification after the fixes. Change no file but `audit/05-final.md`.

Step 0: read `audit/03-sabotage.md` and `audit/04-review.md`. `git status` must be clean; if it is not, stop and say so.

For each patch in `audit/sabotage-patches/`: apply it (`git apply`), run the specs that cover its journey (`npm run test:e2e:agent -- <spec>`), record CAUGHT / SURVIVED, revert it (`git apply -R`), and confirm `git diff` is empty before the next. Invoking this command is the yes for those runs; leave `npm run test:e2e:serve` running.

Then propose, and wait for a yes before running: the full suite three times over, `npx playwright test --repeat-each=3 --retries=0` with the JSON reporter, summarised with `node scripts/e2e-summary.ts`. About 15 minutes.

Output `audit/05-final.md`: before and after against `audit/03-sabotage.md`, the bugs that still survive and why they were accepted, and any flaky test the repeat found. Commit nothing. Stop.
