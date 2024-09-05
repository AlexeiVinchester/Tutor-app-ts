import { ILesson } from "../../../share/interfaces/lesson.interface";

export interface TableOfLessonsProps {
    lessons: ILesson[];
    editLesson: (lesson: ILesson) => void
};