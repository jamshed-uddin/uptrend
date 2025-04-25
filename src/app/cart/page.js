"use client";

import CartItemsList from "@/components/CartItemsList";
import TotalPrice from "@/components/TotalPrice";
import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div>
      <h1 className="text-xl font-medium">Cart</h1>

      <CartItemsList cartItems={cartItems} />
      <TotalPrice />
    </div>
  );
};

export default Cart;
