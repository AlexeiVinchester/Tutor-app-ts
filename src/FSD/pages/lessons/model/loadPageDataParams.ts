import { TLoadLessonsRequestData } from "../../../entities/lesson/model/loadInitialDataServerAnswer.type";

export type TLoadPageDataParams = {
  updateLessons?: boolean;
  updateDebtors?: boolean;
  updateInfo?: boolean;
  lessonsRequestParams?: TLoadLessonsRequestData;
};