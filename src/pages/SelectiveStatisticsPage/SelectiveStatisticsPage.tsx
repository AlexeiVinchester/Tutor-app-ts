import { useState } from "react";
import { StatisticsPageHeader } from "../../components/StatisticsPageHeader/StatisticsPageHeader";
import { SelectContainer } from "../../components/SelectContainer/SelectContainer";
import { SelectMonthContainer } from "./components/SelectMonthContainer/SelectMonthContainer";
import { getCorrectCurrentMonth, MONTHS, YEARS } from "./components/SelectMonthContainer/dateWorker";
import { SelectiveStudentsStatisticsWrapper } from "./components/SelectiveStudentsStatisticsWrapper/SelectiveStudentsStatisticsWrapper";
import { SelectiveAmountOfLessons } from "./components/SelectiveAmountOfLessons/SelectiveAmountOfLessons";
import { SelectiveIncome } from "./components/SelectiveIncome/SelectiveIncome";
import { StatisticsTopText } from "../../components/StatisticsTopText/StatisticsTopText";
import { StatisticsMainWrapper } from "../../components/StatisticsMainWrapper/StatisticsMainWrapper";
import { useSelector } from "react-redux";
import { selectMemoAmountOfLessonsPerMonthAndYear } from "../../redux/selectors/lessonsSelectors";
import { AbsentLessonsMessage } from "../../components/AbsentLessonsMessage/AbsentLessonsMessage";

const SelectiveStatisticsPage = () => {
    const [month, setMonth] = useState(() => getCorrectCurrentMonth());
    const [year, setYear] = useState(() => new Date().getFullYear().toString());

    const amountOfLessons = useSelector((state) => selectMemoAmountOfLessonsPerMonthAndYear(state, year, month));

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
            <StatisticsMainWrapper>
                <StatisticsTopText value="Selective Statistics" />
                <div className="flex justify-center gap-6 items-center mb-10">
                    <SelectContainer
                        data={YEARS}
                        onChange={handleChangeYear}
                    />
                    <SelectMonthContainer
                        value={month}
                        data={MONTHS}
                        onChange={handleChangeMonth}
                    />
                </div>
                {
                    amountOfLessons ? <>
                        <div className="flex justify-around items-center mb-10">
                            <SelectiveIncome {...{ year, month }} />
                            <SelectiveAmountOfLessons {...{ year, month }} />
                        </div>
                        <SelectiveStudentsStatisticsWrapper key={month + year} year={year} month={month} />
                    </> : <AbsentLessonsMessage message="There were no lessons in this period" />
                }
            </StatisticsMainWrapper>
        </>
    );
};

export { SelectiveStatisticsPage } 
