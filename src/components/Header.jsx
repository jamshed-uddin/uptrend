import Link from "next/link";
import React from "react";
import CartIcon from "./CartIcon";

const Header = () => {
  return (
    <nav className="my-4">
      <ul className="flex items-center justify-between">
        <li className="text-xl font-bold flex-grow">
          <Link href={"/"}>upTrend</Link>
        </li>
        <li className="">
          <CartIcon />
        </li>
      </ul>
    </nav>
  );
};

export default Header;
