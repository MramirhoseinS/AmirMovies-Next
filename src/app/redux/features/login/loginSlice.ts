"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { useAppSelector } from "../../hook";

export interface ILoginState {
  isLogin: boolean;
  name: string;
  username: string;
  id: number;
}

export interface ILoginData {
  name: string;
  username: string;
  id: number;
}

const initialState: ILoginState = {
  isLogin: false,
  name: "",
  username: "",
  id: 0,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    userData: (state, action: PayloadAction<ILoginData>) => {
      state.isLogin = !state.isLogin;
      state.name = action.payload.name;
      state.username = action.payload.username;
      state.id = action.payload.id;
    },
  },
});


export const { userData } = loginSlice.actions;

export default loginSlice.reducer;
