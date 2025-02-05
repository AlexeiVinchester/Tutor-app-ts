import { ReactNode, useCallback, useState } from "react";
import { defaultModalWindowState, TModalWindowState } from "./model/defaultModalWindowState";
import { ModalWindowContext } from "../../../shared/context/modalWindowContext/modalWindowContext";
import { ModalWindow } from "../../../shared/ui/ModalWindow/modalWindow";

type TProviderModalWindowProps = {
  children: ReactNode;
}

export const ProviderModalWindow = ({ children }: TProviderModalWindowProps) => {
  const [modalWindowState, setModalWindowState] = useState<TModalWindowState>(defaultModalWindowState)

  const open = useCallback((jsx: ReactNode, header: string) => {
    setModalWindowState((prev) => ({
      ...prev,
      isOpen: true,
      modalJSX: jsx,
      header
    }))
  }, []);

  const close = useCallback(() => {
    setModalWindowState((prev) => ({
      ...prev,
      isOpen: false,
      modalJSX: null,
      header: ''
    }));
  }, []);

  return (
    <ModalWindowContext.Provider value={{ ...modalWindowState, open, close }}>
      {children}
      {modalWindowState.isOpen && <ModalWindow />}
    </ModalWindowContext.Provider>
  );
}