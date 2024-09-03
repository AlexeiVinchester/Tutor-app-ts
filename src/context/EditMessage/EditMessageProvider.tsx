import React, { createContext, useState } from "react";
import { IEditMessageContext } from "./interface/EditMessageContext.interface";

const EditMessageContext = createContext<IEditMessageContext>({
    isEditMessageOpen: false,
    openEditMessage: () => { },
    closeEditMessage: () => { }
});

const EditMessageProvider = ({ children }: { children: React.ReactNode }) => {

    const [isEditMessageOpen, setIsEditMessageOpen] = useState(false);
    const openEditMessage = () => setIsEditMessageOpen(true);
    const closeEditMessage = () => setIsEditMessageOpen(false);

    return (
        <EditMessageContext.Provider value={{ isEditMessageOpen, openEditMessage, closeEditMessage }}>
            {children}
        </EditMessageContext.Provider>
    );
};

export { EditMessageContext, EditMessageProvider };