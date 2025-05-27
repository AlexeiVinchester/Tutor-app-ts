import { ReactNode } from "react";

export type TModalWindowContext = {
  isOpen: boolean;
  close: () => void;
  open: (jsx: ReactNode, header: string) => void;
  header: string;
  modalJSX: ReactNode;
};

export const defaultContext: TModalWindowContext = {
  isOpen: false,
  open: () => { },
  close: () => { },
  header: '',
  modalJSX: null
};