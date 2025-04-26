import getProducts from "@/lib/getProducts";
import ProductDetails from "./ProductDetails";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const products = await getProducts();

  const product = products?.find((p) => p.id == id);
  if (!product) {
    return {
      title: "Product not found",
      description: "This product does not exist",
    };
  }

  return {
    title: product.name,
    description: product.sort_desc,
  };
}

const ProductDetailsPage = async ({ params }) => {
  const { id } = await params;

  const products = await getProducts();

  const product = products?.find((p) => p.id == id);
  return <ProductDetails product={product} />;
};

export default ProductDetailsPage;
