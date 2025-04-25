import { Hero } from "@/components/Hero";
import ProductsList from "@/components/ProductsList";

export default async function Home() {
  return (
    <>
      <Hero />
      <ProductsList />;
    </>
  );
}
