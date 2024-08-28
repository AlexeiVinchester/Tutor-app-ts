import { useSelector } from "react-redux";
import { Store } from "../../../redux/store/interface/store.interface";
import { Grid } from "@mui/material";
import { StudentsList } from "./components/StudentsList/StudentsList";
import { StudentsInfoContainer } from "./components/StudentInfoContainer/StudentsInfoContainer";
import { useContext } from "react";
import { ModalWindowContext } from "../../../context/modalWindow/ModalWindowProvider";
import { ModalWindow } from "../../ModalWindow/ModalWindow";
import { AddNewStudentContainer } from "./components/AddNewStudentContainer/AddNewStudentContainer";

const StudentsPage = () => {
    const students = useSelector((state: Store) => state.students);
    const {modalState, close, open} = useContext(ModalWindowContext);

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
                <AddNewStudentContainer />
            </ModalWindow>
            <button 
                className="rounded-full fixed right-5 bottom-5 bg-blue-400 text-2xl text-white px-4 py-2"
                onClick={open}
            >
                + 
            </button>
        </StudentsInfoContainer>
    );
};

export { StudentsPage };
