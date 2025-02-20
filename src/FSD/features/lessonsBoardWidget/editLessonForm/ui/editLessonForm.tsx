import { TSendEditedLessonServerAnswer } from "../model/api.types";
import { sendEditedLesson } from "../api/loaders";
import { loadInitialData } from "../../../../entities/lesson/api/loaders";
import { TLesson } from "../../../../entities/lesson/model/lesson.type";
import { TLessonFromSchema } from "../../../../entities/lesson/model/lessonFormSchema";
import { LessonForm } from "../../../../entities/lesson/ui/lessonForm";
import { createApiErrorMessage } from "../../../../shared/api/createApiErrorMessage";
import { showSuccessMessage } from "../../../../shared/context/snackMessageContext/lib/helpers";
import { useLoadDataFromServer } from "../../../../shared/hooks/useLoadDataFromServer";
import { Spinner } from "../../../../shared/ui/Spinner/Spinner";
import { useModalWindowContext } from "../../../../shared/context/modalWindowContext/lib/useModalWindowContext";

type TEditLessonFormProps = {
  lesson: TLesson;
  updateAllData: () => Promise<void>;
};

export const EditLessonForm = ({ lesson, updateAllData }: TEditLessonFormProps) => {
  const {
    data: editLessonParams,
    openSnackMessage,
    isLoading,
    setIsLoading,
    isError,
  } = useLoadDataFromServer(loadInitialData);

  const { close } = useModalWindowContext();

  const handleSubmitForm = async (data: TLessonFromSchema) => {
    if (editLessonParams) {
      const sendingData = { ...lesson, ...data, price: +data.price };
      try {
        setIsLoading(true);
        const response: TSendEditedLessonServerAnswer = await sendEditedLesson(sendingData)

        if (response) {
          openSnackMessage(showSuccessMessage(`${response.editedLesson.id} lesoon was edited successfully!`))
          updateAllData()
        }
      } catch (error) {
        openSnackMessage(createApiErrorMessage(error));
      } finally {
        setIsLoading(false);
        close();
      }
    }
  }

  if (isLoading) {
    return <Spinner />;
  }

  if (isError || !editLessonParams) {
    return <p>Yooops, something goes wrong!</p>
  }

  return (
    <LessonForm
      defaultValues={{ ...lesson, price: lesson.price.toString() }}
      onSubmit={handleSubmitForm}
      isLoading={isLoading}
      isError={isError}
      initialLessonsParams={editLessonParams}
      buttonName="Edit lesson"
    />
  );
}