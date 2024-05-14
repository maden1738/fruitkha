import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type Cart = {
  name: string;
  image: string;
  price: string;
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
      console.log(action.payload);
      let temp = [...state.value];
      temp.push(action.payload);
      state.value = temp;
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

export const { addToCart, loadCart, clearCart } = cartSlice.actions; // named export

export default cartSlice.reducer; // default export
