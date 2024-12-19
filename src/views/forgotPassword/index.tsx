"use client";
import React from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
// import { ForgetPassword } from "@/redux/auth/thunk";
import { selectIsAuthLoading } from "@/redux/auth/selector";
import AuthWrapper from "@/components/auth/AuthWrapper";
import theme from "@/global-styles/theme";
import ImageIcon from "@/components/ImageIcon";
import { useTranslations } from "next-intl";
import ForgetPasswordForm from "./ForgetPasswordForm";

const ForgetPassword = () => {
  //   const dispatch: any = useDispatch();
  const isLoading = useSelector(selectIsAuthLoading);
  const { push } = useRouter();
  const t = useTranslations("reset");
  const handleSubmit = async (values: { email: string }) => {
    try {
      const { email } = values;
      console.log(email);

      //   await dispatch(ForgetPassword({ email })).unwrap();

      push("/login");
    } catch (error) {
      console.error("ForgetPassword failed", error);
    }
  };

  return (
    <AuthWrapper>
      <div className="grid gap-2 text-center">
        <div className="flex gap-6 flex-col items-center pb-2">
          <ImageIcon
            src={"/resetPassword/key.png"}
            alt={"Key"}
            width={172}
            height={172}
            className="w-[172px] h-[172px]"
          />
          <h1
            className="text-[32px]"
            style={{
              color: theme.colors.darkBlue,
              fontWeight: theme.fontWeights.bold,
            }}
          >
            {t("heading")}
          </h1>
          <p
            className="text-base m-[unset]"
            style={{ color: theme.colors.deepGray }}
          >
            {t("description")}
          </p>
        </div>
      </div>
      <ForgetPasswordForm onSubmit={handleSubmit} isLoading={isLoading} />
    </AuthWrapper>
  );
};

export default ForgetPassword;
