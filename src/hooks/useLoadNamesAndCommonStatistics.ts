import { useState, useEffect, Dispatch } from "react";
import { useDispatch } from "react-redux";
import { showSnackMessage } from "../redux/slices/snackMessageSlice/snackMessageSlice";
import { IStatisticsData } from "../share/interfaces/statisticsData";
import { createSnackMessage } from "../utils/createSnackMessage";
import { UnknownAction } from "redux";

interface IUseLoadStatisticsInitialDataProps {
    namesUrl: string;
    commonStatisticsUrl: string;
};

interface IUseLoadStatisticsInitialDataResult {
    isInitialDataLoaded: boolean;
    studentsNames: string[];
    commonStatistics: IStatisticsData | null;
    dispatch: Dispatch<UnknownAction>;
}

type TUseLoadStatisticsInitialData = ({ namesUrl, commonStatisticsUrl }: IUseLoadStatisticsInitialDataProps) => IUseLoadStatisticsInitialDataResult;

const useLoadStatisticsInitialData: TUseLoadStatisticsInitialData = ({ namesUrl, commonStatisticsUrl }) => {
    const [isInitialDataLoaded, setIsInitialDataLoaded] = useState(true);
    const [studentsNames, setStudentsNames] = useState<string[]>([]);
    const [commonStatistics, setCommonStatistics] = useState<IStatisticsData | null>(null);
    const dispatch = useDispatch();

    useEffect(() => {
        const loadInitialData = async () => {
            setIsInitialDataLoaded(true);
            try {
                const responseNames = await fetch(namesUrl);
                if (!responseNames.ok) {
                    throw new Error('Server error while loading names');
                }
                const names = await responseNames.json();

                const responseOfCommonStatistics = await fetch(commonStatisticsUrl)
                if (!responseOfCommonStatistics) {
                    throw new Error('Server error while loading common statistics');

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
        loadInitialData();
    }, [commonStatisticsUrl, dispatch, namesUrl]);

    return { isInitialDataLoaded, studentsNames, commonStatistics, dispatch };
};

export { useLoadStatisticsInitialData };