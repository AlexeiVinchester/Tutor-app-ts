import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Container, Grid } from "@mui/material";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { StudentCard } from "./StudentCard";
import { loadStudents } from "../../../../entities/student/api/loaders";
import { BoardStyledButton } from "../../../../shared/ui/BoardStyledButton/BoardStyledButton";
import { PaginationContainer } from "../../../../shared/ui/PaginationContainer/PaginationContainer";
import { useDebouncePaginationSearch } from "../../../../shared/hooks/useDebounceSearch";

export const StudentsBoard = () => {
  const [page, setPage] = useState(1);
  const handleChangePage = (page: number) => {
    setPage(page);
  };

  const { inputValue, search, handleChangeSearch } = useDebouncePaginationSearch({
    changePage: handleChangePage,
    delay: 500
  });

  const { data: students, isLoading, isFetching } = useQuery({
    queryKey: ['students', { page, search }],
    queryFn: () => loadStudents({ page, name: search })
  });

  return (
    <Container sx={{ pt: '1rem', pb: '5rem' }}>
      <div className="flex justify-center items-center mb-8">
        <input
          className="w-[60%] rounded-[22px] p-3 border-2 border-gray-300 hover:border-main-turquoise focus:outline-none"
          type="search"
          placeholder="Try to find student..."
          value={inputValue}
          onChange={handleChangeSearch}
        />
        <BoardStyledButton
          disabled={isLoading || isFetching}
          icon={PersonAddIcon}
          toolTipTitle="Add new student"
        />
      </div>
      <Grid
        container
        spacing={2}
        className="mb-4"
        sx={{ justifyContent: 'center', alignItems: 'center' }}
      >
        {students && students.data.map((student) => (
          <Grid item xs={12} md={4} key={student.id}>
            <StudentCard student={student} />
          </Grid>
        ))}
      </Grid>
      {students &&
        <PaginationContainer
          paginationParams={students.paginationParams}
          handleChangePage={handleChangePage}
        />
      }
    </Container>
  );
};

