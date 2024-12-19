export interface SnackProps {
  message: string;
  description?: string;
  actionLabel?: string;
  actionUrl?: string;
  attachmentCount?: number;
}

export interface SnackbarContentProps {
  variant: "success" | "error" | "warning" | "info";
  message: string;
  description?: string;
  actionLabel?: string;
  actionUrl?: string;
  attachmentCount?: number;
  onDismiss: () => void;
}
