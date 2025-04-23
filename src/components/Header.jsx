import Link from "next/link";
import React from "react";
import CartIcon from "./CartIcon";

const Header = () => {
  return (
    <nav className="my-3">
      <ul className="flex items-center justify-between">
        <li className="text-xl font-bold flex-grow">upTrend</li>
        <li className="">
          <CartIcon />
        </li>
      </ul>
    </nav>
  );
};

export default Header;
