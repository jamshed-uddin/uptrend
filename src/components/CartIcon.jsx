"use client";

import { ShoppingCartIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const CartIcon = () => {
  const cartItems = useSelector((state) => state.cart.items);
  return (
    <Link className="relative" href={"/cart"}>
      <ShoppingCartIcon className="w-6 h-6" />
      {!!cartItems.length && (
        <div className="bg-white px-1 rounded-full absolute -top-1 -right-1 text-xs font-bold">
          {cartItems.length}
        </div>
      )}
    </Link>
  );
};

export default CartIcon;
