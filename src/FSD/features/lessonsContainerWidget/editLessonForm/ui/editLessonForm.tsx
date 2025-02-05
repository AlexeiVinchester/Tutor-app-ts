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

type TEditLessonFormProps = {
  lesson: TLesson;
};

export const EditLessonForm = ({ lesson }: TEditLessonFormProps) => {
  const {
    data: editLessonParams,
    openSnackMessage,
    isLoading,
    setIsLoading,
    isError,
  } = useLoadDataFromServer(loadInitialData);

  const handleSubmitForm = async (data: TLessonFromSchema) => {
    if (editLessonParams) {
      const sendingData = { ...lesson, ...data, price: +data.price };
      try {
        setIsLoading(true);
        const response: TSendEditedLessonServerAnswer = await sendEditedLesson(sendingData)

        if (response) {
          openSnackMessage(showSuccessMessage(`${response.editedLesson.id} lesoon was edited successfully!`))
        }
      } catch (error) {
        openSnackMessage(createApiErrorMessage(error));
      } finally {
        setIsLoading(false);
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
      defaultValues={{...lesson, price: lesson.price.toString()}}
      onSubmit={handleSubmitForm}
      isLoading={isLoading}
      isError={isError}
      names={editLessonParams.names}
      buttonName="Edit lesson"
    />
  );
}