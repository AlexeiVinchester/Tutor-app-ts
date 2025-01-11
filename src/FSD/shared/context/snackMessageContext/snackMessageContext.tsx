import { createContext } from "react";
import { defaultContext, TSnackMessageContext } from "./model/defaultContext";

export const SnackMessageContext = createContext<TSnackMessageContext>(defaultContext);





