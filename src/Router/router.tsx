import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { LESSONS, LESSONS_ID_EDIT, MAIN, NOTFOUND, STATISTICS, STUDENT_ID, STUDENT_ID_EDIT, STUDENTS } from "./routes";
import { BasicPage } from "../components/pages/BasicPage/BasicPage";
import { LessonsPage } from "../components/pages/LessonsPage/LessonsPage";
import { StudentsPage } from "../components/pages/StudentsPage/StudentsPage";
import { StatisticsPage } from "../components/pages/StatisticsPage/StatisticsPage";
import { NotFoundPage } from "../components/pages/NotFoundPage/NotFoundPage";
import { StudentPage } from "../components/pages/StudentPage/StudentPage";
import { EditStudentPage } from "../components/pages/EditStudentPage/EditStudentPage";
import { EditLessonPage } from "../components/pages/EditLessonPage/EditLessonPage";

const router = createBrowserRouter(createRoutesFromElements(
    <Route path={MAIN} element={<BasicPage />}>
        <Route path={LESSONS} element={<LessonsPage />} />
        <Route path={STUDENTS} element={<StudentsPage />} />
        <Route path={STATISTICS} element={<StatisticsPage />} />
        <Route path={NOTFOUND} element={<NotFoundPage />} />
        <Route path={STUDENT_ID} element={<StudentPage />} />
        <Route path={STUDENT_ID_EDIT} element={<EditStudentPage />} />
        <Route path={LESSONS_ID_EDIT} element={<EditLessonPage />} />
    </Route>
));

export { router };