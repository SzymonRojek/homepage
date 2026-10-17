import { fireEvent, render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { themeLight } from "../../../../core/App/theme";
import { SplitPortrait } from ".";

const renderPortrait = () =>
  render(
    <ThemeProvider theme={themeLight}>
      <SplitPortrait
        src="photo.jpg"
        name="Szymon Rojek"
        captions={{ test: "All test", code: "All code" }}
      />
    </ThemeProvider>,
  );

describe("SplitPortrait", () => {
  // Reduced motion: a release jumps to the end at once, so the result can be
  // checked without waiting for the slide.
  beforeEach(() => {
    vi.stubGlobal("matchMedia", (query: string) => ({
      matches: query.includes("reduce"),
    }));
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("is one image with my name, and not a link", () => {
    renderPortrait();

    expect(
      screen.getByRole("img", { name: "Szymon Rojek" }),
    ).toBeInTheDocument();
    expect(screen.queryAllByRole("link")).toHaveLength(0);
    expect(screen.queryAllByRole("button")).toHaveLength(0);
  });

  it("draws the same photo twice inside one image, both with an alt", () => {
    renderPortrait();

    const picture = screen.getByRole("img", { name: "Szymon Rojek" });
    const photos = picture.querySelectorAll("img");
    // Colour, and the duotone copy on top; the eyes stay duotone too.
    expect(photos).toHaveLength(2);
    photos.forEach((photo) => {
      expect(photo).toHaveAttribute("src", "photo.jpg");
      // For search engines; screen readers hear only the one image.
      expect(photo).toHaveAttribute("alt", "Szymon Rojek");
    });
    expect(screen.getAllByRole("img")).toEqual([picture]);
  });

  it("has no Code or Test labels on the photo", () => {
    renderPortrait();

    const portrait = screen.getByRole("img", { name: "Szymon Rojek" });
    expect(portrait).not.toHaveTextContent("Code");
    expect(portrait).not.toHaveTextContent("Test");
  });

  it("starts all in colour, with the tester caption and no hint", () => {
    renderPortrait();

    const slider = screen.getByRole("slider", {
      name: "Move the line between code and test",
    });
    expect(slider).toHaveValue("0");
    expect(slider).toHaveAttribute("aria-valuetext", "0% code, 100% test");
    expect(screen.getByText("All test")).toBeInTheDocument();
    // No "Drag" word on the photo: removed on purpose.
    expect(screen.queryByText(/drag/i)).toBeNull();
  });

  it("moves the line when the slider moves", () => {
    renderPortrait();
    const slider = screen.getByRole("slider", {
      name: "Move the line between code and test",
    });

    fireEvent.change(slider, { target: { value: "80" } });

    expect(slider).toHaveAttribute("aria-valuetext", "80% code, 20% test");
    expect(slider.parentElement).toHaveStyle({ "--split": "80%" });
  });

  it("shows a caption only when the line reaches either edge", () => {
    renderPortrait();
    const slider = screen.getByRole("slider", {
      name: "Move the line between code and test",
    });
    const caption = slider.parentElement!.querySelector("[aria-live]")!;
    expect(caption).toHaveTextContent("All test");

    fireEvent.change(slider, { target: { value: "60" } });
    expect(caption).toHaveTextContent(/^$/);

    fireEvent.change(slider, { target: { value: "97" } });
    expect(caption).toHaveTextContent("All code");

    fireEvent.change(slider, { target: { value: "3" } });
    expect(caption).toHaveTextContent("All test");
  });

  it("follows a finger dragged across the photo", () => {
    renderPortrait();
    const slider = screen.getByRole("slider", {
      name: "Move the line between code and test",
    });
    const portrait = slider.parentElement!;
    portrait.getBoundingClientRect = () =>
      ({ left: 100, width: 200 }) as DOMRect;

    // A touch doesn't move the line until the finger moves.
    fireEvent.pointerDown(portrait, { pointerType: "touch", clientX: 300 });
    expect(slider).toHaveAttribute("aria-valuetext", "0% code, 100% test");

    fireEvent.pointerMove(portrait, { pointerType: "touch", clientX: 140 });
    expect(slider).toHaveAttribute("aria-valuetext", "20% code, 80% test");
  });

  it("puts the line back when the browser turns the touch into a scroll", () => {
    renderPortrait();
    const slider = screen.getByRole("slider", {
      name: "Move the line between code and test",
    });
    const portrait = slider.parentElement!;
    portrait.getBoundingClientRect = () => ({ left: 0, width: 100 }) as DOMRect;

    fireEvent.pointerDown(portrait, { pointerType: "touch", clientX: 50 });
    fireEvent.pointerMove(portrait, { pointerType: "touch", clientX: 55 });
    fireEvent.pointerCancel(portrait);

    expect(slider).toHaveAttribute("aria-valuetext", "0% code, 100% test");
  });

  it("finishes a drag that was let go partway: right to the code end", () => {
    renderPortrait();
    const slider = screen.getByRole("slider", {
      name: "Move the line between code and test",
    });
    const portrait = slider.parentElement!;
    portrait.getBoundingClientRect = () => ({ left: 0, width: 100 }) as DOMRect;

    fireEvent.pointerDown(portrait, { pointerType: "touch", clientX: 0 });
    fireEvent.pointerMove(portrait, { pointerType: "touch", clientX: 30 });
    fireEvent.pointerUp(portrait);

    expect(slider).toHaveAttribute("aria-valuetext", "100% code, 0% test");
    expect(screen.getByText("All code")).toBeInTheDocument();
  });

  it("finishes a drag back to the left at the tester end", () => {
    renderPortrait();
    const slider = screen.getByRole("slider", {
      name: "Move the line between code and test",
    });
    const portrait = slider.parentElement!;
    portrait.getBoundingClientRect = () => ({ left: 0, width: 100 }) as DOMRect;
    fireEvent.change(slider, { target: { value: "100" } });

    fireEvent.pointerDown(portrait, { pointerType: "mouse", clientX: 100 });
    fireEvent.pointerMove(portrait, { pointerType: "mouse", clientX: 80 });
    fireEvent.pointerUp(portrait);

    expect(slider).toHaveAttribute("aria-valuetext", "0% code, 100% test");
  });

  it("slides the line to the other end after a tap or a tiny move", () => {
    renderPortrait();
    const slider = screen.getByRole("slider", {
      name: "Move the line between code and test",
    });
    const portrait = slider.parentElement!;
    portrait.getBoundingClientRect = () => ({ left: 0, width: 100 }) as DOMRect;
    fireEvent.change(slider, { target: { value: "40" } });

    fireEvent.pointerDown(portrait, { pointerType: "touch", clientX: 40 });
    fireEvent.pointerMove(portrait, { pointerType: "touch", clientX: 41 });
    fireEvent.pointerUp(portrait, { pointerType: "touch" });

    // A touchscreen needs no drag (WCAG 2.5.7): a tap does the same.
    expect(slider).toHaveAttribute("aria-valuetext", "100% code, 0% test");

    // And a second tap goes back.
    fireEvent.pointerDown(portrait, { pointerType: "touch", clientX: 60 });
    fireEvent.pointerUp(portrait, { pointerType: "touch" });
    expect(slider).toHaveAttribute("aria-valuetext", "0% code, 100% test");
  });

  it("leaves the line where it is after a mouse click on it", () => {
    renderPortrait();
    const slider = screen.getByRole("slider", {
      name: "Move the line between code and test",
    });
    const portrait = slider.parentElement!;
    portrait.getBoundingClientRect = () => ({ left: 0, width: 100 }) as DOMRect;
    fireEvent.change(slider, { target: { value: "40" } });

    fireEvent.pointerDown(portrait, { pointerType: "mouse", clientX: 41 });
    fireEvent.pointerUp(portrait, { pointerType: "mouse" });

    expect(slider).toHaveAttribute("aria-valuetext", "41% code, 59% test");
  });
});
