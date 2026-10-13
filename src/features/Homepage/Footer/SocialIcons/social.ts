import { styleIcon } from "./styled";
import { profile } from "../../profile";
import { githubProfileUrl } from "../../Portfolio/githubUserName";
import GithubIcon from "./icons/github.svg?react";
import LinkedinIcon from "./icons/linkedin.svg?react";

export const socials = [
  {
    name: "GitHub",
    url: githubProfileUrl,
    Icon: styleIcon(GithubIcon),
  },
  {
    name: "LinkedIn",
    url: profile.linkedinUrl,
    Icon: styleIcon(LinkedinIcon),
  },
];
