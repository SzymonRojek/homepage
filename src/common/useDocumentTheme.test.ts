import { renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { useDocumentTheme } from "./useDocumentTheme";

describe("useDocumentTheme", () => {
  it("marks the document with the current theme", () => {
    const { rerender } = renderHook(({ isDark }) => useDocumentTheme(isDark), {
      initialProps: { isDark: true },
    });

    expect(document.documentElement.dataset.theme).toBe("dark");

    rerender({ isDark: false });

    expect(document.documentElement.dataset.theme).toBe("light");
  });
});
