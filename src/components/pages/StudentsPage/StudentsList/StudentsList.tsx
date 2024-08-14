import { Grid } from "@mui/material";
import { StudentCard } from "../StudentCard/StudentCard";
import { StudentsListProps } from "./interface/StudentsList.interface";
import { Student } from "../../../../share/interfaces/student.interface";

const StudentsList = ({ students }: StudentsListProps) => {
    return students.map((student: Student) => (
        <Grid item xs={12} md={4}>
            <StudentCard student={student} />
        </Grid>
    ));
}

export { StudentsList };
