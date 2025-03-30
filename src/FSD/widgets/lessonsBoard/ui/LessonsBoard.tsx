import { useState } from "react";
import { Card, CardContent } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useDebounceSearch } from "../lib/useDebounceSearch";
import { LessonsTable } from "../../../features/lessonsBoardWidget/lessonsTable/ui/lessonsTable";
import { LessonBoardHeader } from "../../../features/lessonsBoardWidget/LessonBoardHeader";
import { loadLessons } from "../../../entities/lesson/api/loaders";
import { PaginationContainer } from "../../../shared/ui/PaginationContainer/PaginationContainer";
import { Spinner } from "../../../shared/ui/Spinner/Spinner";

export const LessonsBoard = () => {
  const [page, setPage] = useState(1);
  const handleChangePage = (page: number) => {
    setPage(page);
  };

  const { inputValue, search, handleChangeSearch } = useDebounceSearch(handleChangePage);

  const { data: lessons, isError, isLoading, isFetching } = useQuery({
    queryKey: ['lessons', { page, search }],
    queryFn: () => loadLessons({ page, name: search })
  });

  return (
    <>
      <Card
        variant="outlined"
        className="!min-w-[720px] !max-h-[690px] !min-h-[690px] !shadow-[0_5px_20px_#ABB2B9] !rounded-[22px] "
      >
        <LessonBoardHeader isPendingUpdate={isLoading || isFetching} />
        <CardContent className="!pt-0">
          <input
            className="w-[400px] rounded-[22px] p-3 border-2 border-gray-300 mb-6 hover:border-main-turquoise focus:outline-none"
            placeholder="Search by name"
            type="text"
            value={inputValue}
            onChange={handleChangeSearch}
          />
          {(isLoading) && <Spinner />}
          {(!isLoading && lessons) &&
            <>
              <LessonsTable
                lessons={lessons.data}
                isError={isError}
              />
              <PaginationContainer
                paginationParams={lessons.paginationParams}
                handleChangePage={handleChangePage}
              />
            </>
          }
        </CardContent>
      </Card>
    </>
  );
};