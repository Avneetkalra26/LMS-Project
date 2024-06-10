import { createSlice } from "@reduxjs/toolkit";
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    authStatus: false,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.authStatus = true;
    },
    logout: (state) => {
      state.authStatus = false;
      state.user = null;
    },
  },
});

// to manipulate the data from components
export const { login, logout } = authSlice.actions;


// to send the data to store 
export default authSlice.reducer;
