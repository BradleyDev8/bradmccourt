"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { BlurFade } from "./blur-fade";
import "@/styles/nav-bar.css";

interface NavigationLink {
  name: string;
  href: string;
}

interface DesktopNavigationProps {
  menuItems: NavigationLink[];
}

export function DesktopNavigation({ menuItems }: DesktopNavigationProps) {
  const currentPath = usePathname();
  const [active, setActive] = useState<NavigationLink>(menuItems[0]);
  const [isHover, setIsHover] = useState<NavigationLink | null>(null);

  const isActive = (path: string) => {
    if (path === "/blog" && currentPath.startsWith("/blog")) return true;
    else if (path === "/project" && currentPath.startsWith("/project")) return true;
    return currentPath === path;
  };

  useEffect(() => {
    const activeLink = menuItems.find((link) => isActive(link.href));
    if (activeLink) {
      setActive(activeLink);
    }
  }, [currentPath, menuItems]);

  return (
    <header className="navbar">
      <BlurFade direction="up">
        <ul className="flex items-center justify-center navbar-list">
          {menuItems.map((item) => (
            <button
              key={item.name}
              className="py-2 relative duration-300 transition-colors hover:text-amber-400 navbar-item"
              onClick={() => setActive(item)}
              onMouseEnter={() => setIsHover(item)}
              onMouseLeave={() => setIsHover(null)}
              style={{
                color: isActive(item.href) ? "#FFF" : "#888888",
              }}
            >
              <Link
                href={item.href}
                className="text-sm md:text-base lg:text-base"
              >
                <div
                  className={`px-2 py-2 relative ${
                    active.name === item.name ? "font-bold" : "font-medium"
                  }`}
                >
                  {item.name}
                  {isHover?.name === item.name && (
                    <motion.div
                      layoutId="hover-bg"
                      className="absolute bottom-0 left-0 right-0 w-full h-full bg-white/10 rounded-xl"
                    />
                  )}
                </div>
                {active.name === item.name && (
                  <motion.div
                    layoutId="active"
                    className="absolute bottom-0 left-0 right-0 w-full h-0.5 bg-amber-400"
                  />
                )}
                {isHover?.name === item.name && (
                  <motion.div
                    layoutId="hover"
                    className="absolute bottom-0 left-0 right-0 w-full h-0.5 bg-white"
                  />
                )}
              </Link>
            </button>
          ))}
        </ul>
      </BlurFade>
    </header>
  );
}