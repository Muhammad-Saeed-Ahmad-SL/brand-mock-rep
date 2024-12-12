/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import AuthWrapper from "../AuthWrapper";
import LoginForm from "./LoginForm";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { login } from "@/redux/auth/thunk";
import { selectIsAuthLoading } from "@/redux/auth/selector";

const Login = () => {
  const dispatch: any = useDispatch();
  const isLoading = useSelector(selectIsAuthLoading);
  const { push } = useRouter();

  const handleSubmit = async (values: { email: string; password: string }) => {
    try {
      await dispatch(login(values)).unwrap();

      push("/dashboard");
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <AuthWrapper>
      <LoginForm onSubmit={handleSubmit} isLoading={isLoading} />
    </AuthWrapper>
  );
};

export default Login;
