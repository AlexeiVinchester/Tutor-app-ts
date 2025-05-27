import { useCallback } from "react";
import { EditLessonForm } from "../../editLessonForm/ui/editLessonForm";
import { TLesson } from "../../../../../entities/lesson/model/lesson.type";
import { useModalWindowContext } from "../../../../../shared/context/modalWindowContext/lib/useModalWindowContext";
import { useUpdatePageDataContext } from "../../../../../shared/context/updatePageDataContext";

export const useOpenEditLessonForm = (lesson: TLesson) => {
  const { open } = useModalWindowContext();
  const { updateAllData } = useUpdatePageDataContext();

  const handleClickEdit = useCallback(() => {
    open(
      <EditLessonForm lesson={lesson} updateAllData={updateAllData} />,
      'Edit lesson'
    );
  }, [lesson, open, updateAllData]);

  return handleClickEdit;
};