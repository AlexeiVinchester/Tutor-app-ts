import { FullIncomeWrapper } from "./components/FullIncomeWrapper/FullIncomeWrapper";
import { FullAmountWrapper } from "./components/FullAmountWrapper/FullAmountWrapper";
import { FullStudentStatisticsWrapper } from "./components/FullStudentStatisticsWrapper/FullStudentStatisticsWrapper";
import { StatisticsPageHeader } from "../../components/StatisticsPageHeader/StatisticsPageHeader";
import { StatisticsTopText } from "../../components/StatisticsTopText/StatisticsTopText";
import { StatisticsMainWrapper } from "../../components/StatisticsMainWrapper/StatisticsMainWrapper";

const FullStatisticsPage = () => {
    return (
        <>
            <StatisticsPageHeader
                description="Here you can find statistics for full time: amount of lessons and full income. In the bottom part choose student and find income and amount of lessons for interested student!"
            />
            <StatisticsMainWrapper>
                <StatisticsTopText value="Full Statistics" />
                <div className="flex justify-around items-center mb-10">
                    <FullAmountWrapper />
                    <FullIncomeWrapper />
                </div>
                <FullStudentStatisticsWrapper />
            </StatisticsMainWrapper>
        </>
    );
};

export { FullStatisticsPage };
