import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./category/categorySlice";
import productSlice from "./product/productSlice";

export const store = configureStore({
  reducer: {
    product: productSlice,
    category: categorySlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
