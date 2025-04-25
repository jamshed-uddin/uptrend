"use client";

import CartItemsList from "@/components/CartItemsList";
import DeliveryAddressForm from "@/components/DeliveryAddressForm";
import TotalPrice from "@/components/TotalPrice";
import { Button } from "@/components/ui/button";

import React, { useState } from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const [openInfoForm, setOpenInfoForm] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);

  const totalPrice = cartItems.reduce((acc, item) => {
    const price = item.price * item.quantity;
    return acc + price;
  }, 0);

  console.log(totalPrice);

  console.log(cartItems);

  return (
    <div>
      <h1 className="text-xl font-medium">Cart</h1>

      {cartItems.length === 0 ? (
        <div>
          <h2>No product in cart</h2>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-5">
          <div className="lg:w-[65%]">
            <CartItemsList cartItems={cartItems} />
          </div>
          <div className="lg:w-[35%]">
            <TotalPrice price={totalPrice} />

            {/* --- delivery info form */}
            {openInfoForm && (
              <DeliveryAddressForm
                cartItems={cartItems}
                totalPrice={totalPrice}
              />
            )}

            {!openInfoForm && (
              <Button
                className={"w-full mt-5"}
                onClick={() => setOpenInfoForm(true)}
              >
                Proceed
              </Button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
