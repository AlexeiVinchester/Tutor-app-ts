import { useContext } from "react"
import { ModalWindowContext } from "../modalWindowContext"

export const useModalWindowContext = () => {
  return useContext(ModalWindowContext);
}