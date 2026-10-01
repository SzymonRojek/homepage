import type { ComponentProps } from "react";
import { render, screen } from "@testing-library/react";
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

  it("renders project tiles grouped by category", () => {
    renderContent({
      status: "success",
      repositories: [
        createProject({ id: 1, name: "e2e-tests", category: "Testing" }),
        createProject({ id: 2, name: "homepage", category: "Front-end" }),
      ],
    });

    const groups = screen
      .getAllByRole("heading", { level: 3 })
      .map((heading) => heading.textContent);
    expect(groups).toEqual(["Testing", "Front-end"]);
    expect(screen.getAllByRole("listitem")).toHaveLength(2);
  });

  it("skips a category with no projects", () => {
    renderContent({
      status: "success",
      repositories: [createProject({ category: "Front-end" })],
    });

    expect(
      screen.queryByRole("heading", { name: "Testing" }),
    ).not.toBeInTheDocument();
  });

  it("renders tile details and links", () => {
    renderContent({
      status: "success",
      repositories: [
        createProject({
          language: "TypeScript",
          stargazers_count: 3,
          homepage: "https://user.github.io/homepage/",
        }),
      ],
    });

    expect(screen.getByText("My homepage")).toBeInTheDocument();
    expect(screen.getByText(/TypeScript/)).toBeInTheDocument();
    expect(screen.getByLabelText("3 stars")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Live demo" })).toHaveAttribute(
      "href",
      "https://user.github.io/homepage/",
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
          description: null,
          language: null,
          stargazers_count: 0,
          homepage: null,
        }),
      ],
    });

    expect(document.querySelectorAll("p")).toHaveLength(0);
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
