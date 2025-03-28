import { useCallback } from "react";
import { useMutation } from "@tanstack/react-query";
import { TableRow, TableCell } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import { sendNewPaidStatus } from "../api/loaders";
import { EditLessonForm } from "../../editLessonForm/ui/editLessonForm";
import { TLesson } from "../../../../entities/lesson/model/lesson.type"
import { useLessonsPageContext } from "../../../../entities/lesson/context/LessonPageContext/lib/useLessonsPageContext";
import { useModalWindowContext } from "../../../../shared/context/modalWindowContext/lib/useModalWindowContext";
import { useSnackMessageContext } from "../../../../shared/context/snackMessageContext/lib/useSnackMessageContext";
import { createApiErrorMessage } from "../../../../shared/api/createApiErrorMessage";
import { BoardStyledButton } from "../../../../shared/ui/BoardStyledButton/BoardStyledButton";

type TLessonsTableRowProps = {
  lesson: TLesson;
};

export const LessonsTableRow = ({ lesson }: TLessonsTableRowProps) => {
  const { openSnackMessage } = useSnackMessageContext();
  const { open } = useModalWindowContext();
  const { updateAllData } = useLessonsPageContext();

  const { mutate: changePaidStatus, isPending } = useMutation({
    mutationKey: ['newPaidStatus', { _id: lesson._id, newPaidStatus: !lesson.paidStatus }],
    mutationFn: () => sendNewPaidStatus({
      newPaidStatus: !lesson.paidStatus,
      _id: lesson._id
    }),
    onSuccess: () => updateAllData(),
    onError: (error) => openSnackMessage(createApiErrorMessage(error))
  });

  const handleClickEdit = useCallback(() => {
    open(
      <EditLessonForm lesson={lesson} updateAllData={updateAllData} />,
      'Edit lesson'
    );
  }, [lesson, open, updateAllData]);

  const handleClickPaidStatus = useCallback(() => {
    changePaidStatus()
  }, [changePaidStatus]);

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
          disabled={isPending}
          iconSize="medium"
          className={`${lesson.paidStatus ? '!text-main-turquoise hover:!text-main-turquoise' : '!text-send-data-button-text hover:!text-send-data-button-text'}  disabled:!text-gray-400`}
        />
      </TableCell>
      <TableCell align="center">
        <BoardStyledButton
          icon={EditIcon}
          disabled={isPending}
          onClick={handleClickEdit}
          toolTipTitle="Edit"
          iconSize="medium"
        />
      </TableCell>
    </TableRow>
  );
};