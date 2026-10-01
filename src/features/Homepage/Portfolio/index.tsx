import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../core/hooks";
import { Content } from "./Content";
import { Section, Header, StyledGithubIcon, MyRecentProjects } from "./styled";
import { SubHeader } from "../SubHeader";
import { githubUserName } from "./githubUserName";
import {
  fetchRepositories,
  selectRepositories,
  selectRepositoriesStatus,
} from "../homepageSlice";

export const Portfolio = () => {
  const dispatch = useAppDispatch();

  const repositoriesStatus = useAppSelector(selectRepositoriesStatus);
  const repositories = useAppSelector(selectRepositories);

  useEffect(() => {
    dispatch(fetchRepositories(githubUserName));
  }, [dispatch]);

  return (
    <Section>
      <Header>
        <StyledGithubIcon />
        <SubHeader>Projects</SubHeader>
        <MyRecentProjects>Selected testing and front-end work</MyRecentProjects>
      </Header>

      <Content status={repositoriesStatus} repositories={repositories} />
    </Section>
  );
};
