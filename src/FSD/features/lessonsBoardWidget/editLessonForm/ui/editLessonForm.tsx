import { TLesson } from "../../../../entities/lesson/model/lesson.type";
import { LessonForm } from "../../../../entities/lesson/ui/lessonForm";
import { Spinner } from "../../../../shared/ui/Spinner/Spinner";
import { useInitialLessonData } from "../../../../entities/lesson/lib/useInitialLessonData";
import { useEditLesson } from "../lib/useEditLesson";

type TEditLessonFormProps = {
  lesson: TLesson;
  updateAllData: () => void;
};

export const EditLessonForm = ({ lesson, updateAllData }: TEditLessonFormProps) => {
  const {
    initialLessonData,
    isPendingInitialData,
    isErrorInitialData
  } = useInitialLessonData();

  const { isPendintEdit, handleSubmitForm } = useEditLesson({
    lesson, initialLessonData, updateAllData
  });

  if (isPendingInitialData || isPendintEdit) {
    return <Spinner />;
  }

  if (isErrorInitialData || !initialLessonData) {
    return <p>Yooops, something goes wrong!</p>;
  }

  return (
    <LessonForm
      defaultValues={{ ...lesson, price: lesson.price.toString() }}
      onSubmit={handleSubmitForm}
      initialLessonsParams={initialLessonData}
      buttonName="Edit lesson"
    />
  );
};