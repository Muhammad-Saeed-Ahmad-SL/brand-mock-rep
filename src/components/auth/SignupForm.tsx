/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Link from "next/link";
import { Button, CircularProgress, FormLabel, TextField } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";

export default function SignupForm({ onSubmit, isLoading }: any) {
  return (
    <div className="mx-auto max-w-sm space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold text-black">Sign Up</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Create an account to get started
        </p>
      </div>
      <form onSubmit={onSubmit}>
        <div className="space-y-4">
          <div className="space-y-2 flex flex-col">
            <FormLabel htmlFor="username">Username</FormLabel>
            <TextField
              id="username"
              name="username"
              required
              placeholder="Jon Doe"
              type="text"
              size="small"
            />
          </div>
          <div className="space-y-2 flex flex-col">
            <FormLabel htmlFor="email">Email</FormLabel>
            <TextField
              id="email"
              name="email"
              placeholder="m@example.com"
              required
              type="email"
              size="small"
            />
          </div>
          <div className="space-y-2 flex flex-col">
            <FormLabel htmlFor="password">Password</FormLabel>
            <TextField
              id="password"
              name="password"
              required
              type="password"
              size="small"
            />
          </div>
          <div className="space-y-2 flex flex-col">
            <FormLabel htmlFor="confirm-password">Confirm Password</FormLabel>
            <TextField
              id="confirm-password"
              name="confirm-password"
              required
              type="password"
              size="small"
            />
          </div>
          <Button
            className="w-full"
            type="submit"
            disabled={isLoading}
            sx={{
              background: "black",
              color: "white",
              "&:hover": {
                background: "#18181be6",
              },
            }}
          >
            {isLoading && <CircularProgress />}
            Sign Up
          </Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-white text-[#71717a] px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <div className="flex flex-col space-y-2">
        <Button
          variant="outlined"
          type="button"
          disabled={isLoading}
          sx={{
            color: "black",
            border: "1px solid #e4e4e7",
            "&:hover": {
              background: "#f4f4f5",
              borderColor: "inherit",
            },
          }}
        >
          <GitHubIcon className="mr-2 h-4 w-4" />
          Github
        </Button>
        <Button
          variant="outlined"
          type="button"
          disabled={isLoading}
          sx={{
            color: "black",
            border: "1px solid #e4e4e7",
            "&:hover": {
              background: "#f4f4f5",
              borderColor: "inherit",
            },
          }}
        >
          <GoogleIcon className="mr-2 h-4 w-4" />
          Google
        </Button>
      </div>
      <p className="text-center text-sm text-gray-600 dark:text-gray-400">
        Already have an account?{" "}
        <Link
          className="font-semibold text-gray-800 hover:underline dark:text-gray-200"
          href="/login"
        >
          Log in
        </Link>
      </p>
    </div>
  );
}
