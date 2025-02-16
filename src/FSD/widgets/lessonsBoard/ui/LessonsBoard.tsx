import { LessonsTable } from "../../../features/lessonsBoardWidget/lessonsTable/ui/lessonsTable";
import { TLesson } from "../../../entities/lesson/model/lesson.type";

export type TLessonsBoardProps = {
  lessons: TLesson[] | null;
  isLoading: boolean;
  isError: boolean;
  updateData: () => void;
}

export const LessonsBoard = ({ lessons, isLoading, isError, updateData }: TLessonsBoardProps) => {
  return (
    <LessonsTable
      lessons={lessons}
      isLoading={isLoading}
      isError={isError}
      updateData={updateData}
    />
  );
}