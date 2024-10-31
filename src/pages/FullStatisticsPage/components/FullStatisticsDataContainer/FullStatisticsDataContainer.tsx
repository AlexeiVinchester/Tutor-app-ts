import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { hideSnackMessage, showSnackMessage } from "../../../../redux/slices/snackMessageSlice/snackMessageSlice";
import { InfoCircleContainer } from "../../../../share/components/InfoCircleContainer/InfoCircleContainer";
import { IFullStatisticsData } from "../../../../share/interfaces/fullStatisticsData";
import { createSnackMessage } from "../../../../utils/createSnackMessage";

const FullStatisticsDataContainer = ({ studentName }: { studentName: string }) => {
    const [data, setData] = useState<IFullStatisticsData>({
        fullAmountOfLessons: 0,
        fullIncome: 0,
        fullIncomePerStudent: 0,
        fullAmountPerStudent: 0,
    });
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:3002/getfullStatistics?name=${studentName}`);
                const data = await response.json();
                setData(data);
                dispatch(hideSnackMessage());
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
            }
        };

        if (studentName) {
            fetchData();
        }
    }, [dispatch, studentName]);


    return (
        <>
            <div className="flex justify-around items-center mb-10">
                <InfoCircleContainer label="Full amount" value={data.fullAmountOfLessons} />
                <InfoCircleContainer label="Full income" value={data.fullIncome} />
            </div>
            <div className="flex justify-around items-center">
                <InfoCircleContainer label="Amount per student" value={data.fullAmountPerStudent} />
                <InfoCircleContainer label="Income per student" value={data.fullIncomePerStudent} />
            </div>
        </>
    );
};

export { FullStatisticsDataContainer };