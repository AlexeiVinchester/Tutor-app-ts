import { Container } from "@mui/material";
import { RoundAddButton } from "../../share/components/RoundAddButton/RoundAddButton";
import { useContext } from "react";
import { ILesson } from "../../share/interfaces/lesson.interface";
import { TableOfLessons } from "../../components/TableOfLessons/TableOfLessons";
import PostAddIcon from '@mui/icons-material/PostAdd';
import { SnackMessage } from "../../share/components/SnackMessage/SnackMessage";
import { EditMessageContext } from "../../context/EditMessage/EditMessageProvider";
import { AddNewLessonContainer } from "./components/AddNewLessonContainer/AddNewLessonContainer";
import { useModalWindow } from "../../hooks/useModalWindow";
import { Spinner } from "../../components/Spinner/Spinner";
import { useFetch } from "../../hooks/useFetch";

const LessonsPage = () => {
    const {
        data: lessons,
        isLoading: isLoadingLessons,
        error: errorLoadingLessons
    } = useFetch<ILesson>('http://localhost:3002/getLessons');

    const {
        isOpen: isOpenCreateLessonWindow,
        open: openCreateLessonWindow,
        close: closeCreateLessonWindow
    } = useModalWindow();

    const { isEditMessageOpen, closeEditMessage } = useContext(EditMessageContext)

    return (
        <div >
            {isLoadingLessons && <Spinner />}
            {errorLoadingLessons && <h2>{errorLoadingLessons}</h2>}
            {lessons.length &&
                    <>
                        <Container sx={{ paddingTop: '50px', paddingBottom: '50px' }} maxWidth='md'>
                            <TableOfLessons lessons={lessons} />
                        </Container>
                    </> 
            }
            {
                isOpenCreateLessonWindow && <AddNewLessonContainer
                    amount={lessons.length + 1}
                    isOpenCreateLessonWindow={isOpenCreateLessonWindow}
                    closeCreateLessonWindow={closeCreateLessonWindow}
                />
            }

            <RoundAddButton openHandler={openCreateLessonWindow}>
                <PostAddIcon fontSize="large" />
            </RoundAddButton>
            <SnackMessage
                isOpen={!!isEditMessageOpen}
                onCLose={closeEditMessage}
                status="success"
                message={isEditMessageOpen}
            />
        </div>
    );
};

export { LessonsPage };