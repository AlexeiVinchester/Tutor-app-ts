import { TLesson } from "../../../../entities/lesson/model/lesson.type";
import { makeApiRequest } from "../../../../shared/api/makeApiRequest";
import { HTTPMethods } from "../../../../shared/types/httpMethods.enum";
import { TLoaderData } from "../../../../shared/types/loaderData.type";
import { TSendNewLessonServerAnswer } from "../model/api.types";
import { createNewLessonFormEndPoints } from "./endPoints";

export const sendNewLesson: TLoaderData<TSendNewLessonServerAnswer, TLesson> = async (data) => {
  const response: TSendNewLessonServerAnswer = await makeApiRequest(
    createNewLessonFormEndPoints.sendNewLesson,
    HTTPMethods.POST,
    data
  );

  return response;
};