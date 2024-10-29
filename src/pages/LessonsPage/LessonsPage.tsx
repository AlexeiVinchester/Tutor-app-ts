import { Alert, Container, Snackbar } from "@mui/material";
import { RoundAddButton } from "../../share/components/RoundAddButton/RoundAddButton";
import { useEffect } from "react";
import { TableOfLessons } from "../../components/TableOfLessons/TableOfLessons";
import PostAddIcon from '@mui/icons-material/PostAdd';
import { AddNewLessonContainer } from "./components/AddNewLessonContainer/AddNewLessonContainer";
import { useModalWindow } from "../../hooks/useModalWindow";
import { Spinner } from "../../components/Spinner/Spinner";
import { useSelector } from "react-redux";
import { selectLessons } from "../../redux/selectors/lessonsSelectors";
import { Store } from "../../redux/store/interface/store.interface";
import { loadAllLessons } from "../../redux/slices/lessonsSlice/lessonsSlice";
import { useCustomThunkDispatch } from "../../hooks/useCustomThunkDispatch";
import { useSnackMessage } from "../../hooks/useSnackMessage";
import { ShowSnackBarProvider } from "./components/ShowSnackBarProvider/ShowSnackBarProvider";

const LessonsPage = () => {
    const lessons = useSelector(selectLessons);
    const allLessonsLoaded = useSelector((store: Store) => store.lessons.allLessonsLoaded);
    const isLoading = useSelector((store: Store) => store.lessons.loading);
    const isError = useSelector((store: Store) => store.lessons.error);
    const { isOpenSnackBar, showSnackBar, closeSnackBar, severity, message } = useSnackMessage();
    const thunkDispatch = useCustomThunkDispatch();

    useEffect(() => {
        if (!allLessonsLoaded) {
            thunkDispatch(loadAllLessons('http://localhost:3002/getLessons'));
        }
    }, [allLessonsLoaded, thunkDispatch]);

    const {
        isOpen: isOpenCreateLessonWindow,
        open: openCreateLessonWindow,
        close: closeCreateLessonWindow
    } = useModalWindow();

    return (
        <ShowSnackBarProvider showSnackBar={showSnackBar}>
            <div>
                {isLoading && <Spinner />}
                {isError && <h2>{isError}</h2>}
                {lessons.length > 1 &&
                    <Container sx={{ paddingTop: '50px', paddingBottom: '50px' }} maxWidth='md'>
                        <TableOfLessons lessons={lessons} />
                    </Container>
                }
                {
                    isOpenCreateLessonWindow && <AddNewLessonContainer
                        showSnackBar={showSnackBar}
                        amount={lessons.length + 1}
                        isOpenCreateLessonWindow={isOpenCreateLessonWindow}
                        closeCreateLessonWindow={closeCreateLessonWindow}
                    />
                }

                <RoundAddButton openHandler={openCreateLessonWindow}>
                    <PostAddIcon fontSize="large" />
                </RoundAddButton>

                <Snackbar
                    open={isOpenSnackBar}
                    autoHideDuration={6000}
                    onClose={closeSnackBar}
                >
                    <Alert onClose={closeSnackBar} severity={severity} sx={{ width: '100%' }}>
                        {message}
                    </Alert>
                </Snackbar>
            </div>
        </ShowSnackBarProvider>

    );
};

export { LessonsPage };