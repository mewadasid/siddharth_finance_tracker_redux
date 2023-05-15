import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  // {
  //   userFullname: "sid",
  //   userEmail: "Sid@gmail.com",
  //   userPassword: "Sid@12345",
  // },
  // {
  //   userFullname: "Siddharth Pandya",
  //   userEmail: "Aa@gmail.com",
  //   userPassword: "Sid@12345",
  // },
];

const userAuth = createSlice({
  name: " register",
  initialState,
  reducers: {
    registerData: (state, action) => {
      if (state.length === 0) {
        return (state = action.payload);
      } else {
        state.push(action.payload);
      }
    },
  },
});
export const { registerData } = userAuth.actions;
export default userAuth.reducer;
