import { test, expect, pageErrors, themeSwitch } from "./fixtures";

// The page in a browser that is not friendly: storage blocked, an address
// that cannot be decoded, a bundle that never arrives. All three used to
// leave a recruiter looking at a page that did nothing, or at nothing at
// all, and none of them needs anything unusual of a visitor.

// Nothing may throw as the page starts: the first statements of index.tsx run
// before React renders, so one throw there leaves the build's static copy on
// screen with no app behind it.
// The app is in charge, not the build's copy of the page: the copy's own
// styles go once React has it (usePrerenderCleanup), and the theme switch
// only answers when there are handlers on the page.
const expectAliveAndWell = async (page: import("@playwright/test").Page) => {
  await expect(page.locator("style[data-prerendered]")).toHaveCount(0);
  const background = await page
    .locator("body")
    .evaluate((body) => getComputedStyle(body).backgroundColor);

  await themeSwitch(page).click();

  await expect(page.locator("body")).not.toHaveCSS(
    "background-color",
    background,
  );
};

test("works with storage blocked, as in a private window @smoke", async ({
  page,
}) => {
  // Safari's private windows and "block all cookies" make every read throw,
  // rather than return nothing.
  await page.addInitScript(() => {
    const refuse = () => {
      throw new DOMException("The operation is insecure.", "SecurityError");
    };
    for (const target of [window, Window.prototype]) {
      for (const name of ["localStorage", "sessionStorage"]) {
        try {
          Object.defineProperty(target, name, {
            configurable: true,
            get: refuse,
          });
        } catch {
          // Not redefinable here; the other target covers it.
        }
      }
    }
  });
  const errors = pageErrors(page);

  await page.goto("./");

  // The block itself has to work, or the test proves nothing.
  const blocked = await page.evaluate(() => {
    try {
      return !window.localStorage;
    } catch {
      return true;
    }
  });
  expect(blocked).toBe(true);
  await expectAliveAndWell(page);
  expect(errors).toEqual([]);
});

test("works from an address that cannot be decoded", async ({ page }) => {
  const errors = pageErrors(page);

  // Valid escaping, but not valid UTF-8: decodeURIComponent throws on it.
  await page.goto("./#%E0%A4");

  await expect(page.getByRole("list", { name: "Case studies" })).toBeVisible();
  await expectAliveAndWell(page);
  expect(errors).toEqual([]);
});

test.describe("when the bundle never arrives", () => {
  // The dark theme hides the build's copy of the page until the app has drawn
  // it (index.html), so this is where a page hidden for good would show.
  test.use({ colorScheme: "dark" });

  test("the build's copy of the page is shown instead", async ({ page }) => {
    await page.route("**/*.js", (route) => route.abort());

    await page.goto("./");

    await expect(page.locator("body")).not.toHaveAttribute("data-prerendered", {
      timeout: 10000,
    });
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    await expect(page.getByRole("contentinfo")).toBeVisible();
  });
});
