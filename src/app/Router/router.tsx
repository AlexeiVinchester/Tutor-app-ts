import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import { routeMap } from './routes';
import { LessonsPage } from '../../pages/lessons';
import { StudentsPageTest } from '../../pages/students';
import { BasicPage } from '../../pages/BasicPage/BasicPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={routeMap.main} element={<BasicPage />}>
      <Route path={routeMap.lessons} element={<LessonsPage />} />
      <Route path={routeMap.students} element={<StudentsPageTest />} />
      <Route path={routeMap.about} element={<StudentsPageTest />} />
    </Route>
  )
);

export { router };
