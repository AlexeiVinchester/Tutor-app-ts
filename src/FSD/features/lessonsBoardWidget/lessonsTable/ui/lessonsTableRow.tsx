import { TableRow, TableCell } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import { useChangePaidStatus } from "../lib/useChangePaidStatus";
import { useOpenEditLessonForm } from "../lib/useOpenEditLessonForm";
import { TLesson } from "../../../../entities/lesson/model/lesson.type"
import { BoardStyledButton } from "../../../../shared/ui/BoardStyledButton/BoardStyledButton";

type TLessonsTableRowProps = {
  lesson: TLesson;
};

export const LessonsTableRow = ({ lesson }: TLessonsTableRowProps) => {

  const {
    isChangingPaidStatus,
    handleClickPaidStatus
  } = useChangePaidStatus(lesson);

  const handleClickEdit = useOpenEditLessonForm(lesson);

  return (
    <TableRow>
      <TableCell>{lesson.id}</TableCell>
      <TableCell align="left">{lesson.name}</TableCell>
      <TableCell align="center">{lesson.price}</TableCell>
      <TableCell align="center">{lesson.date}</TableCell>
      <TableCell align="center">
        <BoardStyledButton
          icon={lesson.paidStatus ? DoneIcon : CloseIcon}
          toolTipTitle={lesson.paidStatus ? 'Cancel payment' : 'Pay'}
          onClick={handleClickPaidStatus}
          disabled={isChangingPaidStatus}
          iconSize="medium"
          className={`${lesson.paidStatus ? '!text-main-turquoise hover:!text-main-turquoise' : '!text-send-data-button-text hover:!text-send-data-button-text'}  disabled:!text-gray-400`}
        />
      </TableCell>
      <TableCell align="center">
        <BoardStyledButton
          icon={EditIcon}
          disabled={isChangingPaidStatus}
          onClick={handleClickEdit}
          toolTipTitle="Edit"
          iconSize="medium"
        />
      </TableCell>
    </TableRow>
  );
};