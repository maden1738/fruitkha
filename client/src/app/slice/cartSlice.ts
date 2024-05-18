import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type Cart = {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
  [key: string]: any;
};

interface CartState {
  value: Cart[] | [];
}

const initialState: CartState = { value: [] };

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let temp = [...state.value];
      let newCartItem = action.payload;
      newCartItem["quantity"] = 1;
      temp.push(newCartItem);
      state.value = temp;
      localStorage.setItem("cart", JSON.stringify(state.value));
    },

    updateCart: (state, action) => {
      const productId = action.payload.id;
      const quantity = action.payload.value;
      let cartItems = [...state.value];

      if (quantity !== 0) {
        cartItems = cartItems.map((item) => {
          if (item.id === productId) {
            return { ...item, quantity: quantity };
          }
          return item;
        });
      } else {
        cartItems = cartItems.filter((item) => item.id !== productId);
      }

      state.value = cartItems;
      localStorage.setItem("cart", JSON.stringify(state.value));
    },

    loadCart: (state, action: PayloadAction<Cart[]>) => {
      state.value = action.payload;
    },

    clearCart: (state) => {
      state.value = [];
    },
  },
});

export const { addToCart, loadCart, clearCart, updateCart } = cartSlice.actions; // named export

export default cartSlice.reducer; // default export
