import { TSnackMessageState } from "../../../../shared/types/snackMessage.type";

export const defaultSnackMessageState: TSnackMessageState = {
  isOpen: false,
  message: '',
  severity: 'info'
};