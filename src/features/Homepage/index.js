import { Container } from "./styled";
import { ThemeSwitch } from "../../common/ThemeSwitch";
import { MainHeader } from "./MainHeader";
import { Skills } from "./Skills";
import { Portfolio } from "./Portfolio";
import { Footer } from "./Components/Footer";
import { Icon } from "./Icon";
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
            Next to learn
            <Icon src={technologiesNextIcon} />
          </>
        }
        skills={nextSkills}
      />

      <Skills
        title={
          <>
            Soft skills
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
