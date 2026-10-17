import { describe, expect, it } from "vitest";

// Every style file, as text.
const styles = import.meta.glob<string>(
  ["../../**/*.ts", "!../../**/*.test.ts"],
  { query: "?raw", import: "default", eager: true },
);

// `content: "✓" / ""` gives the tick an empty alternative text, so screen
// readers skip it, but Safari before 17.4 drops the whole rule: no tick, no
// arrow, no counting number, and a list item's text squeezed into the tick's
// 22px column (issue #33). So each such rule follows a plain one.
describe("content with an alternative text", () => {
  const rules = Object.entries(styles).flatMap(([file, text]) => {
    const lines = text.split("\n");
    return lines.flatMap((line, index) => {
      const match = line.match(/^\s*content: (.*) \/ "";$/);
      return match
        ? [{ file, line: index + 1, plain: match[1], before: lines[index - 1] }]
        : [];
    });
  });

  it("is used, so this check has something to check", () => {
    expect(rules.length).toBeGreaterThan(10);
  });

  it("always comes after the same content without it, for older Safari", () => {
    const missing = rules
      .filter(({ plain, before }) => before?.trim() !== `content: ${plain};`)
      .map(({ file, line }) => `${file}:${line}`);
    expect(missing).toEqual([]);
  });
});
