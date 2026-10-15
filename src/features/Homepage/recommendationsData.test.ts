import { describe, expect, it } from "vitest";
import { headline, recommendations } from "./recommendationsData";

describe("recommendations", () => {
  it("shows a headline that is a part of its author's quote, word for word", () => {
    const author = recommendations.find(({ name }) => name === headline.from);

    expect(author?.quote).toContain(headline.text);
    expect(headline.text.endsWith(headline.highlight)).toBe(true);
  });

  it.each(recommendations)(
    "marks words that are in $name's quote, word for word",
    ({ quote, highlight }) => {
      expect(quote).toContain(highlight);
    },
  );

  it("marks a different phrase in each card, none of them the headline's", () => {
    const highlights = recommendations.map(({ highlight }) => highlight);

    expect(new Set(highlights).size).toBe(highlights.length);
    expect(highlights).not.toContain(headline.highlight);
  });
});
