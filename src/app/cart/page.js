"use client";

import CartItemsList from "@/components/CartItemsList";
import TotalPrice from "@/components/TotalPrice";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2 } from "lucide-react";

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "sonner";

const Cart = () => {
  const [openInfoForm, setOpenInfoForm] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);
  const [submitInProgress, setSubmitInProgress] = useState(false);
  const [error, setError] = useState("");
  const totalPrice = cartItems.reduce((acc, item) => {
    const price = item.price * item.quantity;
    return acc + price;
  }, 0);

  console.log(totalPrice);

  const handlePlaceOrder = async (e) => {
    e.preventDefault();

    const currentTarget = e.currentTarget;
    const formData = new FormData(currentTarget);
    const data = Object.fromEntries(formData);

    const orderData = {
      ...data,
      product_ids: cartItems.map((item) => item.id).join(","),
      s_product_qty: cartItems.map((item) => item.quantity).join(","),
      advance: null,
      cod_amount: "1250",
      discount_amount: null,
      delivery_charge: "80",
    };
    console.log(orderData);

    try {
      setSubmitInProgress(true);
      const res = await fetch(
        "https://admin.refabry.com/api/public/order/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(orderData),
        }
      );

      if (!res.ok) {
        toast.error("Failed to place order");
        return;
      }

      const data = await res.json();
      if (data.status === false) {
        const errorField = Object.keys(data.error)[0];
        const errorMessage = data.error[errorField][0];
        console.log(errorMessage);
        throw new Error(errorMessage);
      }

      console.log(data);
    } catch (error) {
      console.log(error);
      toast.error(error.message ? error.message : "Failed to place order");
    } finally {
      setSubmitInProgress(false);
    }
  };

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
              <form className="space-y-2 mt-5" onSubmit={handlePlaceOrder}>
                <h2>Delivery address</h2>
                <Input
                  type={"text"}
                  placeholder="Your name"
                  required
                  name={"c_name"}
                />
                <Input
                  type={"number"}
                  placeholder="Your phone number"
                  name={"c_phone"}
                  required
                />

                <Select name={"courier"} required>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a courier" />
                  </SelectTrigger>
                  <SelectContent className={"w-fit "}>
                    <SelectGroup>
                      <SelectItem value="steadfast">Steadfast</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <Input
                  type={"text"}
                  placeholder="Your address "
                  name={"address"}
                  required
                />
                <Button
                  className={"w-full mt-5"}
                  type="submit"
                  disabled={submitInProgress}
                >
                  {submitInProgress && <Loader2 className="animate-spin" />}
                  Place order
                </Button>
              </form>
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
