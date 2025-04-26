import Link from "next/link";
import React from "react";
import CartIcon from "./CartIcon";

const Header = () => {
  return (
    <nav className=" fixed top-0 left-0 right-0 lg:!px-12 px-3 bg-white z-20 py-3">
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
