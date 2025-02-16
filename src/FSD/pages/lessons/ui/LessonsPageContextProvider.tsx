import { ReactNode } from "react";
import { LessonsPageContext } from "../../../entities/lesson/context/LessonPageContext/model/lessonsPageContext";

export type TLessonsPageContextProvider = {
  children: ReactNode;
  updateAllData: () => Promise<void>;
}

export const LessonsPageContextProvider = ({ children, updateAllData }: TLessonsPageContextProvider) => {
  return (
    <LessonsPageContext.Provider value={{ updateAllData }}>
      {children}
    </LessonsPageContext.Provider>
  )
}