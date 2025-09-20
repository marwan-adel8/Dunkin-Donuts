import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  wishlist: [],
  UserInfo: null,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, quantity } = action.payload;
      const existingItem = state.cart.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.cart.push({ ...action.payload, quantity });
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
    incrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity++;
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item && item.quantity > 1) {
        item.quantity--;
      }
    },
    addToWishlist: (state, action) => {
      const existingItem = state.wishlist.find(
        (item) => item.id === action.payload.id
      );
      if (!existingItem) {
        state.wishlist.push(action.payload);
      }
    },
    removeFromWishlist: (state, action) => {
      state.wishlist = state.wishlist.filter(
        (item) => item.id !== action.payload.id
      );
    },
    // Reducers for user authentication state
    setUser: (state, action) => {
      state.UserInfo = action.payload;
    },
    LogOutUser: (state) => {
      state.UserInfo = null;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  addToWishlist,
  removeFromWishlist,
  setUser,
  LogOutUser,
} = appSlice.actions;

export default appSlice.reducer;
