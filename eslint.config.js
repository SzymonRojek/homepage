import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import playwright from "eslint-plugin-playwright";
import prettier from "eslint-config-prettier";

export default tseslint.config(
  {
    ignores: [
      "dist",
      "playwright-report",
      "test-results",
      ".stryker-tmp",
      "reports",
      ".lighthouseci",
    ],
  },
  js.configs.recommended,
  tseslint.configs.recommended,
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: globals.browser,
    },
    settings: { react: { version: "detect" } },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,
      ...reactHooks.configs.recommended.rules,
      "react/prop-types": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_" },
      ],
      "react/no-unescaped-entities": ["error", { forbid: [">", "}"] }],
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  },
  // The e2e suite: the plugin enforces the rules CLAUDE.md states (no skipped,
  // focused or conditional tests, no fixed sleeps, web-first assertions), and
  // the two type-aware rules catch an action or an expect left unawaited,
  // which would pass silently and assert nothing.
  {
    ...playwright.configs["flat/recommended"],
    files: ["e2e/**/*.ts"],
    // A sleep's exception carries the reason it is there. Once the sleep goes,
    // the comment must go with it rather than stand as a false justification.
    linterOptions: { reportUnusedDisableDirectives: "error" },
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      ...playwright.configs["flat/recommended"].rules,
      // What CLAUDE.md forbids, as a gate rather than a request: the plugin
      // reports these as warnings, and `eslint .` exits 0 on a warning.
      "playwright/no-skipped-test": "error",
      "playwright/no-focused-test": "error",
      "playwright/no-force-option": "error",
      "playwright/no-wait-for-timeout": "error",
      "playwright/no-conditional-expect": "error",
      "playwright/expect-expect": "error",
      "playwright/missing-playwright-await": "error",
      "playwright/prefer-web-first-assertions": "error",
      "playwright/valid-expect": "error",
      // A branch on the viewport width is how one test covers both projects,
      // so the two that do it carry an exception naming the width they split
      // on. Every other conditional in a test fails, as the rest do here:
      // `reportUnusedDisableDirectives` then drops the exception with the
      // branch, so it can never stand as a false justification.
      "playwright/no-conditional-in-test": "error",
      "@typescript-eslint/no-floating-promises": "error",
      "@typescript-eslint/no-misused-promises": "error",
    },
  },
  prettier,
);
