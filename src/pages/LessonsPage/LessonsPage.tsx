import { Container } from "@mui/material";
import { RoundAddButton } from "../../share/components/RoundAddButton/RoundAddButton";
import { useContext, useEffect, useState } from "react";
import { ILesson } from "../../share/interfaces/lesson.interface";
import { TableOfLessons } from "../../components/TableOfLessons/TableOfLessons";
import PostAddIcon from '@mui/icons-material/PostAdd';
import { SnackMessage } from "../../share/components/SnackMessage/SnackMessage";
import { EditMessageContext } from "../../context/EditMessage/EditMessageProvider";
import { AddNewLessonContainer } from "./components/AddNewLessonContainer/AddNewLessonContainer";
import { getLessonsFromApi } from "../../services/loadLessonsFromDB";
import { useModalWindow } from "../../hooks/useModalWindow";
import { Spinner } from "../../components/Spinner/Spinner";

const LessonsPage = () => {
    const [lessons, setLessons] = useState<ILesson[]>([]);

    const {
        isOpen: isOpenCreateLessonWindow,
        open: openCreateLessonWindow,
        close: closeCreateLessonWindow
    } = useModalWindow();

    const { isEditMessageOpen, closeEditMessage } = useContext(EditMessageContext)

    useEffect(() => {
        getLessonsFromApi()
            .then(res => setLessons(res))
            .catch(err => console.log(`Error while fetching lessons! Error: ${err.message}`))
    }, []);

    return (
        <div >
            {
                lessons.length
                    ?
                    <>
                        <Container sx={{ paddingTop: '50px', paddingBottom: '50px' }} maxWidth='md'>
                            <TableOfLessons lessons={lessons} />
                        </Container>
                    </>
                    :
                    <Spinner />
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