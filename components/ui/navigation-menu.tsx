"use client";

import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

interface NavigationMenuProps {
  menuItems: { name: string; href: string }[];
}

export function NavigationMenu({ menuItems }: NavigationMenuProps) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <nav
      className="block w-full border-b border-borders-non-interactive px-8 py-4 md:hidden"
      aria-label="Mobile navigation"
    >
      <div className="flex w-full items-center justify-between">
        <Link href="/" className="flex select-none flex-col hover:opacity-90">
          <span className="highlight highlight-[#2E8B57] px-2">Brade McCourt</span>
          <span className="text-low-contrast-text">Software Engineer</span>
        </Link>
        
        <button
          className="pointer-cursor z-1 flex h-12 w-12 items-center justify-center rounded-md border border-borders-non-interactive bg-sidebar-bg text-low-contrast-text transition-all hover:border-subtle-borders-interactive hover:bg-ui-component-default hover:text-high-contrast-text"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <HamburgerMenuIcon width={20} height={20} />
        </button>
      </div>

      <ul
        className={`absolute left-0 top-[81px] z-10 flex w-full list-none flex-col items-center gap-4 bg-app-bg py-4 ${
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ overflow: "hidden" }}
      >
        {menuItems.map((item) => (
          <li
            key={item.href}
            className={`delay-50 transition-opacity duration-300 ease-in-out ${
              menuOpen ? "opacity-100" : "opacity-0"
            }`}
          >
            <Link
              href={item.href}
              className={`flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground ${
                item.href === "/"
                  ? pathname === item.href
                  : pathname.startsWith(item.href)
                  ? "bg-accent/50"
                  : ""
              }`}
            >
              <span>{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}