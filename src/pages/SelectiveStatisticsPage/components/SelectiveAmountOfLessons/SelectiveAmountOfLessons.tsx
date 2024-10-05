import { useSelector } from "react-redux";
import { selectMemoAmountOfLessonsPerMonthAndYear } from "../../../../redux/selectors/lessonsSelectors";
import { InfoCircleContainer } from "../../../../share/components/InfoCircleContainer/InfoCircleContainer";
import { ISelectiveDateParams } from "../../../../share/interfaces/selectiveStatisticsParams.interface";

const SelectiveAmountOfLessons = ({ year, month }: ISelectiveDateParams) => {
    const amountOfLessonsPerMonth = useSelector((state) => selectMemoAmountOfLessonsPerMonthAndYear(state, year, month))

    return (
        <InfoCircleContainer
            value={amountOfLessonsPerMonth}
            label='Amount of lessons'
        />
    );
};

export { SelectiveAmountOfLessons };
