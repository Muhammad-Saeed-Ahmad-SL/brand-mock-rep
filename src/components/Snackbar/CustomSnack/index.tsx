"use client";

import { toast } from "sonner";
import { type SnackProps } from "@/types/snackbar";
import { SnackbarContent } from "../SnackbarContent";

export const CustomSnack = {
  success: ({ message, description, actionLabel, actionUrl }: SnackProps) =>
    toast.custom((t) => (
      <SnackbarContent
        variant="success"
        message={message}
        description={description}
        actionLabel={actionLabel}
        actionUrl={actionUrl}
        onDismiss={() => toast.dismiss(t)}
      />
    )),

  error: ({
    message,
    description,
    actionLabel,
    actionUrl,
    attachmentCount,
  }: SnackProps) =>
    toast.custom((t) => (
      <SnackbarContent
        variant="error"
        message={message}
        description={description}
        actionLabel={actionLabel}
        actionUrl={actionUrl}
        attachmentCount={attachmentCount}
        onDismiss={() => toast.dismiss(t)}
      />
    )),

  warning: ({ message, description, actionLabel, actionUrl }: SnackProps) =>
    toast.custom((t) => (
      <SnackbarContent
        variant="warning"
        message={message}
        description={description}
        actionLabel={actionLabel}
        actionUrl={actionUrl}
        onDismiss={() => toast.dismiss(t)}
      />
    )),

  info: ({ message, description, actionLabel, actionUrl }: SnackProps) =>
    toast.custom((t) => (
      <SnackbarContent
        variant="info"
        message={message}
        description={description}
        actionLabel={actionLabel}
        actionUrl={actionUrl}
        onDismiss={() => toast.dismiss(t)}
      />
    )),
};

export default CustomSnack;
