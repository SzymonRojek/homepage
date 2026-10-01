import axios from "axios";
import type { Repository } from "./homepageSlice";

const githubAPIBaseURL = "https://api.github.com";

export const getRepositories = (username: string) =>
  axios
    .get<Repository[]>(`${githubAPIBaseURL}/users/${username}/repos`, {
      params: { sort: "updated", per_page: 100 },
    })
    .then((response) => response.data.filter(({ fork }) => !fork));
