import { Container, SkipLink } from "./styled";
import { TopBar } from "./TopBar";
import { MainHeader } from "./MainHeader";
import { Mindset } from "./Mindset";
import { Skills } from "./Skills";
import { Experience } from "./Experience";
import { Portfolio } from "./Portfolio";
import { Footer } from "./Footer";

export const Homepage = () => (
  <>
    <SkipLink href="#main">Skip to content</SkipLink>
    <TopBar />
    <Container>
      <MainHeader />
      <main id="main" tabIndex={-1}>
        <Mindset />

        <Portfolio />

        <Experience />

        <Skills />
      </main>
      <Footer />
    </Container>
  </>
);
