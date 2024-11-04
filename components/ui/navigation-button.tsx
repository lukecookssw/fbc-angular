import React from "react";
import Link from "next/link";

export interface NavigationButtonProps {
  title: string;
  route: string;
}

const NavigationButton: React.FC<NavigationButtonProps> = ({
  title,
  route,
}) => {
  return (
    <Link
      href={route}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
    >
      {title}
    </Link>
  );
};

export default NavigationButton;
