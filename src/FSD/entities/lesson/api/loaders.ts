import { lessonsEndPoints } from "./endPoints";
import { TInitialLessonParams, TLoadLessonsRequestData, TLoadLessonsResponse } from "../model/loadInitialDataServerAnswer.type";
import { makeApiRequest } from "../../../shared/api/makeApiRequest";
import { HTTPMethods } from "../../../shared/types/httpMethods.enum";
import { TLoaderData } from "../../../shared/types/loaderData.type";

export const loadInitialData: TLoaderData<TInitialLessonParams> = async () => {
  const response: TInitialLessonParams = await makeApiRequest(
    lessonsEndPoints.loadInitialData,
    HTTPMethods.GET
  );

  return response;
};

export const loadLessons: TLoaderData<TLoadLessonsResponse, TLoadLessonsRequestData> = async (requestData = {}) => {
  const { page = 1, perPage = 10, name = "" } = requestData;

  const lessons: TLoadLessonsResponse = await makeApiRequest(
    `${lessonsEndPoints.loadLessons}?page=${page}&per_page=${perPage}&name=${name}`,
    HTTPMethods.GET
  )
  return lessons;
}