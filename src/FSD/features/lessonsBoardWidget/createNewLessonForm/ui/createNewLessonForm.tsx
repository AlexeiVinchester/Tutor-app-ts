import { formDefaultValues } from "../model/defaultValues";
import { LessonForm } from "../../../../entities/lesson/ui/lessonForm";
import { Spinner } from "../../../../shared/ui/Spinner/Spinner";
import { useInitialLessonData } from "../../../../entities/lesson/lib/useInitialLessonData";
import { useCreateNewLesson } from "../lib/useCreateNewLesson";

type TCreateNewLessonFormProps = {
  updateAllData: () => void;
};

export const CreateNewLessonForm = ({ updateAllData }: TCreateNewLessonFormProps) => {
  const {
    initialLessonData,
    isPendingInitialData,
    isErrorInitialData
  } = useInitialLessonData();

  const {
    isPendingCreation,
    handleSubmitForm
  } = useCreateNewLesson({ initialLessonData, updateAllData });

  if (isPendingInitialData || isPendingCreation) {
    return <Spinner />;
  }

  if (isErrorInitialData || !initialLessonData) {
    return <p>Yooops, something goes wrong!</p>;
  }

  return (
    <LessonForm
      defaultValues={formDefaultValues}
      onSubmit={handleSubmitForm}
      initialLessonsParams={initialLessonData}
      shouldResetFields
      buttonName='Create new lesson'
    />
  );
};