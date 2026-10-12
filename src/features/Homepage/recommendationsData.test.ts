import { describe, expect, it } from "vitest";
import { headline, recommendations } from "./recommendationsData";

describe("recommendations headline", () => {
  it("is a part of its author's quote, word for word", () => {
    const author = recommendations.find(({ name }) => name === headline.from);

    expect(author?.quote).toContain(headline.text);
    expect(headline.text.endsWith(headline.highlight)).toBe(true);
  });
});
