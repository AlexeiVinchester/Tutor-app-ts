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
    const [isNamesLoading, setIsNamesLoading] = useState(true);
    const [data, setData] = useState<IFullStatisticsData | null>(null);
    const dispatch = useDispatch();

    const fetchStudentData = useCallback(async (name: string) => {
        dispatch(startLoading());
        try {
            const response = await fetch(`http://localhost:3002/getfullStatistics?name=${name}`);
            if (!response.ok) {
                throw new Error(`Server error while getting data for ${name}!`);

            }
            const data = await response.json();
            setData(data);
        } catch (error) {
            dispatch(showSnackMessage(createSnackMessage(
                `Error while loading statistics data: ${error instanceof Error ?
                    error.message :
                    'unknown error occurred!'
                }!`,
                'error'
            )));
        } finally {
            dispatch(stopLoading())
        }
    }, [dispatch]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:3002/getStudentsNames`);
                if (!response.ok) {
                    throw new Error('Server Error while loading names for students!');
                }

                const data = await response.json();
                setStudentsNames(data);
                setIsNamesLoading(false);

                if (data.length > 0) {
                    await fetchStudentData(data[0]);
                }
            } catch (error) {
                dispatch(showSnackMessage(createSnackMessage(
                    `Error while loading: ${error instanceof Error ?
                        error.message :
                        'unknown error occurred!'
                    }!`,
                    'error'
                )));
                setIsNamesLoading(false);
            }
        };
        fetchData();
    }, [dispatch, fetchStudentData]);

    const onselectStudentChange = useCallback(async (e: React.ChangeEvent<HTMLSelectElement>) => {
        await fetchStudentData(e.target.value);
    }, [fetchStudentData]);;

    return (
        <>
            <StatisticsPageHeader
                description="Here you can find statistics for full time: amount of lessons and full income. In the bottom part choose student and find income and amount of lessons for interested student!"
            />
            {
                isNamesLoading ?
                    <Spinner /> :
                    <StatisticsMainWrapper>
                        <StatisticsTopText value="Full Statistics" />
                        <SelectContainer
                            data={studentsNames}
                            onChange={onselectStudentChange}
                        />
                        {data && <FullStatisticsDataContainer data={data} />}
                    </StatisticsMainWrapper>
            }
        </>
    );
};

export { FullStatisticsPage };
