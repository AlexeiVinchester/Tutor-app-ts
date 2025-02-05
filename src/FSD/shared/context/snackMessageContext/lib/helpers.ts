import { TAlertSeverity, TSnackMessageInfo } from "../../../types/snackMessage.type";

export const createSnackMessage = (message: string, severity: TAlertSeverity): TSnackMessageInfo => {
  return { message, severity };
};

export const showSuccessMessage = (message: string) => {
  return createSnackMessage(message, 'success');
};

export const showErrorMessage = (message: string) => {
  return createSnackMessage(message, 'error');
};