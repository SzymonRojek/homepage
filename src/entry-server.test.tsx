// @vitest-environment node
import { beforeAll, describe, expect, it } from "vitest";
import { render } from "./entry-server";

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
    expect(page.html).toContain("A number can match and still be ");
    expect(page.html).toContain("How I test at work");
    expect(page.html).toContain("Still learning");
  });

  it("draws it light, with every case study closed", () => {
    expect(page.css).toContain("background:#FBF4E6");
    expect(page.css).not.toContain("background:#0B1513");
    expect(page.html).toContain('aria-expanded="false"');
    expect(page.html).not.toContain('aria-expanded="true"');
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
