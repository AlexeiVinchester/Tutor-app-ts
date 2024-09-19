import { useSelector } from "react-redux";
import { selectMemoFullIncomePerStudent } from "../../../../redux/selectors/lessonsSelectors";
import { InfoCircleContainer } from "../../../../share/components/InfoCircleContainer/InfoCircleContainer"

const FullIncomeForStudentWrapper = ({studentName}: {studentName: string}) => {
    const fullIncomePerStudent = useSelector((state) => selectMemoFullIncomePerStudent(state, studentName));

    return (
        <InfoCircleContainer
            label={`Income for ${studentName}`}
            value={fullIncomePerStudent}
        />
    );
};

export { FullIncomeForStudentWrapper }; 
