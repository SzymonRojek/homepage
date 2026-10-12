import { render, screen } from "@testing-library/react";
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
  it("is one image with my name, not a control", () => {
    renderPortrait();

    expect(
      screen.getByRole("img", { name: "Szymon Rojek" }),
    ).toBeInTheDocument();
    expect(screen.queryAllByRole("link")).toHaveLength(0);
    expect(screen.queryAllByRole("button")).toHaveLength(0);
  });

  it("draws the same photo in both halves, as decoration", () => {
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

  it("captions the halves code and test", () => {
    renderPortrait();

    const portrait = screen.getByRole("img", { name: "Szymon Rojek" });
    expect(portrait).toHaveTextContent("Code");
    expect(portrait).toHaveTextContent("Test");
  });
});
