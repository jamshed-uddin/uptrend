import AddToCartBtn from "@/components/AddToCartBtn";
import Image from "next/image";
import React from "react";

const ProductDetails = async ({ params }) => {
  return (
    <div>
      {params.id}

      <div className="flex flex-col lg:flex-row gap-5 ">
        {/* product image */}
        <div className="lg:w-1/2">
          <div className="h-[calc(100vh-6rem)] w-full">
            <Image
              height={500}
              width={500}
              src={`https://admin.refabry.com/storage/product/3225_1734205046.webp`}
              alt={"name"}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* product details */}
        <div className="lg:w-1/2 space-y-3">
          <h2 className="text-2xl font-medium">product name</h2>

          <div className="flex items-center gap-2">
            <span className={`block bg-green-400 w-3 h-3 `}></span>{" "}
            <span className="block">In stock</span>
            <span className={`block bg-red-500 w-3 h-3 `}></span>{" "}
            <span className="block">Out of stock</span>
          </div>
          <div>
            <p className="text-sm text-gray-500">
              Best Airproof, Dustproof & Waterproof Jacket for Winter || Call :
              ☎01750221655 WhatsApp ☎01750221655 Details: 1. Fabric: Premium
              Suskin 2. Swing: Export 3. Zipper: YKK Metal (Original) 4.
              Padding: 6 Ounces Available sizes: * M (Chest 40", Length 28") * L
              (Chest 42", Length 29") * XL (Chest 44", Length 30") * XXL (Chest
              46", Length 31") Visit us at: house 103 ,Aziz Shorok, kalachadpur
              /Nadda ✨ Fast delivery options ✨
            </p>
          </div>

          <div className="flex items-center ">
            <h3 className="text-2xl ">$343</h3>
            {/* <AddToCartBtn /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
