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

    const isPublicRoute = ["/login", "/signup", "/reset-password"].includes(
      pathname || ""
    );

    useEffect(() => {
      if (user && isPublicRoute) {
        router.replace("/"); // Redirect logged-in users away from public routes
      } else if (!user && !isPublicRoute) {
        router.replace("/login"); // Redirect non-logged-in users trying to access protected routes
      }
    }, [user, router, pathname, isPublicRoute]);

    if ((!user && !isPublicRoute) || (user && isPublicRoute)) {
      return null; // Prevent rendering while redirecting
    }

    return <WrappedComponent {...props} />;
  };

  return AuthWrapper;
};

export default withAuth;
