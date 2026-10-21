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

    const section = screen.getByRole("region", { name: "How I test" });
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

  it("draws a bug behind the story, hidden from screen readers", () => {
    renderHowITest();

    const section = screen.getByRole("region", { name: "How I test" });
    const bug = section.querySelector(":scope > svg");
    expect(bug).toHaveAttribute("aria-hidden", "true");
    expect(bug).toHaveAttribute("focusable", "false");
  });

  it("opens with my story, then the method", () => {
    renderHowITest();

    const section = screen.getByRole("region", { name: "How I test" });
    const story = within(section).getByRole("article", {
      name: "Beyond the obvious bugs",
    });
    const steps = within(section).getByRole("list", {
      name: "How I test a data migration",
    });
    expect(story.compareDocumentPosition(steps)).toBe(
      Node.DOCUMENT_POSITION_FOLLOWING,
    );
    // The steps close the section: "Why it matters" was removed on purpose.
    expect(steps.nextElementSibling).toBeNull();
    expect(within(section).queryByText(/Why it matters/)).toBeNull();
    // So was the yellow punchline under the story's title.
    expect(within(section).queryByText(/The best bugs/)).toBeNull();
  });

  it("gives the stages in order without numbers", () => {
    renderHowITest();

    const steps = screen.getByRole("list", {
      name: "How I test a data migration",
    });
    // An ordered list gives screen readers the order; the arrows between the
    // stages show it on screen, so no numbers are drawn.
    expect(steps.tagName).toBe("OL");
    expect(steps).not.toHaveTextContent(/\b0[1-3]\b/);
  });

  it("gives each step a short line and a list of points to skim", () => {
    renderHowITest();

    const steps = Array.from(
      screen.getByRole("list", { name: "How I test a data migration" })
        .children,
    ) as HTMLElement[];
    expect(
      steps.map((step) => within(step).getAllByRole("listitem").length),
    ).toEqual([4, 5, 4]);
    expect(
      within(steps[1]).getByText("A number can match and still be wrong."),
    ).toBeVisible();
  });

  it("names the reconciliation checks and the stored procedures", () => {
    renderHowITest();

    expect(
      screen.getByText("Record counts, totals and field-by-field values"),
    ).toBeVisible();
    expect(
      screen.getByText(/The stored procedures that transform the data/),
    ).toBeVisible();
  });

  it("keeps clients and systems confidential", () => {
    renderHowITest();

    expect(
      screen.getByRole("article", { name: "Beyond the obvious bugs" }),
    ).toHaveTextContent("in the stored procedures that move it");
    // No internal system names, only the approach.
    expect(screen.queryByText(/SunStar|Sirius|\bAST\b/)).toBeNull();
  });
});
