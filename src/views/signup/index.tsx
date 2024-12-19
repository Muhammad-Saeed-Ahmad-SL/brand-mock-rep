/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { signup } from "@/redux/auth/thunk";
import { selectIsAuthLoading } from "@/redux/auth/selector";
import SignupForm from "./SignupForm";
import AuthWrapper from "@/components/auth/AuthWrapper";
import theme from "@/global-styles/theme";
import ImageIcon from "@/components/ImageIcon";
import { Button } from "@mui/material";
import CustomSnack from "@/components/Snackbar/CustomSnack";
import Link from "next/link";
import { useTranslations } from "next-intl";

const Signup = () => {
  const dispatch: any = useDispatch();
  const isLoading = useSelector(selectIsAuthLoading);
  const { push } = useRouter();
  const t = useTranslations("signup");

  const showVerificationSnack = () => {
    CustomSnack.info({
      message: "We sent you an email with a verification link.",
      description: "Please check your inbox!",
      actionLabel: "Open Email",
      actionUrl: "mailto:",
    });
  };

  const showRejectedSnack = () => {
    CustomSnack.error({
      message: "Sorry, we can't process your order because",
      description: "the images do not align with the research criteria.",
      attachmentCount: 1,
      actionLabel: "Edit Details",
      actionUrl: "#",
    });
  };

  const handleSubmit = async (values: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }) => {
    try {
      const { firstName, lastName, email, password } = values;
      await dispatch(signup({ firstName, lastName, email, password })).unwrap();

      push("/login");
    } catch (error) {
      console.error("Signup failed", error);
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
      <SignupForm onSubmit={handleSubmit} isLoading={isLoading} />

      <div className="grid gap-4">
        <p
          className="text-center text-base"
          style={{ color: theme.colors.deepGray }}
        >
          {t("alreadyHaveAccount")}{" "}
          <Link
            style={{
              color: theme.colors.blue,
              fontWeight: theme.fontWeights.bold,
            }}
            href="/login"
          >
            {t("loginLinkText")}
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
              {t("continueWith")}
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
            },
            "&:disabled": {
              background: "#B0BEC5",
              color: "#607D8B",
            },
          }}
          onClick={showVerificationSnack}
        >
          <ImageIcon src="/icons/google-icon.svg" alt="google-icon" />
          {t("signupGoogle")}
        </Button>
        <Button
          onClick={showRejectedSnack}
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
            },
            "&:disabled": {
              background: "#B0BEC5",
              color: "#607D8B",
            },
          }}
        >
          <ImageIcon src="/icons/apple-icon.svg" alt="apple-icon" />
          {t("signupApple")}
        </Button>
      </div>
    </AuthWrapper>
  );
};

export default Signup;
