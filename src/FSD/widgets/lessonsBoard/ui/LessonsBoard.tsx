import { LessonsTable } from "../../../features/lessonsBoardWidget/lessonsTable/ui/lessonsTable";
import { TLesson } from "../../../entities/lesson/model/lesson.type";
import { Card, CardContent, IconButton } from "@mui/material";
import PostAddIcon from '@mui/icons-material/PostAdd';
import { useModalWindowContext } from "../../../shared/context/modalWindowContext/lib/useModalWindowContext";
import { useCallback } from "react";
import { CreateNewLessonForm } from "../../../features/lessonsBoardWidget/createNewLessonForm/ui/createNewLessonForm";
import { useLessonsPageContext } from "../../../entities/lesson/context/LessonPageContext/lib/useLessonsPageContext";
import { LessonBoardHeader } from "../../../features/lessonsBoardWidget/LessonBoardHeader";
import { PaginationContainer } from "../../../shared/ui/PaginationContainer/PaginationContainer";
import { TPaginationParams } from "../../../shared/types/pagination";

export type TLessonsBoardProps = {
  lessons: TLesson[] | null;
  isLoading: boolean;
  isError: boolean;
  updateData: () => void;
  paginationParams: TPaginationParams;
};

export const LessonsBoard = ({
  lessons,
  isLoading,
  isError,
  updateData,
  paginationParams
}: TLessonsBoardProps) => {
  const { open } = useModalWindowContext();
  const { updateAllData } = useLessonsPageContext();

  const handleClickAddNewLesson = useCallback(() => {
    open(<CreateNewLessonForm updateAllData={updateAllData} />, 'New lesson');
  }, [open, updateAllData])

  const handleChangePage = (page: number) => {
    console.log(page);
  };

  return (
    <>
      <Card
        variant="outlined"
        className="!pb-3 !min-w-[400px] !shadow-[0_5px_20px_#ABB2B9] !rounded-[22px] "
      >
        <LessonBoardHeader updateData={updateData} />
        <CardContent>
          <LessonsTable
            lessons={lessons}
            isLoading={isLoading}
            isError={isError}
            updateData={updateData}
          />
          <PaginationContainer
            paginationParams={paginationParams}
            handleChangePage={handleChangePage}
          />
          <IconButton
            className="!absolute bottom-[50px] right-[50px] !text-send-data-button-text"
            size="large"
            onClick={handleClickAddNewLesson}
          >
            <PostAddIcon fontSize="large" />
          </IconButton>
        </CardContent>
      </Card>
    </>
  );
}