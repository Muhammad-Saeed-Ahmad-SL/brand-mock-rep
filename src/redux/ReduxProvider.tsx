"use client";

import React from "react";
import { Provider } from "react-redux";
import { persistor, store } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { usePathname } from "next/navigation";
import Header from "@/components/layout/Header";

type ReduxProviderProps = {
  children: React.ReactNode;
};

const ReduxProvider: React.FC<ReduxProviderProps> = ({ children }) => {
  const pathname = usePathname();
  const isLogin = !(
    pathname === "/login" ||
    pathname === "/signup" ||
    pathname === "/reset-password" ||
    pathname.startsWith("/reset-password/")
  );

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {/* TODO */}
        {/* Header is imported here because usePathname is client-side and not used in the server-side root layout.
        In the future, we will move it to the root layout. */}
        <Header isLogin={isLogin} />
        {children}
      </PersistGate>
    </Provider>
  );
};

export default ReduxProvider;
