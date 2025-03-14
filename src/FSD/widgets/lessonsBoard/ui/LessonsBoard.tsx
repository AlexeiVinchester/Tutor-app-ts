import { LessonsTable } from "../../../features/lessonsBoardWidget/lessonsTable/ui/lessonsTable";
import { TLesson } from "../../../entities/lesson/model/lesson.type";
import { Card, CardContent } from "@mui/material";
import { LessonBoardHeader } from "../../../features/lessonsBoardWidget/LessonBoardHeader";
import { PaginationContainer } from "../../../shared/ui/PaginationContainer/PaginationContainer";
import { TPaginationParams } from "../../../shared/types/pagination";
import { useRef, useState } from "react";

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

  const [seacrh, setSearch] = useState('');

  const debounceSearchTimerId = useRef<number>(0);

  const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    if (debounceSearchTimerId.current) {
      clearTimeout(debounceSearchTimerId.current);
    }

    debounceSearchTimerId.current = setTimeout(() => console.log(e.target.value), 500);
  };

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
              <input
                className="w-[400px] rounded-[22px] p-3 border-2 border-gray-300 mb-6 hover:border-main-turquoise focus:outline-none" 
                placeholder="Search by name"
                type="text"
                value={seacrh}
                onChange={handleChangeSearch}
              />
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