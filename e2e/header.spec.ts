import { test, expect } from "./fixtures";

test.describe("Header and footer", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("./");
  });

  test("shows name, title and page title", async ({ page }) => {
    await expect(page).toHaveTitle(/Szymon Rojek/);
    // The h1 is for search engines and screen readers; the top bar shows it.
    await expect(
      page.getByRole("heading", { level: 1, name: "Szymon Rojek" }),
    ).toBeAttached();
    const brand = page.getByRole("link", { name: /^Szymon Rojek/ });
    await expect(brand).toBeVisible();
    // Only the name and the job title: the coding side is told further down.
    await expect(brand).toHaveText("Szymon RojekSoftware Test Engineer");
    await expect(
      page.getByText("A number can match and still be wrong.", {
        exact: true,
      }),
    ).toBeVisible();
  });

  test("tells recruiters at a glance what I'm looking for", async ({
    page,
  }) => {
    const header = page.getByRole("banner");

    await expect(
      header.getByText("Open to Test Automation & QA Engineer roles"),
    ).toBeVisible();
    const where = header.getByLabel("Location and right to work");
    await expect(where.getByRole("term")).toHaveText([
      "Based in",
      "Right to work",
      "Relocation",
    ]);
    await expect(where.getByRole("definition")).toHaveText([
      "Hove, UK",
      "UK, full",
      "Open",
    ]);
    await expect(
      header.getByText(/^Four years testing financial data/),
    ).toBeVisible();
    await expect(header.getByRole("list", { name: "Key skills" })).toHaveCount(
      0,
    );
  });

  test("has contact links in the top bar and the footer", async ({
    page,
    isMobile,
  }) => {
    // The hero has no links: contact lives in the top bar and the footer.
    await expect(page.getByRole("banner").getByRole("link")).toHaveCount(0);
    // On a phone Contact sits in the menu.
    if (isMobile) {
      await page.getByRole("button", { name: "Menu" }).click();
    }
    await expect(
      page.getByRole("link", { name: "Contact", exact: true }),
    ).toHaveAttribute("href", "#contact");
    await expect(
      page
        .getByRole("contentinfo")
        .getByRole("link", { name: "Send me an email" }),
    ).toHaveAttribute("href", "mailto:sz.rojek@gmail.com");
    await expect(
      page
        .getByRole("contentinfo")
        .getByRole("link", { name: "LinkedIn", exact: true }),
    ).toHaveAttribute("href", /linkedin\.com\/in\//);
  });

  test("shows the main sections in recruiter order", async ({ page }) => {
    await expect(
      page.getByRole("main").getByRole("heading", { level: 2 }),
    ).toHaveText([
      "What colleagues say",
      "How I test at work",
      "Experience",
      "Projects",
      "Skills",
      "Still learning",
    ]);
  });

  test("the portrait's line moves with the keyboard", async ({ page }) => {
    const slider = page.getByRole("slider", {
      name: "Move the line between code and test",
    });
    await expect(slider).toHaveAttribute(
      "aria-valuetext",
      "0% code, 100% test",
    );

    await slider.focus();
    await page.keyboard.press("ArrowRight");
    await page.keyboard.press("ArrowRight");

    await expect(slider).toHaveAttribute("aria-valuetext", "2% code, 98% test");
    await expect(page.getByRole("img", { name: "Szymon Rojek" })).toBeVisible();
  });

  test("the photo starts as 100% tester; dragging right shows the code side @desktop", async ({
    page,
  }) => {
    const photo = await page
      .getByRole("img", { name: "Szymon Rojek" })
      .boundingBox();
    if (!photo) throw new Error("No photo");
    await expect(page.getByText("100% tester")).toBeVisible();
    await expect(page.getByText("Drag", { exact: true })).toBeVisible();

    // Grab the yellow grip at the left edge and drag it to the right edge.
    const y = photo.y + photo.height * 0.58;
    await page.mouse.move(photo.x + 4, y);
    await page.mouse.down();
    await page.mouse.move(photo.x + photo.width - 2, y, { steps: 10 });
    await page.mouse.up();

    await expect(page.getByText("…who also codes")).toBeVisible();
    await expect(page.getByText("Drag", { exact: true })).toHaveCount(0);
  });

  test("a short drag let go partway slides on to the end @desktop", async ({
    page,
  }) => {
    const photo = await page
      .getByRole("img", { name: "Szymon Rojek" })
      .boundingBox();
    if (!photo) throw new Error("No photo");
    const y = photo.y + photo.height * 0.58;

    await page.mouse.move(photo.x + 4, y);
    await page.mouse.down();
    await page.mouse.move(photo.x + photo.width * 0.3, y, { steps: 5 });
    await page.mouse.up();

    await expect(
      page.getByRole("slider", { name: "Move the line between code and test" }),
    ).toHaveAttribute("aria-valuetext", "100% code, 0% test");
    await expect(page.getByText("…who also codes")).toBeVisible();
  });

  test("on a phone a finger swipe moves the line @mobile", async ({ page }) => {
    const photo = await page
      .getByRole("img", { name: "Szymon Rojek" })
      .boundingBox();
    if (!photo) throw new Error("No photo");
    const slider = page.getByRole("slider", {
      name: "Move the line between code and test",
    });
    const y = photo.y + photo.height * 0.6;

    // A real touch drag, as a phone sends it, from the middle to the right.
    const cdp = await page.context().newCDPSession(page);
    const touch = (type: "touchStart" | "touchMove" | "touchEnd", x: number) =>
      cdp.send("Input.dispatchTouchEvent", {
        type,
        touchPoints: type === "touchEnd" ? [] : [{ x, y }],
      });
    const from = photo.x + photo.width * 0.1;
    await touch("touchStart", from);
    for (let step = 1; step <= 10; step++) {
      await touch("touchMove", from + (photo.width * 0.9 * step) / 10);
    }
    await touch("touchEnd", photo.x + photo.width);

    await expect(slider).toHaveAttribute(
      "aria-valuetext",
      "100% code, 0% test",
    );
    await expect(page.getByText("…who also codes")).toBeVisible();
  });

  test("footer is a short letter with email, and LinkedIn below it", async ({
    page,
  }) => {
    const footer = page.getByRole("contentinfo");

    await expect(
      footer.getByRole("link", { name: "Send me an email" }),
    ).toHaveAttribute("href", "mailto:sz.rojek@gmail.com");
    await expect(
      footer.getByRole("link", { name: "LinkedIn", exact: true }),
    ).toHaveAttribute("href", /linkedin\.com\/in\//);
    await expect(page.getByText("sz.rojek@gmail.com")).toHaveCount(0);
    await expect(footer).toContainText("communication matters most in a team");
    await expect(
      footer.getByRole("heading", { name: "Thanks for reading this far." }),
    ).toBeVisible();
  });
});
