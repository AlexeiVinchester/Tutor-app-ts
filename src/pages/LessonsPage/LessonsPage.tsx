import { Container } from '@mui/material';
import { RoundAddButton } from '../../share/components/RoundAddButton/RoundAddButton';
import PostAddIcon from '@mui/icons-material/PostAdd';
import { AddNewLessonContainer } from './components/AddNewLessonContainer/AddNewLessonContainer';
import { useModalWindow } from '../../hooks/useModalWindow';
import { Spinner } from '../../FSD/shared/ui/Spinner/Spinner';
import { useLoadLessons } from '../../hooks/useLoadLessons';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { showSnackMessage } from '../../redux/slices/snackMessageSlice/snackMessageSlice';
import { createSnackMessage } from '../../utils/createSnackMessage';
import { LessonsDebtors } from '../../FSD/widgets/lessonsDebtors/lessonsDebtors';
import { LessonsTable } from '../../FSD/features/lessonsContainerWidget/lessonsTable/ui/lessonsTable';
import { TLesson } from '../../FSD/entities/lesson/model/lesson.type';
import { CurrentMonthInfoBoard } from '../../FSD/widgets/currentMonthInfoBoard/ui/currentMonthInfoBoard';

const LessonsPage = () => {
  const { isLoading, error, allLessons } = useLoadLessons();
  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      dispatch(
        showSnackMessage(
          createSnackMessage(`Error while loading: ${error}`, 'error')
        )
      );
    }
  }, [dispatch, error]);

  const {
    isOpen: isOpenCreateLessonWindow,
    open: openCreateLessonWindow,
    close: closeCreateLessonWindow,
  } = useModalWindow();

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      {allLessons.length > 1 && (
        <Container
          sx={{ paddingTop: '50px', paddingBottom: '50px' }}
          maxWidth="md"
        >
          <LessonsTable lessons={allLessons as TLesson[]} />
          <LessonsDebtors />
          <CurrentMonthInfoBoard />
        </Container>
      )}
      {isOpenCreateLessonWindow && (
        <AddNewLessonContainer
          isOpenCreateLessonWindow={isOpenCreateLessonWindow}
          closeCreateLessonWindow={closeCreateLessonWindow}
        />
      )}
      <RoundAddButton openHandler={openCreateLessonWindow}>
        <PostAddIcon fontSize="large" />
      </RoundAddButton>
    </>
  );
};

export { LessonsPage };
