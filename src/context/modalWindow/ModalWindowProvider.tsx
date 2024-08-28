import { createContext, useState } from "react";
import { IModalWindowContext } from "./interfaces/ModalWindowContext.interface";
import { ModalWindowProviderProps } from "./interfaces/ModalWindowProvider.interface";

const ModalWindowContext = createContext<IModalWindowContext>({
    modalState: false,
    open: () => {},
    close: () => {}
});

const ModalWindowProvider = ({children}: ModalWindowProviderProps) => {
    
    const [modalState, setModalState] = useState(false);

    const open = () => setModalState(true);
    const close = () => setModalState(false);

    return (
        <ModalWindowContext.Provider value={{modalState, open, close}}>
            {children}
        </ModalWindowContext.Provider>
    );
};

export { ModalWindowContext, ModalWindowProvider };
