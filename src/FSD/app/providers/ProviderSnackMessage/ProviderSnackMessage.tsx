import { ReactNode, useState, useCallback } from "react";
import { SnackMessageContext } from "../../../shared/context/snackMessageContext/snackMessageContext";
import { defaultSnackMessageState } from "./model/defaultSnackMessageState";
import { TSnackMessageState, TSnackMessageInfo } from "../../../shared/types/snackMessage";

export type TProviderSnackMessageProps = {
  children: ReactNode;
};

export const ProviderSnackMessage = ({ children }: TProviderSnackMessageProps) => {
  const [snackMessageState, setSnackMessageState] = useState<TSnackMessageState>(defaultSnackMessageState);
  console.log(snackMessageState)
  const openSnackMessage = useCallback((messageInfo: TSnackMessageInfo) => {
    console.log('open snack')
    setSnackMessageState((prev) => ({
      ...prev,
      isOpen: true,
      message: messageInfo.message,
      severity: messageInfo.severity
    }));
  }, []);

  const closeSnackMessage = useCallback(() => {
    console.log('close snack')
    setSnackMessageState((prev) => ({
      ...prev,
      ...defaultSnackMessageState
    }));
  }, []);

  return (
    <SnackMessageContext.Provider value={{
      ...snackMessageState,
      openSnackMessage,
      closeSnackMessage
    }}>
      {children}
    </SnackMessageContext.Provider>
  );
};