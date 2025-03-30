import { useQueryClient, useMutation } from "@tanstack/react-query";
import { sendNewLesson } from "../api/loaders";
import { TLessonFromSchema } from "../../../../entities/lesson/model/lessonFormSchema";
import { TInitialLessonParams } from "../../../../entities/lesson/model/loadInitialDataServerAnswer.type";
import { createApiErrorMessage } from "../../../../shared/api/createApiErrorMessage";
import { showSuccessMessage } from "../../../../shared/context/snackMessageContext/lib/helpers";
import { useSnackMessageContext } from "../../../../shared/context/snackMessageContext/lib/useSnackMessageContext";

type TUseCreateNewLesson = {
  updateAllData: () => void;
  initialLessonData: TInitialLessonParams | undefined;
};

export const useCreateNewLesson = ({
  updateAllData,
  initialLessonData
}: TUseCreateNewLesson) => {
  const { openSnackMessage } = useSnackMessageContext();
  const client = useQueryClient();

  const { mutate: createNewLesson, isPending: isPendingCreation } = useMutation({
    mutationKey: ['new lesson', { id: initialLessonData?.nextId || crypto.randomUUID() }],
    mutationFn: sendNewLesson,
    onSuccess: () => {
      openSnackMessage(showSuccessMessage(`${initialLessonData?.nextId}: Lesson was added!`))
      updateAllData();
      client.invalidateQueries({ queryKey: ['initialLessonFormData'] });
    },
    onError: (error) => openSnackMessage(createApiErrorMessage(error))
  });

  const handleSubmitForm = async (data: TLessonFromSchema) => {
    if (initialLessonData) {
      const sendingData = { id: initialLessonData.nextId, ...data, price: +data.price };
      createNewLesson(sendingData);
    }
  };

  return {
    isPendingCreation,
    handleSubmitForm
  };
};