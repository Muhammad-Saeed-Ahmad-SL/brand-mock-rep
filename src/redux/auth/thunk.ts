/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from "@/services/AuthService";
import { clearUserData } from "./slice";

export const signup = createAsyncThunk(
  "auth/signup",
  async (data: any, { rejectWithValue }) => {
    try {
      const response = await AuthService.signup(data);
      return response; // this should return { user, accessToken, refreshToken }
    } catch (error: any) {
      return rejectWithValue(error.response.data.message || "Signup failed");
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (
    credentials: { email: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await AuthService.login(credentials);
      console.log(response);

      return response; // this should return { user, accessToken, refreshToken }
    } catch (error: any) {
      return rejectWithValue(error.response.data.message || "Login failed");
    }
  }
);

export const refreshToken = createAsyncThunk(
  "auth/refreshToken",
  async (refreshToken: string, { rejectWithValue }) => {
    try {
      const response = await AuthService.refreshTokens(refreshToken); // Returns { accessToken, refreshToken }
      return response; // Response includes both tokens
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Token refresh failed"
      );
    }
  }
);

export const logout = createAsyncThunk(
  "auth/logout",
  async (_, { dispatch }) => {
    AuthService.removeAuthToken();
    dispatch(clearUserData());
  }
);
