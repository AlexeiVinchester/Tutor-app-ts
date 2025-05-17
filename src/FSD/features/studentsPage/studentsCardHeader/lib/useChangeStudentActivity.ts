import { useCallback, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { sendNewStudentActivity } from "../api/loader";
import { TStudent } from "../../../../entities/student/model/student.type";
import { createApiErrorMessage } from "../../../../shared/api/createApiErrorMessage";
import { useSnackMessageContext } from "../../../../shared/context/snackMessageContext/lib/useSnackMessageContext";
import { useUpdatePageDataContext } from "../../../../shared/context/updatePageDataContext";

export const useChangeStudentActivity = (student: TStudent) => {
  const [studentActivity, setStudentActivity] = useState(student.activity);
  const { updateAllData } = useUpdatePageDataContext();
  const { openSnackMessage } = useSnackMessageContext();
  const {
    mutate: changeActivity,
    isPending: isPendingChangingActivity
  } = useMutation({
    mutationKey: ['changeActivity', { _id: student.id, newActivity: !student.activity }],
    mutationFn: sendNewStudentActivity,
    onError: (error) => openSnackMessage(createApiErrorMessage(error)),
    onSuccess: () => {
      setStudentActivity(!studentActivity);
      updateAllData();
    }
  });

  const handleClickChangeActivity = useCallback(
    () => changeActivity({ _id: student._id, newActivity: !student.activity }),
    [changeActivity, student._id, student.activity]
  );

  return {
    handleClickChangeActivity,
    isPendingChangingActivity,
    studentActivity
  };
};