"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { useDispatch } from "react-redux";
import { deleteItem, updateQuantiy } from "@/redux/features/cart/cartSlice";
import { Trash2Icon } from "lucide-react";

const QuantityAndDeleteCartItem = ({ item }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(item.quantity || 1);

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
    dispatch(updateQuantiy({ id: item.id, type: "increment" }));
  };
  const handleDecrement = () => {
    setQuantity((prev) => prev - 1);
    dispatch(updateQuantiy({ id: item.id, type: "decrement" }));
  };

  console.log(quantity);

  return (
    <div className="flex items-center gap-5 justify-between">
      <div className="flex items-center gap-4">
        <Button
          variant={"ghost"}
          className={"text-lg px-2"}
          onClick={handleDecrement}
        >
          -
        </Button>
        <div>{quantity}</div>
        <Button
          variant={"ghost"}
          className={"text-lg px-2"}
          onClick={handleIncrement}
        >
          +
        </Button>
      </div>
      <div>
        <Button
          variant={"ghost"}
          onClick={() => dispatch(deleteItem({ id: item.id }))}
        >
          <Trash2Icon className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default QuantityAndDeleteCartItem;
