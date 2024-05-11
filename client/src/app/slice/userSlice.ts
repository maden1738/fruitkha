import { createSlice } from "@reduxjs/toolkit";

type User = {
  _id: string;
  name: string;
  email: string;
  password: string;
  [key: string]: any;
};

interface UserState {
  value: User | null;
}

const initialState: UserState = { value: null };

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      //  console.log(action);
      state.value = action.payload;
    },
    logout: (state) => {
      state.value = null;
      // localStorage.removeItem("access_token")
      localStorage.clear();
    },
  },
});

export const { setUser, logout } = userSlice.actions; // named export

export default userSlice.reducer; // default export
