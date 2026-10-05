import { Container } from "./styled";
import { ThemeSwitch } from "../../common/ThemeSwitch";
import { MainHeader } from "./MainHeader";
import { Skills } from "./Skills";
import { Experience } from "./Experience";
import { Portfolio } from "./Portfolio";
import { Quality } from "./Quality";
import { Footer } from "./Footer";

export const Homepage = () => (
  <Container>
    <ThemeSwitch />
    <MainHeader />
    <main>
      <Experience />

      <Portfolio />

      <Quality />

      <Skills />
    </main>
    <Footer />
  </Container>
);
