import { faLocationDot, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface ContactInfoItem {
  icon: IconDefinition;
  label: string;
  value: string;
  link: string | null;
}

export const contactInfo: ContactInfoItem[] = [
  {
    icon: faLocationDot,
    label: "LOCATION",
    value: "Belfast, Ireland 🇮🇪",
    link: null,
  },
  {
    icon: faEnvelope,
    label: "EMAIL",
    value: "bradleymccourt@live.com",
    link: "mailto:bradleymccourt@live.com",
  },
  {
    icon: faGithub,
    label: "GITHUB",
    value: "@BradleyDev8",
    link: "https://github.com/BradleyDev8",
  },
  {
    icon: faLinkedin,
    label: "LINKEDIN",
    value: "in/bradley-mccourt",
    link: "https://linkedin.com/in/bradley-mccourt-777063149",
  },
];
