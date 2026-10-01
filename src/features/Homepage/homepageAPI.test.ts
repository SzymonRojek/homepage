import axios from "axios";
import { describe, expect, it, vi } from "vitest";
import { getRepositories, pickFeatured } from "./homepageAPI";
import { createRepository } from "./repositoryFixture";

vi.mock("axios");

describe("pickFeatured", () => {
  const repositories = [
    createRepository({ id: 1, name: "first", homepage: "https://first.dev" }),
    createRepository({ id: 2, name: "second", description: "From GitHub" }),
    createRepository({ id: 3, name: "not-featured" }),
  ];

  it("keeps only featured repositories, in the featured order", () => {
    const projects = pickFeatured(repositories, [
      { name: "second", category: "Testing" },
      { name: "first", category: "Front-end" },
    ]);

    expect(projects.map(({ name, category }) => [name, category])).toEqual([
      ["second", "Testing"],
      ["first", "Front-end"],
    ]);
  });

  it("skips featured names that are not on GitHub", () => {
    const projects = pickFeatured(repositories, [
      { name: "missing", category: "Testing" },
      { name: "first", category: "Front-end" },
    ]);

    expect(projects.map(({ name }) => name)).toEqual(["first"]);
  });

  it("overrides description and demo link when given", () => {
    const [project] = pickFeatured(repositories, [
      {
        name: "second",
        category: "Testing",
        description: "Curated",
        demoUrl: "https://second.dev",
      },
    ]);

    expect(project.description).toBe("Curated");
    expect(project.homepage).toBe("https://second.dev");
  });

  it("keeps GitHub values when there is no override", () => {
    const [project] = pickFeatured(repositories, [
      { name: "first", category: "Front-end" },
    ]);

    expect(project.description).toBe("My homepage");
    expect(project.homepage).toBe("https://first.dev");
  });
});

describe("getRepositories", () => {
  it("requests sorted repositories and skips forks", async () => {
    const own = createRepository({ id: 1, name: "homepage" });
    const forked = createRepository({ id: 2, name: "homepage", fork: true });
    vi.mocked(axios.get).mockResolvedValue({ data: [forked, own] });

    const projects = await getRepositories("user");

    expect(axios.get).toHaveBeenCalledWith(
      "https://api.github.com/users/user/repos",
      { params: { sort: "updated", per_page: 100 } },
    );
    expect(projects).toHaveLength(1);
    expect(projects[0].id).toBe(1);
  });
});
