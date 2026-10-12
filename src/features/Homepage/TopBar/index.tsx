import { useEffect, useRef, useState } from "react";
import { ThemeSwitch } from "../../../common/ThemeSwitch";
import { profile } from "../profile";
import {
  Bar,
  Inner,
  Brand,
  BrandName,
  BrandTitle,
  BrandTitleMore,
  Nav,
  NavList,
  NavLink,
  MenuFooter,
  ContactLink,
  MenuButton,
  MenuIcon,
} from "./styled";

// Each href points to the id of a section heading.
const navLinks = [
  { href: "#mindset", label: "Mindset" },
  { href: "#how-i-test", label: "How I test" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
];

// On wide screens the links, Contact and the theme switch sit in the bar. On
// phones and tablets they move into a menu behind a button: the links, then
// Contact with the theme switch on the other side of the same row.
export const TopBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // An open menu closes on Escape (focus goes back to the button) and on a
  // click or tap outside the bar.
  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        buttonRef.current?.focus();
      }
    };
    const onPointerDown = (event: PointerEvent) => {
      if (!barRef.current?.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [menuOpen]);

  return (
    <Bar ref={barRef}>
      <Inner>
        <Brand href="#top" title="Back to top">
          <BrandName>{profile.name}</BrandName>
          <BrandTitle>
            {profile.title}
            <BrandTitleMore> · {profile.secondaryTitle}</BrandTitleMore>
          </BrandTitle>
        </Brand>
        <Nav id="site-menu" aria-label="Sections" $open={menuOpen}>
          <NavList>
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <NavLink href={href} onClick={() => setMenuOpen(false)}>
                  {label}
                </NavLink>
              </li>
            ))}
          </NavList>
          <MenuFooter>
            <ContactLink href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </ContactLink>
            <ThemeSwitch />
          </MenuFooter>
        </Nav>
        <MenuButton
          ref={buttonRef}
          type="button"
          aria-label="Menu"
          aria-expanded={menuOpen}
          aria-controls="site-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <MenuIcon $open={menuOpen} aria-hidden="true">
            <span />
            <span />
            <span />
          </MenuIcon>
        </MenuButton>
      </Inner>
    </Bar>
  );
};
