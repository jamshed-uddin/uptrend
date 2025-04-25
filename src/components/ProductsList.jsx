"use client";

import React from "react";

import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";

const ProductsList = () => {
  const products = useSelector((state) => state.products.items);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsList;
