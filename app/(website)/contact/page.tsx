import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faLinkedin,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function Contact() {
  return (
    <main className="flex flex-col gap-16 md:gap-24">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h1 className="font-medium">Contact</h1>
          <p>
            Have a software idea that needs building or looking for a new website?
            Let&apos;s chat! Reach out to me at{" "}
            <Link
              href="mailto:bradleymccourt@live.com"
              className="text-high-contrast-text hover:opacity-90"
            >
              bradleymccourt@live.com
            </Link>
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <span className="font-medium">Social</span>
        <div className="flex gap-4">
          <Link
            href="https://twitter.com/LewisBradley77"
            target="_blank"
            rel="noopener noreferrer"
            className="text-high-contrast-text hover:opacity-90"
            aria-label="Twitter"
          >
            <FontAwesomeIcon icon={faXTwitter} className="h-6 w-6" />
          </Link>
          <Link
            href="https://linkedin.com/in/bradley-mccourt-777063149"
            target="_blank"
            rel="noopener noreferrer"
            className="text-high-contrast-text hover:opacity-90"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} className="h-6 w-6" />
          </Link>
          <Link
            href="https://github.com/BradleyDev8"
            target="_blank"
            rel="noopener noreferrer"
            className="text-high-contrast-text hover:opacity-90"
            aria-label="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </main>
  );
}