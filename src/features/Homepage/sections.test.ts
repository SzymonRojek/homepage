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
    ]);
    expect(sectionNumber("how-i-test")).toBe("01");
    expect(sectionNumber("recommendations")).toBe("05");
  });
});
