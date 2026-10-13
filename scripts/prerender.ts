// Runs after `vite build`: renders the page once in Node and writes it into
// dist/index.html, so search engines and AI tools that don't run JavaScript
// read the whole page. In the browser the app replaces this static copy
// (src/index.tsx).
import { readFile, rm, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { build } from "vite";

const serverDir = resolve("node_modules/.cache/prerender");
const page = resolve("dist/index.html");
const emptyRoot = '<div id="root"></div>';

await build({
  logLevel: "warn",
  // One self-contained file, so Node needs nothing else to run it.
  ssr: { noExternal: true },
  build: {
    ssr: "src/entry-server.tsx",
    outDir: serverDir,
    emptyOutDir: true,
    copyPublicDir: false,
    rolldownOptions: { output: { entryFileNames: "[name].mjs" } },
  },
});

try {
  const { render } = (await import(
    pathToFileURL(resolve(serverDir, "entry-server.mjs")).href
  )) as typeof import("../src/entry-server");
  const { html, css } = render();
  const template = await readFile(page, "utf8");
  const missing = ["</head>", "<body>", emptyRoot].filter(
    (part) => !template.includes(part),
  );

  if (!html || missing.length > 0) {
    throw new Error(
      `Prerender: the page rendered empty, or dist/index.html lacks ${missing.join(", ")}.`,
    );
  }

  // Replacer functions, so a "$" in the page is never read as a pattern.
  // The marks let index.html hide the copy for a dark theme and index.tsx
  // clean up after the app has replaced it.
  const prerendered = template
    .replace("</head>", () => `<style data-prerendered>${css}</style></head>`)
    .replace("<body>", () => "<body data-prerendered>")
    .replace(emptyRoot, () => `<div id="root">${html}</div>`);

  await writeFile(page, prerendered);
  console.log(`Prerendered the page into ${page}`);
} finally {
  await rm(serverDir, { recursive: true, force: true });
}
