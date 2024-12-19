"use client";

import React from "react";
import { Button, CircularProgress } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import InputField from "@/components/Input/InputField";
import { useTranslations } from "next-intl";

interface ForgetPasswordFormProps {
  onSubmit: (values: { email: string }) => void;
  isLoading: boolean;
}

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});

const ForgetPasswordForm: React.FC<ForgetPasswordFormProps> = ({
  onSubmit,
  isLoading,
}) => {
  const t = useTranslations("reset");

  const formik = useFormik({
    initialValues: {
      email: "",
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
          <InputField
            id="email"
            name="email"
            label="Email"
            placeholder="Enter your email"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={
              formik.touched.email && formik.errors.email
                ? formik.errors.email
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
                  d="M3.02832 9.99963L10.2246 14.8162C10.8661 15.2439 11.1869 15.4577 11.5336 15.5408C11.8399 15.6142 12.1593 15.6142 12.4657 15.5408C12.8124 15.4577 13.1332 15.2439 13.7747 14.8162L20.971 9.99963M10.2981 4.06843L4.49814 7.7109C3.95121 8.05438 3.67775 8.22612 3.4794 8.45827C3.30385 8.66375 3.17176 8.90268 3.09111 9.16063C3 9.45207 3 9.77499 3 10.4208V16.7996C3 17.9197 3 18.4798 3.21799 18.9076C3.40973 19.2839 3.71569 19.5899 4.09202 19.7816C4.51984 19.9996 5.07989 19.9996 6.2 19.9996H17.8C18.9201 19.9996 19.4802 19.9996 19.908 19.7816C20.2843 19.5899 20.5903 19.2839 20.782 18.9076C21 18.4798 21 17.9197 21 16.7996V10.4208C21 9.77499 21 9.45207 20.9089 9.16063C20.8282 8.90268 20.6962 8.66375 20.5206 8.45827C20.3223 8.22612 20.0488 8.05438 19.5019 7.7109L13.7019 4.06843C13.0846 3.6808 12.776 3.48698 12.4449 3.41143C12.152 3.34463 11.848 3.34463 11.5551 3.41143C11.224 3.48698 10.9154 3.6808 10.2981 4.06843Z"
                  stroke="#546274"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
          />

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
              <>{t("btnText")}</>
            )}
          </Button>
        </div>
      </form>
    </>
  );
};

export default ForgetPasswordForm;
