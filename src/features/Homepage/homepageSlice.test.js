import { describe, expect, it } from "vitest";
import homepageReducer, {
  fetchRepositories,
  fetchRepositoriesError,
  fetchRepositoriesSuccess,
  selectRepositories,
  selectRepositoriesStatus,
} from "./homepageSlice";

const repositories = [{ id: 1, name: "homepage" }];

describe("homepageSlice", () => {
  it("has an initial state", () => {
    expect(homepageReducer(undefined, { type: "@@INIT" })).toEqual({
      repositories: null,
      status: "initial",
    });
  });

  it("sets loading and clears repositories on fetch", () => {
    const state = homepageReducer(
      { status: "success", repositories },
      fetchRepositories("user"),
    );

    expect(state).toEqual({ status: "loading", repositories: null });
  });

  it("stores repositories on success", () => {
    const state = homepageReducer(
      { status: "loading", repositories: null },
      fetchRepositoriesSuccess(repositories),
    );

    expect(state).toEqual({ status: "success", repositories });
  });

  it("sets error status on error", () => {
    const state = homepageReducer(
      { status: "loading", repositories: null },
      fetchRepositoriesError(),
    );

    expect(state).toEqual({ status: "error", repositories: null });
  });

  it("selects repositories and status", () => {
    const state = { homepage: { status: "success", repositories } };

    expect(selectRepositories(state)).toBe(repositories);
    expect(selectRepositoriesStatus(state)).toBe("success");
  });
});
