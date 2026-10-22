import type { Page } from "@playwright/test";
import { test, expect } from "./fixtures";

// GitHub Pages serves the page as it is and cannot send headers, so the
// content security policy travels in the built page itself, with a hash for
// every inline script (scripts/prerender.ts). These tests are all that keeps
// it honest: a policy that is too tight breaks the page silently for a
// visitor, and one that is too loose is worth nothing.

const policy = (page: Page) =>
  page
    .locator('meta[http-equiv="Content-Security-Policy"]')
    .getAttribute("content");

// Every refusal the browser reports as the page runs, in the order it comes.
const watchRefusals = async (page: Page) => {
  await page.addInitScript(() => {
    const refused: string[] = [];
    Object.assign(window, { refused });
    document.addEventListener("securitypolicyviolation", (event) => {
      refused.push(`${event.violatedDirective}: ${event.blockedURI}`);
    });
  });

  return () =>
    page.evaluate(() => (window as unknown as { refused: string[] }).refused);
};

test("the built page carries a policy, with a hash for every inline script", async ({
  page,
}) => {
  await page.goto("./");

  const content = (await policy(page)) ?? "";
  expect(content).toContain("default-src 'self'");
  // styled-components writes the page's styles into the document.
  expect(content).toContain("style-src 'self' 'unsafe-inline'");
  expect(content).toContain("object-src 'none'");
  expect(content).toContain("base-uri 'self'");
  // Scripts are allowed by hash alone: no 'unsafe-inline', no 'unsafe-eval'.
  expect(content).not.toContain("script-src 'self' 'unsafe");
  expect(content).not.toContain("'unsafe-eval'");
  // The live CI badge is the page's one external image, and it is allowed by
  // its own directory, never a whole origin or a wildcard.
  expect(content).toContain(
    "img-src 'self' https://github.com/SzymonRojek/homepage/actions/workflows/",
  );
  expect(content).not.toContain("*");

  const hashes = content.match(/'sha256-[A-Za-z0-9+/=]+'/g) ?? [];
  expect(hashes).toHaveLength(await page.locator("script:not([src])").count());
});

test("nothing the page does breaks its own policy", async ({ page }) => {
  const refusals = await watchRefusals(page);

  await page.goto("./");
  await expect(page.getByRole("list", { name: "Case studies" })).toBeVisible();

  // The dark theme's styles are written in as the page renders again.
  await page
    .getByRole("contentinfo")
    .getByRole("button", { name: "Dark mode" })
    .click();

  // A case study and its technical details hold most of the page's styles.
  const card = page
    .getByRole("list", { name: "Case studies" })
    .getByRole("listitem")
    .filter({
      has: page.getByRole("heading", {
        name: "Nothing ships unless every gate passes.",
      }),
    });
  await card.getByRole("button", { name: "Case study" }).click();
  const caseStudy = page.getByRole("article", {
    name: "This website: built and tested like a real product",
  });
  await caseStudy.getByText("Technical details").click();
  await expect(
    caseStudy.getByRole("button", { name: "Close the technical details" }),
  ).toBeVisible();

  expect(await refusals()).toEqual([]);
});
