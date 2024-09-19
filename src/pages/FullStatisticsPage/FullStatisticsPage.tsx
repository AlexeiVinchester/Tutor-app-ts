import { FullIncomeWrapper } from "./components/FullIncomeWrapper/FullIncomeWrapper";
import { FullAmountWrapper } from "./components/FullAmountWrapper/FullAmountWrapper";
import { FullStudentStatisticsWrapper } from "./components/FullStudentStatisticsWrapper/FullStudentStatisticsWrapper";

const FullStatisticsPage = () => {
    return (
        <div className="flex flex-col">
            <FullAmountWrapper />
            <FullIncomeWrapper />
            <FullStudentStatisticsWrapper />
        </div>
    );
};

export { FullStatisticsPage };
