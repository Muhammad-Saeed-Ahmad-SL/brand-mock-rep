"use client";
import React from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { selectIsAuthLoading } from "@/redux/auth/selector";
import AuthWrapper from "@/components/auth/AuthWrapper";
import theme from "@/global-styles/theme";
import { useTranslations } from "next-intl";
import ResetPasswordForm from "./ResetPasswordForm";

const ResetPassword = () => {
  //   const dispatch: any = useDispatch();
  const isLoading = useSelector(selectIsAuthLoading);
  const { push } = useRouter();
  const t = useTranslations("reset");
  const handleSubmit = async (values: { password: string }) => {
    try {
      const { password } = values;
      console.log(password);

      //   await dispatch(ResetPassword({ password })).unwrap();

      push("/login");
    } catch (error) {
      console.error("ResetPassword failed", error);
    }
  };

  return (
    <AuthWrapper showBg>
      <div className="grid gap-2 text-center">
        <div className="flex gap-2 flex-col items-start pb-2">
          <h1
            className="text-[32px]"
            style={{
              color: theme.colors.darkBlue,
              fontWeight: theme.fontWeights.bold,
            }}
          >
            {t("resetHeading")}
          </h1>
          <p
            className="text-base m-[unset]"
            style={{ color: theme.colors.deepGray }}
          >
            {t("resetDescription")}
          </p>
        </div>
      </div>
      <ResetPasswordForm onSubmit={handleSubmit} isLoading={isLoading} />
    </AuthWrapper>
  );
};

export default ResetPassword;
