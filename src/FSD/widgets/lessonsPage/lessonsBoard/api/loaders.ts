import { TLoadLessonsResponse, TLoadLessonsRequestData } from "../model/api.types";
import { lessonsEndPoints } from "../../../../entities/lesson/api/endPoints";
import { makeApiRequest } from "../../../../shared/api/makeApiRequest";
import { HTTPMethods } from "../../../../shared/types/httpMethods.enum";
import { TLoaderData } from "../../../../shared/types/loaderData.type";

export const loadLessons: TLoaderData<TLoadLessonsResponse, TLoadLessonsRequestData> = async (requestData = {}) => {
  const { page = 1, perPage = 10, name = "" } = requestData;

  const lessons = await makeApiRequest<TLoadLessonsRequestData, TLoadLessonsResponse>({
    url: `${lessonsEndPoints.loadLessons}?page=${page}&per_page=${perPage}&name=${name}`,
    method: HTTPMethods.GET
  });

  return lessons;
};