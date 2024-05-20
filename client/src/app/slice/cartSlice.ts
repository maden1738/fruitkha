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
      let cartItems = [...state.value];
      const product = action.payload;
      let exists = false;
      cartItems = cartItems.map((item) => {
        if (item.id === product.id) {
          exists = true;
        }
        return item;
      });

      if (!exists) {
        product["quantity"] = 1;
        cartItems.push(product);
      }
      state.value = cartItems;
      localStorage.setItem("cart", JSON.stringify(state.value));
    },

    updateCart: (state, action) => {
      const product = action.payload;
      let cartItems = [...state.value];
      let exists = false;
      if (product.quantity === 0) {
        cartItems = cartItems.filter((item) => item.id !== product.id); // removing the product once the quantity reaches zero
      } else {
        // searching for the product and updating the quantity count
        cartItems = cartItems.map((item) => {
          if (item.id === product.id) {
            console.log("there");
            exists = true;
            return { ...item, quantity: product.quantity };
          }
          return item;
        });
        if (!exists) {
          console.log("here");
          cartItems.push(product);
        }
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
