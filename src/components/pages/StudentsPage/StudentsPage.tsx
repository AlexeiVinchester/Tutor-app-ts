import { useSelector } from "react-redux";
import { Store } from "../../../redux/store/interface/store.interface";
import { Student } from "../../../share/interfaces/student.interface";
import { StudentCard } from "./StudentCard/StudentCard";
import { Container } from "@mui/material";

const StudentsPage = () => {
    const students = useSelector((state: Store) => state.students);

    return (
        <div>
            <Container>
                {
                    students.map((student: Student) => (
                        <StudentCard student={student} />
                    ))
                }
            </Container>

        </div>
    );
};

export { StudentsPage };
