import { useState } from "react";
import { useSelector } from "react-redux";
import { SelectContainer } from "../../../../components/SelectContainer/SelectContainer";
import { memoizedSelectStudentsForMonthAndYear, memoizedSelectUnpaidLessonsPerStudentPerMonthAndYear } from "../../../../redux/selectors/lessonsSelectors";
import { ISelectiveDateParams } from "../../../../share/interfaces/selectiveStatisticsParams.interface";
import { SelectiveAmountOfLessonsPerStudent } from "../SelectiveAmountOfLessonsPerStudent/SelectiveAmountOfLessonsPerStudent";
import { SelectiveIncomePerStudent } from "../SelectiveIncomePerStudent/SelectiveIncomePerStudent";

const SelectiveStudentsStatisticsWrapper = ({ year, month }: ISelectiveDateParams) => {
    const namesPerMonth = useSelector((state) => memoizedSelectStudentsForMonthAndYear(state, year, month));
    const [studentName, setStudentName] = useState(namesPerMonth[0]);

    const unPaidLessonsPerStudentPerMonthAndYear = useSelector((state) => memoizedSelectUnpaidLessonsPerStudentPerMonthAndYear(state, studentName, year, month));
    const unpaidSumPerStudentPerMonthAndYear = unPaidLessonsPerStudentPerMonthAndYear.reduce((cur, lesson) => cur + lesson.price, 0);

    const handleChangeStudent = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setStudentName(e.target.value);
    };

    return (
        <>
            <SelectContainer
                data={namesPerMonth}
                onChange={handleChangeStudent}
            />
            <div className="flex justify-around items-center mb-10">
                <SelectiveIncomePerStudent {...{ studentName, year, month }} />
                <SelectiveAmountOfLessonsPerStudent {...{ studentName, year, month }} />
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
        </>
    );
};

export { SelectiveStudentsStatisticsWrapper };