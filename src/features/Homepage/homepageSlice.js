import { createSlice } from "@reduxjs/toolkit";

const homepageSlice = createSlice({
  name: "homepage",
  initialState: {
    repositories: null,
    status: "initial",
  },
  reducers: {
    fetchRepositories: () => ({
      status: "loading",
      repositories: null,
    }),
    fetchRepositoriesSuccess: (_, { payload: repositories }) => ({
      status: "success",
      repositories,
    }),
    fetchRepositoriesError: () => ({
      status: "error",
      repositories: null,
    }),
  },
});

export const {
  fetchRepositories,
  fetchRepositoriesSuccess,
  fetchRepositoriesError,
} = homepageSlice.actions;

const selectHomepageState = (state) => state.homepage;

export const selectRepositories = (state) =>
  selectHomepageState(state).repositories;

export const selectRepositoriesStatus = (state) =>
  selectHomepageState(state).status;

export default homepageSlice.reducer;
