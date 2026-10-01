import axios from "axios";
import { describe, expect, it, vi } from "vitest";
import { getRepositories } from "./homepageAPI";

vi.mock("axios");

describe("getRepositories", () => {
  it("requests sorted repositories and skips forks", async () => {
    axios.get.mockResolvedValue({
      data: [
        { id: 1, name: "own", fork: false },
        { id: 2, name: "forked", fork: true },
      ],
    });

    const repositories = await getRepositories("user");

    expect(axios.get).toHaveBeenCalledWith(
      "https://api.github.com/users/user/repos",
      { params: { sort: "updated", per_page: 100 } },
    );
    expect(repositories).toEqual([{ id: 1, name: "own", fork: false }]);
  });
});
