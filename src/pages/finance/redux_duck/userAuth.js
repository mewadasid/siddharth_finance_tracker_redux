import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    userFullname: "sid",
    userEmail: "sid@gmail.com",
    userPassword: "Sid@12345",
  },
  {
    userFullname: "Siddharth Pandya",
    userEmail: "Aa@gmail.com",
    userPassword: "Sid@12345",
  },
];

const userAuth = createSlice({
  name: " register",
  initialState,
  reducers: {
    registerData: (state, action) => {
      state.push(action.payload);
    },
  },
});
export const { registerData } = userAuth.actions;
export default userAuth.reducer;
