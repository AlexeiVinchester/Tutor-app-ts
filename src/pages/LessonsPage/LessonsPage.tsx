import { Container } from "@mui/material";
import { RoundAddButton } from "../../share/components/RoundAddButton/RoundAddButton";
import { TableOfLessons } from "../../components/TableOfLessons/TableOfLessons";
import PostAddIcon from '@mui/icons-material/PostAdd';
import { AddNewLessonContainer } from "./components/AddNewLessonContainer/AddNewLessonContainer";
import { useModalWindow } from "../../hooks/useModalWindow";
import { Spinner } from "../../components/Spinner/Spinner";
import { useLoadLessons } from "../../hooks/useLoadLessons";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { showSnackMessage } from "../../redux/slices/snackMessageSlice/snackMessageSlice";
import { createSnackMessage } from "../../utils/createSnackMessage";

const LessonsPage = () => {
    const { isLoading, error, allLessons } = useLoadLessons();
    const dispatch = useDispatch();
    console.log('new render')
    useEffect(() => {
        if (error) {
            dispatch(showSnackMessage(createSnackMessage(
                `Error while loading: ${error}`,
                'error'
            )))
        }
    }, [dispatch, error]);

    const {
        isOpen: isOpenCreateLessonWindow,
        open: openCreateLessonWindow,
        close: closeCreateLessonWindow
    } = useModalWindow();

    if (isLoading) {
        return <Spinner />
    }

    return (
        <>
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

        </>
    );
};

export { LessonsPage };