import { useMutation } from "@tanstack/react-query";
import { sendEditedStudent } from "../api/loader";
import { TStudent } from "../../../../../entities/student/model/student.type";
import { TStudentFormSchema } from "../../../../../entities/student/model/studentFormSchema";
import { createApiErrorMessage } from "../../../../../shared/api/createApiErrorMessage";
import { useModalWindowContext } from "../../../../../shared/context/modalWindowContext/lib/useModalWindowContext";
import { showSuccessMessage } from "../../../../../shared/context/snackMessageContext/lib/helpers";
import { useSnackMessageContext } from "../../../../../shared/context/snackMessageContext/lib/useSnackMessageContext";

export const useEditStudent = (
  student: TStudent,
  updateAllData: () => void
) => {
  const { openSnackMessage } = useSnackMessageContext();
  const { close } = useModalWindowContext();

  const { mutate: editStudent, isPending: isPendingEditing } = useMutation({
    mutationKey: ['edit lesson', { _id: student._id }],
    mutationFn: sendEditedStudent,
    onSuccess: () => {
      updateAllData();
      openSnackMessage(showSuccessMessage(`${student.id}: ${student.name} was edited`))
    },
    onError: (error) => {
      openSnackMessage(createApiErrorMessage(error))
    },
    onSettled: () => close()
  });

  const handleSubmit = (data: TStudentFormSchema) => {
    const sendingData = {
      ...student,
      ...data,
      price: +data.price,
      form: +data.form
    };
    editStudent(sendingData)
  };

  return {
    handleSubmit,
    isPendingEditing
  };
};