import { TSnackMessageInfo } from "../../../types/snackMessage.type"

export type TSnackMessageContext = {
  isOpen: boolean;
  openSnackMessage: (messageInfo: TSnackMessageInfo) => void;
  closeSnackMessage: () => void;
} & TSnackMessageInfo;

export const defaultContext: TSnackMessageContext = {
  isOpen: false,
  message: '',
  severity: 'info',
  openSnackMessage: (messageInfo: TSnackMessageInfo) => {console.log(messageInfo)},
  closeSnackMessage: () => {}
};