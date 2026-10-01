import { runSaga } from "redux-saga";
import { takeLatest } from "redux-saga/effects";
import { afterEach, describe, expect, it, vi } from "vitest";
import { homepageSaga } from "./homepageSaga";
import { getRepositories } from "./homepageAPI";
import {
  fetchRepositories,
  fetchRepositoriesError,
  fetchRepositoriesSuccess,
} from "./homepageSlice";

vi.mock("./homepageAPI");

const runHandler = async (action) => {
  const dispatched = [];
  const handler = homepageSaga().next().value.payload.args[1];

  await runSaga(
    { dispatch: (a) => dispatched.push(a) },
    handler,
    action,
  ).toPromise();

  return dispatched;
};

describe("homepageSaga", () => {
  afterEach(() => {
    vi.resetAllMocks();
  });

  it("handles fetchRepositories with takeLatest", () => {
    const effect = homepageSaga().next().value;

    expect(effect).toEqual(
      takeLatest(fetchRepositories.type, effect.payload.args[1]),
    );
  });

  it("dispatches success with fetched repositories", async () => {
    const repositories = [{ id: 1, name: "homepage" }];
    getRepositories.mockResolvedValue(repositories);

    const dispatched = await runHandler(fetchRepositories("user"));

    expect(getRepositories).toHaveBeenCalledWith("user");
    expect(dispatched).toEqual([fetchRepositoriesSuccess(repositories)]);
  });

  it("dispatches error when the request fails", async () => {
    getRepositories.mockRejectedValue(new Error("Network Error"));

    const dispatched = await runHandler(fetchRepositories("user"));

    expect(dispatched).toEqual([fetchRepositoriesError()]);
  });
});
