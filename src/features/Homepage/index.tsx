import { Container, SkipLink } from "./styled";
import { useScrollToHash } from "../../common/useScrollToHash";
import { TopBar } from "./TopBar";
import { MainHeader } from "./MainHeader";
import { Mindset } from "./Mindset";
import { HowITest } from "./HowITest";
import { Skills } from "./Skills";
import { Experience } from "./Experience";
import { Portfolio } from "./Portfolio";
import { Footer } from "./Footer";

export const Homepage = () => {
  useScrollToHash();

  return (
    <>
      <SkipLink href="#main">Skip to content</SkipLink>
      <TopBar />
      <Container>
        <MainHeader />
        <main id="main" tabIndex={-1}>
          <Mindset />

          <HowITest />

          <Portfolio />

          <Experience />

          <Skills />
        </main>
        <Footer />
      </Container>
    </>
  );
};
