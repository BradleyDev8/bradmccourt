import Link from "next/link";

export default function SidebarLink({
    href,
    active,
    prefetch = true,
    children,
}: {
    href: string;
    active: boolean;
    children: React.ReactNode;
    prefetch?: boolean;
}) {
    return (
    <Link href={href} prefetch={prefetch} className={`flex items-center gap-2 py-1 hover:text-high-contrast-text ${active ? "text-high-contrast-text" : "text-low-contrast-text"}`}>
        {children}
    </Link>
    )
}