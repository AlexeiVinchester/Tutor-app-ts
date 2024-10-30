import { Container } from "@mui/material";
import { RoundAddButton } from "../../share/components/RoundAddButton/RoundAddButton";
import { TableOfLessons } from "../../components/TableOfLessons/TableOfLessons";
import PostAddIcon from '@mui/icons-material/PostAdd';
import { AddNewLessonContainer } from "./components/AddNewLessonContainer/AddNewLessonContainer";
import { useModalWindow } from "../../hooks/useModalWindow";
import { Spinner } from "../../components/Spinner/Spinner";
import { useSnackMessage } from "../../hooks/useSnackMessage";
import { ShowSnackBarProvider } from "./components/ShowSnackBarProvider/ShowSnackBarProvider";
import { SnackContainer } from "../../components/SnackContainer/SnackContainer";
import { useLoadLessons } from "../../hooks/useLoadLessons";

const LessonsPage = () => {
    const { isOpenSnackBar, showSnackBar, closeSnackBar, severity, message } = useSnackMessage();
    const { isLoading, error, allLessons } = useLoadLessons();

    const {
        isOpen: isOpenCreateLessonWindow,
        open: openCreateLessonWindow,
        close: closeCreateLessonWindow
    } = useModalWindow();

    return (
        <ShowSnackBarProvider showSnackBar={showSnackBar}>
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
                        showSnackBar={showSnackBar}
                        amount={allLessons.length + 1}
                        isOpenCreateLessonWindow={isOpenCreateLessonWindow}
                        closeCreateLessonWindow={closeCreateLessonWindow}
                    />
                }
                <RoundAddButton openHandler={openCreateLessonWindow}>
                    <PostAddIcon fontSize="large" />
                </RoundAddButton>
                <SnackContainer
                    isOpen={isOpenSnackBar}
                    close={closeSnackBar}
                    severity={severity}
                    message={message}
                />
            </div>
        </ShowSnackBarProvider>
    );
};

export { LessonsPage };