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
      "Understand the mapping and the business",
      "Design the tests",
      "Reconcile source and target with SQL",
      "Check the business logic, not only the data",
      "Trace each defect to its root cause",
      "Use AI with a human in charge",
    ]);
  });

  it("names the reconciliation checks and the stored procedures", () => {
    renderHowITest();

    expect(
      screen.getByText(/Record counts, totals, field-by-field values/),
    ).toBeVisible();
    expect(screen.getByText(/read the stored procedures/)).toBeVisible();
  });

  it("keeps clients and systems confidential", () => {
    renderHowITest();

    expect(
      screen.getByText(/migration of client data from one system to another/),
    ).toBeVisible();
    expect(
      screen.getByText(/Clients and figures are confidential/),
    ).toBeVisible();
  });
});
