import { Container } from "./styled";
import { ThemeSwitch } from "../../common/ThemeSwitch";
import { MainHeader } from "./MainHeader";
import { Section, SectionHeader } from "./Section";
import { Skills } from "./Skills";
import { Grid, Tools } from "./Skills/styled";
import { Experience } from "./Experience";
import { Portfolio } from "./Portfolio";
import { Quality } from "./Quality";
import { Footer } from "./Footer";
import { skillGroups, tools } from "./skillsData";

export const Homepage = () => (
  <Container>
    <ThemeSwitch />
    <MainHeader />
    <main>
      <Experience />

      <Portfolio />

      <Quality />

      <Section aria-labelledby="skills">
        <SectionHeader id="skills">Skills</SectionHeader>
        <Grid>
          {skillGroups.map(({ title, skills }) => (
            <Skills key={title} title={title} skills={skills} />
          ))}
        </Grid>
        <Tools>
          <strong>Tools:</strong> {tools.join(" · ")}
        </Tools>
      </Section>
    </main>
    <Footer />
  </Container>
);
