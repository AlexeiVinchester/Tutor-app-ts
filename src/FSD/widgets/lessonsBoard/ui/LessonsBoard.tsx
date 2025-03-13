import { LessonsTable } from "../../../features/lessonsBoardWidget/lessonsTable/ui/lessonsTable";
import { TLesson } from "../../../entities/lesson/model/lesson.type";
import { Card, CardContent } from "@mui/material";
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
  const handleChangePage = (page: number) => {
    console.log(page);
  };

  return (
    <>
      <Card
        variant="outlined"
        className="!pb-3 !min-w-[700px] !shadow-[0_5px_20px_#ABB2B9] !rounded-[22px] "
      >
        <LessonBoardHeader updateData={updateData} />
        <CardContent>
          {isLoading && <div className="text-main-orange">Loading of lessons...</div>}
          {(!isLoading && lessons) &&
            <>
              <LessonsTable
                lessons={lessons}
                isError={isError}
                updateData={updateData}
              />
              <PaginationContainer
                paginationParams={paginationParams}
                handleChangePage={handleChangePage}
              />
            </>}
        </CardContent>
      </Card>
    </>
  );
}