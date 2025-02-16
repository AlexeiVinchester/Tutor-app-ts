import { createContext } from "react";
import { TLessonsPageContext } from "./lessonsPageContext.type";

export const LessonsPageContext = createContext<TLessonsPageContext | null>(null);
