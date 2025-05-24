import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Container } from "@mui/material";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { loadStudents } from "../../../../entities/student/api/loaders";
import { BoardStyledButton } from "../../../../shared/ui/BoardStyledButton/BoardStyledButton";
import { PaginationContainer } from "../../../../shared/ui/PaginationContainer/PaginationContainer";
import { useDebouncePaginationSearch } from "../../../../shared/hooks/useDebounceSearch";
import { StudentsList } from "./StudentsList";
import { Spinner } from "../../../../shared/ui/Spinner/Spinner";
import UpdateIcon from '@mui/icons-material/Update';
import { useUpdatePageDataContext } from "../../../../shared/context/updatePageDataContext";
import { useModalWindowContext } from "../../../../shared/context/modalWindowContext/lib/useModalWindowContext";
import { CreateNewStudentForm } from "../../../../features/studentsPage/studentsBoardWidget/createNewStudentForm/ui/CreateNewStudentForm";


export const StudentsBoard = () => {
  const [page, setPage] = useState(1);
  const handleChangePage = (page: number) => {
    setPage(page);
  };

  const { inputValue, search, handleChangeSearch } = useDebouncePaginationSearch({
    changePage: handleChangePage,
    delay: 500
  });

  const { data: students, isLoading, isFetching, isError } = useQuery({
    queryKey: ['students', { page, search }],
    queryFn: () => loadStudents({ page, name: search })
  });

  const { updateAllData } = useUpdatePageDataContext();
  const handleClickUpdateStudents = () => {
    updateAllData();
  };

  const { open } = useModalWindowContext();
  const handleClickAddNewStudent = () => {
    open(<CreateNewStudentForm updateAllData={updateAllData} />,
      'New student'
    )
  };

  return (
    <Container sx={{ pt: '1rem', pb: '5rem' }}>
      <div className="flex justify-center items-center gap-2 mb-8">
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
          onClick={handleClickAddNewStudent}
        />
        <BoardStyledButton
          disabled={isLoading || isFetching}
          icon={UpdateIcon}
          toolTipTitle="Update students"
          onClick={handleClickUpdateStudents}
        />
      </div>
      {isLoading && <Spinner />}
      {isError && <p>Something went wrong! Try again!</p>}
      {students &&
        <>
          <StudentsList students={students.data} />
          <PaginationContainer
            paginationParams={students.paginationParams}
            handleChangePage={handleChangePage}
          />
        </>}
    </Container>
  );
};

