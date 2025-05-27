import { Grid } from "@mui/material";
import { StudentCard } from "./StudentCard";
import { TStudent } from "../../../../entities/student/model/student.type"

type TStudentsListProps = {
  students: TStudent[];
};

export const StudentsList = ({ students }: TStudentsListProps) => {
  return (
    <Grid
      container
      spacing={2}
      className="mb-4 flex justify-center items-center"
    >
      {students.map((student) => (
        <Grid item xs={12} md={4} key={student.id}>
          <StudentCard student={student} />
        </Grid>
      ))}
    </Grid>
  );
};