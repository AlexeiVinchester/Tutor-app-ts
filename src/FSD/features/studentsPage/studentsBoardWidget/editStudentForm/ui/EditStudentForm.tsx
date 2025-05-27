import { useMutation } from "@tanstack/react-query";
import { TStudent } from "../../../../../entities/student/model/student.type"
import { TStudentFormSchema } from "../../../../../entities/student/model/studentFormSchema";
import { StudentForm } from "../../../../../entities/student/ui/studentForm"
import { sendEditedStudent } from "../api/loader";
import { useSnackMessageContext } from "../../../../../shared/context/snackMessageContext/lib/useSnackMessageContext";
import { showSuccessMessage } from "../../../../../shared/context/snackMessageContext/lib/helpers";
import { createApiErrorMessage } from "../../../../../shared/api/createApiErrorMessage";
import { Spinner } from "../../../../../shared/ui/Spinner/Spinner";
import { useModalWindowContext } from "../../../../../shared/context/modalWindowContext/lib/useModalWindowContext";

type TEditStudentFormProps = {
  student: TStudent;
  updateAllData: () => void;
}

export const EditStudentForm = ({ student, updateAllData }: TEditStudentFormProps) => {
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
  })

  const handleSubmit = (data: TStudentFormSchema) => {
    const sendingData = {
      ...student,
      ...data,
      price: +data.price,
      form: +data.form
    };
    editStudent(sendingData)
  };

  if(isPendingEditing){
    return <Spinner />
  }

  return (
    <StudentForm
      defaultValues={{
        ...student,
        price: +student.price,
        form: +student.form
      }}
      buttonName="Edit Student"
      onSubmit={handleSubmit}
    />
  )
}