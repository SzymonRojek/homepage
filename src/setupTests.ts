import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";

afterEach(() => {
  cleanup();
  // Absent in the Node tests of the build's static page (entry-server).
  globalThis.localStorage?.clear();
});
