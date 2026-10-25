import { test, expect } from "./fixtures";

const address = "sz.rojek@proton.me";

test.describe("Header and footer", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("./");
  });

  test("shows name, title and page title @smoke", async ({ page }) => {
    await expect(page).toHaveTitle(/Szymon Rojek/);
    // The tagline is the h1. It starts with the name and title for screen
    // readers and search engines; on screen the top bar shows the name and
    // the line over the headline the title.
    const headline = page.getByRole("heading", { level: 1 });
    await expect(headline).toHaveAccessibleName(
      "Szymon Rojek, Test Engineer: I don’t stop at green.",
    );
    const brand = page.getByRole("link", { name: /^Szymon Rojek/ });
    await expect(brand).toBeVisible();
    // Only the name: the job title is over the headline.
    await expect(brand).toHaveText("Szymon Rojek");
    await expect(headline).toBeVisible();
    // Over the headline, the title, in capitals set by CSS.
    const eyebrow = page
      .getByRole("banner")
      .getByText("Test Engineer", { exact: true });
    await expect(eyebrow).toBeVisible();
    await expect(eyebrow).toHaveCSS("text-transform", "uppercase");
  });

  test("tells recruiters at a glance which roles I'm open to", async ({
    page,
  }) => {
    const header = page.getByRole("banner");

    await expect(header.getByRole("term")).toHaveText("Open to");
    await expect(header.getByRole("definition")).toHaveText(
      "QA, Test Automation, Front\u2011End roles",
    );
    // No location or right-to-work line in the hero.
    await expect(header.getByText(/Hove|relocation/)).toHaveCount(0);
    await expect(
      header.getByText(/^Four years testing financial data/),
    ).toBeVisible();
    await expect(header.getByRole("list", { name: "Key skills" })).toHaveCount(
      0,
    );
  });

  test("has contact links in the top bar and the footer", async ({ page }) => {
    // The hero has no links: contact lives in the top bar and the footer.
    await expect(page.getByRole("banner").getByRole("link")).toHaveCount(0);
    // Up to 991px (phones, an upright tablet) "Contact" sits in the menu.
    if (page.viewportSize()!.width <= 991) {
      await page.getByRole("button", { name: "Menu" }).click();
    }
    // The bar's button is a way to the contact card, not the contact
    // itself; the footer holds the address.
    await expect(
      page.getByRole("link", { name: "Contact", exact: true }),
    ).toHaveAttribute("href", "#contact");
    await expect(
      page.getByRole("contentinfo").getByRole("button", {
        name: `Copy my email address, ${address}`,
      }),
    ).toBeVisible();
    await expect(
      page.getByRole("contentinfo").getByRole("link", {
        name: "LinkedIn (opens in a new tab)",
        exact: true,
      }),
    ).toHaveAttribute("href", /linkedin\.com\/in\//);
  });

  test("shows the main sections in recruiter order", async ({ page }) => {
    await expect(
      page.getByRole("main").getByRole("heading", { level: 2 }),
    ).toHaveText([
      "How I use AI",
      "How I test",
      "Projects",
      "Experience",
      "Skills & learning",
      "References",
    ]);
    // Each heading shows its number in front, in page order (01 / …).
    expect(
      await page
        .getByRole("main")
        .getByRole("heading", { level: 2 })
        .evaluateAll((headings) =>
          headings.map((heading) => heading.getAttribute("data-number")),
        ),
    ).toEqual(["01", "02", "03", "04", "05", "06"]);
  });

  test("the photo is one still duotone image, with no slider or captions", async ({
    page,
  }) => {
    const photo = page.getByRole("banner").getByRole("img", {
      name: "Szymon Rojek",
    });
    await expect(photo).toBeVisible();
    await expect(photo).toHaveCSS("filter", /portrait-duotone/);
    await expect(page.getByRole("slider")).toHaveCount(0);
    await expect(page.getByText(/100% tester|who also codes/)).toHaveCount(0);
  });

  // A box of the right size can still show nothing: the duotone filter, the
  // mask and the cut-out all have to work in the browser for the face to
  // appear. So this reads the pixels on screen: the lit face and hair are
  // about 15% of the photo; a missing photo leaves only the dark band.
  test("the photo is drawn on screen, not only laid out", async ({ page }) => {
    const photo = page.getByRole("banner").getByRole("img", {
      name: "Szymon Rojek",
    });
    await expect(photo).toBeVisible();
    await expect
      .poll(() =>
        photo.evaluate((image) => (image as HTMLImageElement).complete),
      )
      .toBe(true);

    const png = (await photo.screenshot()).toString("base64");
    const litShare = await page.evaluate(async (data) => {
      // Decoded from the bytes themselves, never from a data: address: the
      // built page allows no data: images (the policy in prerender.ts), and
      // a test must not be the reason to widen it.
      const bytes = Uint8Array.from(atob(data), (character) =>
        character.charCodeAt(0),
      );
      const image = await createImageBitmap(
        new Blob([bytes], { type: "image/png" }),
      );
      const canvas = document.createElement("canvas");
      canvas.width = image.width;
      canvas.height = image.height;
      const context = canvas.getContext("2d")!;
      context.drawImage(image, 0, 0);
      const pixels = context.getImageData(0, 0, image.width, image.height).data;
      let lit = 0;
      for (let index = 0; index < pixels.length; index += 4) {
        const luminance =
          0.2126 * pixels[index] +
          0.7152 * pixels[index + 1] +
          0.0722 * pixels[index + 2];
        if (luminance > 90) lit++;
      }
      return lit / (pixels.length / 4);
    }, png);

    expect(litShare, "share of light pixels in the photo").toBeGreaterThan(
      0.05,
    );
  });

  // A version that shifted with the mouse was dropped at the user's request.
  test("the photo stays still under the mouse @desktop", async ({ page }) => {
    const photo = page.getByRole("banner").getByRole("img", {
      name: "Szymon Rojek",
    });
    const before = await photo.boundingBox();
    const hero = (await page.getByRole("banner").boundingBox())!;

    await page.mouse.move(hero.x + 20, hero.y + hero.height / 2);
    await page.mouse.move(hero.x + 10, hero.y + 20);
    // eslint-disable-next-line playwright/no-wait-for-timeout -- a dwell after the mouse moves: the assertion is that the photo has not moved
    await page.waitForTimeout(400);
    expect(await photo.boundingBox()).toEqual(before);
    await expect(photo).toHaveCSS("transform", "none");
  });

  test("footer is a short letter with email, and LinkedIn below it", async ({
    page,
  }) => {
    const footer = page.getByRole("contentinfo");

    await expect(
      footer.getByRole("button", {
        name: `Copy my email address, ${address}`,
      }),
    ).toBeVisible();
    await expect(
      footer.getByRole("link", {
        name: "LinkedIn (opens in a new tab)",
        exact: true,
      }),
    ).toHaveAttribute("href", /linkedin\.com\/in\//);
    // The address is shown in the footer now, beside a button that copies
    // it: the mailto: does nothing for a visitor with no mail app, and the
    // address was in the page's HTML either way.
    await expect(
      page.getByRole("contentinfo").getByText("sz.rojek@proton.me"),
    ).toBeVisible();
    await expect(footer).toContainText(
      "Communication matters most to me in a team",
    );
    await expect(
      footer.getByRole("heading", {
        name: "Let’s ship something that doesn’t break.",
      }),
    ).toBeVisible();
  });

  // Chromium only: WebKit cannot be granted clipboard-read, and reading the
  // clipboard back is the whole point. Both the mint pill and the live region
  // can announce a copy that never happened, which is the bug this catches.
  test("the footer's button really copies the address @chromium", async ({
    page,
    context,
  }) => {
    await context.grantPermissions(["clipboard-read", "clipboard-write"]);
    await page.goto("./");
    const footer = page.getByRole("contentinfo");

    await footer
      .getByRole("button", { name: `Copy my email address, ${address}` })
      .click();

    // What a screen reader hears; the pill beside it is decorative.
    await expect(footer.getByRole("status")).toHaveText(
      "Email address copied.",
    );
    // The effect itself. Without this the test passes on a handler that
    // reports success and copies nothing.
    await expect
      .poll(() => page.evaluate(() => navigator.clipboard.readText()))
      .toBe(address);
  });
});

// The browser picks the photo's size from srcset: Lighthouse's phone (412px
// wide, 1.75x) needs about 330px of photo and takes the 460px copy; a 3x
// phone and a 2x desktop the 920px one, so they stay sharp.
for (const { screen, viewport, scale, file } of [
  {
    screen: "Lighthouse's phone",
    viewport: { width: 412, height: 823 },
    scale: 1.75,
    file: /szymonRojekCutout460-[^/]*\.webp$/,
  },
  {
    screen: "a 3x phone",
    viewport: { width: 390, height: 844 },
    scale: 3,
    file: /szymonRojekCutout-[^/]*\.webp$/,
  },
  {
    screen: "a 2x desktop",
    viewport: { width: 1440, height: 900 },
    scale: 2,
    file: /szymonRojekCutout-[^/]*\.webp$/,
  },
]) {
  test.describe(`the photo on ${screen}`, () => {
    test.use({ viewport, deviceScaleFactor: scale });

    test("comes in the size the screen needs", async ({ page }) => {
      await page.goto("./");
      const photo = page.getByRole("banner").getByRole("img", {
        name: "Szymon Rojek",
      });
      await expect
        .poll(() =>
          photo.evaluate((image) => (image as HTMLImageElement).currentSrc),
        )
        .toMatch(file);
    });
  });
}
