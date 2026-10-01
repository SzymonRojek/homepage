import { Container } from "./styled";
import { ThemeSwitch } from "../../common/ThemeSwitch";
import { MainHeader } from "./MainHeader";
import { Section, SectionHeader } from "./Section";
import { Skills } from "./Skills";
import { Grid } from "./Skills/styled";
import { Experience } from "./Experience";
import { Portfolio } from "./Portfolio";
import { Quality } from "./Quality";
import { Footer } from "./Footer";
import { Icon } from "./Icon";
import technologiesIcon from "./technologies.svg";
import technologiesNextIcon from "./technologiesNext.svg";
import { skillGroups, learningSkills } from "./skillsData";

export const Homepage = () => (
  <Container>
    <ThemeSwitch />
    <MainHeader />
    <main>
      <Section aria-labelledby="core-skills">
        <SectionHeader id="core-skills">
          Core skills
          <Icon src={technologiesIcon} alt="" />
        </SectionHeader>
        <Grid>
          {skillGroups.map(({ title, skills }) => (
            <Skills key={title} title={title} skills={skills} />
          ))}
        </Grid>
      </Section>

      <Experience />

      <Section aria-labelledby="learning">
        <SectionHeader id="learning">
          Currently learning
          <Icon src={technologiesNextIcon} alt="" />
        </SectionHeader>
        <Skills skills={learningSkills} />
      </Section>

      <Portfolio />

      <Quality />
    </main>
    <Footer />
  </Container>
);
