import { TLesson } from "../../../../entities/lesson/model/lesson.type";
import { TPaginatedDataResponse } from "../../../../shared/types/pagination";

export type TLoadLessonsRequestData = {
  page?: number;
  perPage?: number;
  name?: string;
};

export type TLoadLessonsResponse = TPaginatedDataResponse<TLesson>;
