import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button {...props} className="bg-blue-500 text-white py-2 px-4 rounded">
      {children}
    </button>
  );
};

export default Button;
