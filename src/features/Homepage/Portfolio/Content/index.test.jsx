import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { describe, expect, it } from "vitest";
import { themeLight } from "../../../../core/App/theme";
import { Content } from ".";

const renderContent = (props) =>
  render(
    <ThemeProvider theme={themeLight}>
      <Content {...props} />
    </ThemeProvider>,
  );

describe("Content", () => {
  it("renders nothing in the initial state", () => {
    const { container } = renderContent({ status: "initial" });

    expect(container).toBeEmptyDOMElement();
  });

  it("renders the loading message", () => {
    renderContent({ status: "loading" });

    expect(screen.getByText(/projects are/i)).toBeInTheDocument();
  });

  it("renders the error box with a link to GitHub", () => {
    renderContent({ status: "error" });

    expect(screen.getByText(/something went/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Go to GitHub" })).toHaveAttribute(
      "rel",
      "noreferrer",
    );
  });

  it("renders repository tiles", () => {
    renderContent({
      status: "success",
      repositories: [
        {
          id: 1,
          name: "homepage",
          description: "My homepage",
          html_url: "https://github.com/user/homepage",
        },
        {
          id: 2,
          name: "no-description",
          description: null,
          html_url: "https://github.com/user/no-description",
        },
      ],
    });

    expect(screen.getAllByRole("listitem")).toHaveLength(2);
    expect(screen.getByText("My homepage")).toBeInTheDocument();
    expect(
      screen.getAllByRole("link", { name: "GitHub Repository" })[0],
    ).toHaveAttribute("href", "https://github.com/user/homepage");
    expect(document.querySelectorAll("p")).toHaveLength(1);
  });

  it("throws on an unknown status", () => {
    expect(() => Content({ status: "unknown" })).toThrow(
      "incorrect status: unknown",
    );
  });
});
