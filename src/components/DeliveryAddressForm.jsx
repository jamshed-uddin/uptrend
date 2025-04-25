"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { resetCart } from "@/redux/features/cart/cartSlice";

import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { Button } from "./ui/button";

const DeliveryAddressForm = ({ cartItems, totalPrice }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [submitInProgress, setSubmitInProgress] = useState(false);

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
      cod_amount: totalPrice,
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
      router.replace("/success");
      setTimeout(() => dispatch(resetCart()), 1000);

      console.log(data);
    } catch (error) {
      console.log(error);
      toast.error(error.message ? error.message : "Failed to place order");
    } finally {
      setSubmitInProgress(false);
    }
  };

  return (
    <form className="space-y-2 mt-5" onSubmit={handlePlaceOrder}>
      <h2>Delivery address</h2>
      <Input type={"text"} placeholder="Your name" required name={"c_name"} />
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
  );
};

export default DeliveryAddressForm;
