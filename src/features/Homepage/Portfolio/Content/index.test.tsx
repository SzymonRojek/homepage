import type { ComponentProps } from "react";
import { render, screen, within } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { describe, expect, it } from "vitest";
import { themeLight } from "../../../../core/App/theme";
import { Content } from ".";
import { createProject } from "../../repositoryFixture";
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

  it("renders test projects as tiles and front-end work as a list", () => {
    renderContent({
      status: "success",
      repositories: [
        createProject({ id: 1, title: "E2E suite", category: "Testing" }),
        createProject({ id: 2, title: "Sign-in app", category: "Front-end" }),
      ],
    });

    const tiles = screen.getByRole("list", { name: "Test projects" });
    expect(
      within(tiles).getByRole("heading", { name: "E2E suite" }),
    ).toBeVisible();

    const alsoBuilt = screen.getByRole("region", { name: "Also built" });
    expect(within(alsoBuilt).getByText("Sign-in app")).toBeInTheDocument();
    expect(
      within(alsoBuilt).getByRole("link", { name: "Code" }),
    ).toHaveAttribute("href", "https://github.com/user/homepage");
  });

  it("leaves out the Also built list when there is no front-end work", () => {
    renderContent({
      status: "success",
      repositories: [createProject({ category: "Testing" })],
    });

    expect(
      screen.queryByRole("region", { name: "Also built" }),
    ).not.toBeInTheDocument();
  });

  it("renders tile details and links", () => {
    renderContent({
      status: "success",
      repositories: [
        createProject({
          category: "Testing",
          name: "e2e-tests",
          title: "E2E suite",
          language: "TypeScript",
          stargazers_count: 3,
          homepage: "https://user.github.io/e2e-tests/",
        }),
      ],
    });

    expect(screen.getByText("My homepage")).toBeInTheDocument();
    expect(screen.getByText(/e2e-tests · TypeScript/)).toBeInTheDocument();
    expect(screen.getByLabelText("3 stars")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Live demo" })).toHaveAttribute(
      "href",
      "https://user.github.io/e2e-tests/",
    );
    expect(
      screen.getByRole("link", { name: "GitHub Repository" }),
    ).toHaveAttribute("href", "https://github.com/user/homepage");
  });

  it("leaves out empty details", () => {
    renderContent({
      status: "success",
      repositories: [
        createProject({
          category: "Testing",
          description: null,
          stargazers_count: 0,
          homepage: null,
        }),
      ],
    });

    expect(screen.queryByText(/My homepage/)).not.toBeInTheDocument();
    expect(screen.queryByLabelText(/stars/)).not.toBeInTheDocument();
    expect(
      screen.queryByRole("link", { name: "Live demo" }),
    ).not.toBeInTheDocument();
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
