import { endPoints } from "./endPoints";
import { TLesson } from "../model/lesson.type";
import { TInitialLessonParams } from "../model/loadInitialDataServerAnswer.type";
import { makeApiRequest } from "../../../shared/api/makeApiRequest";
import { HTTPMethods } from "../../../shared/types/httpMethods.enum";
import { TLoaderData } from "../../../shared/types/loaderData.type";

export const loadInitialData: TLoaderData<TInitialLessonParams> = async () => {
  const response: TInitialLessonParams = await makeApiRequest(
    endPoints.loadInitialData,
    HTTPMethods.GET
  );

  return response;
};

export const loadLessons: TLoaderData<TLesson[]> = async () => {
  const lessons: TLesson[] = await makeApiRequest(
    endPoints.loadLessons,
    HTTPMethods.GET
  )
  return lessons;
}