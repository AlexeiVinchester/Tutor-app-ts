import { TSendNewLessonServerAnswer } from "../model/api.types";
import { lessonsEndPoints } from "../../../../entities/lesson/api/endPoints";
import { TLesson } from "../../../../entities/lesson/model/lesson.type";
import { makeApiRequest } from "../../../../shared/api/makeApiRequest";
import { HTTPMethods } from "../../../../shared/types/httpMethods.enum";
import { TLoaderData } from "../../../../shared/types/loaderData.type";

export const sendNewLesson: TLoaderData<TSendNewLessonServerAnswer, Omit<TLesson, '_id'>> = async (data) => {
  const response = await makeApiRequest<Omit<TLesson, '_id'>, TSendNewLessonServerAnswer>({
    url: lessonsEndPoints.sendNewLesson,
    method: HTTPMethods.POST,
    data
  });

  return response;
};