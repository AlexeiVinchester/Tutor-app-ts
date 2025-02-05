import { TableRow, TableCell, IconButton } from "@mui/material";
import { TLesson } from "../../../../entities/lesson/model/lesson.type"
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import { useModalWindowContext } from "../../../../shared/context/modalWindowContext/lib/useModalWindowContext";
import { EditLessonForm } from "../../editLessonForm/ui/editLessonForm";

type TLessonsTableRowProps = {
  lesson: TLesson;
}

export const LessonsTableRow = ({ lesson }: TLessonsTableRowProps) => {
  const { open } = useModalWindowContext();

  const handleClickEdit = () => {
    open(<EditLessonForm lesson={lesson} />, 'Edit lesson');
  }

  return (
    <TableRow>
      <TableCell>{lesson.id}</TableCell>
      <TableCell align="left">{lesson.name}</TableCell>
      <TableCell align="center">{lesson.price}</TableCell>
      <TableCell align="center">{lesson.date}</TableCell>
      <TableCell align="center">
        {lesson.paidStatus ? (
          <DoneIcon color="success" />
        ) : (
          <CloseIcon color="warning" />
        )}
      </TableCell>
      <TableCell align="center">
        <IconButton onClick={handleClickEdit}>
          <EditIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
} 