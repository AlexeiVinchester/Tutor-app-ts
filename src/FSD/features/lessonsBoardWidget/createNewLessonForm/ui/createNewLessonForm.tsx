import { sendNewLesson } from "../api/loaders";
import { formDefaultValues } from "../model/defaultValues";
import { TSendNewLessonServerAnswer } from "../model/api.types";
import { loadInitialData } from "../../../../entities/lesson/api/loaders";
import { TLessonFromSchema } from "../../../../entities/lesson/model/lessonFormSchema";
import { LessonForm } from "../../../../entities/lesson/ui/lessonForm";
import { createApiErrorMessage } from "../../../../shared/api/createApiErrorMessage";
import { showSuccessMessage } from "../../../../shared/context/snackMessageContext/lib/helpers";
import { useLoadDataFromServer } from "../../../../shared/hooks/useLoadDataFromServer";
import { Spinner } from "../../../../shared/ui/Spinner/Spinner";

type TCreateNewLessonFormProps = {
  updateAllData: () => Promise<void>;
}

export const CreateNewLessonForm = ({updateAllData}: TCreateNewLessonFormProps) => {
  const {
    data: newLessonParams,
    setData: setNewLessonParams,
    openSnackMessage,
    isLoading,
    setIsLoading,
    isError,
  } = useLoadDataFromServer(loadInitialData);

  const handleSubmitForm = async (data: TLessonFromSchema) => {
    if (newLessonParams) {
      const sendingData = { id: newLessonParams.nextId, ...data, price: +data.price };

      try {
        setIsLoading(true);
        const response: TSendNewLessonServerAnswer = await sendNewLesson(sendingData);

        if (response) {
          openSnackMessage(showSuccessMessage(`${newLessonParams.nextId}: Lesson was added!`))
          setNewLessonParams((prev) => ({
            ...prev,
            studentsParams: prev?.studentsParams || [],
            nextId: response.nextId
          }))
          updateAllData();
        }
      } catch (error) {
        openSnackMessage(createApiErrorMessage(error))
      }
      finally {
        setIsLoading(false);
      }
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  if (isError || !newLessonParams) {
    return <p>Yooops, something goes wrong!</p>
  }

  return (
    <LessonForm
      defaultValues={formDefaultValues}
      onSubmit={handleSubmitForm}
      isLoading={isLoading}
      isError={isError}
      initialLessonsParams={newLessonParams}
      shouldResetFields
      buttonName='Create new lesson'
    />
  );
};