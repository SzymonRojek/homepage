import { Section, SectionHeader, SectionIntro, Chip } from "../Section";
import { mindsetIntro, mindsets } from "../mindsetData";
import {
  Grid,
  Side,
  SideHeader,
  Label,
  SideTitle,
  Context,
  SideSummary,
  Points,
  Stack,
  Join,
  Proof,
} from "./styled";

export const Mindset = () => (
  <Section aria-labelledby="mindset">
    <SectionHeader id="mindset">Two mindsets, one goal</SectionHeader>
    <SectionIntro>{mindsetIntro}</SectionIntro>
    <Grid>
      {mindsets.map(
        ({ side, label, title, context, summary, points, stack, proof }) => (
          <Side key={side} $side={side} aria-labelledby={`mindset-${side}`}>
            <SideHeader>
              <SideTitle id={`mindset-${side}`}>{title}</SideTitle>
              <Label $side={side}>{label}</Label>
            </SideHeader>
            <Context $side={side}>{context}</Context>
            <SideSummary>{summary}</SideSummary>
            <Points $side={side}>
              {points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </Points>
            <Stack aria-label={`${title} tools`}>
              {stack.map((item) => (
                <Chip key={item}>{item}</Chip>
              ))}
            </Stack>
            {proof && (
              <Proof $side={side} href={proof.href}>
                {proof.text} ↓
              </Proof>
            )}
          </Side>
        ),
      )}
      <Join aria-hidden="true">+</Join>
    </Grid>
  </Section>
);
