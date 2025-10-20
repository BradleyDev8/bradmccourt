import {
  faXTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface SocialLink {
  icon: IconDefinition;
  href: string;
  label: string;
}

export const socialLinks: SocialLink[] = [
  {
    icon: faGithub,
    href: "https://github.com/BradleyDev8",
    label: "GitHub",
  },
  {
    icon: faLinkedin,
    href: "https://linkedin.com/in/bradley-mccourt-777063149",
    label: "LinkedIn",
  },
  {
    icon: faXTwitter,
    href: "https://twitter.com/LewisBradley77",
    label: "Twitter",
  },
];
