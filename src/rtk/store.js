import { configureStore } from "@reduxjs/toolkit";
import ProductsSlice from "./Slices/ProductsSlice";
import CartSlice from "./Slices/CartSlice";

export const store = configureStore({
  reducer: {
    products: ProductsSlice,
    cart:CartSlice,
  },
});
