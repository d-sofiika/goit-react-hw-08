
import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.goit.global/";

export const register =  createAsyncThunk("auth/register",
 async (_, thunkAPI) => {
    try {
      const response = await axios.post("/users/signup");

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  })
    ;
    export const login =  createAsyncThunk("auth/login",
 async (_, thunkAPI) => {
    try {
      const response = await axios.post("/users/login");

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  })
    ;export const logOut =  createAsyncThunk("auth/logout",
 async (_, thunkAPI) => {
    try {
      const response = await axios.post("/users/logout");

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  })
    ;
    export const refreshUser =  createAsyncThunk("auth/refresh",
 async (_, thunkAPI) => {
    try {
      const response = await axios.get("/users/current");

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  })
    ;