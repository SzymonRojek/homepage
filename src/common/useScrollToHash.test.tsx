import { render } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { useScrollToHash } from "./useScrollToHash";

const Page = () => {
  useScrollToHash();
  return <h2 id="projects">Projects</h2>;
};

describe("useScrollToHash", () => {
  const scrollIntoView = vi.fn();

  beforeEach(() => {
    // jsdom has no layout, so scrollIntoView does not exist there.
    Element.prototype.scrollIntoView = scrollIntoView;
  });

  afterEach(() => {
    scrollIntoView.mockReset();
    window.history.replaceState(null, "", "/");
  });

  it("scrolls to the section named in the address once the page renders", () => {
    window.history.replaceState(null, "", "/?view=developer#projects");

    const { getByRole } = render(<Page />);

    expect(scrollIntoView).toHaveBeenCalledOnce();
    expect(scrollIntoView.mock.contexts[0]).toBe(getByRole("heading"));
  });

  it("does nothing without a hash", () => {
    render(<Page />);

    expect(scrollIntoView).not.toHaveBeenCalled();
  });

  it("does nothing when no section has that id", () => {
    window.history.replaceState(null, "", "/#nowhere");

    render(<Page />);

    expect(scrollIntoView).not.toHaveBeenCalled();
  });
});
