"use client";

import Link from "next/link";

export default function MobileBottomNav() {
  const navItems = [
    {
      href: "/",
      label: "About",
    },
    {
      href: "/blog",
      label: "Blog",
    },
    {
      href: "/contact",
      label: "Contact",
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 md:hidden z-50">
      <div className="bg-zinc-900/95 backdrop-blur-sm border-t border-zinc-800 px-4 py-4">
        <div className="flex justify-center gap-8">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="py-2 px-6 text-white hover:text-orange-400 transition-colors text-base font-medium"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
