import { createSlice } from "@reduxjs/toolkit";
import { IUserInitialState } from "../../types/user";

const initialState: IUserInitialState = {
  email: null,
  token: null,
  id: null,
};

const mainSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
    },
    removeUser(state) {
      state.email = null;
      state.token = null;
      state.id = null;
    },
  },
});

export const { setUser, removeUser } = mainSlice.actions;

export default mainSlice.reducer;
