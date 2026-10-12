import { Container, SkipLink } from "./styled";
import { useInitialScroll } from "../../common/useInitialScroll";
import { TopBar } from "./TopBar";
import { MainHeader } from "./MainHeader";
import { SpotTheBug } from "./SpotTheBug";
import { Recommendations } from "./Recommendations";
import { Mindset } from "./Mindset";
import { HowITest } from "./HowITest";
import { Skills } from "./Skills";
import { Experience } from "./Experience";
import { Portfolio } from "./Portfolio";
import { Education } from "./Education";
import { Footer } from "./Footer";

export const Homepage = () => {
  useInitialScroll();

  return (
    <>
      <SkipLink href="#main">Skip to content</SkipLink>
      <TopBar />
      <MainHeader />
      <Container>
        <main id="main" tabIndex={-1}>
          <SpotTheBug />

          <Recommendations />

          <Mindset />

          <HowITest />

          <Experience />

          <Portfolio />

          <Skills />

          <Education />
        </main>
        <Footer />
      </Container>
    </>
  );
};
