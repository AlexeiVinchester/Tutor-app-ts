import { Container } from "@mui/material";
import { IChildren } from "../../share/interfaces/children.interface"
import { useEffect } from "react";
import { Spinner } from "../Spinner/Spinner";
import { useLoadLessons } from "../../hooks/useLoadLessons";
import { useDispatch } from "react-redux";
import { showSnackMessage } from "../../redux/slices/snackMessageSlice/snackMessageSlice";
import { createSnackMessage } from "../../utils/createSnackMessage";

const StatisticsMainWrapper = ({ children }: IChildren) => {
    const { isLoading, error, allLessons } = useLoadLessons();
    const dispatch = useDispatch();

    useEffect(() => {
        if (error) {
            dispatch(showSnackMessage(createSnackMessage(
                `Error while loading: ${error}`,
                'error'
            )));
        }
    }, [dispatch, error]);

    if (isLoading) {
        return <Spinner />
    }

    return (
        <div className="flex flex-col min-h-full pb-10 bg-statistics-back">
            <Container>
                {allLessons.length > 1 && children}
            </Container>
        </div>
    );
};

export { StatisticsMainWrapper };
