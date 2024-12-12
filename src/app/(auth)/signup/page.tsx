import React from "react";
import SignupForm from "@/components/auth/SignupForm";
import AuthWrapper from "@/components/auth/AuthWrapper";

const SignupPage = () => {
  return (
    <AuthWrapper>
      <SignupForm />
    </AuthWrapper>
  );
};

export default SignupPage;
