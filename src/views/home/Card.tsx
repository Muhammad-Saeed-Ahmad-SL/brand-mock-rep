import React from "react";
import ImageIcon from "@/components/ImageIcon";
import theme from "@/global-styles/theme";
import { Button } from "@mui/material";
interface CardProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  title: string;
  description: string;
  buttonText: string;
}

const Card: React.FC<CardProps> = ({
  src,
  alt,
  width = 484,
  height = 426,
  title,
  description,
  buttonText,
}) => {
  return (
    <div className="p-8 bg-white rounded-2xl w-full max-w-[548px] grid gap-4">
      <ImageIcon
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="w-[30.25rem] h-[26.625rem]"
      />
      <div className="grid gap-2 justify-items-center">
        <h1
          className="text-[32px]"
          style={{
            color: theme.colors.darkBlue,
            fontWeight: theme.fontWeights.bold,
          }}
        >
          {title}
        </h1>
        <p
          className="text-base m-[unset] text-center"
          style={{ color: theme.colors.deepGray }}
        >
          {description}
        </p>
      </div>
      <Button
        className="w-full h-14 flex gap-4 !text-base"
        type="submit"
        size="large"
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
        }}
      >
        {buttonText}
      </Button>
    </div>
  );
};

export default Card;
