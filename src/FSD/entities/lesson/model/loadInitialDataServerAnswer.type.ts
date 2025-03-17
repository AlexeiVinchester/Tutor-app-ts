import { TLesson } from "./lesson.type";
import { TPaginatedDataResponse } from "../../../shared/types/pagination";

export type TInitialStudentParamForLessonForm = { 
  name: string;
  activity: 'active' | 'inactive';
};

export type TInitialLessonParams = {
  studentsParams: TInitialStudentParamForLessonForm[];
  nextId: number;
};

export type TLoadLessonsRequestData = {
  page?: number;
  perPage?: number;
  name?: string;
};

export type TLoadLessonsResponse = TPaginatedDataResponse<TLesson>;
