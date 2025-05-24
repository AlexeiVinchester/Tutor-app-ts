import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { loadInitialStudentParams, sendNewStudent } from "../api/loaders";
import { defaultStudentFormValues } from "../model/defaultFormValues";
import { TStudentFormSchema } from "../../../../../entities/student/model/studentFormSchema";
import { StudentForm } from "../../../../../entities/student/ui/studentForm";
import { Spinner } from "../../../../../shared/ui/Spinner/Spinner";
import { useSnackMessageContext } from "../../../../../shared/context/snackMessageContext/lib/useSnackMessageContext";
import { createApiErrorMessage } from "../../../../../shared/api/createApiErrorMessage";
import { showSuccessMessage } from "../../../../../shared/context/snackMessageContext/lib/helpers";

type TCreateNewStudentFormProps = {
  updateAllData: () => void;
}

export const CreateNewStudentForm = ({ updateAllData }: TCreateNewStudentFormProps) => {
  const {
    data: initialStudentsData,
    isError: isErrorInitialStudentParams,
    isLoading: isLoadingInitialStudentParams
  } = useQuery({
    queryFn: () => loadInitialStudentParams(),
    queryKey: ['initialStudentsParams']
  });

  const { openSnackMessage } = useSnackMessageContext();
  const client = useQueryClient();
  const { mutate: createNewStudent, isPending: isPendingCreation } = useMutation({
    mutationKey: ['new student', { id: initialStudentsData?.nextId || crypto.randomUUID() }],
    mutationFn: sendNewStudent,
    onSuccess: () => {
      openSnackMessage(showSuccessMessage(`${initialStudentsData?.nextId}: Student was added!`))
      updateAllData();
      client.invalidateQueries({ queryKey: ['initialStudentsParams'] });
    },
    onError: (error) => {
      openSnackMessage(createApiErrorMessage(error))
    }
  });

  const handleSubmitForm = (data: TStudentFormSchema) => {
    if (initialStudentsData) {
      const sendingData = {
        id: initialStudentsData.nextId,
        ...data,
        price: +data.price,
        form: +data.form
      };
      createNewStudent(sendingData)
    }
  };

  if (isErrorInitialStudentParams || !initialStudentsData) {
    return <p>Yooops, something goes wrong!</p>;
  }

  if (isLoadingInitialStudentParams || isPendingCreation) {
    return <Spinner />
  }

  return (
    <StudentForm
      buttonName="Create Student"
      defaultValues={defaultStudentFormValues}
      onSubmit={handleSubmitForm}
    />
  );
};