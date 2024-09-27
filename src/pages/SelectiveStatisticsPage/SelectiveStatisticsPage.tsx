import { useState } from "react";
import { StatisticsPageHeader } from "../../components/StatisticsPageHeader/StatisticsPageHeader";
import { useSelector } from "react-redux";
import { selectMemoNamesOfStudents } from "../../redux/selectors/studentsSelectors";
import { SelectStudentContainer } from "../FullStatisticsPage/components/SelectStudentContainer/SelectStudentContainer";
import { memoSelectFullIncomeForMonthAndYear, selectMemoAmountOfLessonsPerMonthAndYear } from "../../redux/selectors/lessonsSelectors";

const SelectiveStatisticsPage = () => {
    const namesOfStudents = useSelector(selectMemoNamesOfStudents);

    const [studentName, setStudentName] = useState(namesOfStudents[0]);
    const [month, setMonth] = useState('01');
    const [year, setYear] = useState(() => new Date().getFullYear().toString());

    const amountOfLessonsPerMonth = useSelector((state) => selectMemoAmountOfLessonsPerMonthAndYear(state, year,  month))
    const fullIncomePerMonthAndYear = useSelector((state) => memoSelectFullIncomeForMonthAndYear(state, year, month))
    const handleChangeMonth = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setMonth(e.target.value)
    };

    const handleChangeYear = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setYear(e.target.value);
    };

    const handleChangeStudent = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setStudentName(e.target.value);
    }; 

    console.log(year)

    return (
        <>
            <StatisticsPageHeader
                description="Here you can find selective statistics for choosed year, month and student. In the top choose date and student and find income and amount of lessons for interested student!"
            />
            <div>
                <p>Choose year: </p>
                <select onChange={handleChangeYear}>
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                </select>
            </div>
            <div>
                <p>Choose month: </p>
                <select onChange={handleChangeMonth}>
                    <option value="01">January</option>
                    <option value="02">February</option>
                    <option value="03">March</option>
                    <option value="04">April</option>
                    <option value="05">May</option>
                    <option value="06">June</option>
                    <option value="07">July</option>
                    <option value="08">August</option>
                    <option value="09">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                </select>
            </div>
            <div>
                <SelectStudentContainer
                    namesOfStudents={namesOfStudents}
                    onChange={handleChangeStudent}
                />
            </div>
            <div>
                <p>Full income for month: {fullIncomePerMonthAndYear}</p>
            </div><div>
                <p>Amount of lessons for month: {amountOfLessonsPerMonth}</p>
            </div><div>
                <p>Full income for student for month: </p>
            </div><div>
                <p>Amount of lessons for month: </p>
            </div>
        </>
    );
};

export { SelectiveStatisticsPage } 
