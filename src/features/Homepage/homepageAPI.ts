import axios from "axios";
import type { Project, Repository } from "./homepageSlice";
import {
  featuredRepositories,
  type FeaturedRepository,
} from "./Portfolio/featuredRepositories";

const githubAPIBaseURL = "https://api.github.com";

export const pickFeatured = (
  repositories: Repository[],
  featured: FeaturedRepository[],
): Project[] =>
  featured.flatMap(({ name, category, description, demoUrl }) => {
    const repository = repositories.find(
      (repository) => repository.name === name,
    );

    return repository
      ? [
          {
            ...repository,
            category,
            description: description ?? repository.description,
            homepage: demoUrl ?? repository.homepage,
          },
        ]
      : [];
  });

export const getRepositories = (username: string) =>
  axios
    .get<Repository[]>(`${githubAPIBaseURL}/users/${username}/repos`, {
      params: { sort: "updated", per_page: 100 },
    })
    .then((response) =>
      pickFeatured(
        response.data.filter(({ fork }) => !fork),
        featuredRepositories,
      ),
    );
