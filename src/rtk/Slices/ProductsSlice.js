import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const Fetch = createAsyncThunk("ProductsSlice/Fetch", async () => {
  const res = await fetch("https://fakestoreapi.in/api/products");
  const data = await res.json();
  return data.products;
});
export const ProductsSlice = createSlice({
  name: "ProductsSlice",
  initialState: [],
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(Fetch.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});
export const {} = ProductsSlice.actions;
export default ProductsSlice.reducer;
