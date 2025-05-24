import { useQueryClient, useMutation } from "@tanstack/react-query";
import { sendNewStudent, TLoadInitialStudentParamsResponse } from "../api/loaders";
import { TStudentFormSchema } from "../../../../../entities/student/model/studentFormSchema";
import { createApiErrorMessage } from "../../../../../shared/api/createApiErrorMessage";
import { showSuccessMessage } from "../../../../../shared/context/snackMessageContext/lib/helpers";
import { useSnackMessageContext } from "../../../../../shared/context/snackMessageContext/lib/useSnackMessageContext";

type TUseCreateNewStudent = {
  updateAllData: () => void;
  initialStudentsData: TLoadInitialStudentParamsResponse | undefined;
};

export const useCreateNewStudent = ({
  updateAllData,
  initialStudentsData
}: TUseCreateNewStudent) => {
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
      createNewStudent(sendingData);
    }
  };

  return {
    handleSubmitForm,
    isPendingCreation
  };
};