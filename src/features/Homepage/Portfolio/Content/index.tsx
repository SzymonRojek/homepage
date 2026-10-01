import { ErrorBox } from "./ErrorBox";
import { Loading } from "./Loading";
import { Repositories } from "./Repositories";
import type { Project, RepositoriesStatus } from "../../homepageSlice";

interface ContentProps {
  status: RepositoriesStatus;
  repositories: Project[] | null;
}

export const Content = ({ status, repositories }: ContentProps) => {
  switch (status) {
    case "initial":
      return null;

    case "loading":
      return <Loading />;

    case "error":
      return <ErrorBox />;

    case "success":
      return <Repositories repositories={repositories ?? []} />;

    default:
      throw new Error(`incorrect status: ${status}`);
  }
};
