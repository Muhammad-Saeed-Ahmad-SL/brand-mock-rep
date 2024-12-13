/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import AuthWrapper from "../AuthWrapper";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { signup } from "@/redux/auth/thunk";
import { selectIsAuthLoading } from "@/redux/auth/selector";
import SignupForm from "./SignupForm";

const Signup = () => {
  const dispatch: any = useDispatch();
  const isLoading = useSelector(selectIsAuthLoading);
  const { push } = useRouter();

  const handleSubmit = async (values: {
    username: string;
    email: string;
    password: string;
  }) => {
    try {
      const { username, email, password } = values;
      await dispatch(signup({ name: username, email, password })).unwrap();

      push("/login");
    } catch (error) {
      console.error("Signup failed", error);
    }
  };

  return (
    <AuthWrapper>
      <SignupForm onSubmit={handleSubmit} isLoading={isLoading} />
    </AuthWrapper>
  );
};

export default Signup;
