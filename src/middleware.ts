import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  // Retrieve token from cookies
  const token = req.cookies.get("auth_token");

  if (!token) {
    // Redirect to login page if the token is missing or invalid
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Optionally validate the token or decode it here

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"], // Protect dashboard routes
};
