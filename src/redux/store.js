import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import productsReducer from "./features/products/productsSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      cart: cartReducer,
      products: productsReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  });
};
