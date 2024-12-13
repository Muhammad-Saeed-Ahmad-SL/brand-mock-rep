"use client";

import React from "react";
import Link from "next/link";
import { Button, CircularProgress, FormLabel, TextField } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";
import { useFormik } from "formik";
import * as Yup from "yup";

interface SignupFormProps {
  onSubmit: (values: {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
  }) => void;
  isLoading: boolean;
}

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
});

const SignupForm: React.FC<SignupFormProps> = ({ onSubmit, isLoading }) => {
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema,
    onSubmit: (values) => {
      onSubmit(values);
    },
  });

  return (
    <div className="mx-auto max-w-sm space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold text-black">Sign Up</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Create an account to get started
        </p>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <div className="space-y-4">
          <div className="space-y-2 flex flex-col">
            <FormLabel htmlFor="username">Username</FormLabel>
            <TextField
              id="username"
              name="username"
              placeholder="Jon Doe"
              type="text"
              size="small"
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.username && Boolean(formik.errors.username)}
              helperText={formik.touched.username && formik.errors.username}
            />
          </div>
          <div className="space-y-2 flex flex-col">
            <FormLabel htmlFor="email">Email</FormLabel>
            <TextField
              id="email"
              name="email"
              placeholder="m@example.com"
              type="email"
              size="small"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </div>
          <div className="space-y-2 flex flex-col">
            <FormLabel htmlFor="password">Password</FormLabel>
            <TextField
              id="password"
              name="password"
              type="password"
              size="small"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
          </div>
          <div className="space-y-2 flex flex-col">
            <FormLabel htmlFor="confirmPassword">Confirm Password</FormLabel>
            <TextField
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              size="small"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.confirmPassword &&
                Boolean(formik.errors.confirmPassword)
              }
              helperText={
                formik.touched.confirmPassword && formik.errors.confirmPassword
              }
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
            {isLoading ? (
              <CircularProgress size={20} color="inherit" />
            ) : (
              "Sign Up"
            )}
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
};

export default SignupForm;
