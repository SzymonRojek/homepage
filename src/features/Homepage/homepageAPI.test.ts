import axios from "axios";
import { describe, expect, it, vi } from "vitest";
import { getRepositories } from "./homepageAPI";
import { createRepository } from "./repositoryFixture";

vi.mock("axios");

describe("getRepositories", () => {
  it("requests sorted repositories and skips forks", async () => {
    const own = createRepository({ id: 1, name: "own" });
    const forked = createRepository({ id: 2, name: "forked", fork: true });
    vi.mocked(axios.get).mockResolvedValue({ data: [own, forked] });

    const repositories = await getRepositories("user");

    expect(axios.get).toHaveBeenCalledWith(
      "https://api.github.com/users/user/repos",
      { params: { sort: "updated", per_page: 100 } },
    );
    expect(repositories).toEqual([own]);
  });
});
