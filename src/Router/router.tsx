import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import {
  ABOUT,
  FULL_STATISTICS,
  LESSONS,
  LESSONS_ID_EDIT,
  MAIN,
  NOTFOUND,
  SELECTIVE_STATISTICS,
  STATISTICS,
  STUDENT_ID,
  STUDENT_ID_EDIT,
  STUDENTS,
} from './routes';
import { BasicPage } from '../pages/BasicPage/BasicPage';
import { LessonsPage } from '../pages/LessonsPage/LessonsPage';
import { StudentsPage } from '../pages/StudentsPage/StudentsPage';
import { StatisticsPage } from '../pages/StatisticsPage/StatisticsPage';
import { NotFoundPage } from '../pages/NotFoundPage/NotFoundPage';
import { StudentPage } from '../pages/StudentPage/StudentPage';
import { EditStudentPage } from '../pages/EditStudentPage/EditStudentPage';
import { EditLessonPage } from '../pages/EditLessonPage/EditLessonPage';
import { AboutAppPage } from '../pages/AboutAppPage/AboutAppPage';
import { FullStatisticsPage } from '../pages/FullStatisticsPage/FullStatisticsPage';
import { SelectiveStatisticsPage } from '../pages/SelectiveStatisticsPage/SelectiveStatisticsPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={MAIN} element={<BasicPage />}>
      <Route path={LESSONS} element={<LessonsPage />} />
      <Route path={STUDENTS} element={<StudentsPage />} />
      <Route path={STATISTICS} element={<StatisticsPage />} />
      <Route path={NOTFOUND} element={<NotFoundPage />} />
      <Route path={STUDENT_ID} element={<StudentPage />} />
      <Route path={STUDENT_ID_EDIT} element={<EditStudentPage />} />
      <Route path={LESSONS_ID_EDIT} element={<EditLessonPage />} />
      <Route path={ABOUT} element={<AboutAppPage />} />
      <Route path={FULL_STATISTICS} element={<FullStatisticsPage />} />
      <Route
        path={SELECTIVE_STATISTICS}
        element={<SelectiveStatisticsPage />}
      />
    </Route>
  )
);

export { router };
