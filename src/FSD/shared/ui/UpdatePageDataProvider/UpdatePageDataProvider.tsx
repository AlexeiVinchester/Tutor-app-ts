import { ReactNode } from "react"
import { UpdatePageDataContext } from "../../context/updatePageDataContext";

type TUpatePageDataProviderProps = {
  children: ReactNode;
  updateAllData: () => void;
}

export const UpdatePageDataProvider = ({ children, updateAllData }: TUpatePageDataProviderProps) => {
  return (
    <UpdatePageDataContext.Provider value={{ updateAllData }}>
      {children}
    </UpdatePageDataContext.Provider>
  );
};