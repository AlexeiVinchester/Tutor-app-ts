import { useSelector } from "react-redux";
import { Store } from "../../../redux/store/interface/store.interface";
import { Grid } from "@mui/material";
import { StudentsList } from "./components/StudentsList/StudentsList";
import { StudentsInfoContainer } from "./components/StudentInfoContainer/StudentsInfoContainer";

const StudentsPage = () => {
    const students = useSelector((state: Store) => state.students);

    return (
        <StudentsInfoContainer>
            <Grid container spacing={2}>
                <StudentsList students={students} />
            </Grid>
            
        </StudentsInfoContainer>
    );
};

export { StudentsPage };
