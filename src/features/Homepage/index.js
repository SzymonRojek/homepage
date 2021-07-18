import { Container, Icon } from "./styled";
import { ThemeSwitch } from "../../common/ThemeSwitch";
import { MainHeader } from "./Components/MainHeader";
import { Skills } from "./Components/Skills";
import { Portfolio } from "./Components/Portfolio";
import { Footer } from "./Components/Footer";
import technologiesIcon from "./technologies.svg";
import technologiesNextIcon from "./technologiesNext.svg";
import softSkillsIcon from "./softSkills.svg";
import { skills, nextSkills, softSkills } from "./skillsData";

export const Homepage = () => (
  <Container>
    <ThemeSwitch />
    <MainHeader />
    <main>
      <Skills
        title={
          <>
            Technical skills
            <Icon src={technologiesIcon} alt="" />
          </>
        }
        skills={skills}
      />

      <Skills
        title={
          <>
            What I want to learn next
            <Icon src={technologiesNextIcon} />
          </>
        }
        skills={nextSkills}
      />

      <Skills
        title={
          <>
            Sfot skills
            <Icon src={softSkillsIcon} />
          </>
        }
        skills={softSkills}
      />
      <Portfolio />
    </main>
    <Footer />
  </Container>
);
