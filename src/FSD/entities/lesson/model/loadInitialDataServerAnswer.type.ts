import { TStudentParam } from "../ui/lessonForm";

export type TLoadInitialDataServerAnswer = {
  studentsParams: TStudentParam[];
  nextId: number;
}