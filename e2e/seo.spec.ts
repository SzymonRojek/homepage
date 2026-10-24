import type { Page } from "@playwright/test";
import { expect, test } from "./fixtures";

// Addresses in the <head> point at the live site; the tests fetch the same
// files from the local build.
const localPath = (url: string) => new URL(url).pathname;

const meta = (page: Page, selector: string) =>
  page.locator(`meta[${selector}]`).getAttribute("content");

test.describe("search engines and link previews @desktop", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("./");
  });

  test("the head describes the page in British English @smoke", async ({
    page,
  }) => {
    await expect(page).toHaveTitle("Szymon Rojek | Test Engineer");
    await expect(page.locator("html")).toHaveAttribute("lang", "en-GB");
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      "href",
      "https://szymonrojek.com/",
    );

    const description = await meta(page, 'name="description"');
    // Google cuts longer descriptions off in its results.
    expect(description?.length).toBeLessThanOrEqual(160);
    expect(await meta(page, 'property="og:description"')).toBe(description);
    // The card's title is the only one a preview reads: there is no
    // twitter:title, so X and LinkedIn both fall back to og:title. Tie it to
    // the page's own title, as og:description is tied to the description.
    await expect(page.locator('meta[property="og:title"]')).toHaveAttribute(
      "content",
      await page.title(),
    );
    // And the card's alt text names the same job the page does.
    await expect(page.locator('meta[property="og:image:alt"]')).toHaveAttribute(
      "content",
      /Szymon Rojek, Test Engineer/,
    );
    expect(await meta(page, 'property="og:locale"')).toBe("en_GB");
    expect(await meta(page, 'property="og:site_name"')).toBe("Szymon Rojek");
    // LinkedIn's Post Inspector reads the author from here.
    expect(await meta(page, 'name="author"')).toBe("Szymon Rojek");
  });

  test("the share image exists at the size the head declares", async ({
    page,
  }) => {
    const image = await meta(page, 'property="og:image"');
    const width = Number(await meta(page, 'property="og:image:width"'));
    const height = Number(await meta(page, 'property="og:image:height"'));

    const size = await page.evaluate(async (src) => {
      const img = new Image();
      img.src = src;
      await img.decode();
      return [img.naturalWidth, img.naturalHeight];
    }, localPath(image!));

    // 1200×630 is what LinkedIn and X show as a large preview.
    expect(size).toEqual([1200, 630]);
    expect([width, height]).toEqual(size);
    expect(await meta(page, 'name="twitter:card"')).toBe("summary_large_image");
  });

  test("the structured data names me and links my profiles", async ({
    page,
    request,
  }) => {
    const json = await page
      .locator('script[type="application/ld+json"]')
      .textContent();
    const graph: { "@type": string; mainEntity?: Record<string, unknown> }[] =
      JSON.parse(json!)["@graph"];

    expect(graph.map((item) => item["@type"])).toEqual([
      "WebSite",
      "ProfilePage",
    ]);
    const person = graph[1].mainEntity!;
    expect(person).toMatchObject({
      "@type": "Person",
      name: "Szymon Rojek",
      jobTitle: "Test Engineer",
      sameAs: [
        "https://www.linkedin.com/in/szymon--rojek/",
        "https://github.com/SzymonRojek",
      ],
    });

    const photo = await request.get(localPath(person.image as string));
    expect(photo.ok()).toBe(true);
    expect(photo.headers()["content-type"]).toBe("image/jpeg");
  });

  test("robots.txt points to the sitemap, which lists the page", async ({
    request,
  }) => {
    const robots = await request.get("/robots.txt");
    expect(await robots.text()).toContain(
      "Sitemap: https://szymonrojek.com/sitemap.xml",
    );

    const sitemap = await request.get("/sitemap.xml");
    expect(sitemap.ok()).toBe(true);
    expect(await sitemap.text()).toContain(
      "<loc>https://szymonrojek.com/</loc>",
    );
  });
});
