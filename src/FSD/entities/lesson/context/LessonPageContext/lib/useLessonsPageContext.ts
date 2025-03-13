import { useContext } from "react";
import { LessonsPageContext } from "../model/lessonsPageContext";

export const useLessonsPageContext = () => {
  const context = useContext(LessonsPageContext);
  if (!context) {
    throw new Error("useLessonsPageContext must be used within LessonsPageContextProvider");
  }
  return context;
};