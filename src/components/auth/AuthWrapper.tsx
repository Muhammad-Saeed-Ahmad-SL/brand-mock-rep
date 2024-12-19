"use client";
/* eslint-disable @next/next/no-img-element */
import React from "react";

type AuthWrapperProps = {
  children: React.ReactNode;
  showBg?: boolean;
};

const AuthWrapper: React.FC<AuthWrapperProps> = ({ children, showBg }) => {
  return (
    <div className="relative">
      {!showBg && (
        <img
          src={"/background/bg.png"}
          alt="background"
          className="w-full h-full absolute z-[-1] px-[75px] object-contain"
        />
      )}
      <div className="min-h-screen  flex items-center justify-center">
        <div className="px-8 py-[29px] bg-white rounded-2xl w-full max-w-[664px]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthWrapper;
