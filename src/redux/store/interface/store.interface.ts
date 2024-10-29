import { Student } from "../../../share/interfaces/student.interface";
import { ILesson } from "../../../share/interfaces/lesson.interface";

export interface Store {
    students: Student[],
    lessons: {
        allLessons: ILesson[],
        loading: boolean,
        error: null | string | undefined,
        allLessonsLoaded: boolean
    }
}