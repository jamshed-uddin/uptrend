"use client";

import { ShoppingCartIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const CartIcon = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalItem = cartItems.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);
  return (
    <Link className="relative" href={"/cart"}>
      <ShoppingCartIcon className="w-6 h-6" />
      {!!totalItem && (
        <div className="bg-white px-1 rounded-full absolute -top-1 -right-1 text-xs font-bold">
          {totalItem}
        </div>
      )}
    </Link>
  );
};

export default CartIcon;
