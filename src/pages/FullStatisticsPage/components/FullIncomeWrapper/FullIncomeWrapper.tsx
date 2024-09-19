import { useSelector } from "react-redux";
import { selectMemoFullPriceOfLessons } from "../../../../redux/selectors/lessonsSelectors";
import { InfoCircleContainer } from "../../../../share/components/InfoCircleContainer/InfoCircleContainer";

const FullIncomeWrapper = () => {
    const fullIncomeOfLessons = useSelector(selectMemoFullPriceOfLessons);
    return (
        <InfoCircleContainer
            label="Full income"
            value={fullIncomeOfLessons}
        />
    );
};

export { FullIncomeWrapper }; 
