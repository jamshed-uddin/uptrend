import Image from "next/image";
import React from "react";
import QuantityAndDeleteCartItem from "./QuantityAndDeleteCartItem";

const CartItemsList = ({ cartItems }) => {
  return (
    <div className="space-y-3 my-7">
      {cartItems?.map((item) => (
        <div key={item.id} className="flex gap-5  ">
          <div className="h-20 w-20 rounded-lg overflow-hidden">
            <Image
              height={100}
              width={100}
              src={`https://admin.refabry.com/storage/product/${item.image}`}
              alt={item.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="lg:flex w-full">
            <div className="flex-grow">
              <h2 className="text-lg font-medium">{item.name}</h2>
              <h3>${item.price}</h3>
            </div>
            <div>
              <QuantityAndDeleteCartItem item={item} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItemsList;
