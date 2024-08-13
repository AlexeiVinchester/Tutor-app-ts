import { Student } from "../../../share/interfaces/student.interface";
import { Lesson } from "../../../share/interfaces/lesson.interface";

export interface Store {
    students: Student[],
    lessons: Lesson[]
}