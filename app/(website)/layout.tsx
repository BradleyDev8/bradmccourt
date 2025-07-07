import { NavigationMenu } from "@/components/ui/navigation-menu";
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
      <div className="mx-auto flex min-h-screen w-full max-w-4xl gap-12 px-8 bg-zinc-900/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-zinc-800 ">
        <div className="flex h-full w-full flex-col justify-between">
          <div className="flex flex-col gap-16 py-8 md:gap-24 md:py-20">
            {children}
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
