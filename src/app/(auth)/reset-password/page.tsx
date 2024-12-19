"use client";
import withAuth from "@/hooks/useAuth";
import ForgetPassword from "@/views/forgotPassword";
import React from "react";

const ForgotPasswordPage = () => {
  return <ForgetPassword />;
};

export default withAuth(ForgotPasswordPage);
