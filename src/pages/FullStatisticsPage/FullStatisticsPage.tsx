import { StatisticsPageHeader } from "../../components/StatisticsPageHeader/StatisticsPageHeader";
import { StatisticsMainWrapper } from "../../components/StatisticsMainWrapper/StatisticsMainWrapper";
import { StatisticsTopText } from "../../components/StatisticsTopText/StatisticsTopText";
import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { SelectContainer } from "../../components/SelectContainer/SelectContainer";
import { FullStatisticsDataContainer } from "./components/FullStatisticsDataContainer/FullStatisticsDataContainer";
import { showSnackMessage } from "../../redux/slices/snackMessageSlice/snackMessageSlice";
import { createSnackMessage } from "../../utils/createSnackMessage";
import { Spinner } from "../../components/Spinner/Spinner";
import { startLoading, stopLoading } from "../../redux/slices/loadingSlice/loadingSlice";
import { IFullStatisticsData } from "../../share/interfaces/fullStatisticsData";

const FullStatisticsPage = () => {
    const [studentsNames, setStudentsNames] = useState<string[]>(['']);    
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState<IFullStatisticsData>({
        fullAmountOfLessons: 0,
        fullIncome: 0,
        fullIncomePerStudent: 0,
        fullAmountPerStudent: 0,
    });
    const dispatch = useDispatch();

    const fetchStudentData = useCallback(async (name: string) => {
        dispatch(startLoading());
        try {
            const response = await fetch(`http://localhost:3002/getfullStatistics?name=${name}`);
            const data = await response.json();
            setData(data);
        } catch (error) {
            if (error instanceof Error) {
                dispatch(showSnackMessage(createSnackMessage(
                    `Error while loading statistics data: ${error.message}!`,
                    'error'
                )));
            } else {
                dispatch(showSnackMessage(createSnackMessage(
                    `Error while loading statistics data: unknown error!`,
                    'error'
                )));
            }
        } finally {
            dispatch(stopLoading())
        }
    }, [dispatch]);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(`http://localhost:3002/getStudentsNames`);
                const data = await response.json();
                setStudentsNames(data);
                await fetchStudentData(data[0]);
            } catch (error) {
                if (error instanceof Error) {
                    dispatch(showSnackMessage(createSnackMessage(
                        `Error while loading students names: ${error.message}!`,
                        'error'
                    )));
                } else {
                    dispatch(showSnackMessage(createSnackMessage(
                        `Error while loading students names: unknown error!`,
                        'error'
                    )));
                }
            } finally {
                setIsLoading(false)
            }
        };
        fetchData();
    }, [dispatch, fetchStudentData]);

    const onselectStudentChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
        await fetchStudentData(e.target.value);
    };

    if (isLoading) return <Spinner />;

    return (
        <>
            <StatisticsPageHeader
                description="Here you can find statistics for full time: amount of lessons and full income. In the bottom part choose student and find income and amount of lessons for interested student!"
            />
            <StatisticsMainWrapper>
                <StatisticsTopText value="Full Statistics" />
                <SelectContainer
                    data={studentsNames}
                    onChange={onselectStudentChange}
                />
                <FullStatisticsDataContainer data={data} />
            </StatisticsMainWrapper>
        </>
    );
};

export { FullStatisticsPage };
