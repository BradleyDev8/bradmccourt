"use client";

import Link from "next/link";

export default function MobileBottomNav() {
  const navItems = [
    {
      href: "/",
      label: "About",
    },
    {
      href: "/resume",
      label: "Resume",
    },
    {
      href: "/project",
      label: "Projects",
    },
    {
      href: "/blog",
      label: "Blog",
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 md:hidden z-50">
      <div className="bg-zinc-900/95 backdrop-blur-sm border-t border-zinc-800 px-4 py-4">
        <div className="flex justify-between gap-1 sm:gap-4 max-w-sm mx-auto">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="py-2 px-2 sm:px-4 text-white hover:text-orange-400 transition-colors text-sm sm:text-base font-medium text-center flex-1"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
