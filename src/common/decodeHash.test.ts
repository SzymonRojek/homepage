import { describe, expect, it } from "vitest";
import { decodeHash } from "./decodeHash";

describe("decodeHash", () => {
  it("decodes an escaped hash", () => {
    expect(decodeHash("#case%2Dstudy")).toBe("#case-study");
  });

  it("leaves a plain hash alone", () => {
    expect(decodeHash("#case-study-homepage")).toBe("#case-study-homepage");
  });

  // An address bar accepts anything, and this used to throw as the page
  // started, before React had rendered a thing.
  it("returns a hash with broken escaping as it stands", () => {
    expect(decodeHash("#%")).toBe("#%");
    expect(decodeHash("#%E0%A4")).toBe("#%E0%A4");
  });
});
