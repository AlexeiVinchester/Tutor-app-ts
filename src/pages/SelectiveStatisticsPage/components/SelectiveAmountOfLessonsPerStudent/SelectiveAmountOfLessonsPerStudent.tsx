import { useSelector } from "react-redux";
import { memoizedSelectAmountOfLessonsPerStudentPerMonthAndYear } from "../../../../redux/selectors/lessonsSelectors";
import { InfoCircleContainer } from "../../../../share/components/InfoCircleContainer/InfoCircleContainer";
import { ISelectiveStatisticsParams } from "../../../../share/interfaces/selectiveStatisticsParams.interface";

const SelectiveAmountOfLessonsPerStudent = ({ studentName, year, month }: ISelectiveStatisticsParams) => {
    const amountOfLessonsPerStudentPerMonthAndYear = useSelector((state) => memoizedSelectAmountOfLessonsPerStudentPerMonthAndYear(state, studentName, year, month));
    return (
        <InfoCircleContainer
            value={amountOfLessonsPerStudentPerMonthAndYear}
            label={`Amount of lessons for ${studentName}`}
        />
    );
};

export { SelectiveAmountOfLessonsPerStudent };
