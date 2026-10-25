import type { ReactNode } from "react";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { afterEach, describe, expect, it, vi } from "vitest";
import { ErrorBoundary } from ".";
import { themeLight } from "../App/theme";
import { email } from "../../features/Homepage/email";
import { profile } from "../../features/Homepage/profile";

const Broken = () => {
  throw new Error("a component threw while rendering");
};

const renderGuarded = (children: ReactNode) =>
  render(
    <ThemeProvider theme={themeLight}>
      <ErrorBoundary>{children}</ErrorBoundary>
    </ThemeProvider>,
  );

describe("ErrorBoundary", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("stays out of the way while the page renders", () => {
    renderGuarded(<p>The page</p>);

    expect(screen.getByText("The page")).toBeVisible();
  });

  it("keeps a way to reach me when the page throws", () => {
    // React reports the error itself, and the boundary adds its own line:
    // both would otherwise fail the test run as noise.
    const reported = vi.spyOn(console, "error").mockImplementation(() => {});

    renderGuarded(<Broken />);

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "didn’t load properly",
    );
    expect(screen.getByText(email)).toBeVisible();
    expect(
      screen.getByRole("link", { name: "LinkedIn (opens in a new tab)" }),
    ).toHaveAttribute("href", profile.linkedinUrl);
    expect(
      screen.getByRole("link", { name: "GitHub (opens in a new tab)" }),
    ).toBeVisible();
    expect(reported).toHaveBeenCalled();
  });
});
