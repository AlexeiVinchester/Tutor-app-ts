import { lessonsEndPoints } from "../../lesson/api/endPoints";
import { makeApiRequest } from "../../../shared/api/makeApiRequest";
import { HTTPMethods } from "../../../shared/types/httpMethods.enum";
import { TLoaderData } from "../../../shared/types/loaderData.type";
import { getCorrectCurrentMonth } from "../../../shared/utils/dateWorkers";
import { TInfoAboutLessonsCurrentMonth } from "../model/info.type";

export const loadCurrentMonthInfo: TLoaderData<TInfoAboutLessonsCurrentMonth> = async () => {
  const correctCurrentMonth = getCorrectCurrentMonth();
  const currentYear = new Date().getFullYear().toString();
  const response: TInfoAboutLessonsCurrentMonth = await makeApiRequest(
    lessonsEndPoints.loadCurrentMonthInfo + `?year=${currentYear}&month=${correctCurrentMonth}`,
    HTTPMethods.GET
  );

  return response;
};