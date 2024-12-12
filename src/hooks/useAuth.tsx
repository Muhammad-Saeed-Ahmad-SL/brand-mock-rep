"use client";

import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter, usePathname } from "next/navigation";
import { selectCurrentUser } from "@/redux/auth/selector";

const withAuth = (WrappedComponent: React.ComponentType) => {
  const AuthWrapper: React.FC = (props) => {
    const user = useSelector(selectCurrentUser);
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
      if (user && (pathname === "/login" || pathname === "/signup")) {
        // Redirect authenticated users away from login and signup pages
        router.replace("/");
      } else if (!user && pathname !== "/login" && pathname !== "/signup") {
        // Redirect unauthenticated users to login if trying to access protected routes
        router.replace("/login");
      }
    }, [user, router, pathname]);

    if (
      (!user && pathname !== "/login" && pathname !== "/signup") ||
      (user && (pathname === "/login" || pathname === "/signup"))
    ) {
      return null; // Prevent rendering while redirecting
    }

    // Render the wrapped component if conditions are met
    return <WrappedComponent {...props} />;
  };

  return AuthWrapper;
};

export default withAuth;
