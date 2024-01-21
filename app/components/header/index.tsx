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
    <div className="w-screen flex justify-center mt-2">
      <header className="sticky w-3/4 z-10 h-20 bg-zinc-900 opacity-95 flex items-center justify-center rounded-3xl">
        <div className="w-full flex justify-between items-center px-8">
          <Link href="/">
            <Image
              width={70}
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
    </div>
  );
};
