import { TLesson } from "../../../../entities/lesson/model/lesson.type";
import { makeApiRequest } from "../../../../shared/api/makeApiRequest";
import { HTTPMethods } from "../../../../shared/types/httpMethods.enum";
import { TLoaderData } from "../../../../shared/types/loaderData.type";
import { TLoadInitialDataServerAnswer, TSendNewLessonServerAnswer } from "../model/api.types";
import { createNewLessonFormEndPoints } from "./endPoints";

export const loadInitialData: TLoaderData<TLoadInitialDataServerAnswer> = async () => {
  const response: TLoadInitialDataServerAnswer = await makeApiRequest(
    createNewLessonFormEndPoints.loadInitialData,
    HTTPMethods.GET
  );

  return response;
};

export const sendNewLesson: TLoaderData<TSendNewLessonServerAnswer, TLesson> = async (data) => {
  const response: TSendNewLessonServerAnswer = await makeApiRequest(
    createNewLessonFormEndPoints.sendNewLesson,
    HTTPMethods.POST,
    data
  );

  return response;
};