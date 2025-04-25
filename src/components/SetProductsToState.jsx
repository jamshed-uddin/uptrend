"use client";

import getProducts from "@/lib/getProducts";
import { addProducts } from "@/redux/features/products/productsSlice";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const SetProductsToState = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAndSetProducts = async () => {
      const products = await getProducts();

      dispatch(addProducts(products));
    };

    fetchAndSetProducts();
  }, [dispatch]);

  return null;
};

export default SetProductsToState;
