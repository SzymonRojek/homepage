// @vitest-environment node
import { beforeAll, describe, expect, it } from "vitest";
import { render } from "./entry-server";
import { themeDark, themeLight } from "./core/App/theme";

// Node, as in the build: no window, document or localStorage. A module that
// reads them on import or while rendering fails here first.
describe("render", () => {
  let page: ReturnType<typeof render>;

  beforeAll(() => {
    page = render();
  });

  it("has no browser to lean on", () => {
    expect(typeof window).toBe("undefined");
    expect(typeof document).toBe("undefined");
  });

  it("writes the whole page as HTML", () => {
    expect(page.html).toContain("Szymon Rojek");
    expect(page.html).toContain("I don’t stop at ");
    expect(page.html).toContain("How I test at work");
    expect(page.html).toContain("ISTQB Certified Tester");
  });

  it("draws it light, with every case study closed", () => {
    expect(page.css).toContain(
      `background:${themeLight.colors.site.background}`,
    );
    // The dark theme's bands; its page colour is the light hero's near-black
    // too, so it can't tell the themes apart.
    expect(page.css).not.toContain(`background:${themeDark.colors.cardBand}`);
    expect(page.html).toContain('aria-expanded="false"');
    expect(page.html).not.toContain('aria-expanded="true"');
  });

  it("keeps React's image preloads out of #root, for the <head>", () => {
    expect(page.html).not.toMatch(/^<link/);
    expect(page.preloads).toMatch(/^<link rel="preload" as="image"/);
    // The photo, the largest paint, is fetched first.
    expect(page.preloads).toMatch(
      /<link [^>]*szymonRojekCutout[^>]*fetchpriority="high"/i,
    );
  });

  it("brings the structured data for the <head>", () => {
    const { "@graph": graph } = JSON.parse(page.jsonLd);

    expect(graph.map((item: { "@type": string }) => item["@type"])).toEqual([
      "WebSite",
      "ProfilePage",
    ]);
  });

  it("gives only the CSS rules, for a style tag of their own", () => {
    expect(page.css).not.toMatch(/<\/?style/);
    expect(page.css).not.toContain("data-styled");
    expect(page.css).not.toContain("/*!sc*/");
    expect(page.css.length).toBeGreaterThan(1000);
  });
});
