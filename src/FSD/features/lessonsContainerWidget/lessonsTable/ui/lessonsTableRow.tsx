import { TableRow, TableCell, IconButton } from "@mui/material";
import { TLesson } from "../../../../entities/lesson/model/lesson.type"
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import { useModalWindowContext } from "../../../../shared/context/modalWindowContext/lib/useModalWindowContext";
import { EditLessonForm } from "../../editLessonForm/ui/editLessonForm";
import { sendNewPaidStatus, TSendNewpaidStatusData, TSendNewPaidStatusServerAnswer } from "../api/loaders";
import { useSnackMessageContext } from "../../../../shared/context/snackMessageContext/lib/useSnackMessageContext";
import { useState } from "react";
import { createApiErrorMessage } from "../../../../shared/api/createApiErrorMessage";

type TLessonsTableRowProps = {
  lesson: TLesson;
}

export const LessonsTableRow = ({ lesson }: TLessonsTableRowProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentlesson, setCurrentLesson] = useState<TLesson>(lesson);
  const { openSnackMessage } = useSnackMessageContext();
  const { open } = useModalWindowContext();

  const handleClickEdit = () => {
    open(<EditLessonForm lesson={lesson} />, 'Edit lesson');
  };
  const handleClickPaidStatus = async () => {
    try {
      setIsLoading(true);
      const sendingData: TSendNewpaidStatusData = {
        newPaidStatus: !currentlesson.paidStatus, 
        _id: currentlesson._id
      }
      const response: TSendNewPaidStatusServerAnswer = await sendNewPaidStatus(sendingData);
      if (response) {
        setCurrentLesson((prev) => ({ ...prev, paidStatus: response.newPaidStatus }))
      }
    } catch (error) {
      openSnackMessage(createApiErrorMessage(error));
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <TableRow>
      <TableCell>{currentlesson.id}</TableCell>
      <TableCell align="left">{currentlesson.name}</TableCell>
      <TableCell align="center">{currentlesson.price}</TableCell>
      <TableCell align="center">{currentlesson.date}</TableCell>
      <TableCell align="center">
        <IconButton onClick={handleClickPaidStatus}>
          {isLoading ? <HourglassTopIcon color="info"/> : currentlesson.paidStatus ? <DoneIcon color="success" /> : <CloseIcon color="warning" />}
        </IconButton>
      </TableCell>
      <TableCell align="center">
        <IconButton onClick={handleClickEdit}>
          <EditIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
} 