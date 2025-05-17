import { lessonsEndPoints } from "./endPoints";
import { TInitialLessonParams } from "../model/api.types";
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