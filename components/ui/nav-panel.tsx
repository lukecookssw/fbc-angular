"use client";
import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logo from "../../assets/img/fbc-logo.webp";
import Link from "next/link";

interface Route {
  route: string;
  text: string;
}

interface NavPanelProps {
  routes: Route[];
}
const NavPanel: React.FC<NavPanelProps> = ({ routes }) => {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col items-center bg-gray-300 text-white h-screen w-1/4 p-4 sticky top-0  overflow-y-auto">
      <div className="mb-8">
        <Link href="/">
          <Image src={logo} alt="SSW FireBootCamp" height={70} />
        </Link>
      </div>
      <ul className="flex flex-col space-y-4">
        {routes.map((route) => (
          <li key={route.route}>
            <Link
              href={route.route}
              className={`hover:text-red-500 ${
                pathname === route.route ? "active" : ""
              }`}
            >
              {route.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavPanel;
