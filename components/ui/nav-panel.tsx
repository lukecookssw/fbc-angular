"use client";
import React, { useEffect, useState } from "react";

import Image from "next/image";
import { usePathname } from "next/navigation";
import logo from "../../assets/img/fbc-logo.webp";
import Link from "next/link";

export interface Route {
  route: string;
  title: string;
}

export interface NavPanelProps {
  routes: Route[] | undefined;
}

const NavPanel: React.FC<NavPanelProps> = ({ routes }) => {
  const [currentPath, setCurrentPath] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    // TODO: Improve this logic. Super hacky...
    const route = pathname.replace("/", "");
    setCurrentPath(route);
  }, [pathname]);

  return (
    <nav className="flex flex-col items-center bg-gray-300 text-white h-screen w-[300px] min-w-[300px] p-4 sticky top-0 overflow-y-auto">
      <div className="mb-8">
        <Link href="/">
          <Image src={logo} alt="SSW FireBootCamp" height={50} />
        </Link>
      </div>
      <ol className="flex flex-col space-y-4">
        {routes?.map((route) => (
          <li key={route.route} className={`hover:text-red-500 ${
            currentPath === route.route ? "active" : ""
          }`}>
            <Link href={route.route}>
              {route.title}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default NavPanel;
