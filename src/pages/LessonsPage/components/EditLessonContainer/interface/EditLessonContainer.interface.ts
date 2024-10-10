import { ILesson } from "../../../../../share/interfaces/lesson.interface";

export interface IEditLessonContainerProps {
    oldLesson: ILesson;
    isOpen: boolean;
    close: () => void;
}