import { NavigationMenu } from "@/components/ui/navigation-menu";
import { DesktopNavigation } from "@/components/ui/desktop-navigation";
import Sidebar from "@/components/ui/sidebar";
import { menuItems } from "./menu-items";
import Footer from "@/components/ui/footer";

export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavigationMenu menuItems={menuItems} />
      <div className="relative bg-zinc-900/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-zinc-800">
        <DesktopNavigation menuItems={menuItems} />
        <div className="flex flex-col gap-16 md:gap-24">
          {children}
          <Footer />
        </div>
      </div>
    </>
  );
}
