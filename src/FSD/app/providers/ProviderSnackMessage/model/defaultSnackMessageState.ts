import { TSnackMessageState } from "../../../../shared/types/snackMessage";

export const defaultSnackMessageState: TSnackMessageState = {
  isOpen: false,
  message: '',
  severity: 'info'
};