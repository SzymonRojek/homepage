import { Container, Icon } from "./styled";
import { ThemeSwitch } from "../../common/ThemeSwitch";
import { MainHeader } from "./Components/MainHeader";
import { Skills } from "./Components/Skills";
import { Portfolio } from "./Components/Portfolio";
import { Footer } from "./Components/Footer";
import toolsIcon from "./tools.png";
import rocketIcon from "./rocket.png";
import { skills, nextSkills } from "./skillsData";

export const Homepage = () => (
  <Container>
    <ThemeSwitch />
    <MainHeader />
    <main>
      <Skills
        title={
          <>
            My skillset includes
            <Icon src={toolsIcon} alt="" />
          </>
        }
        skills={skills}
      />

      <Skills
        title={
          <>
            What I want to learn next
            <Icon src={rocketIcon} />
          </>
        }
        skills={nextSkills}
      />
      <Portfolio />
    </main>
    <Footer />
  </Container>
);
