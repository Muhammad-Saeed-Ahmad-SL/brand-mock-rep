"use client";
import withAuth from "@/hooks/useAuth";
import React from "react";

const settings = () => {
  return (
    <div>
      <h1>Settings</h1>
    </div>
  );
};

export default withAuth(settings);
