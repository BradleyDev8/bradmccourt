
"use client";

import { usePathname } from "next/navigation";
import SidebarLink from "@/components/ui/sidebar-link";
import Avatar from "@/components/ui/avatar";
import { ThemeToggle } from "./theme-toggle";
export default function Sidebar({
  menuLinks,
}: {
  menuLinks: { name: string; href: string; new?: boolean }[];
}) {
  const pathname = usePathname();

  return (
    <aside className={`sticky top-0 hidden h-screen w-48 py-20 md:block`}>
      <nav
        className="flex h-full w-full flex-col gap-12 overflow-visible"
        aria-label="Desktop navigation"
      >
        <div className="flex w-full flex-col items-start gap-4 text-left">
          <Avatar />
          <div>
            <span className="text-lg font-medium highlight highlight-[#2E8B57] px-2">Brad McCourt</span>
            <p className="">Software Engineer</p>  
            <ThemeToggle />
          </div>
        </div>
       
        <ul className="flex list-none flex-col gap-4 space-y-0">
          {menuLinks.map((link) => (
            <li key={link.href}>
              <SidebarLink
                href={link.href}
                active={
                  link.href === "/"
                    ? pathname === link.href
                    : pathname.startsWith(link.href)
                }
              >
                <span>{link.name}</span>
                {link.new && (
                  <div className="flex w-fit items-center justify-center rounded-full bg-primary px-2 py-1">
                    <div className="text-xs">NEW</div>
                  </div>
                )}
              </SidebarLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
