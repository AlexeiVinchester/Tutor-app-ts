import { useCallback } from "react";
import { EditLessonForm } from "../../editLessonForm/ui/editLessonForm";
import { useLessonsPageContext } from "../../../../entities/lesson/context/LessonPageContext/lib/useLessonsPageContext";
import { TLesson } from "../../../../entities/lesson/model/lesson.type";
import { useModalWindowContext } from "../../../../shared/context/modalWindowContext/lib/useModalWindowContext";

export const useOpenEditLessonForm = (lesson: TLesson) => {
  const { open } = useModalWindowContext();
  const { updateAllData } = useLessonsPageContext();

  const handleClickEdit = useCallback(() => {
    open(
      <EditLessonForm lesson={lesson} updateAllData={updateAllData} />,
      'Edit lesson'
    );
  }, [lesson, open, updateAllData]);

  return handleClickEdit;
};