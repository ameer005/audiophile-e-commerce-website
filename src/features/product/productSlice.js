import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const { data } = await axios.get("data.json");

    return data;
  }
);

const initialState = {
  products: {},
  cart: [],
  status: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      if (!state.cart.length) state.cart.push(payload);
      state.cart.forEach((item) => {
        if (item.id === payload.id) item.quantity += 1;
        else state.cart.push(payload);
      });
    },
  },
  extraReducers: {
    [fetchProducts.pending]: (state) => {
      state.status = "loading";
    },
    [fetchProducts.fulfilled]: (state, { payload }) => {
      state.status = "success";
      state.products = payload;
    },
    [fetchProducts.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

export const { addToCart } = productSlice.actions;
export default productSlice.reducer;
