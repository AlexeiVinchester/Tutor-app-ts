import { useMutation } from "@tanstack/react-query";
import { useCallback } from "react";
import { useLessonsPageContext } from "../../../../entities/lesson/context/LessonPageContext/lib/useLessonsPageContext";
import { createApiErrorMessage } from "../../../../shared/api/createApiErrorMessage";
import { useSnackMessageContext } from "../../../../shared/context/snackMessageContext/lib/useSnackMessageContext";
import { sendNewPaidStatus } from "../api/loaders";
import { TLesson } from "../../../../entities/lesson/model/lesson.type";

export const useChangePaidStatus = (lesson: TLesson) => {
  const { openSnackMessage } = useSnackMessageContext();
  const { updateAllData } = useLessonsPageContext();

  const {
    mutate: changePaidStatus,
    isPending: isChangingPaidStatus
  } = useMutation({
    mutationKey: ['newPaidStatus', { _id: lesson._id, newPaidStatus: !lesson.paidStatus }],
    mutationFn: () => sendNewPaidStatus({
      newPaidStatus: !lesson.paidStatus,
      _id: lesson._id
    }),
    onSuccess: () => updateAllData(),
    onError: (error) => openSnackMessage(createApiErrorMessage(error))
  });

  const handleClickPaidStatus = useCallback(() => {
    changePaidStatus()
  }, [changePaidStatus]);

  return {
    isChangingPaidStatus,
    handleClickPaidStatus,
  };
};