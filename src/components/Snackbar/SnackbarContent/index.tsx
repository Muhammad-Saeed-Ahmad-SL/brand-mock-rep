"use client";

import { type SnackbarContentProps } from "@/types/snackbar";
import { cn } from "@/lib/utils";
import theme from "@/global-styles/theme";
import Link from "next/link";

const variantStyles = {
  success: "bg-white border-green-500",
  error: "bg-red-50 border-red-200",
  warning: "bg-white border-yellow-500",
  info: "bg-[#E79A004D]",
};

const variantTextStyles = {
  success: "text-green-800",
  error: "text-red-800",
  warning: "text-yellow-800",
  info: "text-[#1C2437] font-normal text-xl",
};

export function SnackbarContent({
  variant,
  message,
  description,
  actionLabel,
  actionUrl,
  attachmentCount,
  onDismiss,
}: SnackbarContentProps) {
  const renderActionLink = () => {
    if (actionLabel && actionUrl) {
      return (
        <Link
          className="!p-0"
          style={{ color: theme.colors.blue }}
          href={actionUrl}
          target="_blank"
        >
          {actionLabel}
        </Link>
      );
    }
    return null;
  };

  const renderAttachments = () => {
    if (attachmentCount) {
      return (
        <div className="flex items-center gap-1 text-sm text-gray-600">
          <span>
            {attachmentCount} - Attachment{attachmentCount !== 1 ? "s" : ""}
          </span>
        </div>
      );
    }
    return null;
  };

  return (
    <div
      className={cn(
        "flex w-full max-w-full items-start gap-3 border p-4 px-10 shadow-lg",
        variantStyles[variant]
      )}
    >
      <div
        className={cn(
          "flex-1 flex items-center gap-1",
          variantTextStyles[variant]
        )}
      >
        <p>{message}</p>
        {description && <p>{description}</p>}
        {renderActionLink()}
      </div>

      <div className="flex items-center gap-3">
        {renderAttachments()}
        <button
          onClick={onDismiss}
          className="text-gray-400 hover:text-gray-500"
          aria-label="Dismiss"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 6L18 18M18 6L6 18"
              stroke="black"
              strokeWidth="1.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
