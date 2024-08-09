import { createSlice } from "@reduxjs/toolkit";

export const ProductsSlice = createSlice({
  name: "ProductsSlice",
  initialState: localStorage.getItem("myProducts")
    ? JSON.parse(localStorage.getItem("myProducts"))
    : [],
  reducers: {
    addproduct: (state, action) => {
      state.push(action.payload);
      localStorage.setItem("myProducts", JSON.stringify(state));
    },
    removeproduct: (state, action) => {
      localStorage.setItem("myProducts", JSON.stringify( state.filter((pro) => pro.id !== action.payload)));
      return state.filter((pro) => pro.id !== action.payload);
      
    },
    clear: (state, action) => {
      localStorage.setItem("myProducts", JSON.stringify([]));
      return [];
    },
  },
});
export const { addproduct, removeproduct, clear } = ProductsSlice.actions;
export default ProductsSlice.reducer;
