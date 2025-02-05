import { createContext } from "react";
import { TModalWindowContext, defaultContext } from "./model/defaultContext";

export const ModalWindowContext = createContext<TModalWindowContext>(defaultContext)