import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { socialLinks } from "@/lib/data/social-links";
import { profile } from "@/lib/data/profile";

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
              href={`mailto:${profile.email}`}
              className="text-high-contrast-text hover:opacity-90"
            >
              {profile.email}
            </Link>
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <span className="font-medium">Social</span>
        <div className="flex gap-4">
          {socialLinks.map((social) => (
            <Link
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-high-contrast-text hover:opacity-90"
              aria-label={social.label}
            >
              <FontAwesomeIcon icon={social.icon} className="h-6 w-6" />
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
