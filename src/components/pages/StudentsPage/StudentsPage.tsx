import { useSelector } from "react-redux";
import { Store } from "../../../redux/store/interface/store.interface";
import { Container, Grid } from "@mui/material";
import { StudentsList } from "./StudentsList/StudentsList";

const StudentsPage = () => {
    const students = useSelector((state: Store) => state.students);

    return (
        <div>
            <Container sx={{ mt: '1rem' }}>
                <Grid container spacing={2}>
                    <StudentsList students={students} />
                </Grid>
            </Container>

        </div>
    );
};

export { StudentsPage };
