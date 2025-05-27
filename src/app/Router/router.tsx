import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import {
  ABOUT,
  LESSONS,
  MAIN,
  STUDENTS,
} from './routes';
import { LessonsPage } from '../../pages/lessons';
import { StudentsPageTest } from '../../pages/students';
import { BasicPage } from '../../pages/BasicPage/BasicPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={MAIN} element={<BasicPage />}>
      <Route path={LESSONS} element={<LessonsPage />} />
      <Route path={STUDENTS} element={<StudentsPageTest />} />
      <Route path={ABOUT} element={<StudentsPageTest />} />
    </Route>
  )
);

export { router };
