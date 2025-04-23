"use client";
import React from "react";
import { CardAction } from "./ui/card";
import { Button } from "./ui/button";
import { ShoppingCartIcon } from "lucide-react";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/features/cart/cartSlice";

const AddToCartBtn = ({ product }) => {
  const { id, name, price, image } = product;
  const dispatch = useDispatch();
  const handleAddToCart = (e) => {
    e.preventDefault();
    dispatch(addToCart({ id, name, price, image }));
    toast.success("Product added to cart");
  };

  return (
    <CardAction>
      <Button
        variant={"link"}
        className={"text-sm font-semibold cursor-pointer"}
        onClick={handleAddToCart}
      >
        <ShoppingCartIcon className="w-5 h-5" />
      </Button>
    </CardAction>
  );
};

export default AddToCartBtn;
