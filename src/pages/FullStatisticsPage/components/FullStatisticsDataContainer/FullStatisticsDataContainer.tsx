import { InfoCircleContainer } from "../../../../share/components/InfoCircleContainer/InfoCircleContainer";
import { IFullStatisticsData } from "../../../../share/interfaces/fullStatisticsData";

const FullStatisticsDataContainer = ({ data }: { data: IFullStatisticsData }) => {
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