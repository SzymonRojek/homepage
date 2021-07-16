import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Content } from "./Content";
import { Section, Header, StyledGithubIcon, MyRecentProjects } from "./styled";
import { SubHeader } from "../SubHeader";
import { githubUserName } from "./githubUserName";
import {
  fetchRepositories,
  selectRepositories,
  selectRepositoriesStatus,
} from "../../homepageSlice";

export const Portfolio = () => {
  const dispatch = useDispatch();

  const repositoriesStatus = useSelector(selectRepositoriesStatus);
  const repositories = useSelector(selectRepositories);

  useEffect(() => {
    dispatch(fetchRepositories(githubUserName));
  }, [dispatch]);

  return (
    <Section>
      <Header>
        <StyledGithubIcon />
        <SubHeader>Portflio</SubHeader>
        <MyRecentProjects>My recent projects</MyRecentProjects>
      </Header>

      <Content status={repositoriesStatus} repositories={repositories} />
    </Section>
  );
};
