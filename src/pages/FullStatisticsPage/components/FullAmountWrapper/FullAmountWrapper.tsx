import { useSelector } from "react-redux";
import { selectMemoAmountOfLessons } from "../../../../redux/selectors/lessonsSelectors";
import { InfoCircleContainer } from "../../../../share/components/InfoCircleContainer/InfoCircleContainer";

const FullAmountWrapper = () => {
    const amountOfLessons = useSelector(selectMemoAmountOfLessons);

    return (
        <InfoCircleContainer
            label="Amount of lessons"
            value={amountOfLessons}
        />
    );
};

export { FullAmountWrapper }; 
