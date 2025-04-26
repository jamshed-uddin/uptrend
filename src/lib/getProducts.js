const getProducts = async () => {
  const res = await fetch("https://admin.refabry.com/api/all/product/get", {
    cache: "no-store",
  });
  const products = await res.json();

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return products?.data?.data;
};

export default getProducts;
