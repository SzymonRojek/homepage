import { describe, expect, it } from "vitest";
import projectViewReducer, {
  getInitialProjectView,
  selectProjectView,
  setProjectView,
} from "./projectViewSlice";

describe("projectViewSlice", () => {
  it("starts with the tester view when the address names none", () => {
    const state = projectViewReducer(undefined, { type: "init" });

    expect(selectProjectView({ projectView: state })).toBe("tester");
  });

  it("switches to the chosen view", () => {
    const state = projectViewReducer(undefined, setProjectView("developer"));

    expect(selectProjectView({ projectView: state })).toBe("developer");
  });
});

describe("getInitialProjectView", () => {
  it("opens the view named in the address", () => {
    expect(getInitialProjectView("?view=developer")).toBe("developer");
    expect(getInitialProjectView("?view=both")).toBe("both");
    expect(getInitialProjectView("?utm_source=cv&view=tester")).toBe("tester");
  });

  it("falls back to the tester view for a missing or unknown view", () => {
    expect(getInitialProjectView("")).toBe("tester");
    expect(getInitialProjectView("?view=manager")).toBe("tester");
  });
});
