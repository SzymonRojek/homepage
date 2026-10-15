import styled from "styled-components";

export const Intro = styled.div`
  display: grid;
  gap: 6px;
  max-width: 46em;
  margin: -8px 0 0;
  font-size: 18px;
  line-height: 1.65;

  /* No word left alone on the last line. */
  p {
    margin: 0;
    text-wrap: pretty;
  }

  /* On phones the two lines run on as one paragraph. */
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    display: block;
    font-size: 16px;

    p {
      display: inline;
    }

    p + p::before {
      content: " ";
    }
  }
`;

// The story gets the deep-green band across the whole screen. The padding
// mirrors the pull-out, so the text keeps the page's content edge.
export const Band = styled.article`
  display: grid;
  grid-template-columns: 1fr 1.25fr;
  gap: 56px;
  align-items: start;
  margin: 36px calc(50% - 50vw) 0;
  padding: 56px calc(50vw - 50%);
  color: ${({ theme }) => theme.colors.brand.text};
  background: ${({ theme }) => theme.colors.brand.background};

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    grid-template-columns: 1fr;
    gap: 20px;
    padding-block: 40px;
  }
`;

export const StoryTitle = styled.h3`
  margin: 0;
  font-size: 40px;
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.colors.brand.text};

  em {
    font-style: normal;
    color: ${({ theme }) => theme.colors.brand.accent};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 30px;
  }
`;

export const Punchline = styled.p`
  margin: 18px 0 0;
  font-family: ${({ theme }) => theme.fontDisplay};
  font-size: 18px;
  font-weight: 700;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.brand.accent};

  &::before {
    content: "“";
  }

  &::after {
    content: "”";
  }
`;

export const StoryText = styled.div`
  p {
    margin: 0 0 14px;
    font-size: 17px;
    line-height: 1.7;
    color: ${({ theme }) => theme.colors.brand.muted};
  }

  p:last-child {
    margin-bottom: 0;
  }
`;

// The three steps side by side, each under a large number in the testing
// green (4.8:1 on cream, mint in the dark theme: large text needs 3:1).
export const Steps = styled.ol`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  margin: 48px 0 0;
  padding: 0;
  list-style: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    grid-template-columns: 1fr;
    gap: 24px;
    margin-top: 36px;
  }
`;

export const StepNumber = styled.span`
  display: block;
  font-family: ${({ theme }) => theme.fontDisplay};
  font-size: 56px;
  font-weight: 800;
  line-height: 1;
  letter-spacing: -0.04em;
  color: ${({ theme }) => theme.colors.qa.accent};
`;

export const StepTitle = styled.h3`
  margin: 12px 0 0;
  font-size: 19px;
  line-height: 1.3;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const StepText = styled.p`
  margin: 8px 0 0;
  font-size: 15px;
  line-height: 1.6;
`;

// A small heading over the two sentences, under a thin rule.
export const WhyItMatters = styled.div`
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid ${({ theme }) => theme.colors.headerLine};

  h3 {
    margin: 0;
    font-size: 18px;
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  p {
    max-width: 760px;
    margin: 8px 0 0;
    line-height: 1.6;
  }
`;
