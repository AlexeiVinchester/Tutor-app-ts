import { useContext } from "react"
import { UpdatePageDataContext } from "../model/updatePageDataConext"

export const useUpdatePageDataContext = () => {
  const pageContext = useContext(UpdatePageDataContext);

  if (!pageContext) {
    throw new Error(`You're trying to use wrong context!`);
  }

  return pageContext;
};