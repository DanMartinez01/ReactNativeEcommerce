import { createSlice } from "@reduxjs/toolkit";
import { categories } from "../../../Data/categories";
import { products } from "../../../Data/products";

const homeSlice = createSlice({
  name: "home",
  initialState: {
    allCategories: categories,
    allProducts: products,
    categorySelected: "",
    productsFilterByCategory: [],
    productSelected: {},
  },
  reducers: {
    setCategory: (state, action) => {
      state.categorySelected = action.payload;

      state.productsFilterByCategory = state.allProducts.filter(
        (el) => el.category === state.categorySelected
      );
    },

    setProductSelected: (state, action) => {
      state.productSelected = action.payload;
    },
  },
});
export const { setCategory, setProductSelected } = homeSlice.actions;
export default homeSlice.reducer;
