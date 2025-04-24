import ProductCard from "@/components/ProductCard";
import ProductsList from "@/components/ProductsList";
import { Button } from "@/components/ui/button";
import { CardAction, CardContent, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default async function Home() {
  const res = await fetch("https://admin.refabry.com/api/all/product/get");
  const products = await res.json();

  return <ProductsList products={products.data.data} />;
}
