import { styleIcon } from "./styled";
import { ReactComponent as GithubIcon } from "./icons/github.svg";
import { ReactComponent as LinkedinIcon } from "./icons/linkedin.svg";
import { ReactComponent as FacebookIcon } from "./icons/facebook.svg";

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
