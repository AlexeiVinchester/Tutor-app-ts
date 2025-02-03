import { createContext } from "react";

export type TUpdateDataContext = {
  needsUpdate: boolean;
  updateDataFromDB: () => void;
  stopUpdatingDataFromDB: () => void;
}

export const UpdateDataContext = createContext<TUpdateDataContext | null>(null);
