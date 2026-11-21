import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { afterEach, describe, expect, it } from "vitest";
import { themeLight } from "../../../core/App/theme";
import { BackToTop } from ".";

const renderButton = () =>
  render(
    <ThemeProvider theme={themeLight}>
      <BackToTop />
    </ThemeProvider>,
  );

// jsdom lays nothing out, so the page's sizes and position are given.
const setPage = (scrollY: number, pageHeight: number, windowHeight: number) => {
  Object.defineProperty(window, "scrollY", {
    value: scrollY,
    configurable: true,
  });
  Object.defineProperty(window, "innerHeight", {
    value: windowHeight,
    configurable: true,
  });
  Object.defineProperty(document.documentElement, "scrollHeight", {
    value: pageHeight,
    configurable: true,
  });
};

// The ring's filled part: the circle that carries a dash offset.
const ring = (link: HTMLElement) =>
  link.querySelectorAll("circle")[1] as SVGCircleElement;

describe("BackToTop", () => {
  afterEach(() => {
    setPage(0, 0, 768);
  });

  it("is hidden at the top of the page, from the keyboard too", async () => {
    setPage(0, 3000, 1000);
    renderButton();

    // In the page, so the build's copy and the browser agree, but hidden: a
    // hidden element has no accessible name, so it is found by its label.
    const link = screen.getByLabelText("Back to top");
    await waitFor(() => expect(ring(link).style.strokeDashoffset).toBe("100"));
    expect(link).toHaveAttribute("aria-hidden", "true");
    expect(link).toHaveAttribute("tabindex", "-1");
    expect(screen.queryByRole("link", { name: "Back to top" })).toBeNull();
  });

  it("appears once the page has moved, as a link to the top", async () => {
    setPage(500, 3000, 1000);
    renderButton();

    const link = await screen.findByRole("link", { name: "Back to top" });
    expect(link).not.toHaveAttribute("aria-hidden");
    expect(link).not.toHaveAttribute("tabindex");
    expect(link).toHaveAttribute("href", "#top");
    // The ring and the arrow are decoration: the name is the label alone.
    expect(link.querySelector("svg")).toHaveAttribute("aria-hidden", "true");
  });

  it("fills its ring with the share of the page already scrolled", async () => {
    setPage(500, 3000, 1000);
    renderButton();

    const link = await screen.findByRole("link", { name: "Back to top" });
    // A quarter of the way down: a quarter of the ring is drawn.
    expect(ring(link).style.strokeDashoffset).toBe("75");

    setPage(2000, 3000, 1000);
    fireEvent.scroll(window);
    await waitFor(() => expect(ring(link).style.strokeDashoffset).toBe("0"));
  });

  it("hides again back at the top", async () => {
    setPage(500, 3000, 1000);
    renderButton();
    await screen.findByRole("link", { name: "Back to top" });

    setPage(0, 3000, 1000);
    fireEvent.scroll(window);
    await waitFor(() =>
      expect(screen.queryByRole("link", { name: "Back to top" })).toBeNull(),
    );
  });
});
