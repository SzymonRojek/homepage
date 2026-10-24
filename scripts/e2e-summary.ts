// Turns a Playwright JSON report into the few lines an agent needs, so nobody
// has to read a 240KB report or open a trace: counts, every failure with its
// first error line, and the slowest tests. Exits 1 if anything failed.
//   node scripts/e2e-summary.ts [audit/run.json]   summarise a report
//   node scripts/e2e-summary.ts --run [specs…]     run the tests, then summarise
// The --run form is `npm run test:e2e:agent`, which npm appends its own
// arguments to, so the specs have to arrive here rather than in the script.
import { spawnSync } from "node:child_process";
import { readFile } from "node:fs/promises";

interface Result {
  duration: number;
  error?: { message?: string };
}

interface TestEntry {
  projectName: string;
  status: "expected" | "unexpected" | "flaky" | "skipped";
  results: Result[];
}

interface Spec {
  title: string;
  file?: string;
  line: number;
  tests: TestEntry[];
}

interface Suite {
  file?: string;
  suites?: Suite[];
  specs?: Spec[];
}

interface Report {
  stats: { duration: number };
  suites: Suite[];
}

const report = "audit/run.json";
const [first, ...rest] = process.argv.slice(2);

if (first === "--run") {
  const run = spawnSync(
    "npx",
    ["playwright", "test", ...rest, "--retries=0", "--reporter=dot,json,html"],
    {
      stdio: "inherit",
      env: {
        ...process.env,
        PLAYWRIGHT_JSON_OUTPUT_NAME: report,
        PLAYWRIGHT_HTML_OPEN: "never",
      },
    },
  );
  if (run.error) throw run.error;
}

const path = first === "--run" || first === undefined ? report : first;
const parsed = JSON.parse(await readFile(path, "utf8")) as Report;

// Playwright paints its error messages, and the colours are noise here.
const ansi = new RegExp(`${String.fromCharCode(27)}\\[[0-9;]*m`, "g");
const firstLine = (message: string | undefined) =>
  (message ?? "no error message").replace(ansi, "").split("\n")[0].trim();

const counts = { expected: 0, unexpected: 0, flaky: 0, skipped: 0 };
const failures: string[] = [];
const flaky: string[] = [];
const timed: { seconds: number; name: string }[] = [];

const walk = (suite: Suite, inFile?: string) => {
  const file = suite.file ?? inFile;
  for (const nested of suite.suites ?? []) walk(nested, file);
  for (const spec of suite.specs ?? []) {
    for (const entry of spec.tests) {
      counts[entry.status] += 1;
      const name = `${spec.file ?? file ?? "?"}:${spec.line} [${entry.projectName}] ${spec.title}`;
      if (entry.status === "unexpected")
        failures.push(
          `${name}\n    ${firstLine(entry.results[0]?.error?.message)}`,
        );
      if (entry.status === "flaky") flaky.push(name);
      timed.push({
        seconds:
          entry.results.reduce((all, one) => all + one.duration, 0) / 1000,
        name,
      });
    }
  }
};

for (const suite of parsed.suites) walk(suite);

const minutes = (parsed.stats.duration / 60000).toFixed(1);
console.log(
  `\n${counts.expected} passed · ${counts.unexpected} failed · ${counts.flaky} flaky · ${counts.skipped} skipped · ${minutes}m  (${path})`,
);

if (failures.length > 0) {
  console.log(`\nFailed (${failures.length}):`);
  for (const failure of failures.slice(0, 20)) console.log(`  ${failure}`);
  if (failures.length > 20) console.log(`  …and ${failures.length - 20} more`);
  console.log("\nnpm run test:e2e:report opens the full report in a browser.");
}

if (flaky.length > 0) {
  console.log("\nFlaky (passed on a retry, so CI would hide these):");
  for (const test of flaky) console.log(`  ${test}`);
}

if (failures.length === 0) {
  console.log("\nSlowest:");
  for (const { seconds, name } of timed
    .sort((slower, faster) => faster.seconds - slower.seconds)
    .slice(0, 5))
    console.log(`  ${seconds.toFixed(1)}s  ${name}`);
}

process.exitCode = counts.unexpected > 0 ? 1 : 0;
