import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface Repository {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  fork: boolean;
}

export type RepositoriesStatus = "initial" | "loading" | "success" | "error";

interface HomepageState {
  repositories: Repository[] | null;
  status: RepositoriesStatus;
}

const initialState: HomepageState = {
  repositories: null,
  status: "initial",
};

const homepageSlice = createSlice({
  name: "homepage",
  initialState,
  reducers: {
    fetchRepositories: (_, _action: PayloadAction<string>): HomepageState => ({
      status: "loading",
      repositories: null,
    }),
    fetchRepositoriesSuccess: (
      _,
      { payload: repositories }: PayloadAction<Repository[]>,
    ): HomepageState => ({
      status: "success",
      repositories,
    }),
    fetchRepositoriesError: (): HomepageState => ({
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

const selectHomepageState = (state: { homepage: HomepageState }) =>
  state.homepage;

export const selectRepositories = (state: { homepage: HomepageState }) =>
  selectHomepageState(state).repositories;

export const selectRepositoriesStatus = (state: { homepage: HomepageState }) =>
  selectHomepageState(state).status;

export default homepageSlice.reducer;
