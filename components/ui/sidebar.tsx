"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import Avatar from "@/components/ui/avatar";
import { useState } from "react";
import { contactInfo as contactInfoData } from "@/lib/data/contact-info";
import { socialLinks as socialLinksData } from "@/lib/data/social-links";
import { profile } from "@/lib/data/profile";

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const currentYear = new Date().getFullYear();

  const contactInfo = contactInfoData;
  const socialLinks = socialLinksData;

  return (
    <aside className="order-1 md:order-1 md:sticky md:top-8 h-fit w-full md:w-72 flex-shrink-0">
      <div className="bg-zinc-900/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-zinc-800 relative">
        {/* Collapse/Expand Button - Top right corner, only visible on mobile */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="md:hidden absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-gray-400 hover:text-orange-400 transition-colors rounded-lg hover:bg-zinc-800"
        >
          <FontAwesomeIcon 
            icon={isCollapsed ? faChevronDown : faChevronUp} 
            className="w-4 h-4" 
          />
        </button>

        {/* Profile Section */}
        <div className="text-center mb-6">
          <div className="relative mb-4">
            <div className="flex justify-center">
              <Avatar width={96} height={96} />
            </div>
          </div>

          <h1 className="text-white text-xl font-semibold mb-1">
            {profile.name}
          </h1>

          <div className="flex items-center justify-center gap-2 text-sm">
            <span className="text-gray-300">{profile.title}</span>
          </div>
        </div>

        {/* Collapsible Content - Hidden on mobile when collapsed, always visible on desktop */}
        <div className={`${isCollapsed ? 'hidden md:block' : 'block'} transition-all duration-300`}>
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
                href={profile.siteUrl}
                className="hover:text-orange-400 transition-colors"
              >
                {profile.name}
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
      </div>
    </aside>
  );
}
