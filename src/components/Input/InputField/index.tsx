import React, { useState } from "react";
import {
  TextField,
  FormLabel,
  InputAdornment,
  IconButton,
} from "@mui/material";
import theme from "@/global-styles/theme";
import Image from "next/image";
import ImageIcon from "@/components/ImageIcon";

interface InputFieldProps {
  id: string;
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: boolean;
  helperText?: string;
  icon?: React.ReactNode | string; // Accept both ReactNode (icon) and string (image URL)
  iconWidth?: number;
  iconHeight?: number;
  sx?: object;
}

const InputField: React.FC<InputFieldProps> = ({
  id,
  name,
  label,
  placeholder,
  type = "text",
  value,
  onChange,
  onBlur,
  error = false,
  helperText = "",
  icon,
  iconWidth = 24,
  iconHeight = 24,
  sx = {},
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";
  const inputType = isPassword && showPassword ? "text" : type;

  // Determine if the icon is an image URL or a ReactNode
  const renderStartAdornment = () => {
    if (typeof icon === "string") {
      // If the icon is a string, assume it's an image URL
      return (
        <InputAdornment position="start">
          <Image
            src={icon}
            alt="Adornment"
            width={iconWidth}
            height={iconHeight}
          />
        </InputAdornment>
      );
    } else if (React.isValidElement(icon)) {
      // If the icon is a valid React element (including SVGs)
      return <InputAdornment position="start">{icon}</InputAdornment>;
    }
    return null;
  };

  return (
    <div className="flex flex-col gap-2 w-full">
      <FormLabel
        htmlFor={id}
        sx={{
          color: theme.colors.darkBlue,
        }}
      >
        {label}
      </FormLabel>
      <TextField
        id={id}
        name={name}
        placeholder={placeholder}
        type={inputType}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        error={error}
        helperText={helperText}
        size="medium"
        InputProps={{
          startAdornment: renderStartAdornment(),
          endAdornment: isPassword ? (
            <InputAdornment position="end">
              <IconButton
                onClick={() => setShowPassword((prev) => !prev)}
                edge="end"
                className="!mr-0"
              >
                <ImageIcon
                  src={
                    showPassword
                      ? "/icons/visible.svg"
                      : "/icons/visibleOff.svg"
                  }
                  alt={showPassword ? "visible" : "visibityOff"}
                />
              </IconButton>
            </InputAdornment>
          ) : null,
        }}
        sx={{
          "& .MuiOutlinedInput-root": {
            "&:hover fieldset": {
              borderColor: theme.colors.paleGray,
              borderWidth: "3px",
            },
            // Apply hover effect only on the startAdornment SVG
            "&:hover svg path": {
              stroke: theme.colors.blue,
            },
            "& fieldset": {
              borderColor: theme.colors.paleGray,
            },
            "&.Mui-focused fieldset": {
              borderColor: theme.colors.paleGray,
            },
          },
          // Prevent color change on hover for the endAdornment SVG
          "& .MuiInputAdornment-positionEnd svg": {
            color: "inherit", // Ensure the color remains unchanged for Visibility icons
          },

          ...sx,
        }}
      />
    </div>
  );
};

export default InputField;
