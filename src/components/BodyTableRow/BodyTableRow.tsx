import { TableRow, TableCell, IconButton } from '@mui/material';
import { EditLessonContainer } from '../../pages/LessonsPage/components/EditLessonContainer/EditLessonContainer';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import { IBodyTableRowProps } from './interface/BodyTableRow.interface';
import { useModalWindow } from '../../hooks/useModalWindow';

const BodyTableRow = ({ lesson }: IBodyTableRowProps) => {
  const {
    isOpen: isOpenEditLessonWindow,
    open: openEditLessonWindow,
    close: closeEditLessonWindow,
  } = useModalWindow();

  const onClickEditHandler = () => {
    openEditLessonWindow();
  };

  

  return (
    <>
      {isOpenEditLessonWindow && (
        <EditLessonContainer
          oldLesson={lesson}
          isOpen={isOpenEditLessonWindow}
          close={closeEditLessonWindow}
        />
      )}
      <TableRow>
        <TableCell>{lesson.id}</TableCell>
        <TableCell align="left">{lesson.name}</TableCell>
        <TableCell align="center">{lesson.price}</TableCell>
        <TableCell align="center">{lesson.date}</TableCell>
        <TableCell align="center">
          {lesson.paidStatus ? (
            <DoneIcon color="success" />
          ) : (
            <CloseIcon color="warning"/>
          )}
        </TableCell>
        <TableCell align="center">
          <IconButton onClick={onClickEditHandler}>
            <EditIcon />
          </IconButton>
        </TableCell>
      </TableRow>
    </>
  );
};

export { BodyTableRow };
