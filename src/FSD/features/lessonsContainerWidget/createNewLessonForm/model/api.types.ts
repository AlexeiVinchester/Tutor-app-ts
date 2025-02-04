import { TLesson } from "../../../../entities/lesson/model/lesson.type";

export type TLoadInitialDataServerAnswer = {
  names: string[];
  nextId: number;
}

export type TSendNewLessonServerAnswer = {
  savedLesson: TLesson;
  nextId: number
}