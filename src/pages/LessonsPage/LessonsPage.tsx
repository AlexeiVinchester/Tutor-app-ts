import { CircularProgress, Container } from "@mui/material";
import { RoundAddButton } from "../../share/components/RoundAddButton/RoundAddButton";
import { useContext, useEffect, useState } from "react";
import { ILesson } from "../../share/interfaces/lesson.interface";
import { TableOfLessons } from "../../components/TableOfLessons/TableOfLessons";
import PostAddIcon from '@mui/icons-material/PostAdd';
import { SnackMessage } from "../../share/components/SnackMessage/SnackMessage";
import { EditMessageContext } from "../../context/EditMessage/EditMessageProvider";
import { AddNewLessonContainer } from "./components/AddNewLessonContainer/AddNewLessonContainer";
import { EditLessonContainer } from "./components/EditLessonContainer/EditLessonContainer";

const getLessonsFromApi = async () => {
    const response = await fetch('http://localhost:3002/getLessons');
    const data = await response.json();
    return data;
}
const LessonsPage = () => {
    const [lessons, setLessons] = useState<ILesson[]>([]);
    const [editId, setEditId] = useState(1);

    const editedLesson = lessons.find((lesson) => lesson.id === editId) as ILesson;
    useEffect(() => {
        getLessonsFromApi()
            .then(res => setLessons(res))
            .catch(err => console.log(`Error while fetching lessons! Error: ${err.message}`))
    }, []);

    const [isOpenCreateLessonWindow, setIsOpenCreateLessonWindow] = useState(false);
    const openCreateLessonWindow = () => setIsOpenCreateLessonWindow(true);
    const closeCreateLessonWindow = () => setIsOpenCreateLessonWindow(false);

    const [isOpenEditLessonWindow, setIsOpenEditLessonWindow] = useState(false);
    const openEditLessonWindow = () => setIsOpenEditLessonWindow(true);
    const closeEditLessonWindow = () => setIsOpenEditLessonWindow(false);

    const { isEditMessageOpen, closeEditMessage } = useContext(EditMessageContext)

    const onClickEditHandler = (lesson: ILesson) => {
        setEditId(lesson.id);
        openEditLessonWindow();
    };

    return (
        <div>
            {
                lessons.length ?
                    <>
                        <Container sx={{ paddingTop: '50px', paddingBottom: '50px' }} maxWidth='md'>
                            <TableOfLessons lessons={lessons} editLesson={onClickEditHandler} />
                        </Container>
                    </> :
                    <div className="flex items-center justify-center inset-x-0 inset-y-0 absolute">
                        <CircularProgress color="warning" />
                    </div>
            }
            {
                isOpenCreateLessonWindow && <AddNewLessonContainer
                    amount={lessons.length + 1}
                    isOpenCreateLessonWindow={isOpenCreateLessonWindow}
                    closeCreateLessonWindow={closeCreateLessonWindow}
                />
            }
            {
                isOpenEditLessonWindow && <EditLessonContainer
                    oldLesson={editedLesson}
                    isOpen={isOpenEditLessonWindow}
                    close={closeEditLessonWindow}
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