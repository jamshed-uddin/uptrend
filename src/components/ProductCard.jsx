import React from "react";
import AddToCartBtn from "./AddToCartBtn";
import Image from "next/image";
import { CardContent, CardTitle } from "./ui/card";
import Link from "next/link";

const ProductCard = ({ product }) => {
  return (
    <Link className="  " href={`/products/${product.id}`}>
      <div className="h-80">
        <Image
          height={500}
          width={500}
          src={`https://admin.refabry.com/storage/product/${product.image}`}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>

      <CardTitle className={"mt-3 text-lg "}>{product.name}</CardTitle>
      <div className="flex items-center justify-between ">
        <CardContent className={"pl-0"}>${product.price}</CardContent>
        <AddToCartBtn product={product} />
      </div>
    </Link>
  );
};

export default ProductCard;
