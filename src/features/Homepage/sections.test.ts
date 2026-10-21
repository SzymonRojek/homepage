import { describe, expect, it } from "vitest";
import { sectionNumber, sectionOrder } from "./sections";

describe("sectionNumber", () => {
  it("numbers the sections in page order, with a leading zero", () => {
    expect(sectionOrder.map(sectionNumber)).toEqual([
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
    ]);
    expect(sectionNumber("how-i-use-ai")).toBe("01");
    expect(sectionNumber("how-i-test")).toBe("02");
    expect(sectionNumber("recommendations")).toBe("06");
  });
});
