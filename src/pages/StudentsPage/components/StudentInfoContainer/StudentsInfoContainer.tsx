import { Container } from "@mui/material";
import { StudentsInfoContainerProps } from "./interface/studentsInfoContainer.interface";

const StudentsInfoContainer = ({ children }: StudentsInfoContainerProps) => {
    return (
        <div>
            <Container sx={{ mt: '1rem' }}>
                {children}
            </Container>
        </div>
    );
};

export { StudentsInfoContainer };
