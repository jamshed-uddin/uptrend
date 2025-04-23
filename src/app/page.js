import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { CardAction, CardContent, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default async function Home() {
  const res = await fetch("https://admin.refabry.com/api/all/product/get");
  const products = await res.json();
  console.log(products.data.data);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {products?.data?.data.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
