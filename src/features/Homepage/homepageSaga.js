import { takeLatest, call, put, delay } from "redux-saga/effects";
import { getRepositories } from "./homepageAPI";
import {
  fetchRepositories,
  fetchRepositoriesError,
  fetchRepositoriesSuccess,
} from "./homepageSlice";

const loadingDelay = 0;

function* fetchRepositoriesHandler({ payload: username }) {
  try {
    yield delay(loadingDelay);
    const repositories = yield call(getRepositories, username);
    yield put(fetchRepositoriesSuccess(repositories));
  } catch (error) {
    yield put(fetchRepositoriesError());
  }
}

export function* homepageSaga() {
  yield takeLatest(fetchRepositories.type, fetchRepositoriesHandler);
}
