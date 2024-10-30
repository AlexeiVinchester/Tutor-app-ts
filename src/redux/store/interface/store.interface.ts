import { Student } from "../../../share/interfaces/student.interface";
import { ILesson } from "../../../share/interfaces/lesson.interface";
import { TSnackBarSeverity } from "../../../share/interfaces/snackBarSeverity.type";

export interface Store {
    students: Student[],
    lessons: {
        allLessons: ILesson[],
        isLoading: boolean,
        error: null | string | undefined,
        allLessonsLoaded: boolean
    },
    snackMessage: {
        isOpen: boolean,
        message: string | null,
        severity: TSnackBarSeverity
    }
}