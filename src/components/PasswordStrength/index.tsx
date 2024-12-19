"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface PasswordStrengthProps {
  password: string;
  className?: string;
}

export function PasswordStrength({
  password,
  className,
}: PasswordStrengthProps) {
  const [strength, setStrength] = useState(0);

  useEffect(() => {
    calculateStrength(password);
  }, [password]);

  const calculateStrength = (password: string) => {
    let score = 0;

    if (!password) {
      setStrength(0);
      return;
    }

    // Validation checks
    if (password.length >= 6) score += 1; // Minimum 6 characters
    if (/[A-Z]/.test(password)) score += 1; // At least one uppercase letter
    if (/[0-9]/.test(password)) score += 1; // At least one number
    if (/[^A-Za-z0-9]/.test(password)) score += 1; // At least one special character

    // Set final score (max 4)
    setStrength(score);
  };

  return (
    <div className={cn("space-y-2", className)}>
      {/* Strength Bar */}
      <div className="flex gap-1 h-[7px]">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className={cn(
              "h-full w-full transition-all duration-300 rounded-full",
              {
                "bg-[#EBEBEF]": strength <= i, // Default color for unfilled bars
                "bg-red-500": strength > 0 && i === 0, // Red for "Weak"
                "bg-orange-500": strength > 1 && i <= 1, // Orange for "Getting better"
                "bg-yellow-500": strength > 2 && i <= 2, // Yellow for "Strong password"
                "bg-[#228636]": strength > 3 && i <= 3, // Green for "Very strong password"
              }
            )}
          />
        ))}
      </div>
    </div>
  );
}
