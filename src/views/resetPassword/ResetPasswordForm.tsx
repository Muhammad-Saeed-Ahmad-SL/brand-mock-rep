"use client";

import React from "react";
import { Button, CircularProgress } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import InputField from "@/components/Input/InputField";
import { useTranslations } from "next-intl";
import { PasswordStrength } from "@/components/PasswordStrength";
import theme from "@/global-styles/theme";
import { useRouter } from "next/navigation";

interface ResetPasswordFormProps {
  onSubmit: (values: { password: string }) => void;
  isLoading: boolean;
}

const validationSchema = Yup.object({
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
});

const ResetPasswordForm: React.FC<ResetPasswordFormProps> = ({
  onSubmit,
  isLoading,
}) => {
  const t = useTranslations("reset");
  const { push } = useRouter();

  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema,
    onSubmit: (values) => {
      onSubmit(values);
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit} className="py-4">
        <div className="grid gap-6">
          <div className="grid gap-4">
            <InputField
              id="password"
              name="password"
              label="Password"
              type="password"
              placeholder="Enter your password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              // helperText={
              //   formik.touched.password && formik.errors.password
              //     ? formik.errors.password
              //     : undefined
              // }
              icon={
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.3212 10.6852L4 19L6 21M7 16L9 18M20 7.5C20 9.98528 17.9853 12 15.5 12C13.0147 12 11 9.98528 11 7.5C11 5.01472 13.0147 3 15.5 3C17.9853 3 20 5.01472 20 7.5Z"
                    stroke="#546274"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              }
            />
            <PasswordStrength password={formik.values.password} />
          </div>
          <InputField
            id="confirm-password"
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            placeholder="Confirm your password"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.confirmPassword &&
              Boolean(formik.errors.confirmPassword)
            }
            helperText={
              formik.touched.confirmPassword && formik.errors.confirmPassword
                ? formik.errors.confirmPassword
                : undefined
            }
            icon={
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.3212 10.6852L4 19L6 21M7 16L9 18M20 7.5C20 9.98528 17.9853 12 15.5 12C13.0147 12 11 9.98528 11 7.5C11 5.01472 13.0147 3 15.5 3C17.9853 3 20 5.01472 20 7.5Z"
                  stroke="#546274"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
          />
          <div className="flex gap-4">
            <Button
              className="w-full h-14 flex gap-4 !text-base"
              type="button"
              size="large"
              disabled={isLoading}
              onClick={() => {
                push("/login");
              }}
              sx={{
                textTransform: "capitalize",
                color: theme.colors.darkBlue,
                background:
                  "linear-gradient(180deg, #F6F6FF -18.35%, #EBEBEF 128.01%)",
                "&:hover": {
                  background:
                    "linear-gradient(180deg, #F6F6FF -18.35%, #EBEBEF 128.01%)",
                  // boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
                },
                "&:disabled": {
                  background: "#B0BEC5",
                  color: "#607D8B",
                },
              }}
            >
              {t("backToLogin")}
            </Button>
            <Button
              className="w-full h-14 flex gap-4 !text-base"
              type="submit"
              size="large"
              disabled={isLoading}
              sx={{
                textTransform: "capitalize",
                background:
                  "linear-gradient(180deg, #1E85FF -58.6%, #1976D2 148.96%)",
                color: "white",
                "&:hover": {
                  background:
                    "linear-gradient(180deg, #1565C0 -58.6%, #0D47A1 148.96%)",
                  boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
                },
                "&:disabled": {
                  background: "#B0BEC5",
                  color: "#607D8B",
                },
              }}
            >
              {isLoading ? (
                <CircularProgress size={20} color="inherit" />
              ) : (
                <>{t("setPassword")}</>
              )}
            </Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default ResetPasswordForm;
