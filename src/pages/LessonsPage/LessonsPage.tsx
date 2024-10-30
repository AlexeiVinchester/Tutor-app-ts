import { Container } from "@mui/material";
import { RoundAddButton } from "../../share/components/RoundAddButton/RoundAddButton";
import { useEffect } from "react";
import { TableOfLessons } from "../../components/TableOfLessons/TableOfLessons";
import PostAddIcon from '@mui/icons-material/PostAdd';
import { AddNewLessonContainer } from "./components/AddNewLessonContainer/AddNewLessonContainer";
import { useModalWindow } from "../../hooks/useModalWindow";
import { Spinner } from "../../components/Spinner/Spinner";
import { useSelector } from "react-redux";
import { loadAllLessons } from "../../redux/slices/lessonsSlice/lessonsSlice";
import { useCustomThunkDispatch } from "../../hooks/useCustomThunkDispatch";
import { useSnackMessage } from "../../hooks/useSnackMessage";
import { ShowSnackBarProvider } from "./components/ShowSnackBarProvider/ShowSnackBarProvider";
import {
    selectLessons,
    selectAllLessonLoadedFlag,
    selectErrorField,
    selectLoadingFlag
} from "../../redux/selectors/lessonsSelectors";
import { SnackContainer } from "../../components/SnackContainer/SnackContainer";

const LessonsPage = () => {
    const lessons = useSelector(selectLessons);
    const allLessonsLoaded = useSelector(selectAllLessonLoadedFlag);
    const isLoading = useSelector(selectLoadingFlag);
    const isError = useSelector(selectErrorField);
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