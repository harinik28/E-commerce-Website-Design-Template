import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    cart: {

    }
  },
  reducers: {
    addCart: (state, action) => {
      const { name, rate } = action.payload;
      const itemInCart = state.cart[name];
      const newCount = itemInCart ? itemInCart.count + 1 : 1;

      state.cart = {
        ...state.cart,
        [name]: { count: newCount, rate: rate }
      };
    },
    deleteCart: (state, action) => {
      const { name } = action.payload;
      const itemInCart = state.cart[name];

      if (!itemInCart) return;

      const newCount = itemInCart.count - 1;

      if (newCount === 0) {
        delete state.cart[name];
      } else {
        state.cart = {
          ...state.cart,
          [name]: { ...itemInCart, count: newCount }
        };
      }
    },
  },
});

export default productSlice.reducer;
export const { addCart, deleteCart } = productSlice.actions;
