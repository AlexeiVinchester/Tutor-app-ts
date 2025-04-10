import { TSendEditedLessonServerAnswer } from "../model/api.types";
import { lessonsEndPoints } from "../../../../entities/lesson/api/endPoints";
import { TLesson } from "../../../../entities/lesson/model/lesson.type";
import { makeApiRequest } from "../../../../shared/api/makeApiRequest";
import { HTTPMethods } from "../../../../shared/types/httpMethods.enum";
import { TLoaderData } from "../../../../shared/types/loaderData.type";

export const sendEditedLesson: TLoaderData<TSendEditedLessonServerAnswer, TLesson> = async (data) => {
  const response = await makeApiRequest<TLesson, TSendEditedLessonServerAnswer>({
    url: lessonsEndPoints.sendEditedLesson,
    method: HTTPMethods.PATCH,
    data
  });

  return response;
};