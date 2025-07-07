"use client";

import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faLocationDot, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Avatar from "@/components/ui/avatar";

export default function Sidebar() {
  const currentYear = new Date().getFullYear();

  const contactInfo = [
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

  const socialLinks = [
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

  return (
    <aside className="order-1 md:order-1 md:sticky md:top-8 h-fit w-full md:w-72 flex-shrink-0">
      <div className="bg-zinc-900/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-zinc-800">
        {/* Profile Section */}
        <div className="text-center mb-6">
          <div className="relative mb-4">
            <div className="flex justify-center">
              <Avatar width={96} height={96} />
            </div>
          </div>

          <h1 className="text-white text-xl font-semibold mb-1">
            Brad McCourt
          </h1>

          <div className="flex items-center justify-center gap-2 text-sm">
            <span className="text-gray-300">Software Engineer</span>
          </div>
        </div>

        {/* Separator */}
        <div className="w-full h-px bg-zinc-700 mb-6"></div>

        {/* Contact Information */}
        <div className="space-y-4 mb-6">
          {contactInfo.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-8 h-8 bg-zinc-800 rounded-lg flex items-center justify-center flex-shrink-0">
                <FontAwesomeIcon
                  icon={item.icon}
                  className="w-4 h-4 text-orange-400"
                />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">
                  {item.label}
                </p>
                {item.link ? (
                  <Link
                    href={item.link}
                    target={
                      item.link.startsWith("mailto") ? undefined : "_blank"
                    }
                    rel={
                      item.link.startsWith("mailto")
                        ? undefined
                        : "noopener noreferrer"
                    }
                    className="text-white text-sm hover:text-orange-400 transition-colors truncate block"
                  >
                    {item.value}
                  </Link>
                ) : (
                  <span className="text-white text-sm truncate block">
                    {item.value}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Separator */}
        <div className="w-full h-px bg-zinc-700 mb-6"></div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-6">
          {socialLinks.map((social, index) => (
            <Link
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center hover:bg-zinc-700 transition-colors group"
              aria-label={social.label}
            >
              <FontAwesomeIcon
                icon={social.icon}
                className="w-5 h-5 text-gray-400 group-hover:text-orange-400 transition-colors"
              />
            </Link>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center">
          <div className="w-full h-px bg-zinc-700 mb-4"></div>
          <p className="text-gray-500 text-xs">
            © {currentYear}{" "}
            <Link
              href="https://bradmccourt.xyz"
              className="hover:text-orange-400 transition-colors"
            >
              Brad McCourt
            </Link>
          </p>
          <div className="flex justify-center gap-2 mt-2 text-xs">
            <Link
              href="/terms"
              className="text-gray-500 hover:text-orange-400 transition-colors"
            >
              Terms
            </Link>
            <span className="text-gray-600">•</span>
            <Link
              href="/privacy"
              className="text-gray-500 hover:text-orange-400 transition-colors"
            >
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </aside>
  );
}
