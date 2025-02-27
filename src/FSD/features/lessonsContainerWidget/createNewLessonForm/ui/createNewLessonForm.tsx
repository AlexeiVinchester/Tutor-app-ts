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

export const CreateNewLessonForm = () => {
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
            names: prev?.names || [],
            nextId: response.nextId
          }))
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
      names={newLessonParams.names}
      shouldResetFields
      buttonName='Create new lesson'
    />
  );
};