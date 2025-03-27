import { useCallback } from "react";
import { useMutation } from "@tanstack/react-query";
import { TableRow, TableCell, IconButton } from "@mui/material";
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
import { ButtonToltipWrapper } from "../../../../shared/ui/ButtonTooltipWrapper/ButtonTooltipWrapper";

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
    open(<EditLessonForm lesson={lesson} updateAllData={updateAllData} />, 'Edit lesson');
  }, [lesson, open, updateAllData]);

  const handleClickPaidStatus = useCallback(async () => {
    changePaidStatus()
  }, [changePaidStatus]);

  return (
    <TableRow>
      <TableCell>{lesson.id}</TableCell>
      <TableCell align="left">{lesson.name}</TableCell>
      <TableCell align="center">{lesson.price}</TableCell>
      <TableCell align="center">{lesson.date}</TableCell>
      <TableCell align="center">
        <ButtonToltipWrapper title={lesson.paidStatus ? 'Cancel payment' : 'Pay'}>
          <IconButton 
            onClick={handleClickPaidStatus} 
            disabled={isPending}
            className="disabled:!text-gray-400"
            >
            {lesson.paidStatus ? <DoneIcon color="success" /> : <CloseIcon className="!text-send-data-button-text" />}
          </IconButton>
        </ButtonToltipWrapper>

      </TableCell>
      <TableCell align="center">
        <ButtonToltipWrapper title="Edit">
          <IconButton
            onClick={handleClickEdit}
            className="!text-send-data-button-text hover:!text-main-turquoise"
          >
            <EditIcon />
          </IconButton>
        </ButtonToltipWrapper>
      </TableCell>
    </TableRow>
  );
} 