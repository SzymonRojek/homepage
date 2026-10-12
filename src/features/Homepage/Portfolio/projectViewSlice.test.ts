import { describe, expect, it } from "vitest";
import projectViewReducer, {
  selectProjectView,
  setProjectView,
} from "./projectViewSlice";

describe("projectViewSlice", () => {
  it("starts with both views", () => {
    const state = projectViewReducer(undefined, { type: "init" });

    expect(selectProjectView({ projectView: state })).toBe("both");
  });

  it("switches to the chosen view", () => {
    const state = projectViewReducer(undefined, setProjectView("tester"));

    expect(selectProjectView({ projectView: state })).toBe("tester");
  });
});
