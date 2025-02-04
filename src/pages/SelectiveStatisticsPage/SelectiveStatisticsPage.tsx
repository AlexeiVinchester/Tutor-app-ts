import { useCallback, useState } from 'react';
import { SelectContainer } from '../../components/SelectContainer/SelectContainer';
import { SelectMonthContainer } from './components/SelectMonthContainer/SelectMonthContainer';
import {
  getCorrectCurrentMonth,
  MONTHS,
  YEARS,
} from './components/SelectMonthContainer/dateWorker';
import { StudentSelectiveDataContainer } from './components/StudentSelectiveDataContainer/StudentSelectiveDataContainer';
import { Spinner } from '../../FSD/shared/ui/Spinner/Spinner';
import { StatisticsDataContainer } from '../../components/StatisticsDataContainer/StatisticsDataContainer';
import { StatisticsPageHeader } from '../../components/StatisticsPageHeader/StatisticsPageHeader';
import { StatisticsMainWrapper } from '../../components/StatisticsMainWrapper/StatisticsMainWrapper';
import { StatisticsTopText } from '../../components/StatisticsTopText/StatisticsTopText';
import { useLoadStatisticsInitialData } from '../../hooks/useLoadNamesAndCommonStatistics';

const SelectiveStatisticsPage = () => {
  const [selectedYear, setSelectedYear] = useState<string>(() =>
    new Date().getFullYear().toString()
  );
  const [selectedMonth, setSelectedMonth] = useState<string | undefined>(() =>
    getCorrectCurrentMonth()
  );
  const { isInitialDataLoaded, studentsNames, commonStatistics } =
    useLoadStatisticsInitialData({
      namesUrl: `http://localhost:3002/getStudentsNamesForPeriod?year=${selectedYear}&month=${selectedMonth}`,
      commonStatisticsUrl: `http://localhost:3002/getCommonStatisticsForPeriod?year=${selectedYear}&month=${selectedMonth}`,
    });

  const handleChangeMonth = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedMonth(e.target.value);
    },
    []
  );

  const handleChangeYear = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedYear(e.target.value);
    },
    []
  );

  return (
    <div>
      <StatisticsPageHeader description="Here you can find selective common and student's statistics for choosen period " />
      <StatisticsMainWrapper>
        <StatisticsTopText value="Selective statistics" />
        <div className="flex justify-center gap-6 items-center mb-10">
          <SelectContainer
            data={YEARS}
            onChange={handleChangeYear}
            value={selectedYear}
          />
          <SelectMonthContainer
            value={selectedMonth}
            data={MONTHS}
            onChange={handleChangeMonth}
          />
        </div>
        {isInitialDataLoaded ? (
          <Spinner />
        ) : studentsNames.length > 0 ? (
          <>
            <StatisticsDataContainer
              amountLabel="Common amount"
              amount={commonStatistics?.amountOfLessons}
              incomeLabel="Common income"
              income={commonStatistics?.income}
            />
            <StudentSelectiveDataContainer
              studentsNames={studentsNames}
              year={selectedYear}
              month={selectedMonth}
              key={selectedMonth + selectedYear}
            />
          </>
        ) : (
          <p>Yoops</p>
        )}
      </StatisticsMainWrapper>
    </div>
  );
};

export { SelectiveStatisticsPage };
