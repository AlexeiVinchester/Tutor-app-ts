import { useSelector } from "react-redux";
import { Store } from "../../redux/store/interface/store.interface";
import { Grid } from "@mui/material";
import { StudentsList } from "./components/StudentsList/StudentsList";
import { StudentsInfoContainer } from "./components/StudentInfoContainer/StudentsInfoContainer";
import { useContext, useState } from "react";
import { ModalWindowContext } from "../../context/modalWindow/ModalWindowProvider";
import { ModalWindow } from "../../components/ModalWindow/ModalWindow";
import { AddNewStudentContainer } from "./components/AddNewStudentContainer/AddNewStudentContainer";
import { SnackMessage } from "../../share/components/SnackMessage/SnackMessage";
import { RoundAddButton } from "../../share/components/RoundAddButton/RoundAddButton";
import { EditMessageContext } from "../../context/EditMessage/EditMessageProvider";
import { useLocation } from "react-router-dom";

const StudentsPage = () => {
    const students = useSelector((state: Store) => state.students);
    const { modalState, close, open } = useContext(ModalWindowContext);
    const { isEditMessageOpen, closeEditMessage } = useContext(EditMessageContext)
    const [isAddMessageOpen, setIsAddMessageOpen] = useState(false);

    const openAddMessage = () => setIsAddMessageOpen(true);
    const closeAddMessage = () => setIsAddMessageOpen(false);

    const location = useLocation();
    const editedName = location?.state?.name;

    return (
        <StudentsInfoContainer>
            <Grid container spacing={2} className="mb-4">
                <StudentsList students={students} />
            </Grid>
            <ModalWindow
                title="Create new student"
                onClose={close}
                modalState={modalState}
            >
                <AddNewStudentContainer openSnackHandler={openAddMessage} />
            </ModalWindow>
            <RoundAddButton openHandler={open} />
            <SnackMessage
                isOpen={isAddMessageOpen}
                onCLose={closeAddMessage}
                status="success"
                message="New student was added!"
            />
            <SnackMessage
                isOpen={isEditMessageOpen}
                onCLose={closeEditMessage}
                status="success"
                message={`${editedName} was edited!`}
            />
        </StudentsInfoContainer>
    );
};

export { StudentsPage };
