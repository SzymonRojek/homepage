import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { describe, expect, it } from "vitest";
import { themeLight } from "../../../../core/App/theme";
import { Portrait } from ".";

const renderPortrait = () =>
  render(
    <ThemeProvider theme={themeLight}>
      <Portrait src="photo.jpg" name="Szymon Rojek" />
    </ThemeProvider>,
  );

describe("Portrait", () => {
  it("is one still image with my name: no slider, captions or links", () => {
    renderPortrait();

    const photo = screen.getByRole("img", { name: "Szymon Rojek" });
    expect(photo).toHaveAttribute("src", "photo.jpg");
    expect(screen.getAllByRole("img")).toEqual([photo]);
    expect(screen.queryByRole("slider")).toBeNull();
    expect(screen.queryAllByRole("link")).toHaveLength(0);
    expect(screen.queryAllByRole("button")).toHaveLength(0);
    expect(screen.queryByText(/tester|codes/)).toBeNull();
  });

  it("maps the photo to the brand duotone, deep green to cream", () => {
    const { container } = renderPortrait();

    const filter = container.querySelector("filter#portrait-duotone");
    expect(filter).not.toBeNull();
    // The red channel runs from the deep green's red (0x12 = 0.0706) to the
    // cream's (0xFB = 0.9843), through levels and gamma.
    const red = filter!.querySelector("feFuncR")!.getAttribute("tableValues")!;
    const values = red.split(" ").map(Number);
    expect(values).toHaveLength(21);
    expect(values[0]).toBeCloseTo(0.0706, 3);
    expect(values.at(-1)).toBeCloseTo(0.9843, 3);
    expect(values).toEqual([...values].sort((x, y) => x - y));
  });
});
