import { FullIncomeForStudentWrapper } from "../FullIncomeForStudentWrapper/FullIncomeForStudentWrapper";
import { FullAmountForStudentWrapper } from "../FullAmountForStudentWrapper/FullAmountForStudentWrapper";
import { SelectStudentContainer } from "../SelectStudentContainer/SelectStudentContainer";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectMemoNamesOfStudents } from "../../../../redux/selectors/studentsSelectors";

const FullStudentStatisticsWrapper = () => {
    const namesOfStudents = useSelector(selectMemoNamesOfStudents);
    const [studentName, setStudentName] = useState(namesOfStudents[0]);

    const onselectStudentChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setStudentName(e.target.value);
    };

    /* 
        Here two childs components shouldn't render when
        namesOfStudents will be updated, that's why I should use useMemo 
        and memo to prevent render of two last child components. They should
        render only when studentName changes, but all this component will render
        if namesOfStudents will change because of using useselector
    */
    return (
        <>
            <SelectStudentContainer 
                namesOfStudents={namesOfStudents}  
                onChange={onselectStudentChange}
            />
            <FullIncomeForStudentWrapper studentName={studentName}/>
            <FullAmountForStudentWrapper studentName={studentName}/>
        </>
    );
};

export { FullStudentStatisticsWrapper };
