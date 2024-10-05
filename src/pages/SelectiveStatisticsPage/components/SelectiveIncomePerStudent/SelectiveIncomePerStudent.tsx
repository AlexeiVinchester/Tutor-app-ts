import { useSelector } from "react-redux";
import { memoizedSelectIncomePerStudentPerMonthAndYear } from "../../../../redux/selectors/lessonsSelectors";
import { InfoCircleContainer } from "../../../../share/components/InfoCircleContainer/InfoCircleContainer";
import { ISelectiveStatisticsParams } from "../../../../share/interfaces/selectiveStatisticsParams.interface";

const SelectiveIncomePerStudent = ({ studentName, year, month }: ISelectiveStatisticsParams) => {
    const incomePerStudentPerMonthAndYear = useSelector((state) => memoizedSelectIncomePerStudentPerMonthAndYear(state, studentName, year, month))
    return (
        <InfoCircleContainer
            value={incomePerStudentPerMonthAndYear}
            label={`Full income for ${studentName}`}
        />
    );
};

export { SelectiveIncomePerStudent };
