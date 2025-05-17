import { useQuery } from "@tanstack/react-query";
import { loadStudents } from "../../../../entities/student/api/loaders";
import { Container, Grid } from "@mui/material";
import { StudentCard } from "./StudentCard";
import { BoardStyledButton } from "../../../../shared/ui/BoardStyledButton/BoardStyledButton";
import PersonAddIcon from '@mui/icons-material/PersonAdd';

export const StudentsBoard = () => {
  const { data: students, isLoading, isFetching } = useQuery({
    queryKey: ['students'],
    queryFn: () => loadStudents()
  });

  return (
    <Container sx={{ pt: '1rem', pb: '5rem' }}>
      <div className="flex justify-center items-center mb-8">
        <input
          className="w-[60%] rounded-[22px] p-3 border-2 border-gray-300 hover:border-main-turquoise focus:outline-none"
          type="search"
          placeholder="Try to find student..."
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
    </Container>
  );
};

