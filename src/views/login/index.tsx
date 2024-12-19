/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import LoginForm from "./LoginForm";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { login } from "@/redux/auth/thunk";
import { selectIsAuthLoading } from "@/redux/auth/selector";
import AuthWrapper from "@/components/auth/AuthWrapper";
import theme from "@/global-styles/theme";
import ImageIcon from "@/components/ImageIcon";
import { Button } from "@mui/material";
import Link from "next/link";
import { useTranslations } from "next-intl";

const Login = () => {
  const dispatch: any = useDispatch();
  const isLoading = useSelector(selectIsAuthLoading);
  const { push } = useRouter();
  const t = useTranslations("login");
  const handleSubmit = async (values: { email: string; password: string }) => {
    try {
      await dispatch(login(values)).unwrap();

      push("/dashboard");
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <AuthWrapper>
      <div className="grid gap-2 text-center">
        <h1
          className="text-4xl"
          style={{
            color: theme.colors.darkBlue,
            fontWeight: theme.fontWeights.bold,
          }}
        >
          {t("heading")}
        </h1>
        <p className="text-[#546274] text-base m-[unset]">{t("description")}</p>
      </div>
      <LoginForm onSubmit={handleSubmit} isLoading={isLoading} />
      <div className="grid gap-4">
        <p
          className="text-center text-base"
          style={{ color: theme.colors.deepGray }}
        >
          {t("dontHaveAccount")}{" "}
          <Link
            style={{
              color: theme.colors.blue,
              fontWeight: theme.fontWeights.bold,
            }}
            href="/signup"
          >
            {t("signUpLinkText")}
          </Link>
        </p>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span
              className="w-full border-t"
              style={{ borderColor: theme.colors.lightGray }}
            />
          </div>
          <div className="relative flex justify-center text-base">
            <span
              className="bg-white px-2"
              style={{ color: theme.colors.deepGray }}
            >
              {t("or")}
            </span>
          </div>
        </div>
        <Button
          className="w-full h-14 flex gap-4 !text-base"
          type="submit"
          size="large"
          disabled={isLoading}
          sx={{
            textTransform: "capitalize",
            color: theme.colors.darkBlue,
            fontWeight: theme.fontWeights.bold,
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
          <ImageIcon src="/icons/google-icon.svg" alt="google-icon" />
          {t("signinGoogle")}
        </Button>
        <Button
          className="w-full h-14 flex gap-4 !text-base"
          type="submit"
          size="large"
          disabled={isLoading}
          sx={{
            textTransform: "capitalize",
            background:
              "linear-gradient(180deg, #F6F6FF -18.35%, #EBEBEF 128.01%)",
            color: theme.colors.darkBlue,
            fontWeight: theme.fontWeights.bold,
            border: "1px solid",
            borderImageSource:
              "linear-gradient(180deg, #F6F6FF 0%, #EBEBEF 100%)",
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
          <ImageIcon src="/icons/apple-icon.svg" alt="apple-icon" />
          {t("signinApple")}
        </Button>
      </div>
    </AuthWrapper>
  );
};

export default Login;
