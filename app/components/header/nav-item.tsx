import { cn } from "@/app/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItemProps = {
  label: string;
  href: string;
};

export const NavItem = ({ label, href }: NavItemProps) => {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        "text-slate-400 flex items-center gap-2 font-normal",
        isActive && "text-cyan-100 font-medium"
      )}
    >
      <span className="text-emerald-400">#</span>
      {label}
    </Link>
  );
};
