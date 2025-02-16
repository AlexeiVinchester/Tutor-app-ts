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
import { useLessonsPageContext } from "../../../../entities/lesson/context/LessonPageContext/lib/useLessonsPageContext";

type TLessonsTableRowProps = {
  lesson: TLesson;
}

export const LessonsTableRow = ({ lesson }: TLessonsTableRowProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { openSnackMessage } = useSnackMessageContext();
  const { open } = useModalWindowContext();

  const { updateAllData } = useLessonsPageContext();

  const handleClickEdit = () => {
    open(
      <EditLessonForm
        lesson={lesson}
        updateAllData={updateAllData}
      />,
      'Edit lesson'
    );
  };

  const handleClickPaidStatus = async () => {
    try {
      setIsLoading(true);
      const sendingData: TSendNewpaidStatusData = {
        newPaidStatus: !lesson.paidStatus,
        _id: lesson._id
      }
      const response: TSendNewPaidStatusServerAnswer = await sendNewPaidStatus(sendingData);
      if (response) {
        updateAllData();
      }
    } catch (error) {
      openSnackMessage(createApiErrorMessage(error));
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <TableRow>
      <TableCell>{lesson.id}</TableCell>
      <TableCell align="left">{lesson.name}</TableCell>
      <TableCell align="center">{lesson.price}</TableCell>
      <TableCell align="center">{lesson.date}</TableCell>
      <TableCell align="center">
        <IconButton onClick={handleClickPaidStatus}>
          {isLoading ? <HourglassTopIcon color="warning" /> : lesson.paidStatus ? <DoneIcon color="success" /> : <CloseIcon color="warning" />}
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