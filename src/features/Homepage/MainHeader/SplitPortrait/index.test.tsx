import { fireEvent, render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { describe, expect, it } from "vitest";
import { themeLight } from "../../../../core/App/theme";
import { SplitPortrait } from ".";

const renderPortrait = () =>
  render(
    <ThemeProvider theme={themeLight}>
      <SplitPortrait src="photo.jpg" name="Szymon Rojek" />
    </ThemeProvider>,
  );

describe("SplitPortrait", () => {
  it("is one image with my name, and not a link", () => {
    renderPortrait();

    expect(
      screen.getByRole("img", { name: "Szymon Rojek" }),
    ).toBeInTheDocument();
    expect(screen.queryAllByRole("link")).toHaveLength(0);
    expect(screen.queryAllByRole("button")).toHaveLength(0);
  });

  it("draws the same photo twice, as decoration", () => {
    renderPortrait();

    const photos = screen
      .getByRole("img", { name: "Szymon Rojek" })
      .querySelectorAll("img");
    expect(photos).toHaveLength(2);
    photos.forEach((photo) => {
      expect(photo).toHaveAttribute("src", "photo.jpg");
      expect(photo).toHaveAttribute("alt", "");
    });
  });

  it("captions the two sides code and test", () => {
    renderPortrait();

    const portrait = screen.getByRole("img", { name: "Szymon Rojek" });
    expect(portrait).toHaveTextContent("Code");
    expect(portrait).toHaveTextContent("Test");
  });

  it("starts with the line in the middle", () => {
    renderPortrait();

    const slider = screen.getByRole("slider", {
      name: "Move the line between code and test",
    });
    expect(slider).toHaveValue("50");
    expect(slider).toHaveAttribute("aria-valuetext", "50% code, 50% test");
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
});
