import React from "react";

const TotalPrice = ({ price = 0 }) => {
  return (
    <div className="space-y-2">
      <h2 className="flex justify-between">
        <span>Subtotal</span>
        <span>${price}</span>
      </h2>
      <h2 className="flex justify-between">
        <span>Shipping</span>
        <span>$80</span>
      </h2>
      <hr className="border-b border-black" />
      <h2 className="flex justify-between">
        <span>Total</span>
        <span>${price + 80}</span>
      </h2>
    </div>
  );
};

export default TotalPrice;
