import { useState } from "react";
import { StatisticsPageHeader } from "../../components/StatisticsPageHeader/StatisticsPageHeader";
import { useSelector } from "react-redux";
import { memoizedSelectAmountOfLessonsPerStudentPerMonthAndYear, memoizedSelectIncomePerStudentPerMonthAndYear, memoizedSelectStudentsForMonthAndYear, memoizedSelectUnpaidLessonsPerStudentPerMonthAndYear, memoSelectFullIncomeForMonthAndYear, selectMemoAmountOfLessonsPerMonthAndYear } from "../../redux/selectors/lessonsSelectors";
import { SelectContainer } from "../../components/SelectContainer/SelectContainer";
import { SelectMonthContainer } from "./components/SelectMonthContainer/SelectMonthContainer";
import { MONTHS } from "./components/SelectMonthContainer/getValueForMonthOption";
import { InfoCircleContainer } from "../../share/components/InfoCircleContainer/InfoCircleContainer";
import { Container, Typography } from "@mui/material";

const getCorrectCurrentMonth = () => {
    const jsMonth = new Date().getMonth();
    return jsMonth + 1 < 10 ? '0' + String(jsMonth + 1) : String(jsMonth + 1);
};

const StudentSelectiveStatistics = ({ year, month }: { year: string, month: string }) => {
    const namesPerMonth = useSelector((state) => memoizedSelectStudentsForMonthAndYear(state, year, month));
    const [studentName, setStudentName] = useState(namesPerMonth[0]);

    const amountOfLessonsPerStudentPerMonthAndYear = useSelector((state) => memoizedSelectAmountOfLessonsPerStudentPerMonthAndYear(state, studentName, year, month));
    const incomePerStudentPerMonthAndYear = useSelector((state) => memoizedSelectIncomePerStudentPerMonthAndYear(state, studentName, year, month))
    const unPaidLessonsPerStudentPerMonthAndYear = useSelector((state) => memoizedSelectUnpaidLessonsPerStudentPerMonthAndYear(state, studentName, year, month));
    const unpaidSumPerStudentPerMonthAndYear = unPaidLessonsPerStudentPerMonthAndYear.reduce((cur, lesson) => cur + lesson.price, 0);

    const handleChangeStudent = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setStudentName(e.target.value);
    };

    return (
        <>
            {studentName ? (<>
                <SelectContainer
                    data={namesPerMonth}
                    onChange={handleChangeStudent}
                />
                <div className="flex justify-around items-center mb-10">
                    <InfoCircleContainer
                        value={incomePerStudentPerMonthAndYear}
                        label={`Full income for ${studentName}`}
                    />
                    <InfoCircleContainer
                        value={amountOfLessonsPerStudentPerMonthAndYear}
                        label={`Amount of lessons for ${studentName}`}
                    />
                </div>
                {unpaidSumPerStudentPerMonthAndYear ? (
                    <div className="flex justify-center items-center">
                        <p className="font-footer-text text-lg text-center">
                            {studentName} {' '}
                            have to pay for {' '}
                            {unPaidLessonsPerStudentPerMonthAndYear.length} {' '}
                            lessons: {' '}
                            <span className="text-main-orange">{unpaidSumPerStudentPerMonthAndYear} {' '}</span> 
                            BYN
                        </p>
                    </div>
                ) : null}
            </>) : (
                <div className="flex justify-center items-center">
                    <p className="font-footer-text text-lg text-center">
                        There were no lessons in this period
                    </p>
                </div>
            )}
        </>
    );

}

const SelectiveStatisticsPage = () => {
    const [month, setMonth] = useState(() => getCorrectCurrentMonth());
    const [year, setYear] = useState(() => new Date().getFullYear().toString());

    const amountOfLessonsPerMonth = useSelector((state) => selectMemoAmountOfLessonsPerMonthAndYear(state, year, month))
    const fullIncomePerMonthAndYear = useSelector((state) => memoSelectFullIncomeForMonthAndYear(state, year, month))


    const handleChangeMonth = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setMonth(e.target.value)
    };

    const handleChangeYear = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setYear(e.target.value);

    };

    return (
        <>
            <StatisticsPageHeader
                description="Here you can find selective statistics for choosed year, month and student. In the top choose date and student and find income and amount of lessons for interested student!"
            />
            <div className="flex flex-col h-full pb-10 bg-statistics-back">
                <Container>
                    <Typography
                        variant="h1"
                        component='p'
                        sx={{
                            fontFamily: '"Queens Medium", serif',
                            fontWeight: 500,
                            fontSize: '60px',
                            textAlign: 'center',
                            color: 'rgb(33, 51, 67)',
                            marginTop: '30px',
                            marginBottom: '30px'
                        }}
                    >
                        Selective Statistics
                    </Typography>
                    <div className="flex justify-center gap-6 items-center mb-10">
                        <SelectContainer
                            data={['2024', '2023']}
                            onChange={handleChangeYear}
                        />
                        <SelectMonthContainer
                            value={month}
                            data={MONTHS}
                            onChange={handleChangeMonth}
                        />
                    </div>
                    <div className="flex justify-around items-center mb-10">
                        <InfoCircleContainer
                            value={fullIncomePerMonthAndYear}
                            label='Full income'
                        />
                        <InfoCircleContainer
                            value={amountOfLessonsPerMonth}
                            label='Amount of lessons'
                        />
                    </div>

                    <StudentSelectiveStatistics key={month + year} year={year} month={month} />

                </Container>
            </div>
        </>
    );
};

export { SelectiveStatisticsPage } 
