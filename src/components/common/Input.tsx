import React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

const Input: React.FC<InputProps> = ({ label, ...props }) => {
  return (
    <div className="mb-4">
      <label className="block mb-1 text-sm font-bold">{label}</label>
      <input {...props} className="border rounded w-full py-2 px-3" />
    </div>
  );
};

export default Input;
