import { useSelector } from "react-redux";
import { Store } from "../../redux/store/interface/store.interface";
import { Container } from "@mui/material";
import { RoundAddButton } from "../../share/components/RoundAddButton/RoundAddButton";
import { useContext, useState } from "react";
import { ILesson } from "../../share/interfaces/lesson.interface";
import { useNavigate } from "react-router-dom";
import { TableOfLessons } from "../../components/TableOfLessons/TableOfLessons";
import PostAddIcon from '@mui/icons-material/PostAdd';
import { SnackMessage } from "../../share/components/SnackMessage/SnackMessage";
import { EditMessageContext } from "../../context/EditMessage/EditMessageProvider";
import { AddNewLessonContainer } from "./components/AddNewLessonContainer/AddNewLessonContainer";

const getLessons = (store: Store) => {
    console.log('simple selector run')
    return store.lessons;
};


const LessonsPage = () => {
    const lessons = useSelector(getLessons);
    console.log(JSON.stringify(lessons))
    const [isOpenCreateLessonWindow, setIsOpenCreateLessonWindow] = useState(false);
    const openCreateLessonWindow = () => setIsOpenCreateLessonWindow(true);
    const closeCreateLessonWindow = () => setIsOpenCreateLessonWindow(false);

    const { isEditMessageOpen, closeEditMessage } = useContext(EditMessageContext)

    const navigate = useNavigate();

    const onClickEditHandler = (lesson: ILesson) => {
        navigate(`/lessons/${lesson.id}/edit`, { state: { lesson } })
    };
    console.log('lessons render')
    return (
        <div>
            <Container sx={{ paddingTop: '50px' }} maxWidth='md'>
                <TableOfLessons lessons={lessons} editLesson={onClickEditHandler} />
            </Container>
            {
                isOpenCreateLessonWindow && <AddNewLessonContainer
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