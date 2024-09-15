import React, { createContext, useState } from "react";
import { IEditMessageContext } from "./interface/EditMessageContext.interface";

const EditMessageContext = createContext<IEditMessageContext>({
    isEditMessageOpen: '',
    openEditMessage: (message) => {console.log(message)},
    closeEditMessage: () => { }
});

const EditMessageProvider = ({ children }: { children: React.ReactNode }) => {

    const [isEditMessageOpen, setIsEditMessageOpen] = useState('');
    const openEditMessage = (message: string) => {
        setIsEditMessageOpen(message);
    }
    const closeEditMessage = () => setIsEditMessageOpen('');

    return (
        <EditMessageContext.Provider value={{ isEditMessageOpen, openEditMessage, closeEditMessage }}>
            {children}
        </EditMessageContext.Provider>
    );
};

export { EditMessageContext, EditMessageProvider };