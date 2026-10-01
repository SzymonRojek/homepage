import type { ComponentProps } from "react";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { describe, expect, it } from "vitest";
import { themeLight } from "../../../../core/App/theme";
import { Content } from ".";
import { createRepository } from "../../repositoryFixture";
import type { RepositoriesStatus } from "../../homepageSlice";

const renderContent = (props: ComponentProps<typeof Content>) =>
  render(
    <ThemeProvider theme={themeLight}>
      <Content {...props} />
    </ThemeProvider>,
  );

describe("Content", () => {
  it("renders nothing in the initial state", () => {
    const { container } = renderContent({
      status: "initial",
      repositories: null,
    });

    expect(container).toBeEmptyDOMElement();
  });

  it("renders the loading message", () => {
    renderContent({ status: "loading", repositories: null });

    expect(screen.getByText(/projects are/i)).toBeInTheDocument();
  });

  it("renders the error box with a link to GitHub", () => {
    renderContent({ status: "error", repositories: null });

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
        createRepository(),
        createRepository({
          id: 2,
          name: "no-description",
          description: null,
          html_url: "https://github.com/user/no-description",
        }),
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
    expect(() =>
      Content({
        status: "unknown" as RepositoriesStatus,
        repositories: null,
      }),
    ).toThrow("incorrect status: unknown");
  });
});
