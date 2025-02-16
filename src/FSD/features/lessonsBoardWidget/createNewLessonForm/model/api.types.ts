import { TLesson } from "../../../../entities/lesson/model/lesson.type";

export type TSendNewLessonServerAnswer = {
  savedLesson: TLesson;
  nextId: number
}