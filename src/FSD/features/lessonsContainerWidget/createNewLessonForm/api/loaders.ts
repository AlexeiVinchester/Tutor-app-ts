import { TSendNewLessonServerAnswer } from "../model/api.types";
import { endPoints } from "../../../../entities/lesson/api/endPoints";
import { TLesson } from "../../../../entities/lesson/model/lesson.type";
import { makeApiRequest } from "../../../../shared/api/makeApiRequest";
import { HTTPMethods } from "../../../../shared/types/httpMethods.enum";
import { TLoaderData } from "../../../../shared/types/loaderData.type";

export const sendNewLesson: TLoaderData<TSendNewLessonServerAnswer, TLesson> = async (data) => {
  const response: TSendNewLessonServerAnswer = await makeApiRequest(
    endPoints.sendNewLesson,
    HTTPMethods.POST,
    data
  );

  return response;
};