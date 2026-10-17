import { chromium } from "@playwright/test";
const out = process.argv[2];
const b = await chromium.launch({ channel: "chrome" });
for (const w of [1280, 900, 390]) {
  const p = await b.newPage({ viewport: { width: w, height: 900 }, deviceScaleFactor: 1 });
  await p.goto("http://localhost:3011/");
  await p.waitForTimeout(800);
  const list = p.getByRole("list", { name: "How I test a data migration" });
  await list.scrollIntoViewIfNeeded();
  await p.waitForTimeout(500);
  await list.screenshot({ path: `${out}/steps-${w}.png` });
}
await b.close();
