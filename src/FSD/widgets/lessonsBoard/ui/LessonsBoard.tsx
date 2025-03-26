import { LessonsTable } from "../../../features/lessonsBoardWidget/lessonsTable/ui/lessonsTable";
import { Card, CardContent } from "@mui/material";
import { LessonBoardHeader } from "../../../features/lessonsBoardWidget/LessonBoardHeader";
import { PaginationContainer } from "../../../shared/ui/PaginationContainer/PaginationContainer";
import { useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { loadLessons } from "../../../entities/lesson/api/loaders";

export const LessonsBoard = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');

  const { data: lessons, isError, isLoading } = useQuery({
    queryKey: ['lessons', { page, search }],
    queryFn: () => loadLessons({ page, name: search })
  });

  const debounceSearchTimerId = useRef<number>(0);

  const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    if (debounceSearchTimerId.current) {
      clearTimeout(debounceSearchTimerId.current);
    }

    debounceSearchTimerId.current = setTimeout(
      () => setSearch(e.target.value),
      500
    );
  };

  const handleChangePage = (page: number) => {
    setPage(page)
  };

  return (
    <>
      <Card
        variant="outlined"
        className="!min-w-[720px] !max-h-[690px] !min-h-[690px] !shadow-[0_5px_20px_#ABB2B9] !rounded-[22px] "
      >
        <LessonBoardHeader />
        <CardContent className="!pt-0">
          <input
            className="w-[400px] rounded-[22px] p-3 border-2 border-gray-300 mb-6 hover:border-main-turquoise focus:outline-none"
            placeholder="Search by name"
            type="text"
            value={search}
            onChange={handleChangeSearch}
          />
          {isLoading && <div className="text-main-orange">Loading of lessons...</div>}
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
            </>}
        </CardContent>
      </Card>
    </>
  );
};