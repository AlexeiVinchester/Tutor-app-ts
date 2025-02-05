import { AlertProps } from "@mui/material";

export type TAlertSeverity = NonNullable<AlertProps['severity']>;

export type TSnackMessageInfo = {
  message: string;
  severity: TAlertSeverity;
};

export type TSnackMessageState = {
  isOpen: boolean;
} & TSnackMessageInfo;
