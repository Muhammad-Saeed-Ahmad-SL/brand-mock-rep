import React from "react";
import Card from "./Card";
import { useTranslations } from "next-intl";

const HomePage = () => {
  const t = useTranslations("home");
  return (
    <div className="min-h-screen  flex items-center justify-center">
      <div className="flex gap-8">
        <Card
          src={"/home/imageTest.png"}
          alt={"image-test"}
          title={t("imageTestingHead")}
          description={t("imageTestingDesc")}
          buttonText={t("btnText")}
        />
        <Card
          src={"/home/textTest.png"}
          alt={"text-test"}
          title={t("textTestingHead")}
          description={t("textTestingDesc")}
          buttonText={t("btnText")}
        />
      </div>
    </div>
  );
};

export default HomePage;
