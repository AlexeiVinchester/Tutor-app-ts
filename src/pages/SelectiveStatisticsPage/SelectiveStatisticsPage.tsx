import { useState } from "react";
import { StatisticsPageHeader } from "../../components/StatisticsPageHeader/StatisticsPageHeader";
import { useSelector } from "react-redux";
import { selectMemoNamesOfStudents } from "../../redux/selectors/studentsSelectors";
import { SelectStudentContainer } from "../FullStatisticsPage/components/SelectStudentContainer/SelectStudentContainer";
import { memoizedSelectAmountOfLessonsPerStudentPerMonthAndYear, memoizedSelectIncomePerStudentPerMonthAndYear, memoizedSelectStudentsForMonthAndYear, memoizedSelectUnpaidLessonsPerStudentPerMonthAndYear, memoSelectFullIncomeForMonthAndYear, selectMemoAmountOfLessonsPerMonthAndYear } from "../../redux/selectors/lessonsSelectors";

const getCorrectMonth = () => {
    const jsMonth = new Date().getMonth();
    return jsMonth + 1 < 10 ? '0' +  String(jsMonth + 1) : String(jsMonth + 1);
};

const SelectiveStatisticsPage = () => {
    const namesOfStudents = useSelector(selectMemoNamesOfStudents);
    const [month, setMonth] = useState(() => getCorrectMonth());
    const [year, setYear] = useState(() => new Date().getFullYear().toString());
    const namesPerMonth = useSelector((state) => memoizedSelectStudentsForMonthAndYear(state, year, month));

    const [studentName, setStudentName] = useState(namesPerMonth[0]);
    
    

    const amountOfLessonsPerMonth = useSelector((state) => selectMemoAmountOfLessonsPerMonthAndYear(state, year,  month))
    const fullIncomePerMonthAndYear = useSelector((state) => memoSelectFullIncomeForMonthAndYear(state, year, month))
    const amountOfLessonsPerStudentPerMonthAndYear = useSelector((state) => memoizedSelectAmountOfLessonsPerStudentPerMonthAndYear(state, studentName, year, month));
    const incomePerStudentPerMonthAndYear = useSelector((state) => memoizedSelectIncomePerStudentPerMonthAndYear(state, studentName, year, month))
    const unPaidLessonsPerStudentPerMonthAndYear = useSelector((state) => memoizedSelectUnpaidLessonsPerStudentPerMonthAndYear(state, studentName, year, month));
    const unpaidSumPerStudentPerMonthAndYear = unPaidLessonsPerStudentPerMonthAndYear.reduce((cur, lesson) => cur + lesson.price, 0);


    console.log(namesOfStudents)
    console.log(namesPerMonth)

    const handleChangeMonth = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setMonth(e.target.value)
    };

    const handleChangeYear = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setYear(e.target.value);
    };

    const handleChangeStudent = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setStudentName(e.target.value);
    }; 

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
                <select onChange={handleChangeMonth} value={month}>
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
                    namesOfStudents={namesPerMonth}
                    onChange={handleChangeStudent}
                />
            </div>
            <div>
                <p>Full income for month: {fullIncomePerMonthAndYear}</p>
            </div><div>
                <p>Amount of lessons for month: {amountOfLessonsPerMonth}</p>
            </div><div>
                <p>Full income for {studentName} for month: {incomePerStudentPerMonthAndYear}</p>
            </div><div>
                <p>Amount of lessons for {studentName} month: {amountOfLessonsPerStudentPerMonthAndYear}</p>
            </div>
            {unpaidSumPerStudentPerMonthAndYear ? (
                <p>{studentName} have to pay for {unPaidLessonsPerStudentPerMonthAndYear.length} lessons: {unpaidSumPerStudentPerMonthAndYear} BYN</p>
            ) : null}
        </>
    );
};

export { SelectiveStatisticsPage } 
