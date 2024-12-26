import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { loadAllLessons } from '../redux/slices/lessonsSlice/lessonsSlice';
import { useCustomThunkDispatch } from './useCustomThunkDispatch';
import { selectLessonsObj } from '../redux/selectors/lessonsSelectors';

const useLoadLessons = () => {
  const { isLoading, error, allLessons, allLessonsLoaded } =
    useSelector(selectLessonsObj);

  const thunkDispatch = useCustomThunkDispatch();

  useEffect(() => {
    if (!allLessonsLoaded) {
      thunkDispatch(loadAllLessons('http://localhost:3002/getLessons'));
    }
  }, [allLessonsLoaded, thunkDispatch]);

  return { allLessons, isLoading, error };
};

export { useLoadLessons };
