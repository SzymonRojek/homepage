// Runs after `vite build`: renders the page once in Node and writes it into
// dist/index.html, so search engines and AI tools that don't run JavaScript
// read the whole page. In the browser the app takes this static copy over, or
// draws the page anew for a dark theme or a case-study address (src/index.tsx).
import { createHash } from "node:crypto";
import { readFile, rm, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { build } from "vite";

const serverDir = resolve("node_modules/.cache/prerender");
const page = resolve("dist/index.html");
const emptyRoot = '<div id="root"></div>';
const viewport =
  '<meta name="viewport" content="width=device-width, initial-scale=1" />';
// Inline scripts only: the ones with a src are covered by 'self'.
const inlineScript = /<script\b(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/g;
const externalImage = /<img\b[^>]*\bsrc="(https:\/\/[^"]+)"/g;

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
  const { html, preloads, css, jsonLd } = render();
  const template = await readFile(page, "utf8");
  const missing = ["</head>", "<body>", emptyRoot, viewport].filter(
    (part) => !template.includes(part),
  );

  if (!html || missing.length > 0) {
    throw new Error(
      `Prerender: the page rendered empty, or dist/index.html lacks ${missing.join(", ")}.`,
    );
  }

  // Replacer functions, so a "$" in the page is never read as a pattern.
  // The marks let index.html hide the copy for a dark theme and the app clean
  // up once it has the page (usePrerenderCleanup).
  const prerendered = template
    .replace(
      "</head>",
      () =>
        `${preloads}<script type="application/ld+json">${jsonLd}</script><style data-prerendered>${css}</style></head>`,
    )
    .replace("<body>", () => "<body data-prerendered>")
    .replace(emptyRoot, () => `<div id="root">${html}</div>`);

  // GitHub Pages serves the page as it is and cannot send headers, so the
  // content security policy travels in the page itself. A meta tag can't
  // carry frame-ancestors or HSTS; those wait for a proxy in front of it.
  // The hashes are taken off the page about to be written, so an inline
  // script can never fall out of step with the policy that allows it, and
  // the dev server (index.html) is left unpoliced, with its own inline
  // scripts for hot reloading.
  const hashes = [...prerendered.matchAll(inlineScript)].map(
    ([, code]) =>
      `'sha256-${createHash("sha256").update(code).digest("base64")}'`,
  );

  if (hashes.length === 0) {
    throw new Error(
      "Prerender: no inline script was found, so the page would load with its own scripts blocked.",
    );
  }

  // The one thing the page loads from anywhere else is the live CI badge in
  // the homepage case study, so these are read off the page too: each
  // external image's own directory, nothing wider.
  const imageDirectories = [
    ...new Set(
      [...prerendered.matchAll(externalImage)].map(([, source]) => {
        const { origin, pathname } = new URL(source);
        return `${origin}${pathname.replace(/[^/]*$/, "")}`;
      }),
    ),
  ];

  const policy = [
    "default-src 'self'",
    `script-src 'self' ${hashes.join(" ")}`,
    // styled-components writes the page's styles into the document as the
    // app renders, and the build's copy carries them inline as well.
    "style-src 'self' 'unsafe-inline'",
    ["img-src 'self'", ...imageDirectories].join(" "),
    "font-src 'self'",
    "connect-src 'self'",
    "base-uri 'self'",
    "form-action 'none'",
    "object-src 'none'",
    "frame-src 'none'",
  ].join("; ");

  await writeFile(
    page,
    prerendered.replace(
      viewport,
      () =>
        `${viewport}\n    <meta http-equiv="Content-Security-Policy" content="${policy}" />`,
    ),
  );
  console.log(`Prerendered the page into ${page}`);
} finally {
  await rm(serverDir, { recursive: true, force: true });
}
