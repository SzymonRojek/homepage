import { takeLatest, call, put } from "redux-saga/effects";
import { getRepositories } from "./homepageAPI";
import {
  fetchRepositories,
  fetchRepositoriesError,
  fetchRepositoriesSuccess,
} from "./homepageSlice";

function* fetchRepositoriesHandler({ payload: username }) {
  try {
    const repositories = yield call(getRepositories, username);
    yield put(fetchRepositoriesSuccess(repositories));
  } catch (error) {
    yield put(fetchRepositoriesError());
  }
}

export function* homepageSaga() {
  yield takeLatest(fetchRepositories.type, fetchRepositoriesHandler);
}
