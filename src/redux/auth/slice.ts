/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";
import { login, refreshToken } from "./thunk";
import AuthService from "@/services/AuthService";

export interface AuthState {
  user: any | null;
  accessToken: string | null;
  refreshToken: string | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  accessToken: null,
  refreshToken: null,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetAuthError(state) {
      state.error = null;
    },
    setUserData(state, action) {
      const { user, accessToken, refreshToken } = action.payload;

      state.user = user;
      state.accessToken = accessToken;
      state.refreshToken = refreshToken;

      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
    },
    clearUserData(state) {
      state.user = null;
      state.accessToken = null;
      state.refreshToken = null;

      localStorage.removeItem("user");
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");

      document.cookie = `auth_token=; Path=/; SameSite=Strict; Secure; max-age=0`;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        console.log(action);

        state.isLoading = false;
        state.error = null;
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        state.user = action.payload.user;

        AuthService.setAuthToken(action.payload.accessToken);

        // Set access token to cookie
        const token = action.payload.accessToken;
        document.cookie = `auth_token=${token}; Path=/; SameSite=Strict; Secure`;
      })
      .addCase(login.rejected, (state: any, action) => {
        state.isLoading = false;
        state.error = action.payload || "Login failed";
      })
      .addCase(refreshToken.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(refreshToken.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;

        AuthService.setAuthToken(action.payload.accessToken);
      })
      .addCase(refreshToken.rejected, (state: any, action) => {
        state.isLoading = false;
        state.error = action.payload || "Token refresh failed";
      });
  },
});

export const { resetAuthError, setUserData, clearUserData } = authSlice.actions;

export default authSlice.reducer;
