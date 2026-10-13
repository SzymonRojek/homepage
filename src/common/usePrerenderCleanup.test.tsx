import { renderHook } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { usePrerenderCleanup } from "./usePrerenderCleanup";

describe("usePrerenderCleanup", () => {
  afterEach(() => {
    document.head.innerHTML = "";
    delete document.body.dataset.prerendered;
  });

  it("removes the static copy's styles and mark once the app has rendered", () => {
    document.head.innerHTML =
      "<style data-prerendered>body{color:red}</style><style>kept{}</style>";
    document.body.dataset.prerendered = "";

    renderHook(() => usePrerenderCleanup());

    expect(document.querySelector("style[data-prerendered]")).toBeNull();
    expect(document.head.textContent).toContain("kept{}");
    expect(document.body).not.toHaveAttribute("data-prerendered");
  });

  it("does nothing without a static copy, as on the dev server", () => {
    expect(() => renderHook(() => usePrerenderCleanup())).not.toThrow();
    expect(document.body).not.toHaveAttribute("data-prerendered");
  });
});
