import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { SelectContainer } from "../../components/SelectContainer/SelectContainer";
import { SelectMonthContainer } from "./components/SelectMonthContainer/SelectMonthContainer";
import { getCorrectCurrentMonth, MONTHS, YEARS } from "./components/SelectMonthContainer/dateWorker";
import { StudentSelectiveDataContainer } from "./components/StudentSelectiveDataContainer/StudentSelectiveDataContainer";
import { Spinner } from "../../components/Spinner/Spinner";
import { StatisticsDataContainer } from "../../components/StatisticsDataContainer/StatisticsDataContainer";
import { showSnackMessage } from "../../redux/slices/snackMessageSlice/snackMessageSlice";
import { IStatisticsData } from "../../share/interfaces/statisticsData";
import { createSnackMessage } from "../../utils/createSnackMessage";
import { StatisticsPageHeader } from "../../components/StatisticsPageHeader/StatisticsPageHeader";
import { StatisticsMainWrapper } from "../../components/StatisticsMainWrapper/StatisticsMainWrapper";
import { StatisticsTopText } from "../../components/StatisticsTopText/StatisticsTopText";

const SelectiveStatisticsPage = () => {
    const [isInitialDataLoaded, setIsInitialDataLoaded] = useState(true);
    const [studentsNames, setStudentsNames] = useState<string[]>([]);
    const [selectedYear, setSelectedYear] = useState<string>(() => new Date().getFullYear().toString());
    const [selectedMonth, setSelectedMonth] = useState<string | undefined>(() => getCorrectCurrentMonth());
    const [commonStatistics, setCommonStatistics] = useState<IStatisticsData | null>(null);

    const dispatch = useDispatch();

    useEffect(() => {
        if (selectedMonth && selectedYear) {
            const loadStudentsNamesForPeriod = async () => {
                setIsInitialDataLoaded(true);
                try {
                    const responseNames = await fetch(`http://localhost:3002/getStudentsNamesForPeriod?year=${selectedYear}&month=${selectedMonth}`);
                    if (!responseNames.ok) {
                        throw new Error('Server error while loading names for period');
                    }
                    const names = await responseNames.json();

                    const responseOfCommonStatistics = await fetch(`http://localhost:3002/getCommonStatisticsForPeriod?year=${selectedYear}&month=${selectedMonth}`)
                    if (!responseOfCommonStatistics) {
                        throw new Error('Server error while loading common statistics for period');

                    }
                    const commonStatistics = await responseOfCommonStatistics.json();

                    setStudentsNames(names);
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
            };
            loadStudentsNamesForPeriod();
        }

    }, [dispatch, selectedMonth, selectedYear]);


    const handleChangeMonth = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedMonth(e.target.value);
    }, []);

    const handleChangeYear = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedYear(e.target.value);
    }, []);


    return (
        <div>
            <StatisticsPageHeader
                description="Here you can find selective common and student's statistics for choosen period "
            />
            <StatisticsMainWrapper>
                <StatisticsTopText 
                    value="Selective statistics"
                />
                <div className="flex justify-center gap-6 items-center mb-10">
                    <SelectContainer
                        data={YEARS}
                        onChange={handleChangeYear}
                        value={selectedYear}
                    />
                    <SelectMonthContainer
                        value={selectedMonth}
                        data={MONTHS}
                        onChange={handleChangeMonth}
                    />

                </div>
                {isInitialDataLoaded ? <Spinner /> : (
                    studentsNames.length > 0 ?
                        <>
                            <StatisticsDataContainer
                                amountLabel="Common amount"
                                amount={commonStatistics?.amountOfLessons}
                                incomeLabel="Common income"
                                income={commonStatistics?.income}
                            />
                            <StudentSelectiveDataContainer
                                studentsNames={studentsNames}
                                year={selectedYear}
                                month={selectedMonth}
                                key={selectedMonth + selectedYear}
                            />
                        </> :
                        <p>Yoops</p>
                )}
            </StatisticsMainWrapper>

        </div>
    );
};

export { SelectiveStatisticsPage };
