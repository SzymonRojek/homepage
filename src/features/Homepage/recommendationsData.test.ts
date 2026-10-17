import { describe, expect, it } from "vitest";
import { recommendations } from "./recommendationsData";

describe("recommendations", () => {
  it.each(recommendations)(
    "marks words that are in $name's quote, word for word",
    ({ quote, highlight }) => {
      expect(quote).toContain(highlight);
    },
  );

  it("marks a different phrase in each card", () => {
    const highlights = recommendations.map(({ highlight }) => highlight);

    expect(new Set(highlights).size).toBe(highlights.length);
  });

  it("marks Jim's closing line in his card", () => {
    const jim = recommendations.find(({ name }) => name === "Jim Grinsfelder");

    expect(jim?.highlight).toBe(
      "you will be fortunate if you get to work with him",
    );
  });
});
