import { runSaga, type Saga } from "redux-saga";
import { takeLatest, type ForkEffect } from "redux-saga/effects";
import type { PayloadAction, UnknownAction } from "@reduxjs/toolkit";
import { afterEach, describe, expect, it, vi } from "vitest";
import { homepageSaga } from "./homepageSaga";
import { getRepositories } from "./homepageAPI";
import {
  fetchRepositories,
  fetchRepositoriesError,
  fetchRepositoriesSuccess,
} from "./homepageSlice";
import { createProject } from "./repositoryFixture";

vi.mock("./homepageAPI");

const getHandler = () => {
  const effect = homepageSaga().next().value as ForkEffect;

  return effect.payload.args[1] as Saga<[PayloadAction<string>]>;
};

const runHandler = async (action: PayloadAction<string>) => {
  const dispatched: UnknownAction[] = [];

  await runSaga(
    { dispatch: (a: UnknownAction) => dispatched.push(a) },
    getHandler(),
    action,
  ).toPromise();

  return dispatched;
};

describe("homepageSaga", () => {
  afterEach(() => {
    vi.resetAllMocks();
  });

  it("handles fetchRepositories with takeLatest", () => {
    expect(homepageSaga().next().value).toEqual(
      takeLatest(fetchRepositories.type, getHandler()),
    );
  });

  it("dispatches success with fetched repositories", async () => {
    const repositories = [createProject()];
    vi.mocked(getRepositories).mockResolvedValue(repositories);

    const dispatched = await runHandler(fetchRepositories("user"));

    expect(getRepositories).toHaveBeenCalledWith("user");
    expect(dispatched).toEqual([fetchRepositoriesSuccess(repositories)]);
  });

  it("dispatches error when the request fails", async () => {
    vi.mocked(getRepositories).mockRejectedValue(new Error("Network Error"));

    const dispatched = await runHandler(fetchRepositories("user"));

    expect(dispatched).toEqual([fetchRepositoriesError()]);
  });
});
