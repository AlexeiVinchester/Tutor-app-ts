import { useCallback, useState } from 'react';
import { IStatisticsData } from '../../../../share/interfaces/statisticsData';
import { useDispatch } from 'react-redux';
import { showSnackMessage } from '../../../../redux/slices/snackMessageSlice/snackMessageSlice';
import { createSnackMessage } from '../../../../utils/createSnackMessage';
import { SelectContainer } from '../../../../components/SelectContainer/SelectContainer';
import { StatisticsDataContainer } from '../../../../components/StatisticsDataContainer/StatisticsDataContainer';
import {
  startLoading,
  stopLoading,
} from '../../../../redux/slices/loadingSlice/loadingSlice';

const StudentSelectiveDataContainer = ({
  studentsNames,
  year,
  month,
}: {
  studentsNames: string[];
  year: string;
  month: string | undefined;
}) => {
  const [selectedName, setSelectedName] = useState<string>('');
  const [studentStatistics, setStudentStatistics] =
    useState<IStatisticsData | null>(null);
  const dispatch = useDispatch();

  const fetchStudentStatistics = useCallback(
    async (name: string) => {
      dispatch(startLoading());
      const loadStudentStatisticsForPeriod = async () => {
        try {
          const response = await fetch(
            `http://localhost:3002/getStudentStatisticsForPeriod?year=${year}&month=${month}&name=${name}`
          );
          if (!response.ok) {
            throw new Error('Server error while loading names for period');
          }
          const data = await response.json();
          setStudentStatistics(data);
        } catch (error) {
          dispatch(
            showSnackMessage(
              createSnackMessage(
                `Error while loading students data for period: ${
                  error instanceof Error
                    ? error.message
                    : 'unknown error occured'
                }!`,
                'error'
              )
            )
          );
        } finally {
          dispatch(stopLoading());
        }
      };
      loadStudentStatisticsForPeriod();
    },
    [dispatch, month, year]
  );

  const handleChangeName = useCallback(
    async (e: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedName(e.target.value);
      await fetchStudentStatistics(e.target.value);
    },
    [fetchStudentStatistics]
  );

  return (
    <div>
      <div className="flex justify-center gap-6 items-center mb-10">
        <SelectContainer
          data={studentsNames}
          onChange={handleChangeName}
          value={selectedName}
          initialOption="Choose student"
        />
      </div>
      {studentStatistics && (
        <StatisticsDataContainer
          amountLabel="Student amount"
          amount={studentStatistics?.amountOfLessons}
          incomeLabel="Student income"
          income={studentStatistics?.income}
        />
      )}
    </div>
  );
};

export { StudentSelectiveDataContainer };
