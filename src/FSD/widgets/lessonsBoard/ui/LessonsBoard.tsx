import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { LessonsTable } from "../../../features/lessonsBoardWidget/lessonsTable/ui/lessonsTable";
import { LessonBoardHeader } from "../../../features/lessonsBoardWidget/LessonBoardHeader";
import { loadLessons } from "../../../entities/lesson/api/loaders";
import { PaginationContainer } from "../../../shared/ui/PaginationContainer/PaginationContainer";

export const LessonsBoard = () => {
  const [page, setPage] = useState(1);
  const [inputValue, setInputValue] = useState('');
  const [search, setSearch] = useState('');

  const { data: lessons, isError, isLoading, isFetching } = useQuery({
    queryKey: ['lessons', { page, search }],
    queryFn: () => loadLessons({ page, name: search })
  });

  const debounceSearchTimerId = useRef<number>(0);

  useEffect(() => {
    if (debounceSearchTimerId.current) {
      clearTimeout(debounceSearchTimerId.current);
    }

    debounceSearchTimerId.current = setTimeout(() => {
      setSearch(inputValue);
      setPage(1);
    }, 500)

    return () => clearTimeout(debounceSearchTimerId.current)
  }, [inputValue])

  const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
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
        <LessonBoardHeader isPending={isLoading || isFetching} />
        <CardContent className="!pt-0">
          <input
            className="w-[400px] rounded-[22px] p-3 border-2 border-gray-300 mb-6 hover:border-main-turquoise focus:outline-none"
            placeholder="Search by name"
            type="text"
            value={inputValue}
            onChange={handleChangeSearch}
          />
          {isLoading &&
            <div className="text-main-orange">Loading of lessons...</div>
          }
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