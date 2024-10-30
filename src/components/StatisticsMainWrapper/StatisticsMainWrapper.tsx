import { Container } from "@mui/material";
import { IChildren } from "../../share/interfaces/children.interface"
import { useEffect } from "react";
import { Spinner } from "../Spinner/Spinner";
import { useSnackMessage } from "../../hooks/useSnackMessage";
import { SnackContainer } from "../SnackContainer/SnackContainer";
import { useLoadLessons } from "../../hooks/useLoadLessons";

const StatisticsMainWrapper = ({ children }: IChildren) => {
    const { isOpenSnackBar, showSnackBar, closeSnackBar, severity, message } = useSnackMessage();
    const { isLoading, error, allLessons } = useLoadLessons();

    useEffect(() => {
        if (error) {
            showSnackBar(`Error while loading: ${error}`, 'error');
        }
    }, [error, showSnackBar]);

    if (isLoading) {
        return <Spinner />
    }

    return (
        <div className="flex flex-col min-h-full pb-10 bg-statistics-back">
            <Container>
                {allLessons.length > 1 && children}
                <SnackContainer
                    isOpen={isOpenSnackBar}
                    close={closeSnackBar}
                    severity={severity}
                    message={message}
                />
            </Container>
        </div>
    );
};

export { StatisticsMainWrapper };
