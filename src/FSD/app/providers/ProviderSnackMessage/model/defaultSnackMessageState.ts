import { TSnackMessageState } from "../../../../shared/context/snackMessageContext/model/types";

export const defaultSnackMessageState: TSnackMessageState = {
  isOpen: false,
  message: '',
  severity: 'info'
};