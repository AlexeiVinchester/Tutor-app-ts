import { ReactNode, useCallback, useState } from "react"
import { UpdateDataContext } from "../../../../features/model/updateDataContext";

export type TUpdateDataProviderProps = {
  children: ReactNode;
}

export const UpdateDataProvider = ({ children }: TUpdateDataProviderProps) => {
  const [shouldUpdateData, setShouldUpdateData] = useState(false);
  const updateDataFromDB = useCallback(() => {
    setShouldUpdateData(true);
  }, []);

  const stopUpdatingDataFromDB = useCallback(() => {
    setShouldUpdateData(false);
  }, []);

  return (
    <UpdateDataContext.Provider 
      value={{
        needsUpdate: shouldUpdateData,
        updateDataFromDB,
        stopUpdatingDataFromDB
      }}>
      {children}
    </UpdateDataContext.Provider>
  );
}