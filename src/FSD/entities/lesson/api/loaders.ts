import { lessonsEndPoints } from "./endPoints";
import { TInitialLessonParams, TLoadLessonsRequestData, TLoadLessonsResponse } from "../model/loadInitialDataServerAnswer.type";
import { makeApiRequest } from "../../../shared/api/makeApiRequest";
import { HTTPMethods } from "../../../shared/types/httpMethods.enum";
import { TLoaderData } from "../../../shared/types/loaderData.type";

export const loadInitialData: TLoaderData<TInitialLessonParams> = async () => {
  const response = await makeApiRequest<void, TInitialLessonParams>({
    url: lessonsEndPoints.loadInitialData,
    method: HTTPMethods.GET
  });

  return response;
};

export const loadLessons: TLoaderData<TLoadLessonsResponse, TLoadLessonsRequestData> = async (requestData = {}) => {
  const { page = 1, perPage = 10, name = "" } = requestData;

  const lessons = await makeApiRequest<TLoadLessonsRequestData, TLoadLessonsResponse>({
    url: `${lessonsEndPoints.loadLessons}?page=${page}&per_page=${perPage}&name=${name}`,
    method: HTTPMethods.GET
  });

  return lessons;
}