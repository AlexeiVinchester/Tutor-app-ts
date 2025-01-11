import { useContext } from "react"
import { SnackMessageContext } from "../snackMessageContext"

export const useSnackMessageContext = () => {
  return useContext(SnackMessageContext);
}