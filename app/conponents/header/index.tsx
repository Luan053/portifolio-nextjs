"use client";

import Link from "next/link";
import Image from "next/image";
import { NavItem } from "./nav-item";

const NavItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Projetos",
    href: "/projects",
  },
];

export const Header = () => {
  return (
    <header className="absolute top-0 w-full z-10 h-24 flex items-center justify-center">
      <div className="container flex items-center justify-between">
        <Link href="/">
          <Image
            width={160}
            height={0}
            src="/images/LogoDarkMode.svg"
            alt="Logo Luan Schulz cor: Verde agua"
          />
        </Link>

        <nav className="flex items-center gap-4 sm:gap-10">
          {NavItems.map((item) => (
            <NavItem {...item} key={item.label} />
          ))}
        </nav>
      </div>
    </header>
  );
};
