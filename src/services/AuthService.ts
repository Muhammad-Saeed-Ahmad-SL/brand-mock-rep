/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

const BASE_AUTH_URL = `${process.env.NEXT_PUBLIC_API_URL}/auth`;

class AuthService {
  static async signup(data: any) {
    const response = await axios.post(`${BASE_AUTH_URL}/signup`, data);
    return response.data;
  }

  static async login(credentials: { email: string; password: string }) {
    const response = await axios.post(`${BASE_AUTH_URL}/login`, credentials);
    return response.data;
  }

  static async refreshTokens(refreshToken: string) {
    const response = await axios.post(`${BASE_AUTH_URL}/refresh`, {
      refreshToken,
    });
    return response.data;
  }

  static setAuthToken(token: string) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }

  static removeAuthToken() {
    delete axios.defaults.headers.common["Authorization"];
  }
}

export default AuthService;
