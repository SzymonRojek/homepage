import { render, screen, within } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { describe, expect, it } from "vitest";
import { themeLight } from "../../../core/App/theme";
import { HowITest } from ".";

const renderHowITest = () =>
  render(
    <ThemeProvider theme={themeLight}>
      <HowITest />
    </ThemeProvider>,
  );

describe("HowITest", () => {
  it("is a named section with the steps of a migration test in order", () => {
    renderHowITest();

    const section = screen.getByRole("region", { name: "How I test at work" });
    const steps = within(section).getByRole("list", {
      name: "How I test a data migration",
    });
    expect(
      within(steps)
        .getAllByRole("heading", { level: 3 })
        .map(({ textContent }) => textContent),
    ).toEqual([
      "Understand the rules, then design the tests",
      "Reconcile with SQL and check the logic",
      "Trace each defect to its root cause",
    ]);
  });

  it("names the reconciliation checks and the stored procedures", () => {
    renderHowITest();

    expect(
      screen.getByText(/Record counts, totals, field-by-field values/),
    ).toBeVisible();
    expect(
      screen.getByText(/read the stored procedures that transform the data/),
    ).toBeVisible();
  });

  it("keeps clients and systems confidential", () => {
    renderHowITest();

    expect(
      screen.getByRole("article", { name: "Beyond the obvious bugs" }),
    ).toHaveTextContent("in the stored procedures themselves");
    // No internal system names, only the approach.
    expect(screen.queryByText(/SunStar|Sirius|\bAST\b/)).toBeNull();
    expect(
      screen.getByText(/Clients and figures are confidential/),
    ).toBeVisible();
  });
});
