import { ThemeSwitch } from "../../../common/ThemeSwitch";
import { profile } from "../profile";
import {
  Bar,
  Inner,
  Brand,
  Logo,
  BrandText,
  BrandName,
  BrandTagline,
  Nav,
  NavList,
  NavLink,
  Actions,
  ContactLink,
} from "./styled";

// Each href points to the id of a section heading.
const navLinks = [
  { href: "#mindset", label: "Mindset" },
  { href: "#how-i-test", label: "How I test" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
];

const initials = profile.name
  .split(" ")
  .map((part) => part[0])
  .join("");

export const TopBar = () => (
  <Bar>
    <Inner>
      <Brand href="#top" aria-label={`${profile.name}, back to top`}>
        <Logo aria-hidden="true">{initials}</Logo>
        <BrandText aria-hidden="true">
          <BrandName>{profile.name}</BrandName>
          <BrandTagline>{profile.title}</BrandTagline>
        </BrandText>
      </Brand>
      <Nav aria-label="Sections">
        <NavList>
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <NavLink href={href}>{label}</NavLink>
            </li>
          ))}
        </NavList>
      </Nav>
      <Actions>
        <ContactLink href="#contact">Contact</ContactLink>
        <ThemeSwitch />
      </Actions>
    </Inner>
  </Bar>
);
