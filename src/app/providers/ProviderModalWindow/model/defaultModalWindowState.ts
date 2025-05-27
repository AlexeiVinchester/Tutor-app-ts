import { ReactNode } from "react";

export type TModalWindowState = {
  isOpen: boolean;
  modalJSX: ReactNode;
  header: string;
}

export const defaultModalWindowState: TModalWindowState = {
  isOpen: false,
  modalJSX: null,
  header: ''
}