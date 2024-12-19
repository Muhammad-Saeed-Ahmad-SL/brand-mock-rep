"use client";
import withAuth from "@/hooks/useAuth";
import Signup from "@/views/signup";
import React from "react";

const SignupPage = () => {
  return <Signup />;
};

export default withAuth(SignupPage);
