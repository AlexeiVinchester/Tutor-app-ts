import { useMutation } from "@tanstack/react-query";
import { sendEditedLesson } from "../api/loaders";
import { TLessonFromSchema } from "../../../../entities/lesson/model/lessonFormSchema";
import { TLesson } from "../../../../entities/lesson/model/lesson.type";
import { TInitialLessonParams } from "../../../../entities/lesson/model/loadInitialDataServerAnswer.type";
import { createApiErrorMessage } from "../../../../shared/api/createApiErrorMessage";
import { showSuccessMessage } from "../../../../shared/context/snackMessageContext/lib/helpers";
import { useSnackMessageContext } from "../../../../shared/context/snackMessageContext/lib/useSnackMessageContext";
import { useModalWindowContext } from "../../../../shared/context/modalWindowContext/lib/useModalWindowContext";

type TUseEditLessonParams = {
  updateAllData: () => void;
  initialLessonData: TInitialLessonParams | undefined;
  lesson: TLesson;
};

export const useEditLesson = ({
  updateAllData,
  initialLessonData,
  lesson
}: TUseEditLessonParams) => {
  const { openSnackMessage } = useSnackMessageContext();
  const { close } = useModalWindowContext();

  const { mutate: editLesson, isPending: isPendintEdit } = useMutation({
    mutationKey: ['editLesson', { id: lesson.id }],
    mutationFn: sendEditedLesson,
    onSuccess: (response) => {
      openSnackMessage(showSuccessMessage(`${response.editedLesson.id} lesoon was edited successfully!`));
      updateAllData();
    },
    onError: (error) => {
      openSnackMessage(createApiErrorMessage(error));
    },
    onSettled: () => close()
  });

  const handleSubmitForm = async (data: TLessonFromSchema) => {
    if (initialLessonData) {
      const sendingData = { ...lesson, ...data, price: +data.price };
      editLesson(sendingData);
    }
  };

  return {
    isPendintEdit,
    handleSubmitForm
  };
};