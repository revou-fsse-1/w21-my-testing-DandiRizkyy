import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  email: "",
  password: "",
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    changeEmail: (state, action) => {
      state.email = action.payload;
    },
    changePassword: (state, action) => {
      state.password = action.payload;
    },

    resetForm: (state) => {
      state.email = "";
      state.password = "";
    },
  },
});

export const { changeEmail, changePassword, resetForm } = formSlice.actions;

export default formSlice.reducer;
