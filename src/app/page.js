import ProductCard from "@/components/ProductCard";
import ProductsList from "@/components/ProductsList";
import { Button } from "@/components/ui/button";
import { CardAction, CardContent, CardTitle } from "@/components/ui/card";
import getProducts from "@/lib/getProducts";
import Image from "next/image";

export default async function Home() {
  const products = await getProducts();

  return <ProductsList products={products} />;
}
