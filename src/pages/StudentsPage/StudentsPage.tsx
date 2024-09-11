import { useSelector } from "react-redux";
import { Store } from "../../redux/store/interface/store.interface";
import { Container, Grid, IconButton, Typography } from "@mui/material";
import { StudentsList } from "./components/StudentsList/StudentsList";
import { useContext, useState } from "react";
import { ModalWindowContext } from "../../context/modalWindow/ModalWindowProvider";
import { ModalWindow } from "../../components/ModalWindow/ModalWindow";
import { AddNewStudentContainer } from "./components/AddNewStudentContainer/AddNewStudentContainer";
import { SnackMessage } from "../../share/components/SnackMessage/SnackMessage";
import { EditMessageContext } from "../../context/EditMessage/EditMessageProvider";
import { useLocation } from "react-router-dom";
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const StudentsPage = () => {
    const students = useSelector((state: Store) => state.students);
    const { modalState, close, open } = useContext(ModalWindowContext);
    const { isEditMessageOpen, closeEditMessage } = useContext(EditMessageContext)
    const [isAddMessageOpen, setIsAddMessageOpen] = useState(false);

    const openAddMessage = () => setIsAddMessageOpen(true);
    const closeAddMessage = () => setIsAddMessageOpen(false);

    const location = useLocation();
    const editedName = location?.state?.name;

    const [filteredStudents, setFilteredStudents] = useState(students)
    const onSearchHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFilteredStudents(students.filter((student) => student.name.toLowerCase().includes(e.target.value.toLocaleLowerCase())));
    }

    return (
        <>
            <div className="w-full bg-orange-100 h-[400px]">
                <Container>
                    <Typography>
                        My tutor platform
                    </Typography>
                    <Typography
                        variant="h6"
                        component='p'
                    >
                        Try to be better among all students
                    </Typography>
                </Container>
            </div>
            <Container sx={{ mt: '1rem' }} >
 
                <div className="flex justify-center items-center mb-8">
                    <input
                        className="w-[60%] rounded-[22px] p-3 border-2 hover:border-blue-800 focus:border-none"
                        type="search"
                        placeholder="Try to find student..."
                        onChange={onSearchHandler}
                    />
                    <IconButton
                        sx={{ color: 'rgb(255, 69, 0)' }}
                        onClick={open}
                    >
                        <PersonAddIcon fontSize="large" />
                    </IconButton>
                </div>
                <Grid container spacing={2} className="mb-4" sx={{justifyContent: 'center', alignItems: 'center'}}>
                    <StudentsList students={filteredStudents} />
                </Grid>
                <ModalWindow
                    title="Create new student"
                    onClose={close}
                    modalState={modalState}
                >
                    <AddNewStudentContainer openSnackHandler={openAddMessage} />
                </ModalWindow>
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
            </Container>
        </>

    );
};

export { StudentsPage };
