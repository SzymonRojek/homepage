import axios from "axios";

const githubAPIBaseURL = "https://api.github.com";

export const getRepositories = (username) =>
  axios
    .get(`${githubAPIBaseURL}/users/${username}/repos`, {
      params: { sort: "updated", per_page: 100 },
    })
    .then((response) => response.data.filter(({ fork }) => !fork));
