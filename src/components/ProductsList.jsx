"use client";

import { addProducts } from "@/redux/features/products/productsSlice";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import ProductCard from "./ProductCard";

const ProductsList = ({ products }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addProducts(products));
  }, [dispatch, products]);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsList;
