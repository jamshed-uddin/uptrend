import { Hero } from "@/components/Hero";
import ProductsList from "@/components/ProductsList";
import CardListSkeleton from "@/components/Skeletons";
import { Suspense } from "react";

export default async function Home() {
  return (
    <>
      <Hero />
      <Suspense fallback={<CardListSkeleton />}>
        <ProductsList />
      </Suspense>
    </>
  );
}
