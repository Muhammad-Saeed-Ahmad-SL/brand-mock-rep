"use client";
import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "@/redux/auth/thunk";
import { useRouter } from "next/navigation";

const Header: React.FC = () => {
  const { push } = useRouter();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dispatch: any = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    push("/settings");
  };
  return (
    <header className="p-4 bg-blue-500 text-white flex justify-between">
      <span>Header</span>
      <button onClick={handleLogout}>Logout</button>
    </header>
  );
};

export default Header;
