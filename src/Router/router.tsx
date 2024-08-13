import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { LESSONS, MAIN, NOTFOUND, STATISTICS, STUDENTS } from "./routes";
import { BasicPage } from "../components/pages/BasicPage/BasicPage";
import { LessonsPage } from "../components/pages/LessonsPage/LessonsPage";
import { StudentsPage } from "../components/pages/StudentsPage/StudentsPage";
import { StatisticsPage } from "../components/pages/StatisticsPage/StatisticsPage";
import { NotFoundPage } from "../components/pages/NotFoundPage/NotFoundPage";

const router = createBrowserRouter(createRoutesFromElements(
    <Route path={MAIN} element={<BasicPage />}>
        <Route path={LESSONS} element={<LessonsPage />} />
        <Route path={STUDENTS} element={<StudentsPage />} />
        <Route path={STATISTICS} element={<StatisticsPage />} />
        <Route path={NOTFOUND} element={<NotFoundPage />} />
    </Route>
));

export { router };