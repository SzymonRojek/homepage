import { styleIcon } from "./styled";
import GithubIcon from "./icons/github.svg?react";
import LinkedinIcon from "./icons/linkedin.svg?react";
import FacebookIcon from "./icons/facebook.svg?react";

export const socials = [
  {
    name: "Github",
    url: "https://github.com/SzymonRojek",
    Icon: styleIcon(GithubIcon),
  },
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/szymon--rojek/",
    Icon: styleIcon(LinkedinIcon),
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/szymon.rojek.5",
    Icon: styleIcon(FacebookIcon),
  },
];
