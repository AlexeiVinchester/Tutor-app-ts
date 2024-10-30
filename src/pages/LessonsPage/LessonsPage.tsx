import { Container } from "@mui/material";
import { RoundAddButton } from "../../share/components/RoundAddButton/RoundAddButton";
import { TableOfLessons } from "../../components/TableOfLessons/TableOfLessons";
import PostAddIcon from '@mui/icons-material/PostAdd';
import { AddNewLessonContainer } from "./components/AddNewLessonContainer/AddNewLessonContainer";
import { useModalWindow } from "../../hooks/useModalWindow";
import { Spinner } from "../../components/Spinner/Spinner";
import { useLoadLessons } from "../../hooks/useLoadLessons";

const LessonsPage = () => {
    const { isLoading, error, allLessons } = useLoadLessons();

    const {
        isOpen: isOpenCreateLessonWindow,
        open: openCreateLessonWindow,
        close: closeCreateLessonWindow
    } = useModalWindow();
    
    return (
            <div>
                {isLoading && <Spinner />}
                {error && <h2>{error}</h2>}
                {allLessons.length > 1 &&
                    <Container sx={{ paddingTop: '50px', paddingBottom: '50px' }} maxWidth='md'>
                        <TableOfLessons lessons={allLessons} />
                    </Container>
                }
                {
                    isOpenCreateLessonWindow && <AddNewLessonContainer
                        amount={allLessons.length + 1}
                        isOpenCreateLessonWindow={isOpenCreateLessonWindow}
                        closeCreateLessonWindow={closeCreateLessonWindow}
                    />
                }
                <RoundAddButton openHandler={openCreateLessonWindow}>
                    <PostAddIcon fontSize="large" />
                </RoundAddButton>
                
            </div>
    );
};

export { LessonsPage };