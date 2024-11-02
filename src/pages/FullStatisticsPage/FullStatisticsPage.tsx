import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Spinner } from "../../components/Spinner/Spinner";
import { StatisticsMainWrapper } from "../../components/StatisticsMainWrapper/StatisticsMainWrapper";
import { StatisticsPageHeader } from "../../components/StatisticsPageHeader/StatisticsPageHeader";
import { StatisticsTopText } from "../../components/StatisticsTopText/StatisticsTopText";
import { StatisticsDataContainer } from "../../components/StatisticsDataContainer/StatisticsDataContainer";
import { SelectContainer } from "../../components/SelectContainer/SelectContainer";
import { showSnackMessage } from "../../redux/slices/snackMessageSlice/snackMessageSlice";
import { createSnackMessage } from "../../utils/createSnackMessage";
import { startLoading, stopLoading } from "../../redux/slices/loadingSlice/loadingSlice";
import { IStatisticsData } from "../../share/interfaces/statisticsData";

const FullStatisticsPage = () => {
    const [isInitialDataLoaded, setIsInitialDataLoaded] = useState(true);
    const [commonStatistics, setCommonStatistics] = useState<IStatisticsData | null>(null);
    const [studentStatistics, setStudentStatistics] = useState<IStatisticsData | null>(null);
    const [studentsNames, setStudentsNames] = useState<string[]>(['']);
    const [selectedStudentName, setSelectedStudentName] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        const loadInitialData = async () => {
            try {
                const responseOfNames = await fetch(`http://localhost:3002/getStudentsNames`);
                if (!responseOfNames) {
                    throw new Error('Server error while loading names');
                }
                const studentsNames = await responseOfNames.json();

                const responseOfCommonStatistics = await fetch(`http://localhost:3002/getCommonStatistics`);
                if (!responseOfCommonStatistics) {
                    throw new Error('Server error while loading common statistics');
                }
                const commonStatistics = await responseOfCommonStatistics.json();

                setStudentsNames(studentsNames);
                setCommonStatistics(commonStatistics);
            } catch (error) {
                dispatch(showSnackMessage(createSnackMessage(
                    `Error while loading initial data: ${error instanceof Error ?
                        error.message :
                        'unknown error occured'
                    }!`,
                    'error'
                )));
            } finally {
                setIsInitialDataLoaded(false);
            }
        }
        loadInitialData();
    }, [dispatch]);

    const fetchStudentData = useCallback(async (name: string) => {
        dispatch(startLoading());
        try {
            const response = await fetch(`http://localhost:3002/getFullStudentStatistics?name=${name}`);
            if (!response.ok) {
                throw new Error(`Server error while getting data for ${name}!`);

            }
            const data = await response.json();
            setStudentStatistics(data);
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

    const onselectStudentChange = useCallback(async (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedStudentName(e.target.value);
        await fetchStudentData(e.target.value);
    }, [fetchStudentData]);;

    return (
        <>
            <StatisticsPageHeader
                description="Here you can find statistics for full time: amount of lessons and full income. In the bottom part choose student and find income and amount of lessons for interested student!"
            />
            {
                isInitialDataLoaded ?
                    <Spinner /> :
                    <StatisticsMainWrapper>
                        <StatisticsTopText value="Full Statistics" />
                        <SelectContainer
                            onChange={onselectStudentChange}
                            data={studentsNames}
                            value={selectedStudentName}
                            initialOption="ChooseStudent"
                        />
                        <StatisticsDataContainer
                            amountLabel="Common amount"
                            amount={commonStatistics?.amountOfLessons}
                            incomeLabel="Common income"
                            income={commonStatistics?.income}
                        />
                        {studentStatistics && (
                            <StatisticsDataContainer
                                amountLabel="Student amount"
                                amount={studentStatistics.amountOfLessons}
                                incomeLabel="Student income"
                                income={studentStatistics.income}
                            />
                        )}
                    </StatisticsMainWrapper>
            }
        </>
    );
};

export { FullStatisticsPage };
