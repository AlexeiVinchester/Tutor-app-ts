import { LessonsTable } from "../../../features/lessonsBoardWidget/lessonsTable/ui/lessonsTable";
import { TLesson } from "../../../entities/lesson/model/lesson.type";
import { IconButton } from "@mui/material";
import PostAddIcon from '@mui/icons-material/PostAdd';
import { useModalWindowContext } from "../../../shared/context/modalWindowContext/lib/useModalWindowContext";
import { useCallback } from "react";
import { CreateNewLessonForm } from "../../../features/lessonsBoardWidget/createNewLessonForm/ui/createNewLessonForm";
import { useLessonsPageContext } from "../../../entities/lesson/context/LessonPageContext/lib/useLessonsPageContext";

export type TLessonsBoardProps = {
  lessons: TLesson[] | null;
  isLoading: boolean;
  isError: boolean;
  updateData: () => void;
}

export const LessonsBoard = ({ lessons, isLoading, isError, updateData }: TLessonsBoardProps) => {
  const { open } = useModalWindowContext();
  const { updateAllData } = useLessonsPageContext();

  const handleClickAddNewLesson = useCallback(() => {
    open(<CreateNewLessonForm updateAllData={updateAllData} />, 'New lesson');
  }, [open, updateAllData])

  return (
    <>
      <LessonsTable
        lessons={lessons}
        isLoading={isLoading}
        isError={isError}
        updateData={updateData}
      />
      <IconButton
        className="!absolute bottom-[50px] right-[50px] !text-add-lesson-button-text"
        size="large"
        onClick={handleClickAddNewLesson}
      >
        <PostAddIcon fontSize="large" />
      </IconButton>
    </>
  );
}