import { useSelector } from "react-redux";
import { selectMemoAmountOfLessonsForStudent } from "../../../../redux/selectors/lessonsSelectors";
import { InfoCircleContainer } from "../../../../share/components/InfoCircleContainer/InfoCircleContainer";

const FullAmountForStudentWrapper = ({studentName}: {studentName: string}) => {
    const amountOfLessonsForStudent = useSelector((state) => selectMemoAmountOfLessonsForStudent(state, studentName));

    return (
        <InfoCircleContainer
            label={`${studentName} lessons`}
            value={amountOfLessonsForStudent}
        />
    );
};

export { FullAmountForStudentWrapper };
