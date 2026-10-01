import { takeLatest, call, put } from "redux-saga/effects";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { SagaReturnType } from "redux-saga/effects";
import { getRepositories } from "./homepageAPI";
import {
  fetchRepositories,
  fetchRepositoriesError,
  fetchRepositoriesSuccess,
} from "./homepageSlice";

function* fetchRepositoriesHandler({
  payload: username,
}: PayloadAction<string>) {
  try {
    const repositories: SagaReturnType<typeof getRepositories> = yield call(
      getRepositories,
      username,
    );
    yield put(fetchRepositoriesSuccess(repositories));
  } catch {
    yield put(fetchRepositoriesError());
  }
}

export function* homepageSaga() {
  yield takeLatest(fetchRepositories.type, fetchRepositoriesHandler);
}
