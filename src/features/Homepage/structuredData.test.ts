import { describe, expect, it } from "vitest";
import { structuredData, structuredDataJson } from "./structuredData";

describe("structuredData", () => {
  const [website, page] = structuredData()["@graph"];

  it("names the site after me, at its address", () => {
    expect(website).toEqual({
      "@type": "WebSite",
      name: "Szymon Rojek",
      url: "https://szymonrojek.com/",
    });
  });

  it("describes a profile page about me, linked to my other profiles", () => {
    expect(page).toMatchObject({
      "@type": "ProfilePage",
      url: "https://szymonrojek.com/",
      mainEntity: {
        "@type": "Person",
        name: "Szymon Rojek",
        jobTitle: "Software Test Engineer",
        image: "https://szymonrojek.com/szymon-rojek.jpg",
        homeLocation: { "@type": "Place", name: "Hove, UK" },
        sameAs: [
          "https://www.linkedin.com/in/szymonrojek/",
          "https://github.com/SzymonRojek",
        ],
      },
    });
  });

  it("lists the skills shown on the page, testing first", () => {
    const { knowsAbout } = page.mainEntity;

    expect(knowsAbout).toHaveLength(15);
    expect(knowsAbout[0]).toBe("Data migration & ETL testing");
    expect(knowsAbout).toContain("Playwright & TypeScript");
  });
});

describe("structuredDataJson", () => {
  it("is the structured data as JSON", () => {
    expect(JSON.parse(structuredDataJson())).toEqual(structuredData());
  });

  it("can't close its script tag early", () => {
    const json = structuredDataJson({ name: "</script><script>alert(1)" });

    expect(json).not.toContain("<");
    expect(JSON.parse(json)).toEqual({ name: "</script><script>alert(1)" });
  });
});
