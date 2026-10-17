import { describe, expect, it } from "vitest";
import {
  headlineSize,
  headlineWidth,
  inWindowWidth,
  photoHeight,
} from "./sizes";

describe("the hero's sizes", () => {
  it("follow the band's width where container queries work", () => {
    for (const size of [headlineSize, headlineWidth, photoHeight]) {
      expect(size).toContain("cqi");
    }
  });

  // Safari before 16 drops every rule with cqi (issue #32).
  it("have a fallback in the window's width, the same sum otherwise", () => {
    for (const size of [headlineSize, headlineWidth, photoHeight]) {
      const fallback = inWindowWidth(size);
      expect(fallback).not.toContain("cqi");
      expect(fallback.replaceAll("vw", "cqi")).toBe(size);
    }
    expect(inWindowWidth(headlineSize)).toBe(
      "clamp(32px, max(19px + 3.6vw, 7vw - 8px), 80px)",
    );
  });
});
