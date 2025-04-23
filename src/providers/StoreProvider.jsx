"use client";

import { useRef } from "react";

const { makeStore } = require("@/redux/store");
const { Provider } = require("react-redux");

const StoreProvider = ({ children }) => {
  const storeRef = useRef(null);

  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
};

export default StoreProvider;
