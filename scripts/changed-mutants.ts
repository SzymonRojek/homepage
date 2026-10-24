// Which files Stryker should mutate for a change: the source files that differ
// from a git ref, minus the ones stryker.config.json already excludes. Passing
// --mutate replaces that config list rather than narrowing it, so the excluded
// files (the style tokens, the content data, the tests) have to be filtered
// here or a branch run would mutate them after all. Reading the config keeps
// the list in one place.
//   node scripts/changed-mutants.ts origin/main
import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";

const ref = process.argv[2];
if (!ref) throw new Error("Usage: node scripts/changed-mutants.ts <git ref>");

const anyDirectory = "\u0000";
const anything = "\u0001";

// The handful of glob forms stryker.config.json uses: **/, **, * and {ts,tsx}.
const toRegExp = (pattern: string) =>
  new RegExp(
    "^" +
      pattern
        .replace(/[.+^$()|[\]\\]/g, "\\$&")
        .replace(
          /\{([^}]*)\}/g,
          (_, list: string) => `(${list.split(",").join("|")})`,
        )
        .replace(/\*\*\//g, anyDirectory)
        .replace(/\*\*/g, anything)
        .replace(/\*/g, "[^/]*")
        .replaceAll(anyDirectory, "(?:.*/)?")
        .replaceAll(anything, ".*") +
      "$",
  );

const { mutate } = JSON.parse(readFileSync("stryker.config.json", "utf8")) as {
  mutate: string[];
};
const included = mutate.filter((p) => !p.startsWith("!")).map(toRegExp);
const excluded = mutate
  .filter((p) => p.startsWith("!"))
  .map((p) => toRegExp(p.slice(1)));

const changed = execFileSync(
  "git",
  ["diff", "--name-only", `${ref}...HEAD`, "--", "src"],
  { encoding: "utf8" },
)
  .split("\n")
  .filter(Boolean);

const mutants = changed.filter(
  (file) =>
    included.some((pattern) => pattern.test(file)) &&
    !excluded.some((pattern) => pattern.test(file)),
);

console.log(mutants.join(","));
