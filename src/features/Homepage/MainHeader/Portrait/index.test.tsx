import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { describe, expect, it } from "vitest";
import { themeLight } from "../../../../core/App/theme";
import { Portrait } from ".";

const renderPortrait = () =>
  render(
    <ThemeProvider theme={themeLight}>
      <Portrait src="photo.jpg" smallSrc="photo-460.jpg" name="Szymon Rojek" />
    </ThemeProvider>,
  );

describe("Portrait", () => {
  it("is one still image with my name: no slider, captions or links", () => {
    renderPortrait();

    const photo = screen.getByRole("img", { name: "Szymon Rojek" });
    expect(photo).toHaveAttribute("src", "photo.jpg");
    // The largest paint on the page: fetched first (Lighthouse's "LCP request
    // discovery").
    expect(photo).toHaveAttribute("fetchpriority", "high");
    // Half the size for phones, where the frame is at most about 330px tall
    // (Lighthouse's "Improve image delivery").
    expect(photo).toHaveAttribute(
      "srcset",
      "photo-460.jpg 460w, photo.jpg 920w",
    );
    expect(photo).toHaveAttribute("sizes", "(max-width: 767px) 46vw, 375px");
    expect(screen.getAllByRole("img")).toEqual([photo]);
    expect(screen.queryByRole("slider")).toBeNull();
    expect(screen.queryAllByRole("link")).toHaveLength(0);
    expect(screen.queryAllByRole("button")).toHaveLength(0);
    expect(screen.queryByText(/tester|codes/)).toBeNull();
  });

  it("maps the photo to the brand duotone, the hero's near-black to cream", () => {
    const { container } = renderPortrait();

    const filter = container.querySelector("filter#portrait-duotone");
    expect(filter).not.toBeNull();
    // The red channel runs from the near-black's red (0x0B = 0.0431), so the
    // shadows melt into the band, to the cream's (0xFB = 0.9843), through
    // levels and gamma.
    const red = filter!.querySelector("feFuncR")!.getAttribute("tableValues")!;
    const values = red.split(" ").map(Number);
    expect(values).toHaveLength(21);
    expect(values[0]).toBeCloseTo(0.0431, 3);
    expect(values.at(-1)).toBeCloseTo(0.9843, 3);
    expect(values).toEqual([...values].sort((x, y) => x - y));
  });

  it("puts a decorative light behind the photo, hidden from screen readers", () => {
    const { container } = renderPortrait();

    // In the photo's frame, before the photo: the light first, then the
    // duotone filter's SVG, both hidden; the photo is the only image.
    const photo = screen.getByRole("img", { name: "Szymon Rojek" });
    const glow = photo.parentElement!.firstElementChild;
    expect(glow?.tagName).toBe("SPAN");
    expect(glow).toHaveAttribute("aria-hidden", "true");
    expect(glow).toBeEmptyDOMElement();
    expect(container.querySelectorAll("[aria-hidden='true']")).toHaveLength(2);
  });
});
