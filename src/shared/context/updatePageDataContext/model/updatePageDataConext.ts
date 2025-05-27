import { createContext } from "react";
import { TUpdatePageDataContext } from "./updatePageDataContext.type";

export const UpdatePageDataContext = createContext<TUpdatePageDataContext | null>(null);