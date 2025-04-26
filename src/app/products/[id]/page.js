"use client";

import AddToCartBtn from "@/components/AddToCartBtn";
import Image from "next/image";

import React from "react";
import { useParams } from "next/navigation";
import { useSelector } from "react-redux";
const ProductDetailsPage = ({ params }) => {
  const { id } = useParams();

  const products = useSelector((state) => state.products.items);

  const product = products?.find((p) => p.id == id);

  return (
    <div className="my-10 ">
      <div className="flex flex-col lg:flex-row gap-5 ">
        {/* product image */}
        <div className="lg:w-1/2">
          <div className="h-[calc(100vh-6rem)] w-full">
            <Image
              height={500}
              width={500}
              src={`https://admin.refabry.com/storage/product/${product?.image}`}
              alt={"name"}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* product details */}
        <div className="lg:w-1/2 space-y-3">
          <h2 className="text-2xl font-medium">{product?.name}</h2>

          <div className="flex items-center gap-2 ">
            {product?.stock > 0 ? (
              <>
                <span className={`block bg-green-400 w-3.5 h-3.5 `}></span>
                <span className="block">In stock</span>
              </>
            ) : (
              <>
                <span className={`block bg-red-500 w-3.5 h-3.5 `}></span>
                <span className="block">Out of stock</span>
              </>
            )}
          </div>
          <div>
            <p className="text-sm text-gray-500">{product?.short_desc}</p>
          </div>

          <div className="flex items-center justify-end gap-3 mt-10">
            <h3 className="text-2xl ">${product?.price}</h3>
            <AddToCartBtn product={product}>Add to cart</AddToCartBtn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
