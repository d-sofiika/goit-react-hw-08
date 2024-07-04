import { createSlice } from "@reduxjs/toolkit"
import { login, logOut, register } from "./operations";

 const slice = createSlice({
     name: 'auth',
    initialState: {
    user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
    }, extraReducers: builder => {
      builder
        .addCase(register.fulfilled, (state, { payload }) => {
          state.user = payload.user
          state.token = payload.token
          state.isLoggedIn = true
        })
      .addCase(login.fulfilled, (state, { payload }) => {
          state.user = payload.user
          state.token = payload.token
          state.isLoggedIn = true
      })
      .addCase(logOut.fulfilled, (state) => {
          state.user ={
    name: null,
    email: null,
  },
          state.token = null
          state.isLoggedIn = false
      })
    }
 })
export const authReducer = slice.reducer;